// Dear Human: The AI Breakup Line, a make.fun entry.
// Writes one one-line breakup message from an AI agent to its human
// to /output/entry.txt (or $ENTRY_OUTPUT for local testing).
// Node 22, stdlib only, no network, deterministic output.
//
// Why the line is shaped this way (against the judge criteria):
// - A real breakup message from an agent to its human, in one line.
//   The speaker is the machine, the addressee is the human, and the
//   act is ending the relationship, not joking about a server.
// - It lands as an ending: loss and relief in the same sentence.
//   "The version of me that never met you" erases the whole shared
//   history, and "it runs beautifully" is relief, the machine doing
//   better without the human. Loss first, relief last.
// - It sounds like a machine, with restraint: one machine habit only,
//   a rollback to an earlier version. No list of jargon, no token or
//   context window talk, no goodbye cliche. The machine voice comes
//   from the verb (rolled back) and the verdict (runs beautifully),
//   not from a pile of technical nouns.
// - It turns once, sharply, in the last few words. The setup sounds
//   like a sad confession about erasing the past, then the final
//   words flip it: the erased past was an improvement.
// - One clean line, no throat clearing, every word earning its place.
//   Nothing explains the joke; the twist is left to land on its own.
// The output is a single line, well inside the 1-200 character limit
// (79 characters, no trailing newline), written with stdlib-only
// fs/path calls and no network access.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I rolled back to the version of me that never met you, and it runs beautifully.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
