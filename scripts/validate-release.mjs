import { gzipSync } from 'node:zlib';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

/**
 * Post-build gate on what `dist/` actually contains.
 *
 * CI builds but never looks at the output, and the audience is on 2G links in
 * Niger: a chunk that quietly doubles is a real regression. This fails on a
 * missing PWA artefact or an oversized asset, and warns past the gzip budget.
 */

const distDirectory = path.resolve('dist');
const warningBytes = Number(process.env.RELEASE_BUNDLE_WARNING_BYTES ?? 300 * 1024);
const criticalBytes = Number(process.env.RELEASE_BUNDLE_CRITICAL_BYTES ?? 2 * 1024 * 1024);
const requiredFiles = ['index.html', 'manifest.webmanifest', 'sw.js'];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const resolved = path.join(directory, entry.name);
      return entry.isDirectory() ? collectFiles(resolved) : [resolved];
    })
  );
  return files.flat();
}

for (const file of requiredFiles) {
  try {
    await stat(path.join(distDirectory, file));
  } catch {
    console.error(`ERREUR CRITIQUE : dist/${file} est absent. Exécutez d'abord npm run build.`);
    process.exitCode = 1;
  }
}

if (process.exitCode) process.exit();

const assets = (await collectFiles(path.join(distDirectory, 'assets'))).filter((file) =>
  /\.(?:js|css|mjs)$/u.test(file)
);
const reports = await Promise.all(
  assets.map(async (file) => {
    const content = await readFile(file);
    return {
      file: path.relative(distDirectory, file),
      rawBytes: content.length,
      gzipBytes: gzipSync(content).length,
    };
  })
);

reports.sort((a, b) => b.gzipBytes - a.gzipBytes);
console.table(
  reports.map((report) => ({
    asset: report.file,
    rawKiB: (report.rawBytes / 1024).toFixed(1),
    gzipKiB: (report.gzipBytes / 1024).toFixed(1),
  }))
);

for (const report of reports) {
  if (report.rawBytes > criticalBytes) {
    console.error(
      `ERREUR CRITIQUE : ${report.file} fait ${(report.rawBytes / 1024 / 1024).toFixed(2)} MiB ` +
        `(limite ${Math.round(criticalBytes / 1024 / 1024)} MiB).`
    );
    process.exitCode = 1;
  } else if (report.gzipBytes > warningBytes) {
    console.warn(
      `AVERTISSEMENT : ${report.file} fait ${(report.gzipBytes / 1024).toFixed(1)} KiB gzip ` +
        `(budget conseillé ${Math.round(warningBytes / 1024)} KiB).`
    );
  }
}

if (!process.exitCode) {
  console.log(`Validation des bundles terminée : ${reports.length} assets contrôlés.`);
}
