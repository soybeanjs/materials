import { exec } from 'child_process';

function execCommand() {
  exec('pnpm lint && pnpm format ');
}

execCommand();
