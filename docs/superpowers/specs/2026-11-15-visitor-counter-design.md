# Visitor counter: design

Status: draft, waiting for the owner's approval. Nothing has been built or deployed.

## Intent and why

The owner wants evidence of how many people the four practice sites (Verba, Mots, Palabras, Wörter) reach, to show to colleges and employers. The numbers must be believable and easy to present, and they must collect as little about visitors as possible.

A person who uses two sites counts once in each site's numbers and once in the combined numbers.

## What the owner gets

For one site, or for all sites combined:

- **Total people**: all-time unique people.
- **Daily people**: unique people per UTC day, with a log over time, plus the average and the highest day.
- **Weekly people**: unique people per calendar week (Monday to Sunday, UTC), with a log over time, plus the average and the highest week.
- Headline figures: today, and the last 7 days.
- A "copy summary" button that puts a short plain-text paragraph of the numbers on the clipboard, for applications.

"Average" means total people-days divided by the number of days (or weeks) from the first recorded one to today, counting empty days as zero. The current, unfinished day or week is shown but left out of average and highest, and labeled "so far".

## Goals

- Count unique people per site and across all four sites.
- Store the least possible: a day, a site, and a hashed random ID. Nothing else.
- Keep the owner's dashboard private.
- Be honest in `PRIVACY.md`.

## Non-goals and anti-goals

- No cookies, no IP addresses, no user-agent strings, no location, no page-level or feature-level tracking, no session length.
- Never link the counter's ID to an account, username, profile or leaderboard entry.
- No third-party analytics service.
- No public dashboard for now (easy to add later, since the API already returns only aggregates).
- Not exact. A cleared browser, a private window or a second device looks like a new person. The dashboard and the summary say "about" or "estimated".

## Constraints found in the project

- All four sites are on `janavduraikkannan.github.io`, so they share one `localStorage`. A random ID made on one site is already there on the others. No cross-site tricks are needed.
- The shared files (`index.html`, `js/`, `css/`) must stay identical across the four repos, so the client code goes in a new shared `js/stats.js`, referenced from `index.html`, and is copied by `tools/sync_shared.py`.
- `site/config.js` already has `SITE.id` ("verba", "mots", "palabras", "woerter"). That is the site name sent to the counter.
- The AI relay (`verba-relay`) promises to save and log nothing, so the counter is a separate Worker.
- `PRIVACY.md` exists only in Verba and Palabras and currently says "no analytics or tracking of any kind".
- Cloudflare account access works through the connected tool. The account has no D1 databases yet. The Workers subdomain is the same one the relay uses.

## Approaches considered

- **A. Firestore records.** No new setup, but anyone can write fake records under the security rules, and counting means reading every record. Rejected.
- **B. Cloudflare Worker with D1 (chosen).** The database does the counting, the ID is salted and hashed before it is stored, and the origin check and rate limit make inflating the numbers harder. Costs a one-time Cloudflare setup, which can be done through the connected tool.
- **C. Hosted analytics (GoatCounter, Plausible, Cloudflare Web Analytics).** Cannot recognize the same person across sites. Rejected, since that is a core requirement.

The owner chose B, with a separate Worker (`verba-stats`) and a generated dashboard token.

## Design

### Client (`js/stats.js`, shared)

1. On load, skip everything if the browser sends Global Privacy Control or Do Not Track. (My call; it costs a few counts and removes any argument about consent.)
2. Read the visitor ID from `localStorage` key `lang-vid`. If missing, make 16 random bytes with `crypto.getRandomValues`, store as 32 hex characters.
3. Use `localStorage` key `lang-ping-<SITE.id>` to remember the last UTC day sent. If it is today, stop. Otherwise send `POST {id, site}` to the Worker with `fetch` (`keepalive`, no credentials, no cookies) and store today's date after a successful reply.
4. Fail silently. A blocked or failed request never shows an error and never delays the page. All `localStorage` access is wrapped in `try/catch`.

At most one request per site per day.

### Worker (`stats/worker.js`, new folder `stats/` in the Verba repo, same style as `relay/`)

- `POST /hit`
  - The `Origin` header must be `https://janavduraikkannan.github.io`. Anything else gets 403.
  - `id` must be 32 hex characters and `site` one of the four names, otherwise 400.
  - Compute `vid = first 32 hex chars of HMAC-SHA256(SALT, id)`. The raw ID is never stored or logged.
  - `day` is the server's UTC date, never taken from the client.
  - `INSERT OR IGNORE INTO hits (day, site, vid)`. The primary key makes repeats free.
  - Rate limit per IP using Cloudflare's rate-limiting binding (the IP is used only for the limit and is never stored). The builder picks the limit; it only needs to stop floods.
  - Reply 204 with CORS headers for the site origin only.
