// Runs after `vite build`. Renders the React app to static HTML and writes it into dist/index.html, so crawlers that
// don't run JavaScript (most AI crawlers) can read "Who is Ginger-Eke Chienyegom?", the services and the store link.
// The browser still loads the normal app, which replaces this HTML on load, so nothing changes for visitors.
//
// This step is deliberately fail-safe: if anything goes wrong, it warns and leaves dist/ exactly as `vite build` made it,
// so a prerender problem can never break a deploy.
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const out = path.join(root, 'dist-server');
const skip = (why) => { console.warn(`[prerender] skipped: ${why}. Deploying the normal client-rendered build.`); process.exit(0); };

try {
  const build = spawnSync(process.execPath, [path.join(root, 'node_modules', 'vite', 'bin', 'vite.js'), 'build', '--config', 'vite.ssr.config.ts', '--ssr', 'src/entry-server.tsx', '--outDir', 'dist-server', '--logLevel', 'warn'], { cwd: root, stdio: 'inherit' });
  if (build.status !== 0) skip('server build failed');

  const entry = ['entry-server.js', 'entry-server.mjs'].map((f) => path.join(out, f)).find(existsSync);
  if (!entry) skip('server bundle not found');

  const { render } = await import(pathToFileURL(entry).href);
  let html = render();
  html = html.replace(/<n8n-demo[\s\S]*?<\/n8n-demo>/g, ''); // huge embedded workflow JSON; not useful as page text

  if (html.length < 2000 || !html.includes('Ginger-Eke Chienyegom')) skip('rendered HTML looks incomplete');

  const indexPath = path.join(dist, 'index.html');
  const index = readFileSync(indexPath, 'utf8');
  if (!index.includes('<div id="root"></div>')) skip('root element not found in dist/index.html');
  writeFileSync(indexPath, index.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
  console.log(`[prerender] wrote ${(html.length / 1024).toFixed(0)} KB of page HTML into dist/index.html`);
} catch (e) {
  skip(String(e?.message ?? e).split('\n')[0]);
} finally {
  rmSync(out, { recursive: true, force: true });
}
