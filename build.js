const fs = require("node:fs");
const path = require("node:path");

const files = ["index.html", "style.css", "script.js"];
const outputDir = path.join(__dirname, "dist");

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

for (const file of files) {
  const source = path.join(__dirname, file);

  if (!fs.existsSync(source)) {
    throw new Error(`Missing required file: ${file}`);
  }

  fs.copyFileSync(source, path.join(outputDir, file));
}

console.log("Build completed successfully.");