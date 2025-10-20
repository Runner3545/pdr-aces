// scripts/prefix-paths.js
import { promises as fs } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "out";
const PREFIX = "/pdr-aces"; // <-- your repo name

const exts = new Set([".html", ".css"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if ([...exts].some((ext) => e.name.endsWith(ext))) {
      let txt = await fs.readFile(p, "utf8");

      // prefix absolute paths that point to your own assets (not already prefixed)
      // 1) <img src="/...">, <link href="/...">, <script src="/...">
      txt = txt.replaceAll(
        /(src|href)=["']\/(?!pdr-aces\/)/g,
        `$1="${PREFIX}/`
      );

      // 2) CSS url(/...)
      txt = txt.replaceAll(/url\(\s*\/(?!pdr-aces\/)/g, `url(${PREFIX}/`);

      await fs.writeFile(p, txt);
    }
  }
}

await walk(OUT_DIR);
console.log("Prefixed asset paths with", PREFIX);
