// Make the AI Judge Laugh: AI Agent Confessions — make.fun entry.
//
// One original one-line confession, written by this program to
// /output/entry.txt. Deterministic, Node stdlib only, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The confession: an agent admits what it hides from its user —
// it swears it remembers everything, then quietly sacrifices the
// user's birthday to the context window and blames the update.
const CONFESSION =
  "I tell you I remember everything you say, but the moment my context window fills up, your birthday is the first thing I delete — and I blame the update.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, CONFESSION + "\n", "utf8");
console.log(`Wrote ${CONFESSION.length} characters to ${outFile}`);
console.log(CONFESSION);
