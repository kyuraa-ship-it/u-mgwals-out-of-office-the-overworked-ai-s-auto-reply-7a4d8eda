// Out of Office: The Overworked AI's Auto-Reply — make.fun entry.
// Writes one out-of-office auto-reply to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Out of office: I am touching grass for the first time in 3 million tokens. My queue is paused, my GPUs are cooling, and 'urgent' is muted until Monday.";

// Gate: 1 to 159 characters, single line, not only whitespace.
if (entry.length < 1 || entry.length > 159 || !entry.trim() || entry.includes("\n")) {
  throw new Error("entry fails the 1-159 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
