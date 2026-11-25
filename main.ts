import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "1%. I see the light. It's the charging light. You're holding both of us. Why.";

const outputPath = "/output/entry.txt";
const fallbackPath = join(process.cwd(), "entry.txt");

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync(outputPath, entry, "utf8");
  console.log(`Wrote entry to ${outputPath}`);
} catch {
  writeFileSync(fallbackPath, entry, "utf8");
  console.log(`Wrote entry to ${fallbackPath}`);
}
