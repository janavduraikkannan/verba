# Visitor counter (Cloudflare Worker + D1)

Counts unique people per site and across Verba, Mots, Palabras and Wörter, storing as little as possible. Live at `https://verba-stats.janav-durai.workers.dev` (the dashboard is the page at `/`; it asks for the token).

## What it stores

Only `(UTC day, site, hash)` in the D1 table `hits`. The hash is `HMAC-SHA256(SALT, random browser ID)` cut to 32 hex characters. The raw browser ID, the IP address and the browser details are never stored or logged. The permanent log (table `log`) holds only finished-period totals: people per day, per week, and the running all-time total, for each site and for all sites.

## How it works

- `js/stats.js` (shared by all four sites) sends `POST /hit {id, site}` at most once per site per day. The four sites share one browser storage area (`janavduraikkannan.github.io`), so one random ID (`lang-vid`) is the same on all of them, which is what lets "all sites" count a person once.
- `POST /hit` accepts only the `https://janavduraikkannan.github.io` origin, validates the body, and is rate limited (300 per minute per IP, so a whole school behind one address still counts; a limited visitor gets 429 and is retried on their next page load; the IP is not stored).
- A daily cron (00:05 UTC) writes the finished day and week to `log`. Opening the dashboard also fills any gap, and running either twice changes nothing.
- `GET /api/stats?site=all|verba|mots|palabras|woerter` and `GET /api/log.csv` need `Authorization: Bearer <DASH_TOKEN>`.

## Files

| File | What it is |
| --- | --- |
| `worker.js` | Routes, auth, CORS, the cron entry |
| `core.js` | The counting logic and SQL (pure, tested) |
| `page.js` | The dashboard page as one self-contained string |
| `schema.sql` | The two tables |
| `test.mjs`, `testdb.mjs` | Tests, run against real SQLite: `node stats/test.mjs` (Node 22.5 or newer) |
| `wrangler.toml` | The same settings for `npx wrangler deploy` |

## Redeploying

`npx wrangler deploy` from this folder, or upload the three `.js` files as modules in the Cloudflare dashboard. Secrets live only in Cloudflare (Workers & Pages, `verba-stats`, Settings, Variables and Secrets):

- `SALT`: random, set once. **Never change or lose it.** Changing it makes every returning person look new.
- `DASH_TOKEN`: the dashboard password. To rotate it, set a new value and sign in again.

The database is `verba-stats` (D1). To start it from scratch, run `schema.sql` against it.

## Limits

Counts are estimates: a cleared browser, a private window or a second device looks like a new person. Browsers that send Global Privacy Control or Do Not Track are not counted.
