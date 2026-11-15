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

console.log(`\n${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
