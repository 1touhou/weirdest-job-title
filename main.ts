// Weirdest Job Title entry — variant 2.
// Writes one job title, and nothing else, to entry.txt.
//
// The title: a real-sounding night-shift testing job, made absurd by
// where it happens — a foghorn is for ships in fog, and a lighthouse
// in the desert has no ships, no fog, and no sea to warn anyone about.

const TITLE = "Night-Shift Foghorn Tester, Desert Lighthouse";

// Output directory: $MAKEFUN_OUTPUT_DIR, defaulting to /output.
// A blank value must fall back to the default, not to an empty path.
const rawDir = process.env.MAKEFUN_OUTPUT_DIR;
const outputDir = rawDir && rawDir.trim() !== "" ? rawDir : "/output";

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Gate: the entry must be 1–60 characters, not only whitespace.
// Fail loudly instead of writing an entry the scorer would reject.
if (TITLE.length < 1 || TITLE.length > 60 || TITLE.trim() === "") {
  console.error(
    `entry title must be 1-60 characters, got ${TITLE.length}: ${JSON.stringify(TITLE)}`,
  );
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TITLE, "utf8");
