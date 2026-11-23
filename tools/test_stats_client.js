/* SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2026 janavduraikkannan and Linguae contributors */
/* Browser test for js/stats.js. Needs puppeteer-core and system Chrome:
     NODE_PATH=/path/to/node_modules node tools/test_stats_client.js
   Serve the folder that holds the four sites first (default http://127.0.0.1:8100):
     (cd .. && python3 -m http.server 8100)
   Requests to the real counter are intercepted and answered locally, so this never writes to the live database. */
const puppeteer = require('puppeteer-core');
const BASE = process.env.BASE || 'http://127.0.0.1:8100';
const HIT = 'https://verba-stats.janav-durai.workers.dev/hit';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const SITES = ['verba', 'mots', 'palabras', 'woerter'];
let fail = 0;
const ok = (c, m) => { if (!c) { fail++; console.log('  FAIL', m); } else console.log('  ok  ', m); };

async function visit(ctx, site, { before, abort = false, reload = false } = {}) {
  const page = await ctx.newPage();
  const sent = [], errs = [];
  page.on('pageerror', e => errs.push(e.message + ' ' + (e.stack || '')));
  await page.setRequestInterception(true);
  page.on('request', r => {
    if (!r.url().startsWith(HIT)) return r.continue();
    sent.push({ method: r.method(), headers: r.headers(), body: r.postData() });
    if (abort) return r.abort('failed');
    r.respond({ status: 204, headers: { 'Access-Control-Allow-Origin': '*' } });
  });
  await page.evaluateOnNewDocument(id => { try { localStorage.setItem(id + '-onboarded', 'true'); localStorage.setItem('verba-local-choice', '"no"'); } catch (e) {} }, site);
  if (before) await page.evaluateOnNewDocument(before);
  await page.goto(`${BASE}/${site}/index.html`, { waitUntil: 'networkidle0' });
  await sleep(700); // the script waits for an idle moment
  return { page, sent, errs };
}

(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new' });
  const fresh = () => browser.createBrowserContext();

  console.log('first visit sends one hit');
  let ctx = await fresh(); let v = await visit(ctx, 'verba');
  ok(v.sent.length === 1, 'one request (' + v.sent.length + ')');
  const body = JSON.parse(v.sent[0]?.body || '{}');
  ok(/^[0-9a-f]{32}$/.test(body.id || '') && body.site === 'verba' && Object.keys(body).length === 2, 'body is {id: 32 hex, site: verba} only: ' + v.sent[0]?.body);
  ok(v.sent[0]?.method === 'POST', 'method is POST');
  ok(!v.sent[0]?.headers.cookie && !v.sent[0]?.headers.authorization, 'no cookie or authorization header');
  ok(/^text\/plain/.test(v.sent[0]?.headers['content-type'] || ''), 'plain POST (no preflight): ' + v.sent[0]?.headers['content-type']);
  const id1 = body.id;
  await v.page.close();

  console.log('second load the same day sends nothing');
  v = await visit(ctx, 'verba'); ok(v.sent.length === 0, 'no request (' + v.sent.length + ')'); await v.page.close();

  console.log('a stored day of yesterday sends again');
  const yest = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  v = await visit(ctx, 'verba', { before: `try{localStorage.setItem('lang-ping-verba','${yest}')}catch(e){}` });
  ok(v.sent.length === 1, 'sends once more (' + v.sent.length + ')'); ok(JSON.parse(v.sent[0]?.body || '{}').id === id1, 'same id as before'); await v.page.close();
  await ctx.close();

  console.log('the same id on all four sites');
  ctx = await fresh(); const ids = [], names = [];
  for (const s of SITES) { v = await visit(ctx, s); ok(v.sent.length === 1, s + ': one request'); const b = JSON.parse(v.sent[0]?.body || '{}'); ids.push(b.id); names.push(b.site); ok(!v.errs.length, s + ': no page errors ' + JSON.stringify(v.errs).slice(0, 200)); await v.page.close(); }
  ok(new Set(ids).size === 1, 'one id across sites'); ok(JSON.stringify(names) === JSON.stringify(SITES), 'site names ' + names);
  await ctx.close();

  console.log('Global Privacy Control sends nothing and creates no id');
  ctx = await fresh(); v = await visit(ctx, 'mots', { before: `Object.defineProperty(navigator,'globalPrivacyControl',{value:true})` });
  ok(v.sent.length === 0, 'no request'); ok(await v.page.evaluate(() => localStorage.getItem('lang-vid')) === null, 'no lang-vid stored'); await v.page.close(); await ctx.close();

  console.log('Do Not Track sends nothing');
  ctx = await fresh(); v = await visit(ctx, 'palabras', { before: `Object.defineProperty(navigator,'doNotTrack',{value:'1'})` });
  ok(v.sent.length === 0, 'no request'); ok(await v.page.evaluate(() => localStorage.getItem('lang-vid')) === null, 'no lang-vid stored'); await v.page.close(); await ctx.close();

  console.log('blocked localStorage: nothing sent, no error from stats.js');
  ctx = await fresh(); v = await visit(ctx, 'woerter', { before: `Storage.prototype.getItem=function(){throw new Error('blocked')};Storage.prototype.setItem=function(){throw new Error('blocked')}` });
  ok(v.sent.length === 0, 'no request'); ok(!v.errs.some(e => e.includes('stats.js')), 'no stats.js error ' + JSON.stringify(v.errs.filter(e => e.includes('stats')))); await v.page.close(); await ctx.close();

  console.log('a failed request breaks nothing and is retried next load');
  ctx = await fresh(); v = await visit(ctx, 'verba', { abort: true });
  ok(v.sent.length === 1, 'tried once'); ok(!v.errs.length, 'no page errors ' + JSON.stringify(v.errs).slice(0, 200)); await v.page.close();
  v = await visit(ctx, 'verba'); ok(v.sent.length === 1, 'retried on the next load (' + v.sent.length + ')'); await v.page.close(); await ctx.close();

  await browser.close(); console.log(fail ? fail + ' FAILED' : 'ALL PASSED'); process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
