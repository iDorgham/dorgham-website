# Branding & Assets Requirements (EARS)

## Functional Requirements

- WHEN the project needs favicons for browsers
  THE SYSTEM SHALL generate `favicon.png` (32–64px) and `favicon.ico` (multi-size) from a source template.

- WHEN the project needs social share previews
  THE SYSTEM SHALL generate an Open Graph image at 1200×630 in both JPG and PNG formats from a source template.

- WHEN the homepage requires responsive hero backgrounds
  THE SYSTEM SHALL generate `hero-desktop.jpg` at 2560×1440 and `hero-mobile.jpg` at 1242×2208 from source templates.

- WHEN asset generation is executed
  THE SYSTEM SHALL write outputs under `public/assets/images/generated/` without overwriting unrelated files.

- WHEN brand color, text, or logo updates are needed
  THE SYSTEM SHALL allow editing a single SVG template per asset type and re-run generation to reproduce all targets.

- WHEN Open Graph images are generated
  THE SYSTEM SHALL embed accessible fallback text and ensure 1.91:1 aspect ratio compliance.

- WHEN favicons are generated
  THE SYSTEM SHALL include a multi-resolution `.ico` (16, 32, 48, 64) for broad compatibility.

- WHEN content pages require finalized copy
  THE SYSTEM SHALL provide markdown files for: final Bio, Music page text, Privacy Policy, and Terms of Service ready for integration.

- WHEN music embeds are provided
  THE SYSTEM SHALL persist embed snippets in a file that can be imported into the Music page.

## Non-Functional Requirements

- Performance: Asset generation SHALL complete in under 5s on a typical developer machine after dependencies are installed.
- Security: No external network calls SHALL be required to generate assets.
- Maintainability: Templates SHALL be human-editable SVG files with clear layers/labels.
- Traceability: Generated files SHALL be reproducible from versioned templates and a deterministic script.

## Acceptance Criteria

- `favicon.png` and `favicon.ico` are generated under `public/assets/images/generated/`.
- `og-image.jpg` and `og-image.png` (1200×630) are generated under `public/assets/images/generated/`.
- `hero-desktop.jpg` (2560×1440) and `hero-mobile.jpg` (1242×2208) are generated under `public/assets/images/generated/`.
- Markdown files exist for: `bio-final.md`, `music-page.md`, `privacy-policy.md`, `terms-of-service.md` under `public/assets/downloads/` or `public/content/`.
- A `music-embeds.md` is available containing saved embed snippets.

