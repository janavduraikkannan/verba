/* Visitor counter: pure logic and SQL. No Request/Response here, so it can be tested against real SQLite. */
export const SITES = ["verba", "mots", "palabras", "woerter"];
const SCOPES = ["all", ...SITES];
const enc = s => new TextEncoder().encode(s);

export function validHit(b) {
  if (!b || typeof b !== "object" || Array.isArray(b)) return null;
  const { id, site } = b;
  if (typeof id !== "string" || !/^[0-9a-f]{32}$/.test(id)) return null;
  if (typeof site !== "string" || !SITES.includes(site)) return null;
  return { id, site };
}

export async function vidOf(salt, id) {
  const key = await crypto.subtle.importKey("raw", enc(salt), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", key, enc(id)));
  return [...sig.slice(0, 16)].map(x => x.toString(16).padStart(2, "0")).join("");
}

export const utcDay = d => d.toISOString().slice(0, 10);
export function addDays(day, n) { const d = new Date(day + "T00:00:00Z"); d.setUTCDate(d.getUTCDate() + n); return utcDay(d); }
export function weekStart(day) { const dow = (new Date(day + "T00:00:00Z").getUTCDay() + 6) % 7; return addDays(day, -dow); }

export async function recordHit(db, salt, { id, site }, now) {
  const vid = await vidOf(salt, id);
  await db.prepare("INSERT OR IGNORE INTO hits (day, site, vid) VALUES (?, ?, ?)").bind(utcDay(now), site, vid).run();
}

const WEEK_SQL = "date(day, '-' || ((CAST(strftime('%w', day) AS INTEGER) + 6) % 7) || ' days')";
const logRow = (db, period, start, scope, people) =>
  db.prepare("INSERT OR IGNORE INTO log (period, start, scope, people) VALUES (?, ?, ?, ?)").bind(period, start, scope, people);
async function writeAll(db, stmts) { for (let i = 0; i < stmts.length; i += 100) await db.batch(stmts.slice(i, i + 100)); }

/* Writes every missing finished day and week to the permanent log. Safe to run any number of times. */
export async function rollup(db, now) {
  const first = (await db.prepare("SELECT MIN(day) AS d FROM hits").first())?.d;
  if (!first) return { days: 0, weeks: 0 };
  const lastDay = addDays(utcDay(now), -1);
  const have = async period => new Set((await db.prepare("SELECT start FROM log WHERE period = ? AND scope = 'all'").bind(period).all()).results.map(r => r.start));
  const stmts = []; let days = 0, weeks = 0;

  const haveDays = await have("day");
  if (first <= lastDay) {
    const perSite = (await db.prepare("SELECT day, site, COUNT(*) AS n FROM hits WHERE day BETWEEN ? AND ? GROUP BY day, site").bind(first, lastDay).all()).results;
    const perDay = (await db.prepare("SELECT day, COUNT(DISTINCT vid) AS n FROM hits WHERE day BETWEEN ? AND ? GROUP BY day").bind(first, lastDay).all()).results;
    const newcomers = (await db.prepare("SELECT first_day AS day, COUNT(*) AS n FROM (SELECT MIN(day) AS first_day FROM hits GROUP BY vid) GROUP BY first_day").all()).results;
    const site = {}, all = {}, fresh = {};
    perSite.forEach(r => { site[r.day + "|" + r.site] = r.n; }); perDay.forEach(r => { all[r.day] = r.n; }); newcomers.forEach(r => { fresh[r.day] = r.n; });
    let running = 0;
    for (let d = first; d <= lastDay; d = addDays(d, 1)) {
      running += fresh[d] || 0;
      if (haveDays.has(d)) continue;
      stmts.push(logRow(db, "day", d, "all", all[d] || 0), logRow(db, "total", d, "all", running));
      SITES.forEach(s => stmts.push(logRow(db, "day", d, s, site[d + "|" + s] || 0)));
      days++;
    }
  }

  const haveWeeks = await have("week");
  const wkAll = {}, wkSite = {};
  const wk = (await db.prepare(`SELECT ${WEEK_SQL} AS wk, COUNT(DISTINCT vid) AS n FROM hits GROUP BY wk`).all()).results;
  const wkS = (await db.prepare(`SELECT ${WEEK_SQL} AS wk, site, COUNT(DISTINCT vid) AS n FROM hits GROUP BY wk, site`).all()).results;
  wk.forEach(r => { wkAll[r.wk] = r.n; }); wkS.forEach(r => { wkSite[r.wk + "|" + r.site] = r.n; });
  for (let m = weekStart(first); addDays(m, 6) <= lastDay; m = addDays(m, 7)) {
    if (haveWeeks.has(m)) continue;
    stmts.push(logRow(db, "week", m, "all", wkAll[m] || 0));
    SITES.forEach(s => stmts.push(logRow(db, "week", m, s, wkSite[m + "|" + s] || 0)));
    weeks++;
  }
  await writeAll(db, stmts);
  return { days, weeks };
}

const round2 = x => Math.round(x * 100) / 100;
const summarize = list => {
  const fin = list.filter(p => p.final);
  if (!fin.length) return { avg: 0, max: null };
  let best = fin[0];
  fin.forEach(p => { if (p.people > best.people) best = p; });
  return { avg: round2(fin.reduce((s, p) => s + p.people, 0) / fin.length), max: { start: best.start, people: best.people } };
};

/* Everything the dashboard shows for one scope ("all" or a site). Finished periods come from the log; today and this week from hits. */
export async function buildStats(db, scope, now) {
  const site = scope === "all" ? "" : " AND site = ?", extra = scope === "all" ? [] : [scope];
  const one = async (sql, ...args) => (await db.prepare(sql + site).bind(...args, ...extra).first());
  const today = utcDay(now);
  const total = (await one("SELECT COUNT(DISTINCT vid) AS n FROM hits WHERE 1=1")).n;
  const firstDay = (await one("SELECT MIN(day) AS d FROM hits WHERE 1=1")).d || null;
  const out = { scope, asOf: now.toISOString(), total, today: 0, last7: 0, firstDay, daily: [], weekly: [], dailyAvg: 0, dailyMax: null, weeklyAvg: 0, weeklyMax: null };
  if (!firstDay) return out;
  out.today = (await one("SELECT COUNT(DISTINCT vid) AS n FROM hits WHERE day = ?", today)).n;
  out.last7 = (await one("SELECT COUNT(DISTINCT vid) AS n FROM hits WHERE day BETWEEN ? AND ?", addDays(today, -6), today)).n;
  const finished = async (period, from) => (await db.prepare("SELECT start, people FROM log WHERE period = ? AND scope = ? AND start >= ? ORDER BY start").bind(period, scope, from).all()).results.map(r => ({ start: r.start, people: r.people, final: true }));
  out.daily = [...await finished("day", firstDay), { start: today, people: out.today, final: false }];
  const thisWeek = weekStart(today);
  const weekPeople = (await one("SELECT COUNT(DISTINCT vid) AS n FROM hits WHERE day BETWEEN ? AND ?", thisWeek, today)).n;
  out.weekly = [...await finished("week", weekStart(firstDay)), { start: thisWeek, people: weekPeople, final: false }];
  const d = summarize(out.daily), w = summarize(out.weekly);
  Object.assign(out, { dailyAvg: d.avg, dailyMax: d.max, weeklyAvg: w.avg, weeklyMax: w.max });
  return out;
}

export async function logCsv(db) {
  const rows = (await db.prepare("SELECT period, start, scope, people FROM log ORDER BY period, start, scope").all()).results;
  return ["period,start,scope,people", ...rows.map(r => `${r.period},${r.start},${r.scope},${r.people}`)].join("\n") + "\n";
}
