import fs from "node:fs";
import path from "node:path";

const DIST = path.resolve("dist/client");
const ASSETS_DIR = path.join(DIST, "assets");

/** @param {string} base e.g. "/repo/" */
function normalizeBase(base) {
  if (!base || base === "") return "/";
  const withSlash = base.startsWith("/") ? base : `/${base}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

function assetHref(base, filename) {
  const b = base.replace(/\/$/, "");
  return `${b}/assets/${filename}`;
}

const base = normalizeBase(process.env.VITE_BASE);

if (!fs.existsSync(ASSETS_DIR)) {
  console.error(`Expected client assets at ${ASSETS_DIR} — run vite build first.`);
  process.exit(1);
}

const files = fs.readdirSync(ASSETS_DIR);
const jsCandidates = files.filter((f) => f.endsWith(".js"));
const cssFiles = files.filter((f) => f.endsWith(".css"));

function isLazyRouteChunk(code) {
  // Code-split route modules from the generator (not the app bootstrap).
  return /export\{[a-zA-Z$][\w$]*\s+as\s+component\}/.test(code);
}

const byContents = jsCandidates.map((f) => [
  f,
  fs.readFileSync(path.join(ASSETS_DIR, f), "utf8"),
]);
const bootstrapCandidates = byContents.filter(([, code]) => !isLazyRouteChunk(code));
const pool = bootstrapCandidates.length ? bootstrapCandidates : byContents;

/** Prefer the largest non-route chunk — stable for this app’s one lazy route bundle. */
const entry = [...pool].sort((a, b) => b[1].length - a[1].length)[0]?.[0];

if (!entry) {
  console.error(`Could not infer client entry from ${path.join(ASSETS_DIR, "*.js")}`);
  process.exit(1);
}

const linkTags = cssFiles.map(
  (c) =>
    `<link rel="stylesheet" crossorigin href="${assetHref(base, c)}" />`,
);
const scriptTag = `<script type="module" crossorigin src="${assetHref(base, entry)}"></script>`;

const html = `<!doctype html>
<html lang="bg">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Малко любовно писмо за нашата тримесечна годишнина." />
    <title>Симона и Огнян — Три месеца</title>
${linkTags.map((l) => `    ${l}`).join("\n")}
  </head>
  <body>
    <div id="root"></div>
${scriptTag ? `    ${scriptTag}\n` : ""}  </body>
</html>
`;

fs.mkdirSync(DIST, { recursive: true });
fs.writeFileSync(path.join(DIST, "index.html"), html.trim() + "\n");
fs.copyFileSync(path.join(DIST, "index.html"), path.join(DIST, "404.html"));

console.info(`Wrote dist/client/index.html + 404.html (entry: assets/${entry}, base: ${base})`);
