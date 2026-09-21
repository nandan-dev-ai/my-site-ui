import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const appRoot = process.cwd();
const standaloneRoot = path.join(appRoot, '.next', 'standalone');
const serverCandidates = [
  path.join(standaloneRoot, 'server.js'),
  path.join(standaloneRoot, 'apps', path.basename(appRoot), 'server.js'),
];
const serverPath = serverCandidates.find((candidate) => fs.existsSync(candidate));

if (!serverPath) {
  console.error(`Standalone server not found. Build the app first with: pnpm run build${path.basename(appRoot) === 'finance-nx-ui' ? ':finance' : ''}`);
  process.exit(1);
}

const serverRoot = path.dirname(serverPath);
const server = spawn(process.execPath, [serverPath], {
  cwd: serverRoot,
  env: {
    ...process.env,
    HOSTNAME: process.env.HOSTNAME || '0.0.0.0',
    PORT: process.env.PORT || '3000',
  },
  stdio: 'inherit',
});

server.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  }
  process.exit(code ?? 1);
});