- `GET /api/stats?site=all|verba|mots|palabras|woerter`
  - Requires `Authorization: Bearer <DASH_TOKEN>`, compared in constant time. Wrong or missing token gets 401. No CORS headers, because only the dashboard page served by this same Worker calls it.
  - Returns JSON: totals, today, last 7 days, the daily series, the weekly series, and the average and highest for each.
- `GET /` serves the dashboard page (one HTML file with inline CSS and JS, no external libraries, inline SVG charts, light and dark mode, works at phone width). It asks for the token, keeps it in `sessionStorage` only, and calls `/api/stats`. It has a site switcher (All, Verba, Mots, Palabras, Wörter), the headline numbers, the two charts, and the copy-summary button. The page itself contains no data and no secret, so serving it unauthenticated is safe. The page has `noindex`.

### Database (D1, `stats/schema.sql`)

```
CREATE TABLE hits (
  day  TEXT NOT NULL,   -- 'YYYY-MM-DD', UTC
  site TEXT NOT NULL,   -- verba | mots | palabras | woerter
  vid  TEXT NOT NULL,   -- salted hash of the browser's random ID
  PRIMARY KEY (day, site, vid)
) WITHOUT ROWID;
CREATE INDEX hits_vid ON hits (vid);
```

Per-site daily count is `COUNT(*) GROUP BY day`. Combined daily, weekly and total counts use `COUNT(DISTINCT vid)`, which is what removes the same person appearing on two sites. Rows are kept forever, since history is the point; they are tiny.

### All-time log (added at the owner's request)

The statistics themselves are saved as a permanent log, not only recomputed from the raw rows.

```
CREATE TABLE log (
  period TEXT NOT NULL,  -- 'day' | 'week'
  start  TEXT NOT NULL,  -- 'YYYY-MM-DD' (the day, or the Monday of the week), UTC
  scope  TEXT NOT NULL,  -- 'all' | verba | mots | palabras | woerter
  people INTEGER NOT NULL,
  PRIMARY KEY (period, start, scope)
) WITHOUT ROWID;
```

- A daily Cron Trigger on the Worker (shortly after 00:00 UTC) writes the finished day's row for every scope, plus the finished week's rows on Mondays. It also backfills any missing earlier day or week, so a missed run heals itself. The unfinished day and week are never logged.
- The dashboard's charts, averages and highest values read from this log for finished periods and from the live rows for "today" and "this week so far". Because the log is the permanent record, the raw rows could be pruned later for extra privacy without losing history. That is the owner's choice and nothing is pruned by default.
- A "Download log (CSV)" button on the dashboard saves the full log (`period,start,scope,people`), so the owner holds a copy outside Cloudflare. The all-time total is also logged once per day as a `period='total'` row, so growth of the all-time figure can be charted.
- Tests: the cron run writes correct rows, running it twice changes nothing, it backfills a gap, and the CSV matches the table.

### Secrets and setup

- `SALT`: random, generated once, stored as a Worker secret, never changed (changing it would make everyone look new). It is not in the repository.
- `DASH_TOKEN`: random, 32 bytes, stored as a Worker secret, shown to the owner once when generated.
- Setup is done through the connected Cloudflare tool: create the D1 database, apply the schema, upload the Worker with its bindings, set the two secrets. `stats/wrangler.toml` and `stats/README.md` record the same steps so it can be redone by hand.

### Privacy text

- `PRIVACY.md` (Verba and Palabras) gets a new section and an updated "no analytics" line: what is stored (a random ID in your browser; a day, site name and scrambled ID on the counter), what is not (IP, device, name, account, what you do on the site), that it is not linked to an account, that clearing site data resets it, and that browsers sending Global Privacy Control or Do Not Track are not counted.
- The statement about the relay still holds and is left alone.
- Mots and Wörter have no privacy file. My call: add the same file to them, adapted for the site name, so the counter is not undisclosed there. The owner should confirm or veto.

## Testing

- Unit tests for the Worker logic with a fake D1 (`stats/test.mjs`, like `relay/test.mjs`): origin check, input validation, hashing, repeat hits not duplicating, counting across sites, weekly bucketing across a Sunday/Monday boundary, average and highest with empty days, wrong token.
- Browser test with the existing puppeteer setup: one request per site per day, none when GPC or DNT is on, no errors when the request fails, the same ID across all four sites, and no page errors.
- A live test after deployment: post a test hit, confirm it counts once for the site and once overall, then delete the test rows.

## Left to the builder

- Exact rate limit values and the dashboard's visual design (it should look like it belongs with the sites).
- Weekly boundaries are Monday to Sunday UTC. Dates in the dashboard show in UTC, labeled as such.
- The worker's route and name: `verba-stats`, on the same workers.dev subdomain as the relay.
- Exact wording of the `PRIVACY.md` section, within the points above.

## Rollout order

1. Create and test the database and Worker; deploy; give the owner the token.
2. Add `js/stats.js` and the `index.html` line to Verba, run `sync_shared.py` to copy to the other three, test all four.
3. Update the privacy files.
4. Commit and push each repo to `main` only after the owner has seen the results.
