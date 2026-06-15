/**
 * Generates the public, sanitized resume PDF and the social OG image using the
 * locally installed Chrome in headless mode. No external dependencies.
 *
 *   node scripts/build-resume-pdf.mjs
 *
 * Outputs: public/resume.pdf, public/og-image.png
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const CHROME_CANDIDATES = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
];

const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error(
    "No Chrome/Chromium found. Install Chrome or generate public/resume.pdf manually.",
  );
  process.exit(1);
}

function run(args) {
  execFileSync(chrome, args, { stdio: "inherit" });
}

// 1) Resume → PDF
const resumeHtml = pathToFileURL(resolve(__dirname, "resume-template.html")).href;
const resumeOut = resolve(root, "public/resume.pdf");
run([
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--no-margins",
  `--print-to-pdf=${resumeOut}`,
  resumeHtml,
]);
console.log("✓ wrote public/resume.pdf");

// 2) OG image → PNG (1200x630)
const ogHtml = pathToFileURL(resolve(__dirname, "og-template.html")).href;
const ogOut = resolve(root, "public/og-image.png");
run([
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--default-background-color=00000000",
  "--force-device-scale-factor=1",
  "--window-size=1200,630",
  `--screenshot=${ogOut}`,
  ogHtml,
]);
console.log("✓ wrote public/og-image.png");

// 3) App icons → PNG (PWA manifest + Apple touch icon)
const iconHtml = pathToFileURL(resolve(__dirname, "icon-template.html")).href;
const icons = [
  { file: "icon-192.png", size: 192 },
  { file: "icon-512.png", size: 512 },
  { file: "icon-512-maskable.png", size: 512 },
  { file: "apple-touch-icon.png", size: 180 },
];
for (const { file, size } of icons) {
  run([
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    `--window-size=${size},${size}`,
    `--screenshot=${resolve(root, "public", file)}`,
    iconHtml,
  ]);
  console.log(`✓ wrote public/${file}`);
}
