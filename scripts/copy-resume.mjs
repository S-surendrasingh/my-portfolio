import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(
  root,
  "resume",
  "Surendra_Rajput_Senior_Full_Stack_Engineer_Resume.pdf"
);
const dest = path.join(root, "public", "resume.pdf");

if (!fs.existsSync(source)) {
  console.error(`Resume source not found: ${source}`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(source, dest);
console.log(`Copied resume → ${dest}`);
