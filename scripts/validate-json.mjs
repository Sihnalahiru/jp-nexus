import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredJson = [
  "data/book.json",
  "schema/master.schema.json"
];

let failed = false;

for (const relativePath of requiredJson) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    console.error(`MISSING: ${relativePath}`);
    failed = true;
    continue;
  }

  try {
    JSON.parse(fs.readFileSync(absolutePath, "utf8"));
    console.log(`VALID: ${relativePath}`);
  } catch (error) {
    console.error(`INVALID: ${relativePath}: ${error.message}`);
    failed = true;
  }
}

const lessonsDir = path.join(root, "data", "lessons");
if (fs.existsSync(lessonsDir)) {
  for (const file of fs.readdirSync(lessonsDir).filter((name) => name.endsWith(".json"))) {
    const fullPath = path.join(lessonsDir, file);
    try {
      JSON.parse(fs.readFileSync(fullPath, "utf8"));
      console.log(`VALID: data/lessons/${file}`);
    } catch (error) {
      console.error(`INVALID: data/lessons/${file}: ${error.message}`);
      failed = true;
    }
  }
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log("JSON validation passed.");
}
