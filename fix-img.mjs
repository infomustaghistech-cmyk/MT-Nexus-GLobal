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
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  }
  return results;
}

async function run() {
  const files = await walk(SRC_DIR);

  for (const file of files) {
    let content = await fs.readFile(file, 'utf-8');
    let original = content;

    content = content.replace(/\/ loading="lazy">/g, 'loading="lazy" />');

    if (content !== original) {
      console.log(`Fixed ${file}`);
      await fs.writeFile(file, content, 'utf-8');
    }
  }
}

run();
