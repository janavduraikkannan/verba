import { makeDb } from "./testdb.mjs";
import * as core from "./core.js";
const { SITES, validHit, vidOf, utcDay, weekStart, recordHit, rollup, buildStats, logCsv } = core;
let pass = 0, fail = 0;
const t = async (name, fn) => { try { await fn(); pass++; console.log("ok  ", name); } catch (e) { fail++; console.log("FAIL", name, "-", e.message); } };
const eq = (a, b, m = "") => { if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error(`${m} got ${JSON.stringify(a)}, want ${JSON.stringify(b)}`); };
const D = s => new Date(s);
const ID = n => String(n).padStart(32, "0").replace(/[^0-9a-f]/g, "a");
const SALT = "test-salt";
const hit = (db, n, site, day, hh = "12:00:00") => recordHit(db, SALT, { id: ID(n), site }, D(`${day}T${hh}Z`));
const rows = async (db, sql) => (await db.prepare(sql).all()).results;

await t("validHit accepts a good hit", () => eq(validHit({ id: ID(1), site: "verba", extra: 1 }), { id: ID(1), site: "verba" }));
await t("validHit rejects uppercase hex, short id, unknown site, non-object", () => {
  eq(validHit({ id: ID(1).toUpperCase().replace(/0/g, "A"), site: "verba" }), null, "upper");
  eq(validHit({ id: "abc", site: "verba" }), null, "short");
  eq(validHit({ id: ID(1), site: "latin" }), null, "site");
  eq(validHit("x"), null, "string"); eq(validHit(null), null, "null"); eq(validHit({ id: 5, site: "verba" }), null, "number");
});
await t("SITES lists the four sites", () => eq(SITES, ["verba", "mots", "palabras", "woerter"]));
await t("vidOf is stable, 32 hex, differs per salt and per id", async () => {
  const a = await vidOf("s1", ID(1));
  if (!/^[0-9a-f]{32}$/.test(a)) throw new Error("format " + a);
  eq(await vidOf("s1", ID(1)), a, "stable");
  if (a === await vidOf("s2", ID(1))) throw new Error("same for different salt");
  if (a === await vidOf("s1", ID(2))) throw new Error("same for different id");
});
await t("utcDay and weekStart: Sunday 2026-11-15 maps to Monday 2026-11-09, Monday to itself", () => {
  eq(utcDay(D("2026-11-15T23:59:59Z")), "2026-11-15");
  eq(weekStart("2026-11-15"), "2026-11-09");
  eq(weekStart("2026-11-16"), "2026-11-16");
  eq(weekStart("2026-11-09"), "2026-11-09");
});
await t("recordHit twice in a day stores one row", async () => {
  const db = makeDb(); await hit(db, 1, "verba", "2026-11-14"); await hit(db, 1, "verba", "2026-11-14", "13:00:00");
  eq((await rows(db, "SELECT * FROM hits")).length, 1);
});
await t("stored row holds the hash, not the raw id", async () => {
  const db = makeDb(); await hit(db, 1, "verba", "2026-11-14");
  const r = (await rows(db, "SELECT * FROM hits"))[0];
  eq(r.vid, await vidOf(SALT, ID(1))); eq(Object.values(r).includes(ID(1)), false);
});
await t("midnight boundary: 23:59:59 and 00:00:01 land on different days", async () => {
  const db = makeDb(); await hit(db, 1, "verba", "2026-11-14", "23:59:59"); await hit(db, 2, "verba", "2026-11-15", "00:00:01");
  eq((await rows(db, "SELECT day FROM hits ORDER BY day")).map(r => r.day), ["2026-11-14", "2026-11-15"]);
});
await t("cross-site dedupe: one person on two sites is 1 for all, 1 for each site", async () => {
  const db = makeDb(); await hit(db, 1, "verba", "2026-11-14"); await hit(db, 1, "mots", "2026-11-14");
  const now = D("2026-11-14T20:00:00Z");
  eq((await buildStats(db, "all", now)).total, 1); eq((await buildStats(db, "verba", now)).total, 1); eq((await buildStats(db, "mots", now)).total, 1);
  eq((await buildStats(db, "palabras", now)).total, 0);
});
await t("rollup logs only finished days, and twice changes nothing", async () => {
  const db = makeDb(); for (const d of ["2026-11-13", "2026-11-14", "2026-11-15"]) await hit(db, 1, "verba", d);
  const now = D("2026-11-15T10:00:00Z"); await rollup(db, now);
  eq((await rows(db, "SELECT start FROM log WHERE period='day' AND scope='all' ORDER BY start")).map(r => r.start), ["2026-11-13", "2026-11-14"]);
  const n = (await rows(db, "SELECT * FROM log")).length; await rollup(db, now); eq((await rows(db, "SELECT * FROM log")).length, n);
});
await t("rollup backfills every missing day, zeros included, and writes the running total", async () => {
  const db = makeDb(); await hit(db, 1, "verba", "2026-11-01"); await hit(db, 2, "mots", "2026-11-14");
  await rollup(db, D("2026-11-15T10:00:00Z"));
  const days = await rows(db, "SELECT start,people FROM log WHERE period='day' AND scope='all' ORDER BY start");
  eq(days.length, 14, "days 11-01..11-14"); eq(days[0], { start: "2026-11-01", people: 1 }); eq(days[1].people, 0); eq(days[13], { start: "2026-11-14", people: 1 });
  const tot = await rows(db, "SELECT start,people FROM log WHERE period='total' AND scope='all' ORDER BY start");
  eq(tot[0].people, 1); eq(tot[12].people, 1); eq(tot[13].people, 2);
});
await t("rollup logs a week only after its Sunday ends", async () => {
  const db = makeDb(); await hit(db, 1, "verba", "2026-11-09"); await hit(db, 2, "verba", "2026-11-12");
  await rollup(db, D("2026-11-15T12:00:00Z"));
  eq((await rows(db, "SELECT * FROM log WHERE period='week'")).length, 0, "Sunday not over");
  await rollup(db, D("2026-11-16T00:00:30Z"));
  eq(await rows(db, "SELECT start,scope,people FROM log WHERE period='week' AND scope IN ('all','verba') ORDER BY scope"), [{ start: "2026-11-09", scope: "all", people: 2 }, { start: "2026-11-09", scope: "verba", people: 2 }]);
});
await t("buildStats on an empty db: zeros, null maxes, no NaN", async () => {
  const db = makeDb(); const s = await buildStats(db, "all", D("2026-11-15T10:00:00Z"));
  eq([s.total, s.today, s.last7, s.dailyAvg, s.weeklyAvg], [0, 0, 0, 0, 0]); eq([s.dailyMax, s.weeklyMax, s.firstDay], [null, null, null]);
  eq(JSON.stringify(s).includes("NaN"), false);
});
await t("average and highest exclude today: days of 2, 0, 4 give avg 2, max 4", async () => {
  const db = makeDb(); await hit(db, 1, "verba", "2026-11-10"); await hit(db, 2, "verba", "2026-11-10");
  for (const n of [3, 4, 5, 6]) await hit(db, n, "verba", "2026-11-12");
  for (let n = 10; n < 19; n++) await hit(db, n, "verba", "2026-11-13");
  const now = D("2026-11-13T10:00:00Z"); await rollup(db, now); const s = await buildStats(db, "all", now);
  eq(s.dailyAvg, 2); eq(s.dailyMax, { start: "2026-11-12", people: 4 }); eq(s.today, 9);
  eq(s.daily.map(d => [d.start, d.people, d.final]), [["2026-11-10", 2, true], ["2026-11-11", 0, true], ["2026-11-12", 4, true], ["2026-11-13", 9, false]]);
});
await t("weekly series includes this week so far, marked not final; last7 spans 7 days", async () => {
  const db = makeDb(); await hit(db, 1, "verba", "2026-11-07"); await hit(db, 2, "verba", "2026-11-13"); await hit(db, 3, "verba", "2026-11-06");
  const now = D("2026-11-13T10:00:00Z"); await rollup(db, now); const s = await buildStats(db, "all", now);
  eq(s.last7, 2, "11-07..11-13 holds persons 1 and 2"); const w = s.weekly[s.weekly.length - 1];
  eq([w.start, w.people, w.final], ["2026-11-09", 1, false]);
});
await t("logCsv has the header and one row per log row", async () => {
  const db = makeDb(); await hit(db, 1, "verba", "2026-11-14"); await rollup(db, D("2026-11-15T10:00:00Z"));
  const lines = (await logCsv(db)).trim().split("\n"); eq(lines[0], "period,start,scope,people");
  eq(lines.includes("day,2026-11-14,all,1"), true); eq(lines.includes("total,2026-11-14,all,1"), true);
});


