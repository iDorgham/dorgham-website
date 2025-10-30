import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, '..', '..');
const templatesDir = resolve(root, 'tools', 'asset-templates', 'templates');
const outDir = resolve(root, 'public', 'assets', 'images', 'generated');

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function generateFavicons() {
  const svgPath = resolve(templatesDir, 'logo.svg');
  const sizes = [16, 32, 48, 64];
  const pngBuffers = [];

  for (const size of sizes) {
    const buf = await sharp(svgPath).resize(size, size).png().toBuffer();
    pngBuffers.push(buf);
    const outPng = resolve(outDir, `favicon-${size}.png`);
    await writeFile(outPng, buf);
  }

  // Default favicon.png as 64px
  await writeFile(resolve(outDir, 'favicon.png'), pngBuffers[pngBuffers.length - 1]);

  const icoBuffer = await pngToIco(pngBuffers);
  await writeFile(resolve(outDir, 'favicon.ico'), icoBuffer);
}

async function generateOG() {
  const svgPath = resolve(templatesDir, 'og-base.svg');
  const width = 1200;
  const height = 630;
  const png = await sharp(svgPath).resize(width, height).png({ quality: 90 }).toBuffer();
  const jpg = await sharp(png).jpeg({ quality: 85 }).toBuffer();
  await writeFile(resolve(outDir, 'og-image.png'), png);
  await writeFile(resolve(outDir, 'og-image.jpg'), jpg);
}

async function generateHeros() {
  const desktopSvg = resolve(templatesDir, 'hero-desktop.svg');
  const mobileSvg = resolve(templatesDir, 'hero-mobile.svg');

  const desktop = await sharp(desktopSvg).resize(2560, 1440).jpeg({ quality: 85 }).toBuffer();
  const mobile = await sharp(mobileSvg).resize(1242, 2208).jpeg({ quality: 85 }).toBuffer();

  await writeFile(resolve(outDir, 'hero-desktop.jpg'), desktop);
  await writeFile(resolve(outDir, 'hero-mobile.jpg'), mobile);
}

async function main() {
  await ensureDir(outDir);
  await generateFavicons();
  await generateOG();
  await generateHeros();
  // eslint-disable-next-line no-console
  console.log('Assets generated in', outDir);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
