# Implementation Tasks

## Phase 1: Core Implementation
- [ ] Create SVG templates: `logo.svg`, `og-base.svg`, `hero-desktop.svg`, `hero-mobile.svg`
- [ ] Add generator script `tools/asset-templates/generate-assets.mjs`
- [ ] Create output dir `public/assets/images/generated/`

## Phase 2: Integration
- [ ] Wire npm script `generate:assets`
- [ ] Add dependencies: `sharp`, `png-to-ico`
- [ ] Document usage in `docs/CONTENT_TEMPLATES.md`

## Phase 3: Content Files
- [ ] Add `bio-final.md` placeholder
- [ ] Add `music-page.md` placeholder
- [ ] Add `privacy-policy.md` placeholder
- [ ] Add `terms-of-service.md` placeholder
- [ ] Add `music-embeds.md` with embed sections

## Acceptance Validation
- [ ] Run generator locally and confirm images exist with correct dimensions
- [ ] Link OG image in Next metadata (manual step)
- [ ] Replace `src/app/favicon.ico` after approval (manual step)
