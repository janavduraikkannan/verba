# Visitor Counter Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Count unique people per site and across all four sites (total, daily, weekly, with an all-time log), storing only a day, a site and a salted hash of a random ID.

**Architecture:** A shared client script `js/stats.js` sends a random per-browser ID (shared across the four sites because they share one origin) at most once per site per day to a new Cloudflare Worker `verba-stats`. The Worker hashes the ID, stores `(day, site, vid)` in D1, writes finished periods to a permanent `log` table from a daily cron, and serves a token-protected dashboard and CSV. Logic lives in a pure module tested against real SQLite.

**Tech Stack:** Cloudflare Workers + D1, plain JS (no build step), `node:sqlite` for tests (Node 22.5+; fall back to `better-sqlite3` in a scratch dir if unavailable), puppeteer-core for the browser test (already used for these sites).

**Spec:** `docs/superpowers/specs/2026-11-15-visitor-counter-design.md` (read it first).

## Global Constraints

- Allowed origin: `https://janavduraikkannan.github.io` only. Sites: `verba`, `mots`, `palabras`, `woerter` (the value of `SITE.id`).
- Stored per hit: `day` (server UTC `YYYY-MM-DD`), `site`, `vid = first 32 hex chars of HMAC-SHA256(SALT, id)`. Never store or log the raw ID, IP address or user agent.
- Visitor ID: 32 lowercase hex chars from 16 random bytes; `localStorage` key `lang-vid`. Per-site daily guard key `lang-ping-<site>`. Skip entirely when `navigator.globalPrivacyControl` is true or `navigator.doNotTrack === '1'`.
- Weeks run Monday to Sunday, UTC. Unfinished day and week are never written to `log` and are excluded from average and highest (labeled "so far").
- Average = sum of people over finished periods divided by the number of finished periods from the first recorded one, empty periods counting as 0.
- `GET /api/*` needs `Authorization: Bearer <DASH_TOKEN>` (constant-time compare); no CORS headers on `/api/*`; never accept the token in a URL.
- The shared files (`index.html`, `js/`, `css/`) stay byte-identical in all four repos; copy with `python3 tools/sync_shared.py`, verify with `--check`.
- Secrets (`SALT`, `DASH_TOKEN`) are never written to the repository or shown after the one-time handoff of the token.
- No commits are pushed until the owner has seen the results. Local commits per task are fine. All commits end with `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`.

## Review Focus

- A hit one second before UTC midnight and one after must land on different days, and the rollup must not log the day in progress.
- The same person on two sites on the same day counts once for `all`, once for each site.
- The same person sending the same hit twice in a day, or from two tabs at once, counts once.
- Malformed requests (bad JSON, wrong types, oversized body, unknown site, uppercase hex, missing Origin, wrong Origin) get a clean 4xx and write nothing.
- A brand-new database (no rows) must give a dashboard and CSV with zeros and "no data yet", not NaN, errors or a blank page.
- The cron missing days (Worker down, first deploy mid-history) must backfill every missing finished day and week on its next run, and running twice must change nothing.
- Blocked or full `localStorage`, a failed network request, and a slow Worker must never break or delay the practice sites.
- Browsers that send GPC or DNT must send nothing at all.

## File structure

- Create `stats/schema.sql`: tables `hits`, `log`.
- Create `stats/core.js`: pure functions and SQL (no `fetch`, no Request/Response); takes a D1-like `db`.
- Create `stats/worker.js`: routes, auth, CORS, `scheduled`.
- Create `stats/page.js`: exports the dashboard HTML as a string.
- Create `stats/test.mjs`: unit and route tests using `node:sqlite` as the database.
- Create `stats/wrangler.toml`, `stats/README.md`.
- Create `js/stats.js`; modify `index.html` (one script tag).
- Create `tools/test_stats_client.js`: puppeteer test (kept outside the shared folders).
- Modify `PRIVACY.md` (Verba, Palabras); create `PRIVACY.md` in Mots and Wörter; add a one-line mention in each `README.md`.

