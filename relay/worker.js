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

/*
 * Model download route, for the local grader. Same idea as the AI route, but read-only and limited to one model.
 *   GET /hf/mlc-ai/Qwen3.5-4B-q4f16_1-MLC/resolve/main/<file>  -> huggingface.co
 *   GET /wasm/mlc-ai/binary-mlc-llm-libs/main/.../<file>.wasm  -> raw.githubusercontent.com
 * No keys or cookies pass through it. Files stream straight through, so the Worker holds no model data.
 * "null" is the Origin a browser sends from a page opened as a local file (the test page).
 */
const MODEL_ROUTES = [
  { path: "/hf/", base: "https://huggingface.co/", allow: (p) => p.startsWith("mlc-ai/Qwen3.5-4B-q4f16_1-MLC/resolve/main/") && /^[\w./-]+$/.test(p) },
  { path: "/wasm/", base: "https://raw.githubusercontent.com/", allow: (p) => p === "mlc-ai/binary-mlc-llm-libs/main/web-llm-models/v0_2_87/base/Qwen3.5-4B-q4f16_1_cs1k-webgpu.wasm" },
];
const MODEL_PASS_HEADERS = ["Content-Type", "Content-Length", "Content-Range", "Accept-Ranges", "ETag", "Last-Modified"];

function modelCors(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
    "Access-Control-Allow-Headers": "range",
    "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges, ETag, X-Verba-Relay",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

async function serveModel(request, env, origin, route, here) {
  if (origin !== "null" && !allowedOrigins(env).includes(origin)) return relayError(403, "This relay only works from Verba's own pages.", null);
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: modelCors(origin) });
  if (request.method !== "GET" && request.method !== "HEAD") return relayError(405, "Only GET and HEAD are supported here.", origin);

  const rest = here.pathname.slice(route.path.length);
  if (rest.includes("..") || !route.allow(rest)) return relayError(404, "That file is not part of Verba's model.", origin);

  const headers = new Headers({ "User-Agent": "verba-relay/1.0" });
  const range = request.headers.get("Range");
  if (range) headers.set("Range", range);

  let upstream;
  try {
    // Hugging Face redirects large files to its storage servers, so redirects are followed here.
    upstream = await fetch(route.base + rest, { method: request.method, headers, redirect: "follow" });
  } catch {
    return relayError(502, "The relay could not reach the model host.", origin);
  }

  const out = new Headers(modelCors(origin));
  for (const h of MODEL_PASS_HEADERS) {
    const v = upstream.headers.get(h);
    if (v !== null) out.set(h, v);
  }
  out.set("Cache-Control", "no-store");
  out.set("X-Verba-Relay", "ok");
  return new Response(upstream.body, { status: upstream.status, headers: out });
}

/*
 * Word lookups for the local grader: POST /latin-api/latin/batch forwards a short word list to the free
 * Latin Translation API (Whitaker's Words). No keys or cookies pass through it.
 */
