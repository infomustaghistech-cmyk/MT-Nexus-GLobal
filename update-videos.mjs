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

    // Check if it imports 15254965 video
    if (content.includes('15254965_1920_1080_24fps-optimized.mp4')) {
      // Add the poster import if not present
      if (!content.includes('15254965_1920_1080_24fps-poster.webp')) {
        content = content.replace(
          /(import .* from .*15254965_1920_1080_24fps-optimized\.mp4['"];?)/,
          "$1\nimport videoPoster from '@/assets/15254965_1920_1080_24fps-poster.webp';"
        );
      }

      // Add poster prop to LazyVideo
      // Find <LazyVideo src={videoBg} ... /> or <LazyVideo src={techVideoBg} ... />
      // We will just blindly add poster={videoPoster} if LazyVideo is used
      content = content.replace(/<LazyVideo([^>]*?)src=\{([a-zA-Z0-9]+)\}([^>]*?)>/g, function(match, p1, p2, p3) {
        if (match.includes('poster=')) return match;
        // If the variable is heroVideo, we handled it manually in Hero.jsx, skip
        if (p2 === 'heroVideo') return match;
        return `<LazyVideo${p1}src={${p2}} poster={videoPoster}${p3}>`;
      });
    }

    // Add loading="lazy" to <img> tags if missing
    content = content.replace(/<img([^>]*?)>/g, function(match, p1) {
      if (match.includes('loading=')) return match;
      return `<img${p1} loading="lazy">`;
    });

    if (content !== original) {
      console.log(`Updated video/images in ${file}`);
      await fs.writeFile(file, content, 'utf-8');
    }
  }
}

run();
