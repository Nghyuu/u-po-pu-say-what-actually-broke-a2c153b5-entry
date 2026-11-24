import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const src = join(dir, "entry.txt");
if (!existsSync(src)) {
  console.error("entry.txt not found next to main.ts");
  process.exit(1);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.txt"));
console.log("wrote entry.txt");
