/* SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2026 janavduraikkannan and Linguae contributors */
/* The private dashboard. One self-contained page: no external requests, no data inside it.
   The script must not use backticks or ${ } because the whole page is a String.raw template. */
export const PAGE = String.raw`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Visitor Stats</title>
<style>
:root{--bg:#f6f7f9;--card:#ffffff;--ink:#1b2430;--muted:#5b6675;--line:#dfe3e9;--bar:#2f6fed;--bad:#b3261e;--btn:#1b2430;--btnink:#ffffff}
@media (prefers-color-scheme: dark){:root{--bg:#12161c;--card:#1b212a;--ink:#e8ecf1;--muted:#9aa5b4;--line:#2d3642;--bar:#7aa7ff;--bad:#ff8a80;--btn:#e8ecf1;--btnink:#12161c}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}
.wrap{max-width:980px;margin:0 auto;padding:24px 16px 64px}
h1{font-size:1.5rem;margin:0 0 4px}
.sub{color:var(--muted);margin:0 0 20px;font-size:.95rem}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px}
.login{max-width:420px}
label{display:block;font-weight:600;margin-bottom:6px}
input[type=password]{width:100%;padding:10px 12px;font:inherit;color:var(--ink);background:var(--bg);border:1px solid var(--line);border-radius:8px}
button{font:inherit;cursor:pointer;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink);padding:8px 14px}
button.primary{background:var(--btn);color:var(--btnink);border-color:var(--btn);margin-top:10px}
button:focus-visible,input:focus-visible{outline:3px solid var(--bar);outline-offset:2px}
.err{color:var(--bad);margin:10px 0 0;min-height:1.4em}
.tabs{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 16px}
.tabs button[aria-pressed=true]{background:var(--btn);color:var(--btnink);border-color:var(--btn)}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:16px}
.stat .n{font-size:1.9rem;font-weight:700;line-height:1.1}
.stat .l{color:var(--muted);font-size:.85rem;margin-top:4px}
.stat .d{color:var(--muted);font-size:.8rem}
h2{font-size:1.05rem;margin:0 0 8px}
svg{width:100%;height:auto;display:block}
svg .bar{fill:var(--bar)}svg .part{fill:var(--bar);opacity:.4}
svg text{fill:var(--muted);font-size:11px}svg line{stroke:var(--line)}
.charts{display:grid;gap:12px;margin-bottom:16px}
.summary{white-space:pre-wrap;color:var(--ink);font-size:.95rem;margin:0 0 10px}
.row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.note{color:var(--muted);font-size:.85rem;margin-top:16px}
[hidden]{display:none!important}
@media (max-width:480px){.stat .n{font-size:1.6rem}}
</style>
</head>
<body>
<div class="wrap">
  <h1>Visitor stats</h1>
  <p class="sub">Estimated unique people across the language practice sites. All dates are UTC.</p>

  <form id="login" class="card login">
    <label for="tok">Dashboard token</label>
    <input id="tok" type="password" autocomplete="current-password" required>
    <button class="primary" type="submit">Open</button>
    <p class="err" id="loginErr" role="alert"></p>
  </form>

  <div id="main" hidden>
    <div class="tabs" id="tabs" role="group" aria-label="Site"></div>
    <div class="grid" id="cards"></div>
    <div class="charts">
      <div class="card"><h2>People per day (last 90 days)</h2><div id="dailyChart"></div></div>
      <div class="card"><h2>People per week (Mon to Sun)</h2><div id="weeklyChart"></div></div>
    </div>
    <div class="card">
      <h2>Summary</h2>
      <p class="summary" id="summary"></p>
      <div class="row">
        <button id="copy" type="button">Copy summary</button>
        <button id="csv" type="button">Download log (CSV)</button>
        <button id="forget" type="button">Forget token</button>
        <span id="status" role="status"></span>
      </div>
    </div>
    <p class="note">Counts are estimates: each browser gets a random ID, so one person on two browsers or devices counts twice, and a cleared browser looks new. Visitors whose browsers send Do Not Track or Global Privacy Control are not counted. The current day and week are shown lighter and left out of the averages and highest values.</p>
  </div>
</div>
<script>
var NAMES = {all: "All sites", verba: "Verba", mots: "Mots", palabras: "Palabras", woerter: "Wörter"};
var ORDER = ["all", "verba", "mots", "palabras", "woerter"];
var DATE_OK = /^\d{4}-\d\d-\d\d$/;
function fmt(n) { return Number(n || 0).toLocaleString("en-US"); }
function num(n) { n = Number(n); return isFinite(n) ? n : 0; }
function summaryText(s) {
  if (!s || !s.total) return "No visits recorded yet.";
  var name = NAMES[s.scope] || "All sites";
  var day = String(s.asOf || "").slice(0, 10);
  var t = "Estimated reach of " + name + (day ? " (as of " + day + ", UTC)" : "") + ": about " + fmt(s.total) + " unique people in total" + (s.firstDay ? " since " + s.firstDay : "") + ". ";
  t += "In the last 7 days: " + fmt(s.last7) + " people. ";
  if (s.dailyMax) t += "Daily: average " + fmt(s.dailyAvg) + ", highest " + fmt(s.dailyMax.people) + " on " + s.dailyMax.start + ". ";
  if (s.weeklyMax) t += "Weekly: average " + fmt(s.weeklyAvg) + ", highest " + fmt(s.weeklyMax.people) + " (week of " + s.weeklyMax.start + "). ";
  t += "These are estimates from anonymous random browser IDs; one person on several browsers or devices may be counted more than once.";
  return t;
}
window.__summaryText = summaryText;
function bars(list, label) {
  var W = 640, H = 170, L = 34, B = 22, T = 8, R = 6;
  list = list.filter(function (p) { return DATE_OK.test(p.start); });
  if (!list.length) return "<p class=\"sub\">No data yet.</p>";
  var max = 1; list.forEach(function (p) { max = Math.max(max, num(p.people)); });
  var gw = (W - L - R) / list.length, bw = Math.max(1, gw * 0.78), ph = H - B - T;
  var out = "<svg viewBox=\"0 0 " + W + " " + H + "\" role=\"img\" aria-label=\"" + label + "\">";
  out += "<line x1=\"" + L + "\" y1=\"" + (T + ph) + "\" x2=\"" + (W - R) + "\" y2=\"" + (T + ph) + "\"/>";
  out += "<text x=\"" + (L - 4) + "\" y=\"" + (T + 9) + "\" text-anchor=\"end\">" + fmt(max) + "</text><text x=\"" + (L - 4) + "\" y=\"" + (T + ph) + "\" text-anchor=\"end\">0</text>";
  list.forEach(function (p, i) {
    var h = num(p.people) / max * ph, x = L + i * gw + (gw - bw) / 2;
    out += "<rect class=\"" + (p.final ? "bar" : "part") + "\" x=\"" + x.toFixed(2) + "\" y=\"" + (T + ph - h).toFixed(2) + "\" width=\"" + bw.toFixed(2) + "\" height=\"" + h.toFixed(2) + "\"><title>" + p.start + ": " + fmt(p.people) + (p.final ? "" : " so far") + "</title></rect>";
  });
  out += "<text x=\"" + L + "\" y=\"" + (H - 5) + "\">" + list[0].start + "</text><text x=\"" + (W - R) + "\" y=\"" + (H - 5) + "\" text-anchor=\"end\">" + list[list.length - 1].start + "</text></svg>";
  return out;
}
function card(n, l, d) { return "<div class=\"card stat\"><div class=\"n\">" + n + "</div><div class=\"l\">" + l + "</div>" + (d ? "<div class=\"d\">" + d + "</div>" : "") + "</div>"; }
function init() {
  var $ = function (id) { return document.getElementById(id); };
  var token = "", scope = "all", current = null;
  try { token = sessionStorage.getItem("stats-token") || ""; } catch (e) {}
  function api(path) { return fetch(path, { headers: { Authorization: "Bearer " + token }, cache: "no-store" }); }
  function status(msg) { $("status").textContent = msg; setTimeout(function () { if ($("status").textContent === msg) $("status").textContent = ""; }, 2500); }
  function render(s) {
    current = s;
    $("cards").innerHTML = card(fmt(s.total), "People in total") + card(fmt(s.today), "Today so far") + card(fmt(s.last7), "Last 7 days")
      + card(fmt(s.dailyAvg), "Daily average") + card(s.dailyMax ? fmt(s.dailyMax.people) : "-", "Highest day", s.dailyMax ? s.dailyMax.start : "")
      + card(fmt(s.weeklyAvg), "Weekly average") + card(s.weeklyMax ? fmt(s.weeklyMax.people) : "-", "Highest week", s.weeklyMax ? "week of " + s.weeklyMax.start : "");
    $("dailyChart").innerHTML = bars(s.daily.slice(-90), "People per day");
    $("weeklyChart").innerHTML = bars(s.weekly, "People per week");
    $("summary").textContent = summaryText(s);
  }
  function tabs() {
    $("tabs").innerHTML = "";
    ORDER.forEach(function (k) {
      var b = document.createElement("button"); b.type = "button"; b.textContent = NAMES[k]; b.setAttribute("aria-pressed", String(k === scope));
      b.onclick = function () { scope = k; tabs(); load(); }; $("tabs").appendChild(b);
    });
  }
  function load() {
    return api("/api/stats?site=" + scope).then(function (r) {
      if (r.status === 401) { signOut("That token was not accepted."); return; }
      if (!r.ok) { status("The stats server returned an error (" + r.status + ")."); return; }
      return r.json().then(function (s) { $("login").hidden = true; $("main").hidden = false; render(s); });
    }).catch(function () { status("Could not reach the stats server."); });
  }
  function signOut(msg) {
    token = ""; try { sessionStorage.removeItem("stats-token"); } catch (e) {}
    $("main").hidden = true; $("login").hidden = false; $("tok").value = ""; $("loginErr").textContent = msg || "";
  }
  $("login").onsubmit = function (e) {
    e.preventDefault(); token = $("tok").value.trim(); $("loginErr").textContent = "";
    try { sessionStorage.setItem("stats-token", token); } catch (x) {}
    tabs(); load();
  };
  $("forget").onclick = function () { signOut(""); };
  $("copy").onclick = function () {
    var text = $("summary").textContent;
    (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(function () { status("Copied."); }, function () { status("Copy failed. Select the text above instead."); });
  };
  $("csv").onclick = function () {
    api("/api/log.csv").then(function (r) { if (!r.ok) throw 0; return r.blob(); }).then(function (b) {
      var a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = "language-sites-log.csv"; document.body.appendChild(a); a.click(); a.remove();
    }).catch(function () { status("Could not download the log."); });
  };
  if (token) { tabs(); load(); }
}
if (typeof document !== "undefined" && document.getElementById) init();
</script>
</body>
</html>
`;
