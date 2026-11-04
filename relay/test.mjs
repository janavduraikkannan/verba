import worker from "./worker.js";
let calls = [], next = null;
globalThis.fetch = async (url, init) => { calls.push({ url, init }); if (next) return next(url, init); return new Response(JSON.stringify({ choices: [{ message: { content: '{"reply":"Salvē!","mood":"happy"}' } }] }), { status: 200, headers: { "Content-Type": "application/json", "Set-Cookie": "x=1" } }); };
const O = "https://janavduraikkannan.github.io";
const W = "https://relay.example.workers.dev";
const env = {};
let pass = 0, fail = 0;
const t = async (name, fn) => { calls = []; next = null; try { await fn(); pass++; console.log("ok  ", name); } catch (e) { fail++; console.log("FAIL", name, "-", e.message); } };
const eq = (a, b, m) => { if (a !== b) throw new Error(`${m}: got ${a}, want ${b}`); };
const req = (u, o = {}) => new Request(W + u, { ...o, headers: { Origin: O, ...(o.headers || {}) } });
const enc = encodeURIComponent;

await t("preflight from Verba gets CORS", async () => {
  const r = await worker.fetch(req("/?u=" + enc("https://api.groq.com/openai/v1/chat/completions"), { method: "OPTIONS" }), env);
  eq(r.status, 204, "status"); eq(r.headers.get("Access-Control-Allow-Origin"), O, "acao"); eq(calls.length, 0, "no upstream");
});
await t("chat request forwarded with key, answer passed through", async () => {
  const body = JSON.stringify({ model: "llama-3.3-70b-versatile", messages: [{ role: "user", content: "hi" }] });
  const r = await worker.fetch(req("/?u=" + enc("https://api.groq.com/openai/v1/chat/completions"), { method: "POST", body, headers: { Authorization: "Bearer gsk_test", "Content-Type": "application/json", Cookie: "secret=1", "CF-Connecting-IP": "1.2.3.4" } }), env);
  eq(r.status, 200, "status"); eq(calls[0].url, "https://api.groq.com/openai/v1/chat/completions", "url");
  eq(calls[0].init.headers.get("authorization"), "Bearer gsk_test", "auth fwd");
  eq(calls[0].init.headers.get("cookie"), null, "cookie dropped"); eq(calls[0].init.headers.get("cf-connecting-ip"), null, "ip dropped");
  eq(new TextDecoder().decode(calls[0].init.body), body, "body same");
  const j = await r.json(); eq(JSON.parse(j.choices[0].message.content).mood, "happy", "mood passes through");
  eq(r.headers.get("Access-Control-Allow-Origin"), O, "acao"); eq(r.headers.get("Set-Cookie"), null, "upstream cookie dropped"); eq(r.headers.get("X-Verba-Relay"), "ok", "marker");
});
await t("GET model list with Gemini header + query string kept", async () => {
  const u = "https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000";
  const r = await worker.fetch(req("/?u=" + enc(u), { headers: { "x-goog-api-key": "AQ.test" } }), env);
  eq(r.status, 200, "status"); eq(calls[0].url, u, "url"); eq(calls[0].init.headers.get("x-goog-api-key"), "AQ.test", "key"); eq(calls[0].init.body, undefined, "no body");
});
await t("Anthropic headers forwarded", async () => {
  await worker.fetch(req("/?u=" + enc("https://api.anthropic.com/v1/messages"), { method: "POST", body: "{}", headers: { "x-api-key": "sk-ant-x", "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" } }), env);
  eq(calls[0].init.headers.get("x-api-key"), "sk-ant-x", "key"); eq(calls[0].init.headers.get("anthropic-version"), "2023-06-01", "ver");
});
await t("upstream error status passed through (e.g. 429)", async () => {
  next = () => new Response('{"error":{"message":"rate limit"}}', { status: 429, headers: { "Content-Type": "application/json" } });
  const r = await worker.fetch(req("/?u=" + enc("https://api.groq.com/openai/v1/chat/completions"), { method: "POST", body: "{}" }), env);
  eq(r.status, 429, "status"); eq(r.headers.get("X-Verba-Relay"), "ok", "not a relay error");
});
await t("wrong origin refused", async () => {
  const r = await worker.fetch(new Request(W + "/?u=" + enc("https://api.groq.com/openai/v1/models"), { headers: { Origin: "https://evil.example" } }), env);
  eq(r.status, 403, "status"); eq(calls.length, 0, "no upstream"); eq(r.headers.get("Access-Control-Allow-Origin"), null, "no acao");
});
await t("no origin (curl) refused", async () => {
  const r = await worker.fetch(new Request(W + "/?u=" + enc("https://api.groq.com/openai/v1/models")), env); eq(r.status, 403, "status");
});
for (const bad of ["https://example.com/v1/x", "http://api.groq.com/openai/v1/models", "https://api.groq.com/other", "https://api.groq.com:8443/openai/v1/models", "https://user:pw@api.groq.com/openai/v1/models", "https://api.groq.com.evil.com/openai/v1/models", "not a url", ""]) {
  await t("blocked target: " + (bad || "(empty)"), async () => { const r = await worker.fetch(req("/?u=" + enc(bad)), env); eq(r.status, 400, "status"); eq(calls.length, 0, "no upstream"); eq(r.headers.get("X-Verba-Relay"), "error", "marker"); });
}
await t("path traversal normalized and checked", async () => {
  const r = await worker.fetch(req("/?u=" + enc("https://api.groq.com/openai/v1/../../secret")), env); eq(r.status, 400, "status");
});
await t("too-large body refused", async () => {
  const r = await worker.fetch(req("/?u=" + enc("https://api.groq.com/openai/v1/chat/completions"), { method: "POST", body: "x".repeat(300 * 1024) }), env); eq(r.status, 413, "status"); eq(calls.length, 0, "no upstream");
});
await t("PUT refused", async () => { const r = await worker.fetch(req("/?u=" + enc("https://api.groq.com/openai/v1/models"), { method: "PUT", body: "x" }), env); eq(r.status, 405, "status"); });
await t("upstream unreachable -> 502 relay error", async () => {
  next = () => { throw new TypeError("network"); };
  const r = await worker.fetch(req("/?u=" + enc("https://api.groq.com/openai/v1/models")), env); eq(r.status, 502, "status"); eq(r.headers.get("X-Verba-Relay"), "error", "marker");
});
await t("health check", async () => { const r = await worker.fetch(req("/health"), env); eq(r.status, 200, "status"); eq((await r.json()).ok, true, "ok"); });
await t("ALLOWED_ORIGINS variable works (localhost for testing)", async () => {
  const r = await worker.fetch(new Request(W + "/health", { headers: { Origin: "http://localhost:8000" } }), { ALLOWED_ORIGINS: "https://janavduraikkannan.github.io, http://localhost:8000" }); eq(r.status, 200, "status");
});
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