async function serveWords(request, env, origin) {
  if (origin !== "null" && !allowedOrigins(env).includes(origin)) return relayError(403, "This relay only works from Verba's own pages.", null);
  const cors = { ...modelCors(origin), "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "content-type" };
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
  if (request.method !== "POST") return relayError(405, "Only POST is supported here.", origin);
  const body = await request.text();
  if (body.length > 8192) return relayError(413, "Request too large.", origin);
  let upstream;
  try {
    upstream = await fetch("https://latin.71m.us/latin/batch", { method: "POST", headers: { "Content-Type": "application/json", "User-Agent": "verba-relay/1.0" }, body });
  } catch {
    return relayError(502, "The relay could not reach the word lookups.", origin);
  }
  const out = new Headers(cors);
  out.set("Content-Type", upstream.headers.get("Content-Type") || "application/json");
  out.set("Cache-Control", "no-store");
  out.set("X-Verba-Relay", "ok");
  return new Response(upstream.body, { status: upstream.status, headers: out });
}

/*
 * Tie-breaks for the local grader: forwards one chat request to the Gonka broker with the
 * caller's own key. Only this model is allowed, and nothing is stored.
 */
const GONKA_CHAT = "https://proxy.gonkabroker.com/v1/chat/completions";
async function serveGonka(request, env, origin) {
  if (origin !== "null" && !allowedOrigins(env).includes(origin)) return relayError(403, "This relay only works from Verba's own pages.", null);
  const cors = { ...modelCors(origin), "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "authorization, content-type" };
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
  if (request.method !== "POST") return relayError(405, "Only POST is supported here.", origin);
  const body = await request.text();
  if (body.length > 16384) return relayError(413, "Request too large.", origin);
  let model = "";
  try { model = String(JSON.parse(body).model || ""); } catch {}
  if (model !== "deepseek-ai/DeepSeek-V4-Flash-0731") return relayError(400, "That model isn't allowed here.", origin);
  const headers = new Headers({ "Content-Type": "application/json", "User-Agent": "verba-relay/1.0" });
  const auth = request.headers.get("Authorization");
  if (auth) headers.set("Authorization", auth);
  let upstream;
  try {
    upstream = await fetch(GONKA_CHAT, { method: "POST", headers, body });
  } catch {
    return relayError(502, "The relay could not reach the broker.", origin);
  }
  const out = new Headers(cors);
  out.set("Content-Type", upstream.headers.get("Content-Type") || "application/json");
  out.set("Cache-Control", "no-store");
  out.set("X-Verba-Relay", "ok");
  return new Response(upstream.body, { status: upstream.status, headers: out });
}

/*
 * Verba's own tie-break. When the local AI's two checks disagree and a student has no key on, the page sends the
 * exercise here. The Gonka key lives only in this Worker as the encrypted secret GONKA_KEY: it never reaches a page or the repo.
 * This route can only send the one grading prompt below, to one model, with a short reply, and it limits how often it runs.
 */
const TIE_MODEL = "deepseek-ai/DeepSeek-V4-Flash-0731";
const TIE_RULES = 'You grade a Latin course. Translations must be literal. The same doer, receiver, action, tense, voice, mood, number and case roles are required. An adjective must stay on the same noun and an adverb must stay an adverb. Superlatives need most or -est, and very is wrong. An ablative absolute stays literal: with X having been Y. Synonyms are right, and so are small spelling slips in a word stem. Wrong Latin endings are wrong. A yes-or-no Latin question needs -ne. A missing word is wrong. Output exactly one JSON object and no other text. Its "correct" field is true or false. If false, add a "reason" field of a few words.';
const TIE_LIMITS = { perIp: 20, all: 120, windowMs: 60000 };
const tieHits = new Map();
function tieAllowed(ip, now = Date.now()) {
  const fresh = (k) => { const a = (tieHits.get(k) || []).filter((t) => now - t < TIE_LIMITS.windowMs); tieHits.set(k, a); return a; };
  const mine = fresh(ip), everyone = fresh("*");
  if (mine.length >= TIE_LIMITS.perIp || everyone.length >= TIE_LIMITS.all) return false;
  mine.push(now); everyone.push(now);
  if (tieHits.size > 5000) tieHits.clear();
  return true;
}
async function serveTiebreak(request, env, origin) {
  if (!allowedOrigins(env).includes(origin)) return relayError(403, "This relay only works from Verba's own pages.", null);
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(origin) });
  if (request.method !== "POST") return relayError(405, "Only POST is supported here.", origin);
  if (!env.GONKA_KEY) return relayError(503, "Verba's tie-break isn't set up yet.", origin);
  if (!tieAllowed(request.headers.get("CF-Connecting-IP") || "unknown")) return relayError(429, "Too many tie-breaks right now.", origin);
  let q;
  try { q = JSON.parse(await request.text()); } catch { return relayError(400, "Unreadable request.", origin); }
  const ok = (v) => typeof v === "string" && v.length > 0 && v.length <= 400;
  if (!q || !ok(q.src) || !ok(q.model) || !ok(q.ans)) return relayError(400, "Unreadable request.", origin);
  const user = q.e2l
    ? `English to translate: ${q.src}\nCorrect Latin: ${q.model}\nStudent's Latin: ${q.ans}`
    : `Latin to translate: ${q.src}\nCorrect English: ${q.model}\nStudent's English: ${q.ans}`;
  let upstream;
  try {
    upstream = await fetch("https://proxy.gonkabroker.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + env.GONKA_KEY, "User-Agent": "verba-relay/1.0" },
      body: JSON.stringify({ model: TIE_MODEL, messages: [{ role: "system", content: TIE_RULES }, { role: "user", content: user }], temperature: 0, max_tokens: 150, stream: false }),
    });
  } catch { return relayError(502, "The relay could not reach the tie-break.", origin); }
  if (!upstream.ok) return relayError(upstream.status === 429 ? 429 : 502, "The tie-break is busy.", origin);
  let text = "";
  try { text = (await upstream.json()).choices[0].message.content || ""; } catch { return relayError(502, "Unreadable tie-break reply.", origin); }
  return new Response(JSON.stringify({ text }), { headers: { "Content-Type": "application/json", "Cache-Control": "no-store", "X-Verba-Relay": "ok", ...corsHeaders(origin) } });
}

function upstreamAllowed(u) {
  if (u.protocol !== "https:" || u.username || u.password || u.port) return false;
  const prefixes = UPSTREAMS[u.hostname];
  return !!prefixes && prefixes.some((p) => u.pathname.startsWith(p)) && !u.pathname.includes("/../");
}

export default {
  async fetch(request, env) {
    const origin = (request.headers.get("Origin") || "").replace(/\/+$/, "");
    const here = new URL(request.url);
    const modelRoute = MODEL_ROUTES.find((r) => here.pathname.startsWith(r.path));
    if (modelRoute) return serveModel(request, env, origin, modelRoute, here);
    if (here.pathname === "/latin-api/latin/batch") return serveWords(request, env, origin);
    if (here.pathname === "/verba-tiebreak") return serveTiebreak(request, env, origin);
    if (here.pathname === "/gonka/v1/chat/completions") return serveGonka(request, env, origin);

    const okOrigin = allowedOrigins(env).includes(origin);
    if (!okOrigin) return relayError(403, "This relay only works from Verba's own pages.", null);

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(origin) });
    if (request.method !== "GET" && request.method !== "POST") return relayError(405, "Only GET and POST are supported.", origin);

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
