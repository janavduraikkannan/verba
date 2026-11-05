# AI relay (Cloudflare Worker)

This is the code running at `https://verba-relay.janav-durai.workers.dev`. Verba, Palabras, Mots and Wörter send their AI requests here (unless the user switches the relay off under the AI key box). The Worker forwards each request, with the user's own AI key, to the AI company and passes the reply back unchanged. It saves and logs nothing.

- Only pages on `https://janavduraikkannan.github.io` can use it (set `ALLOWED_ORIGINS` in the Worker's settings to change this).
- Only the AI services in `UPSTREAMS` can be reached, over HTTPS, and only the headers they need are forwarded.
- Errors made by the relay itself carry `X-Verba-Relay: error`; the sites then call the AI company directly (`aiFetch` in `js/ai.js`).

## Updating it

Paste `worker.js` into the Worker's code editor in the Cloudflare dashboard and click **Deploy**, or run `npx wrangler deploy` in this folder.

## Verba's tie-break key

The tie-break route needs one secret. In the Cloudflare dashboard, open the Worker, go to **Settings > Variables and Secrets**, and add a **Secret** named `GONKA_KEY`. Never put the key in this repository or in a page.

## Testing

`node test.mjs` runs the logic tests (Node 18 or newer).

When adding an AI provider to `js/ai.js`, add its host and path to `UPSTREAMS` here too, and redeploy.