/* ---------- Worker routes ---------- */
const worker = (await import("./worker.js")).default;
const O = "https://janavduraikkannan.github.io", W = "https://stats.example.workers.dev", TOKEN = "tok-123";
const mkEnv = (extra = {}) => ({ DB: makeDb(), SALT, DASH_TOKEN: TOKEN, ...extra });
const hitReq = (body, { origin = O, raw, method = "POST" } = {}) =>
  new Request(W + "/hit", { method, headers: { ...(origin ? { Origin: origin } : {}), "Content-Type": "application/json" }, body: method === "POST" ? (raw ?? JSON.stringify(body)) : undefined });
const get = (path, token) => new Request(W + path, { headers: token ? { Authorization: "Bearer " + token } : {} });
const count = async env => (await rows(env.DB, "SELECT * FROM hits")).length;

await t("hit stores one row and returns 204", async () => {
  const env = mkEnv(); const r = await worker.fetch(hitReq({ id: ID(1), site: "verba" }), env);
  eq(r.status, 204); eq(await count(env), 1); eq(r.headers.get("Access-Control-Allow-Origin"), O);
});
await t("hit with a bad origin returns 403 and stores nothing", async () => {
  const env = mkEnv(); eq((await worker.fetch(hitReq({ id: ID(1), site: "verba" }, { origin: "https://evil.example" }), env)).status, 403); eq(await count(env), 0);
});
await t("hit with no origin returns 403", async () => { const env = mkEnv(); eq((await worker.fetch(hitReq({ id: ID(1), site: "verba" }, { origin: null }), env)).status, 403); eq(await count(env), 0); });
await t("hit with bad json, wrong types, unknown site or uppercase id returns 400", async () => {
  const env = mkEnv();
  for (const o of [{ raw: "{nope" }, { raw: "[]" }, { raw: JSON.stringify({ id: 5, site: "verba" }) }, { raw: JSON.stringify({ id: ID(1), site: "latin" }) }, { raw: JSON.stringify({ id: ID(1).replace(/0/g, "A").toUpperCase(), site: "verba" }) }])
    eq((await worker.fetch(hitReq(null, o), env)).status, 400, JSON.stringify(o));
  eq(await count(env), 0);
});
await t("hit body over 512 bytes returns 413", async () => { const env = mkEnv(); eq((await worker.fetch(hitReq(null, { raw: JSON.stringify({ id: ID(1), site: "verba", pad: "x".repeat(600) }) }), env)).status, 413); eq(await count(env), 0); });
await t("hit with the wrong method returns 405", async () => eq((await worker.fetch(new Request(W + "/hit", { method: "GET", headers: { Origin: O } }), mkEnv())).status, 405));
await t("rate-limited hit returns 204 but stores nothing", async () => {
  const env = mkEnv({ LIMITER: { limit: async () => ({ success: false }) } });
  eq((await worker.fetch(hitReq({ id: ID(1), site: "verba" }), env)).status, 204); eq(await count(env), 0);
});
await t("OPTIONS returns CORS for the allowed origin only", async () => {
  const env = mkEnv(); const ok = await worker.fetch(hitReq(null, { method: "OPTIONS" }), env);
  eq(ok.status, 204); eq(ok.headers.get("Access-Control-Allow-Origin"), O); eq(ok.headers.get("Access-Control-Allow-Methods"), "POST, OPTIONS");
  eq((await worker.fetch(hitReq(null, { method: "OPTIONS", origin: "https://evil.example" }), env)).status, 403);
});
await t("GET /api/stats without a token or with a wrong one returns 401 with no CORS", async () => {
  const env = mkEnv(); const a = await worker.fetch(get("/api/stats"), env), b = await worker.fetch(get("/api/stats", "nope"), env);
  eq([a.status, b.status], [401, 401]); eq(a.headers.get("Access-Control-Allow-Origin"), null);
});
await t("a token in the query string is ignored", async () => eq((await worker.fetch(get("/api/stats?token=" + TOKEN), mkEnv())).status, 401));
await t("GET /api/stats with the token returns counts for all and for a site", async () => {
  const env = mkEnv(); await worker.fetch(hitReq({ id: ID(1), site: "verba" }), env); await worker.fetch(hitReq({ id: ID(1), site: "mots" }), env);
  const all = await (await worker.fetch(get("/api/stats?site=all", TOKEN), env)).json(), v = await (await worker.fetch(get("/api/stats?site=verba", TOKEN), env)).json();
  eq([all.total, all.today, v.total, v.scope], [1, 1, 1, "verba"]);
});
await t("GET /api/stats with an unknown site returns 400", async () => eq((await worker.fetch(get("/api/stats?site=latin", TOKEN), mkEnv())).status, 400));
await t("GET /api/log.csv needs the token and has the header line", async () => {
  const env = mkEnv(); eq((await worker.fetch(get("/api/log.csv"), env)).status, 401);
  const r = await worker.fetch(get("/api/log.csv", TOKEN), env); eq(r.status, 200);
  eq((await r.text()).split("\n")[0], "period,start,scope,people"); eq(r.headers.get("Content-Disposition").includes("language-sites-log.csv"), true);
});
await t("GET / serves the page with noindex and no-store, and unknown paths 404", async () => {
  const env = mkEnv(); const r = await worker.fetch(get("/"), env);
  eq(r.status, 200); eq(r.headers.get("X-Robots-Tag"), "noindex"); eq(r.headers.get("Cache-Control"), "no-store");
  eq((await worker.fetch(get("/nothing"), env)).status, 404);
});
await t("scheduled writes yesterday's row", async () => {
  const env = mkEnv(); const y = utcDay(new Date(Date.now() - 86400000));
  await recordHit(env.DB, SALT, { id: ID(1), site: "verba" }, new Date(Date.now() - 86400000));
  await worker.scheduled({}, env);
  eq((await rows(env.DB, `SELECT people FROM log WHERE period='day' AND scope='all' AND start='${y}'`)).length, 1);
});
await t("a database that throws gives 500 with no id in the body", async () => {
  const env = mkEnv({ DB: { prepare() { throw new Error("boom " + ID(7)); } } }); const r = await worker.fetch(hitReq({ id: ID(7), site: "verba" }), env);
  eq(r.status, 500); eq((await r.text()).includes(ID(7)), false);
});

console.log(`\n${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
