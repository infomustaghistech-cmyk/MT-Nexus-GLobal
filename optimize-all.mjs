import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const dirsToProcess = ['./public', './src/assets'];

async function processImages(dir) {
  try {
    const files = await fs.readdir(dir);
    for (const file of files) {
      if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.avif')) {
        const inputPath = path.join(dir, file);
        const ext = path.extname(file);
        const base = path.basename(file, ext);
        const outputPath = path.join(dir, `${base}.webp`);
        
        // Skip if webp already exists
        try {
          await fs.access(outputPath);
          console.log(`Skipping image ${file}, webp already exists.`);
          continue;
        } catch (e) {
          // Doesn't exist, proceed
        }

        console.log(`Converting ${file} to WebP...`);
        try {
          await sharp(inputPath)
            .resize({ width: 1920, withoutEnlargement: true }) // Max width 1920
            .webp({ quality: 80 })
            .toFile(outputPath);
          console.log(`Done image: ${outputPath}`);
        } catch(err) {
          console.error(`Error converting ${file}:`, err);
        }
      }
    }
  } catch (err) {
    if (err.code !== 'ENOENT') console.error(err);
  }
}

async function processVideos(dir) {
  try {
    const files = await fs.readdir(dir);
    for (const file of files) {
      if (file.endsWith('.mp4') || file.endsWith('.mkv')) {
        const inputPath = path.join(dir, file);
        const ext = path.extname(file);
        const base = path.basename(file, ext);
        // Avoid re-compressing already compressed videos
        if (base.endsWith('-optimized')) continue;

        const outputPath = path.join(dir, `${base}-optimized.mp4`);
        const posterPath = path.join(dir, `${base}-poster.webp`);

        // Skip if optimized video already exists
        try {
          await fs.access(outputPath);
          console.log(`Skipping video ${file}, optimized version already exists.`);
          continue;
        } catch (e) {
          // Doesn't exist, proceed
        }

        console.log(`Processing video ${file}...`);
        
        // 1. Extract poster
        await new Promise((resolve, reject) => {
          ffmpeg(inputPath)
            .screenshots({
              timestamps: ['00:00:00.000'],
              filename: `${base}-poster.png`,
              folder: dir
            })
            .on('end', async () => {
              // Convert poster to webp
              try {
                await sharp(path.join(dir, `${base}-poster.png`))
                  .webp({ quality: 80 })
                  .toFile(posterPath);
                await fs.unlink(path.join(dir, `${base}-poster.png`)); // remove temp png
                console.log(`Poster generated: ${posterPath}`);
                resolve();
              } catch(e) {
                console.error("Error generating poster", e);
                resolve();
              }
            })
            .on('error', (err) => {
              console.error(`Error extracting poster for ${file}:`, err);
              resolve(); // resolve anyway to continue
            });
        });

        // 2. Compress video
        await new Promise((resolve, reject) => {
          ffmpeg(inputPath)
            .outputOptions([
              '-vf scale=-2:1080', // Scale to 1080p, preserving aspect ratio
              '-c:v libx264',
              '-crf 28',          // Constant Rate Factor (higher = more compression, lower quality)
              '-preset fast',     // Encoding speed
              '-c:a aac',
              '-b:a 128k',
              '-movflags +faststart' // Optimize for web playback
            ])
            .save(outputPath)
            .on('end', () => {
              console.log(`Optimized video generated: ${outputPath}`);
              resolve();
            })
            .on('error', (err) => {
              console.error(`Error compressing video ${file}:`, err);
              resolve();
            });
        });
      }
    }
  } catch (err) {
    if (err.code !== 'ENOENT') console.error(err);
  }
}

async function run() {
  for (const dir of dirsToProcess) {
    await processImages(dir);
    await processVideos(dir);
  }
  console.log("All optimizations finished.");
}

run();
