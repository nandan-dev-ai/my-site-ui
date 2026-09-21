import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const appPaths = {
  web: 'apps/web',
  finance: 'apps/finance-nx-ui',
  'finance-nx-ui': 'apps/finance-nx-ui',
};
const appName = process.argv[2];
const command = process.argv[3];
const appRoot = path.join(root, appPaths[appName]);

if (!appName || !appPaths[appName] || !command) {
  console.error('Usage: pnpm run <dev|build>[:finance]');
  process.exit(1);
}

const pnpmCommand = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
const child = spawn(pnpmCommand, ['exec', 'next', command], {
  cwd: path.join(root, appPaths[appName]),
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal);

  if (code === 0 && command === 'build') {
    const standaloneRoot = path.join(appRoot, '.next', 'standalone');
    const standaloneAppRoot = fs.existsSync(path.join(standaloneRoot, 'apps', path.basename(appRoot)))
      ? path.join(standaloneRoot, 'apps', path.basename(appRoot))
      : standaloneRoot;

    fs.cpSync(path.join(appRoot, 'public'), path.join(standaloneAppRoot, 'public'), { recursive: true });
    fs.cpSync(path.join(appRoot, '.next', 'static'), path.join(standaloneAppRoot, '.next', 'static'), { recursive: true });
  }

  process.exit(code ?? 1);
});