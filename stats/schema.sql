-- SPDX-License-Identifier: AGPL-3.0-or-later
-- Copyright (C) 2026 janavduraikkannan and Linguae contributors
-- One row per person, per site, per UTC day. vid is a salted hash, never the raw browser ID.
CREATE TABLE IF NOT EXISTS hits (
  day  TEXT NOT NULL,
  site TEXT NOT NULL,
  vid  TEXT NOT NULL,
  PRIMARY KEY (day, site, vid)
) WITHOUT ROWID;
CREATE INDEX IF NOT EXISTS hits_vid ON hits (vid);

-- The permanent log of finished periods. period: day | week | total. scope: all | a site name.
CREATE TABLE IF NOT EXISTS log (
  period TEXT NOT NULL,
  start  TEXT NOT NULL,
  scope  TEXT NOT NULL,
  people INTEGER NOT NULL,
  PRIMARY KEY (period, start, scope)
) WITHOUT ROWID;
