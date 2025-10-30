# Branding & Assets Design

## Architecture

- Source templates: Editable SVGs stored in `tools/asset-templates/templates/`.
- Generator script: Node ESM script `tools/asset-templates/generate-assets.mjs` using `sharp` and `png-to-ico`.
- Output directory: `public/assets/images/generated/`.
- Invocation: `npm run generate:assets` from `dorgham-website/`.
- Content files: Markdown under `public/assets/downloads/` plus optional `public/content/` alias.

## Processing Pipeline

1. Load SVG template via Sharp
2. Resize to target dimensions
3. Export PNG/JPG as required
4. Combine PNG sizes (16,32,48,64) to `.ico` via `png-to-ico`

## Templates

- `logo.svg`: vector mark for favicon source
- `og-base.svg`: 1200×630 layout with background gradient and text placeholders
- `hero-desktop.svg`: 2560×1440 layout with gradient/noise overlays
- `hero-mobile.svg`: 1242×2208 layout optimized for mobile aspect

## File Outputs

- Favicons: `favicon-32.png`, `favicon-64.png`, `favicon.png` (64), `favicon.ico`
- Open Graph: `og-image.png`, `og-image.jpg` (1200×630)
- Hero: `hero-desktop.jpg` (2560×1440), `hero-mobile.jpg` (1242×2208)

## Integration Notes

- Keep existing `src/app/favicon.ico` for now; update to generated one when approved.
- Use `next.config.ts` or metadata configuration to point to `og-image.jpg`.
- Content markdown will be referenced by page components during content migration.

## Security & Compliance

- No remote fonts; use system-safe fonts or convert text to paths in SVG.
- Ensure OG image contains accessible text layers for screen readers (alt text via metadata when used).