---

### Task 1: Core logic and schema

**Files:**
- Create: `stats/schema.sql`, `stats/core.js`, `stats/test.mjs`

**Interfaces:**
- Produces (all in `stats/core.js`, ES module exports; `db` has D1's `prepare(sql).bind(...).run()/all()/first()` shape, `batch([...])` optional):
  - `SITES: string[]` = `['verba','mots','palabras','woerter']`
  - `validHit(body: unknown): {id: string, site: string} | null` (id `/^[0-9a-f]{32}$/`, site in `SITES`, ignores extra fields)
  - `async vidOf(salt: string, id: string): Promise<string>` (32 hex chars)
  - `utcDay(date: Date): string`; `weekStart(day: string): string` (the Monday, `YYYY-MM-DD`)
  - `async recordHit(db, salt, {id, site}, now: Date): Promise<void>` (`INSERT OR IGNORE`)
  - `async rollup(db, now: Date): Promise<{days: number, weeks: number}>` writes every missing finished day (scopes `all` and each site, plus `scope='all'` with `period='total'` for the running all-time total as of that day) and every missing finished week, from the first hit's day up to yesterday / last finished week. Idempotent.
  - `async buildStats(db, scope: string, now: Date): Promise<Stats>` where `Stats = {scope, asOf, total, today, last7, firstDay, daily: {start,people,final}[], weekly: {start,people,final}[], dailyAvg, dailyMax: {start,people}|null, weeklyAvg, weeklyMax: {start,people}|null}`. Finished periods come from `log`, today and this week from `hits`. `last7` is unique people over the 7 days ending today.
  - `async logCsv(db): Promise<string>` header `period,start,scope,people`, ordered by period, start, scope.

- [ ] **Step 1: Write failing tests** in `stats/test.mjs` using `node:sqlite` (`new DatabaseSync(':memory:')`, apply `schema.sql`, wrap in a small D1-shaped adapter). Test names and key assertions:
  - `validHit accepts a good hit`, `validHit rejects uppercase hex, short id, unknown site, non-object`.
  - `vidOf is stable, 32 hex, differs per salt and per id`.
  - `weekStart maps Sunday 2026-11-15 to Monday 2026-11-09 and Monday 2026-11-16 to itself`.
  - `recordHit twice in a day stores one row`.
  - `midnight boundary`: hits at `2026-11-14T23:59:59Z` and `2026-11-15T00:00:01Z` store days `2026-11-14` and `2026-11-15`.
  - `cross-site dedupe`: one person on verba and mots on one day gives `all` 1, verba 1, mots 1 in `buildStats`.
  - `rollup logs only finished days`: with `now = 2026-11-15T10:00Z` and hits on 11-13, 11-14, 11-15, log has 11-13 and 11-14 but not 11-15; running twice leaves row count unchanged.
  - `rollup backfills`: hits on 11-01 and 11-14 with an empty log writes 11-01 through 11-13 (zeros included for empty days).
  - `weekly rollup`: a week is logged only after its Sunday ends.
  - `buildStats empty db`: all counts 0, averages 0, maxes `null`, `firstDay` null, no NaN.
  - `average and highest`: days with people 2, 0, 4 give avg 2, max 4 on its date; today excluded.
  - `logCsv` header and one row format.
- [ ] **Step 2: Run** `node stats/test.mjs`. Expected: FAIL (module missing).
- [ ] **Step 3: Implement `stats/schema.sql`** exactly as in the spec (`hits` with index `hits_vid`; `log` with `period` in `day|week|total`), and `stats/core.js` with the signatures above. Use `crypto.subtle` for HMAC (works in both Node and Workers). One SQL statement per scope for the daily rollup using `COUNT(DISTINCT vid)`.
- [ ] **Step 4: Run** `node stats/test.mjs`. Expected: all ok, zero FAIL.
- [ ] **Step 5: Commit** `git add stats && git commit -m "feat(stats): counter core logic and schema"`.

---

### Task 2: Worker routes, auth and cron

**Files:**
- Create: `stats/worker.js`
- Modify: `stats/test.mjs` (route tests appended)

**Interfaces:**
- Consumes: everything exported by `stats/core.js`.
- Produces: default export `{ fetch(request, env, ctx), scheduled(event, env, ctx) }`. `env` has `DB` (D1), `SALT`, `DASH_TOKEN`, optional `LIMITER` (rate-limit binding with `limit({key})` returning `{success}`; skipped if absent so tests need no mock).
  - `POST /hit` → 204 on success (also 204 when the rate limit rejects, so a flood learns nothing), 400 bad body, 403 wrong or missing Origin, 413 body over 512 bytes, 405 other methods. `OPTIONS /hit` → 204 with CORS (`Access-Control-Allow-Origin` = the allowed origin only, methods `POST, OPTIONS`, header `Content-Type`).
  - `GET /api/stats?site=<all|SITES>` → JSON `Stats`; unknown `site` → 400; missing or wrong bearer → 401 with no body detail.
  - `GET /api/log.csv` → `text/csv` with `Content-Disposition: attachment; filename="language-sites-log.csv"`, same auth.
  - `GET /` → the dashboard HTML (`Cache-Control: no-store`, `X-Robots-Tag: noindex`, a strict CSP allowing only inline script and style); anything else 404.
  - `scheduled` calls `rollup(env.DB, new Date())`.
  - Any thrown error → 500 `{"error":"server"}`; nothing logged that contains the id.

- [ ] **Step 1: Write failing route tests** (same file, using `new Request(...)` against `worker.fetch` with the SQLite adapter as `env.DB`): `hit stores one row and returns 204`, `hit with bad origin returns 403 and stores nothing`, `hit with no origin returns 403`, `hit with bad json / wrong types / unknown site / uppercase id returns 400`, `hit body over 512 bytes returns 413`, `OPTIONS returns CORS for the allowed origin only`, `GET /api/stats without token 401`, `with wrong token 401`, `token in the query string is ignored (401)`, `with token returns total/today fields for scope all and verba`, `unknown site 400`, `log.csv requires token and has the header line`, `scheduled writes yesterday's row`, `a DB that throws gives 500 with no id in the body`, `stored row contains no raw id` (query `hits`, assert the raw id string appears in no column).
- [ ] **Step 2: Run** `node stats/test.mjs`. Expected: new tests FAIL.
- [ ] **Step 3: Implement `stats/worker.js`.** Constant-time token compare by comparing SHA-256 digests with an XOR loop. The dashboard route imports `PAGE` from `./page.js` (a placeholder `export const PAGE = '<!doctype html><title>stats</title>'` is created in this task and replaced in Task 3).
- [ ] **Step 4: Run** `node stats/test.mjs`. Expected: all ok.
- [ ] **Step 5: Commit** `git commit -am "feat(stats): worker routes, auth and daily rollup"` (add new files first).

---

### Task 3: Dashboard page

**Files:**
- Create/replace: `stats/page.js`
- Modify: `stats/test.mjs`

**Interfaces:**
- Consumes: `GET /api/stats?site=…` and `GET /api/log.csv` as defined in Task 2 (sent with the `Authorization` header from `fetch`; the page never puts the token in a URL).
- Produces: `export const PAGE: string` (self-contained HTML, inline CSS/JS/SVG, no external requests).

Page behavior: a token field (kept in `sessionStorage` only, "Forget token" button); site switcher (All, Verba, Mots, Palabras, Wörter); headline cards (total, today so far, last 7 days, daily average, highest day with its date, weekly average, highest week with its date); two inline-SVG bar charts (daily, last 90 days shown; weekly, all); the copy-summary button producing a short plain paragraph that says the figures are estimates; a "Download log (CSV)" button (fetch with the bearer header, then save a blob); empty state text "No visits recorded yet" when `total` is 0; wrong-token message; light and dark colour tokens on `:root` with a `prefers-color-scheme` override and an explicit `body` background; usable at phone width with a 16px gutter; dates labeled UTC.

- [ ] **Step 1: Write failing tests**: `PAGE is self-contained` (no `src="http`, no `href="http`, no `<link`), `PAGE has noindex meta`, and a puppeteer-free JS check: extract the inline script, run it in `node:vm` with a stub DOM-less export of its pure helper `summaryText(stats): string`, asserting the text for an empty `Stats` contains "No visits" and no `NaN`, and for a sample contains the total, the highest day's date and the word "estimate".
- [ ] **Step 2: Run** `node stats/test.mjs`. Expected: FAIL.
- [ ] **Step 3: Implement `stats/page.js`** per the behavior above; expose `summaryText` as `window.__summaryText` for the test.
- [ ] **Step 4: Run** `node stats/test.mjs`; then serve the Worker locally with a fake env in a scratch script, open the page with puppeteer at 390px and 1100px wide, screenshot both (empty database and one seeded with 60 days of random hits), and confirm no console errors and no horizontal scroll. Look at the screenshots.
- [ ] **Step 5: Commit** `git commit -am "feat(stats): private dashboard page"`.

---

### Task 4: Cloudflare setup and deploy (live)

**Files:**
- Create: `stats/wrangler.toml`, `stats/README.md`

**Interfaces:**
- Consumes: `stats/schema.sql`, `worker.js`, `core.js`, `page.js`.
- Produces: a live Worker URL `https://verba-stats.janav-durai.workers.dev` (confirm the subdomain from the relay's URL), the stored `SALT` and `DASH_TOKEN` secrets, and the token shown once to the owner.

- [ ] **Step 1: Using the connected Cloudflare tool**, create D1 database `verba-stats`; apply `schema.sql` through the D1 query endpoint; verify with a `SELECT name FROM sqlite_master`.
- [ ] **Step 2: Generate `SALT` and `DASH_TOKEN`** with `crypto.getRandomValues` (32 bytes each, hex) inside the tool call. Upload the Worker as a module with bindings: D1 `DB`, `secret_text` `SALT` and `DASH_TOKEN`, the rate-limit binding if the API accepts it (otherwise skip it and note it in the README), a daily cron `5 0 * * *`, compatibility date matching the relay's. Enable the workers.dev route. Print the token once in the reply to the owner and do not write it to any file or log.
- [ ] **Step 3: Write `stats/wrangler.toml`** (name, main, compatibility date, D1 binding with the real `database_id`, cron, no secrets) and `stats/README.md` (what it is, how to redeploy, how secrets are set, the salt must never change, how to read the dashboard).
- [ ] **Step 4: Live test.** From a script, `POST /hit` with the allowed Origin and a test id, twice (expect 204 twice, one row), once with a wrong Origin (403); `GET /api/stats?site=all` without a token (401) and with it (total 1); `GET /`; `GET /api/log.csv`. Trigger the cron once through the API if available. Then delete the test rows (`DELETE FROM hits`, `DELETE FROM log`) and confirm the tables are empty.
- [ ] **Step 5: Commit** `git add stats && git commit -m "docs(stats): deployment files and readme"`.

---

### Task 5: Client script on all four sites

**Files:**
- Create: `js/stats.js`, `tools/test_stats_client.js`
- Modify: `index.html` (add `<script src="js/stats.js" defer></script>` after `js/boot.js`; keep it out of the critical path)

**Interfaces:**
- Consumes: `SITE.id` from `site/config.js`; the Worker's `POST /hit` from Task 2.
- Produces: no globals except a `STATS_URL` constant at the top of `js/stats.js` (the Worker URL from Task 4).

`js/stats.js` follows spec section "Client" exactly: GPC/DNT check, `lang-vid`, `lang-ping-<SITE.id>` daily guard, `fetch(STATS_URL + '/hit', {method:'POST', keepalive:true, credentials:'omit', headers:{'Content-Type':'application/json'}, body})`, mark today only after an `ok` reply, everything in `try/catch`, runs after `load` using `requestIdleCallback` (fallback `setTimeout`).

- [ ] **Step 1: Write the failing browser test** `tools/test_stats_client.js` (puppeteer-core with system Chrome and a local `python3 -m http.server`, intercepting requests to `STATS_URL` with `page.setRequestInterception`): `sends one hit on first visit with a 32-hex id and the right site`, `sends none on a second load the same day`, `sends again if the stored day is yesterday`, `same id on all four sites` (visit each site in one browser profile), `sends nothing with GPC` (override `navigator.globalPrivacyControl`), `sends nothing with DNT=1`, `survives localStorage that throws` (override `Storage.prototype.getItem`), `survives a failed request` (abort it; page has no console errors; next load retries), `sends no cookies and no extra headers`.
- [ ] **Step 2: Run it.** Expected: FAIL (no script yet).
- [ ] **Step 3: Implement `js/stats.js`; add the script tag to `index.html`.**
- [ ] **Step 4: Run `python3 tools/sync_shared.py`, then `python3 tools/sync_shared.py --check`** (expect "all shared files match"); run the browser test against all four sites; run each site's existing tests/e2e (the practice-test e2e from the earlier work if still present in the scratchpad; otherwise load each site and check for console errors). Expected: all pass, `index.html` byte-identical (`cmp`).
- [ ] **Step 5: Commit in all four repos** with `feat: anonymous visitor counter script`. Do not push.

---

### Task 6: Privacy text

**Files:**
- Modify: `verba/PRIVACY.md`, `palabras/PRIVACY.md` (follow each file's existing structure and site name); `README.md` in all four (one line)
- Create: `mots/PRIVACY.md`, `woerter/PRIVACY.md` (adapt Palabras's file: site name, language, no features the site lacks)

**Interfaces:**
- Consumes: the spec's "Privacy text" bullet list.

- [ ] **Step 1: Edit** the "no analytics or tracking of any kind" sentence in both existing files to say the sites have no advertising and no tracking of what you do, and add a section "Counting visitors" covering the points in the spec: random ID in your browser (`lang-vid`); what the counter stores (day, site name, scrambled ID); what it does not (IP, device, name, account, activity); not linked to an account; clearing site data resets it; GPC and DNT are respected; counts are estimates; it is used only to count how many people use the sites. Add a row to each "At a glance" table. Update the "Last updated" line to November 15, 2026.
- [ ] **Step 2: Create the two new files** by adapting Palabras's and keeping only statements true for those sites (read their `js/` to confirm: accounts, leaderboard, and AI features are shared code, so most statements carry over; check before copying).
- [ ] **Step 3: Check** every link and table renders (read the files), and `grep -n "no analytics\|tracking of any kind"` finds nothing contradictory in any of the four.
- [ ] **Step 4: Commit** in all four repos: `docs: privacy text for the visitor counter`.

---

### Task 7: Final verification and report

**Files:** none changed unless a check fails.

- [ ] **Step 1: Run** `node stats/test.mjs`, `node tools/test_stats_client.js`, `python3 tools/sync_shared.py --check`, and `git status` in all four repos (clean, commits local).
- [ ] **Step 2: Live end-to-end:** serve the four sites locally with the real `STATS_URL`, visit each in one browser profile with the Origin check satisfied by a temporary allow-list entry only if needed (otherwise rely on the Task 4 live test), confirm the dashboard shows the same person once for `all` and once per site; then delete the test rows from `hits` and `log`.
- [ ] **Step 3: Report to the owner:** what was built, the dashboard URL, a reminder that the token was shown once, the test results, and the list of unpushed commits per repo. Ask for approval before pushing to `main`.
