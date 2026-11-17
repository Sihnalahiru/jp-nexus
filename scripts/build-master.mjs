import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dataDir = path.join(root, "data");
const lessonsDir = path.join(dataDir, "lessons");
const outputDir = path.join(root, "dist");

const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const book = readJson(path.join(dataDir, "book.json"));

const lessons = fs.existsSync(lessonsDir)
  ? fs.readdirSync(lessonsDir)
      .filter((name) => /^lesson-[0-9]{2}\.json$/.test(name))
      .sort()
      .map((name) => readJson(path.join(lessonsDir, name)))
  : [];

const master = {
  schema_version: "1.0.0",
  project_id: "jp-nexus",
  book,
  lessons,
  grammar: [],
  vocabulary: [],
  conversations: [],
  listening: [],
  reading: [],
  exercises: [],
  answer_keys: [],
  assets: [],
  build_metadata: {
    generated_at: new Date().toISOString(),
    lesson_records_included: lessons.length,
    completion_status: book.build_status
  }
};

fs.mkdirSync(outputDir, { recursive: true });
const outputPath = path.join(outputDir, "irodori-starter-a1-master.json");
fs.writeFileSync(outputPath, JSON.stringify(master, null, 2) + "\n", "utf8");
console.log(`Built ${path.relative(root, outputPath)} with ${lessons.length} lesson records.`);
