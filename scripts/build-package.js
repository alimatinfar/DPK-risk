import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const assetsSource = path.join(root, 'public', 'assets');

function run(command) {
  console.log(`→ ${command}`);
  execSync(command, { stdio: 'inherit' });
}

async function main() {
  try {
    if (fs.existsSync(distDir)) {
      fs.removeSync(distDir);
    }

    run('npm run build');

    if (fs.existsSync(assetsSource)) {
      const assetsDest = path.join(distDir, '..', 'assets');
      fs.ensureDirSync(assetsDest);
      fs.copySync(assetsSource, assetsDest, { overwrite: true });
      console.log(`assets copied to → ${assetsDest}`);
    } else {
      console.warn('Assets folder not found!🙄');
    }
    run('npm pack');
    run('mv rc-001-*.tgz dist || move rc-001-*.tgz dist');

    console.log('Package creation was successful.🤩');
  } catch (err) {
    console.error('Error building package:😖', err);
    process.exit(1);
  }
}

main();