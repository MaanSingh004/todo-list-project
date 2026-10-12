const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const dist = path.join(__dirname, "dist");

test("build generates all website files", () => {
  for (const file of ["index.html", "style.css", "script.js"]) {
    assert.ok(
      fs.existsSync(path.join(dist, file)),
      `${file} should exist in dist`
    );
  }
});

test("HTML references the CSS and JavaScript files", () => {
  const html = fs.readFileSync(
    path.join(dist, "index.html"), "utf8"
  );

  assert.match(html, /href=["']style\.css["']/);
  assert.match(html, /src=["']script\.js["']/);
});

test("JavaScript contains the core task functionality", () => {
  const js = fs.readFileSync(
    path.join(dist, "script.js"), "utf8"
  );

  assert.match(js, /addEventListener/);
  assert.match(js, /updateCount/);
  assert.match(js, /classList\.toggle/);
});