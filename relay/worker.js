/**
 * Verba AI relay (Cloudflare Worker)
 *
 * Verba sends its AI requests here instead of straight to the AI company.
 * This Worker forwards each request, with the user's own key, to the AI company
 * and passes the answer back unchanged (Fēlix's reply, mood, grading, everything).
 *
 *   POST https://<your-worker>.workers.dev/?u=<full AI company URL>
 *
 * Safety rules:
 *  - Only pages from ALLOWED_ORIGINS may use it (your GitHub Pages sites).
 *  - Only the AI companies listed in UPSTREAMS can be reached, over HTTPS.
 *  - Only the headers an AI company needs are forwarded; nothing is stored or logged.
 */

// AI companies Verba knows. Host -> allowed path prefixes.
const UPSTREAMS = {
  "api.groq.com": ["/openai/v1/"],
  "generativelanguage.googleapis.com": ["/v1beta/"],
  "openrouter.ai": ["/api/v1/"],
  "api.cerebras.ai": ["/v1/"],
  "router.huggingface.co": ["/v1/"],
  "huggingface.co": ["/api/whoami-v2"],
  "api.cohere.ai": ["/compatibility/v1/"],
  "api.cohere.com": ["/v1/models"],
  "api.mistral.ai": ["/v1/"],
  "api.openai.com": ["/v1/"],
  "api.anthropic.com": ["/v1/"],
  "api.x.ai": ["/v1/"],
  "proxy.gonkabroker.com": ["/v1/"],
};

// Request headers passed on to the AI company. Everything else (cookies, IP headers, etc.) is dropped.
const FORWARD_HEADERS = ["authorization", "x-api-key", "x-goog-api-key", "anthropic-version", "content-type"];

const MAX_BODY_BYTES = 256 * 1024; // Verba's requests are a few KB; this stops misuse as a file pipe.
const DEFAULT_ORIGINS = "https://janavduraikkannan.github.io";

function allowedOrigins(env) {
  return String(env.ALLOWED_ORIGINS || DEFAULT_ORIGINS)
    .split(",").map((s) => s.trim().replace(/\/+$/, "")).filter(Boolean);
}

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": FORWARD_HEADERS.join(", ") + ", anthropic-dangerous-direct-browser-access",
    "Access-Control-Expose-Headers": "X-Verba-Relay",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

// Errors made by the relay itself carry X-Verba-Relay: error, so Verba can tell them apart
// from errors sent by the AI company (and fall back to calling the AI company directly).
function relayError(status, message, origin) {
  const headers = { "Content-Type": "application/json", "Cache-Control": "no-store", "X-Verba-Relay": "error" };
  if (origin) Object.assign(headers, corsHeaders(origin));
  return new Response(JSON.stringify({ error: { message, source: "verba-relay" } }), { status, headers });
}

function upstreamAllowed(u) {
  if (u.protocol !== "https:" || u.username || u.password || u.port) return false;
  const prefixes = UPSTREAMS[u.hostname];
  return !!prefixes && prefixes.some((p) => u.pathname.startsWith(p)) && !u.pathname.includes("/../");
}

export default {
  async fetch(request, env) {
    const origin = (request.headers.get("Origin") || "").replace(/\/+$/, "");
    const okOrigin = allowedOrigins(env).includes(origin);
    if (!okOrigin) return relayError(403, "This relay only works from Verba's own pages.", null);

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(origin) });
    if (request.method !== "GET" && request.method !== "POST") return relayError(405, "Only GET and POST are supported.", origin);

    const here = new URL(request.url);
    if (here.pathname === "/health") {
      return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...corsHeaders(origin) } });
    }

    let target;
    try { target = new URL(here.searchParams.get("u") || ""); }
    catch { return relayError(400, "Missing or invalid ?u= address.", origin); }
    if (!upstreamAllowed(target)) return relayError(400, "That address is not an AI service Verba uses.", origin);

    let body;
    if (request.method === "POST") {
      const declared = Number(request.headers.get("Content-Length") || 0);
      if (declared > MAX_BODY_BYTES) return relayError(413, "Request too large.", origin);
      body = await request.arrayBuffer();
      if (body.byteLength > MAX_BODY_BYTES) return relayError(413, "Request too large.", origin);
    }

    const headers = new Headers();
    for (const h of FORWARD_HEADERS) {
      const v = request.headers.get(h);
      if (v !== null) headers.set(h, v);
    }
    headers.set("User-Agent", "verba-relay/1.0"); // some services refuse requests with no User-Agent

    let upstream;
    try {
      upstream = await fetch(target.toString(), { method: request.method, headers, body, redirect: "manual" });
    } catch {
      return relayError(502, "The relay could not reach " + target.hostname + ".", origin);
    }

    // Pass the AI company's answer back as-is (status and body), with CORS headers for Verba.
    const out = new Headers(corsHeaders(origin));
    out.set("Content-Type", upstream.headers.get("Content-Type") || "application/json");
    out.set("Cache-Control", "no-store");
    out.set("X-Verba-Relay", "ok");
    return new Response(upstream.body, { status: upstream.status, headers: out });
  },
};
