#!/usr/bin/env node
import { promises as fs } from "fs";
import path from "path";
import readline from "readline";
import { createReadStream } from "fs";

const SESSION_JSONL =
  "C:/Users/User/.claude/projects/C--Users-User-Documents-GitHub/8b8c9bcc-ec78-454b-8c67-dba837f7602a.jsonl";

const OUT_DIR = path.resolve(
  "C:/Users/User/Documents/GitHub/code-site-frontend/public/images/sitesForPage/medicine"
);

await fs.mkdir(OUT_DIR, { recursive: true });

const stream = createReadStream(SESSION_JSONL, { encoding: "utf8" });
const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });

const userImages = [];
let lineIdx = 0;

for await (const line of rl) {
  lineIdx++;
  if (!line.trim()) continue;
  let entry;
  try {
    entry = JSON.parse(line);
  } catch {
    continue;
  }
  const msg = entry.message ?? entry;
  if (!msg || msg.role !== "user") continue;
  const content = msg.content;
  if (!Array.isArray(content)) continue;
  for (const block of content) {
    if (
      block?.type === "image" &&
      block.source?.type === "base64" &&
      typeof block.source.data === "string"
    ) {
      userImages.push({
        line: lineIdx,
        mediaType: block.source.media_type ?? "image/png",
        data: block.source.data,
        size: block.source.data.length,
      });
    }
  }
}

console.log(`Found ${userImages.length} user-uploaded image(s):`);
for (let i = 0; i < userImages.length; i++) {
  const img = userImages[i];
  console.log(
    `  [${i}] line=${img.line} type=${img.mediaType} base64Bytes=${img.size}`
  );
}

const labels = process.argv.slice(2);
if (labels.length === 0) {
  console.log(
    "\nNo output names provided. To save: node extract-chat-images.mjs name1.png name2.png ..."
  );
  process.exit(0);
}

if (labels.length !== userImages.length) {
  console.error(
    `\nERROR: provided ${labels.length} names but found ${userImages.length} images. Aborting.`
  );
  process.exit(1);
}

for (let i = 0; i < userImages.length; i++) {
  const img = userImages[i];
  const ext = (img.mediaType.split("/")[1] || "png").replace("jpeg", "jpg");
  const requested = labels[i];
  const finalName = path.extname(requested)
    ? requested
    : `${requested}.${ext}`;
  const outPath = path.join(OUT_DIR, finalName);
  await fs.writeFile(outPath, Buffer.from(img.data, "base64"));
  console.log(`  saved ${outPath}`);
}
