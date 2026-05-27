import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = path.join(process.cwd(), "public/images/trustClients");
const outputDir = path.join(sourceDir, "normalized");
const outputWidth = 320;
const outputHeight = 160;
const logoMaxWidth = 292;
const logoMaxHeight = 118;

const files = await fs.readdir(sourceDir);
await fs.mkdir(outputDir, { recursive: true });

const slugify = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getContentBox = async (input) => {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let left = info.width;
  let top = info.height;
  let right = -1;
  let bottom = -1;

  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const index = (y * info.width + x) * 4;
      const red = data[index];
      const green = data[index + 1];
      const blue = data[index + 2];
      const alpha = data[index + 3];
      const isVisible = alpha > 12;
      const isWhiteSpace = red > 246 && green > 246 && blue > 246;

      if (isVisible && !isWhiteSpace) {
        left = Math.min(left, x);
        top = Math.min(top, y);
        right = Math.max(right, x);
        bottom = Math.max(bottom, y);
      }
    }
  }

  if (right < left || bottom < top) {
    return null;
  }

  return {
    left,
    top,
    width: right - left + 1,
    height: bottom - top + 1,
  };
};

for (const file of files) {
  const input = path.join(sourceDir, file);
  const stat = await fs.stat(input);

  if (!stat.isFile() || !/\.(png|jpe?g|webp)$/i.test(file)) {
    continue;
  }

  const output = path.join(outputDir, `${slugify(file)}.webp`);
  const contentBox = await getContentBox(input);

  let pipeline = sharp(input).ensureAlpha();

  if (contentBox) {
    pipeline = pipeline.extract(contentBox);
  }

  const logo = await pipeline
    .resize({
      width: logoMaxWidth,
      height: logoMaxHeight,
      fit: "inside",
    })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: outputWidth,
      height: outputHeight,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .webp({ quality: 88 })
    .toFile(output);

  console.log(`${file} -> ${path.relative(process.cwd(), output)}`);
}
