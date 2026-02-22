import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const assetsSource = path.join(root, 'public', 'assets'); // اگر داخل public است
// اگر assets مستقیم در ریشه است → تغییر دهید به:
// const assetsSource = path.join(root, 'assets');

function run(command) {
  console.log(`→ ${command}`);
  execSync(command, { stdio: 'inherit' });
}

async function main() {
  try {
    // ۱. پاک کردن dist قبلی (اختیاری اما تمیزتر)
    if (fs.existsSync(distDir)) {
      fs.removeSync(distDir);
    }

    // ۲. اجرای build اصلی vite
    run('npm run build');

    // ۳. کپی کردن assets کنار dist (در ریشه خروجی)
    if (fs.existsSync(assetsSource)) {
      const assetsDest = path.join(distDir, '..', 'assets'); // کنار dist
      fs.ensureDirSync(assetsDest);
      fs.copySync(assetsSource, assetsDest, { overwrite: true });
      console.log(`assets کپی شد به → ${assetsDest}`);
    } else {
      console.warn('پوشه assets پیدا نشد!');
    }

    // ۴. (اختیاری) ساخت tgz
    // اگر می‌خواهید اینجا npm pack اجرا شود:
    run('npm pack');

    // یا اگر می‌خواهید فایل tgz را به dist منتقل کنید:
    // run('mv rc-001-*.tgz dist || move rc-001-*.tgz dist');

    console.log('ساخت پکیج با موفقیت انجام شد.');
  } catch (err) {
    console.error('خطا در ساخت پکیج:', err);
    process.exit(1);
  }
}

main();