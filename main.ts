import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Deterministic by construction: entry.png is a fixed asset and is copied
// byte-for-byte, so two runs always produce identical output.
const root = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(root, "entry.png"), join(outDir, "entry.png"));
