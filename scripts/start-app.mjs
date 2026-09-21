import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const appName = process.argv[2];
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const appPaths = {
  web: 'apps/web',
  finance: 'apps/finance-nx-ui',
  'finance-nx-ui': 'apps/finance-nx-ui',
};

if (!appName || !appPaths[appName]) {
  console.error('Usage: pnpm start <app-name>');
  console.error('Available apps: web, finance, finance-nx-ui');
  process.exit(1);
}

const child = spawn(process.execPath, [path.join(root, 'scripts/start-next.mjs')], {
  cwd: path.join(root, appPaths[appName]),
  stdio: 'inherit',
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  }
  process.exit(code ?? 1);
});