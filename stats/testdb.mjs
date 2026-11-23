/* SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2026 janavduraikkannan and Linguae contributors */
// Test helper: a D1-shaped wrapper around node:sqlite, so tests run the real SQL.
import { DatabaseSync } from "node:sqlite";
import { readFileSync } from "node:fs";
export function makeDb() {
  const raw = new DatabaseSync(":memory:");
  raw.exec(readFileSync(new URL("./schema.sql", import.meta.url), "utf8"));
  const stmt = (sql, args = []) => ({
    bind: (...a) => stmt(sql, a),
    run: async () => { const r = raw.prepare(sql).run(...args); return { success: true, meta: { changes: Number(r.changes) } }; },
    all: async () => ({ results: raw.prepare(sql).all(...args).map(r => ({ ...r })) }),
    first: async () => { const r = raw.prepare(sql).get(...args); return r ? { ...r } : null; },
  });
  return { prepare: sql => stmt(sql), batch: async list => { const out = []; for (const s of list) out.push(await s.run()); return out; }, raw };
}
