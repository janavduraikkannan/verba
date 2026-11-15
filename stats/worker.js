/**
 * Visitor counter (Cloudflare Worker + D1)
 *
 * Each practice site sends a random browser ID at most once a day. This Worker hashes it with a secret salt
 * and stores only (UTC day, site, hash). No IP address, user agent or raw ID is stored or logged.
 *
 *   POST /hit               { id, site }      from the practice sites only (Origin check)
 *   GET  /                  the private dashboard page (needs the token to load any data)
 *   GET  /api/stats?site=   JSON statistics   (Authorization: Bearer <DASH_TOKEN>)
 *   GET  /api/log.csv       the permanent log (same token)
 *   cron daily              writes finished days and weeks to the permanent log
 */
import { SITES, validHit, recordHit, rollup, buildStats, logCsv } from "./core.js";
import { PAGE } from "./page.js";

const ORIGIN = "https://janavduraikkannan.github.io";
const CORS = { "Access-Control-Allow-Origin": ORIGIN, "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Max-Age": "86400", Vary: "Origin" };
const MAX_BODY = 512;
const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
const plain = status => new Response(null, { status });

async function digest(s) { return new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s))); }
async function authorized(request, env) {
  const m = /^Bearer (.+)$/.exec(request.headers.get("Authorization") || "");
  if (!m || !env.DASH_TOKEN) return false;
  const a = await digest(m[1]), b = await digest(env.DASH_TOKEN);
  let diff = 0; for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

async function handleHit(request, env) {
  if (request.headers.get("Origin") !== ORIGIN) return plain(403);
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  if (request.method !== "POST") return plain(405);
  if (Number(request.headers.get("Content-Length") || 0) > MAX_BODY) return plain(413);
  const text = await request.text();
  if (new TextEncoder().encode(text).length > MAX_BODY) return plain(413);
  let body; try { body = JSON.parse(text); } catch (e) { return plain(400); }
  const hit = validHit(body);
  if (!hit) return plain(400);
  if (env.LIMITER) { // 429 (not 204): the browser then does not mark today as counted and tries again on its next page load
    const r = await env.LIMITER.limit({ key: request.headers.get("CF-Connecting-IP") || "unknown" });
    if (!r.success) return plain(429);
  }
  await recordHit(env.DB, env.SALT, hit, new Date());
  return new Response(null, { status: 204, headers: CORS });
}

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/hit") return await handleHit(request, env);
      if (request.method !== "GET") return plain(405);
      if (url.pathname === "/") {
        return new Response(PAGE, { headers: {
          "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store", "X-Robots-Tag": "noindex", "X-Content-Type-Options": "nosniff", "Referrer-Policy": "no-referrer",
          "Content-Security-Policy": "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self'; img-src data:; base-uri 'none'; form-action 'none'" } });
      }
      if (url.pathname === "/api/stats" || url.pathname === "/api/log.csv") {
        if (!(await authorized(request, env))) return plain(401);
        if (url.pathname === "/api/log.csv") {
          return new Response(await logCsv(env.DB), { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": 'attachment; filename="language-sites-log.csv"', "Cache-Control": "no-store" } });
        }
        const site = url.searchParams.get("site") || "all";
        if (site !== "all" && !SITES.includes(site)) return json({ error: "site" }, 400);
        const now = new Date();
        await rollup(env.DB, now); // idempotent: fills any day or week the cron has not logged yet
        return json(await buildStats(env.DB, site, now));
      }
      return plain(404);
    } catch (e) {
      console.error("stats error");
      return json({ error: "server" }, 500);
    }
  },
  async scheduled(event, env) { await rollup(env.DB, new Date()); },
};
