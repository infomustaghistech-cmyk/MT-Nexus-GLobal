import fs from 'fs/promises';
import path from 'path';

const SRC_DIR = './src';

async function walk(dir) {
  let results = [];
  const list = await fs.readdir(dir);
  for (let file of list) {
    file = path.join(dir, file);
    const stat = await fs.stat(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(await walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.html')) {
      results.push(file);
    }
  }
  return results;
}

async function run() {
  const files = await walk(SRC_DIR);
  // Also include index.html
  files.push('index.html');

  for (const file of files) {
    let content = await fs.readFile(file, 'utf-8');
    let original = content;

    content = content.replace(/15254965_1920_1080_24fps-optimized\.mp4/g, '15254965_1920_1080_24fps-optimized-v2.mp4');
    content = content.replace(/3141208-uhd_3840_2160_25fps-optimized\.mp4/g, '3141208-uhd_3840_2160_25fps-optimized-v2.mp4');

    if (content !== original) {
      console.log(`Updated ${file}`);
      await fs.writeFile(file, content, 'utf-8');
    }
  }
}

run();
