// Weirdest Job Title: Blind Judge Showdown
// make.fun competition u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922
//
// Writes exactly one job title (60 characters at most) to /output/entry.txt.
// Deterministic: no randomness, no network, no dependencies, Node 22 stdlib only.
//
// The title: a real-sounding job with one hilariously specific twist —
// a penguin counter posted somewhere penguins very much do not live.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// REVISED title (45 characters): "Sahara" names a specific desert, so the
// contradiction lands harder and faster than the generic "Desert", and
// "Lead" reads punchier than "Senior" at a glance. One gloriously odd
// twist on a real-sounding job: counting penguins where there are none.
const TITLE = "Lead Penguin Counter, Sahara Research Station";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TITLE, "utf8");
