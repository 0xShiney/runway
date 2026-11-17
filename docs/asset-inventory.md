# Asset inventory

## Policy

Runway's product footage, photography, fonts and brand downloads are proprietary. This reconstruction **does not redistribute** them. Every visual is either an original generated asset, a licence-compatible substitute, or a vector path recovered from public markup for brand fidelity in a development exercise — and each case is documented below.

## Fonts

| Asset | Origin | Licence | Stored at | Notes |
| --- | --- | --- | --- | --- |
| Inter variable (`inter-var.woff2`) | Google Fonts | SIL OFL 1.1 | `public/assets/fonts/` | Substitutes ABC Normal (300/400/500) |
| Newsreader variable (`newsreader-var.woff2`) | Google Fonts | SIL OFL 1.1 | `public/assets/fonts/` | Substitutes Times Now SemiLight |
| ABC Normal Book/Regular/Neutral (`.woff2`) | runway.com `_next/static/immutable/media/` | Commercial, not licensed for redistribution | **Not copied** | Referenced in docs only |
| Times Now SemiLight (`.otf`) | runway.com | Commercial, not licensed for redistribution | **Not copied** | Referenced in docs only |

## Brand marks

| Asset | Origin | Handling | Attribution |
| --- | --- | --- | --- |
| Runway wordmark | Path data from the public homepage SVG (`viewBox 0 0 84 19`, 7 paths) | Inline React component `src/components/brand/logo.tsx` | Trademark of Runway AI, Inc.; used solely for this independent reconstruction, which is labelled as unofficial in the footer on every page |
| Runway symbol | Original approximation (rounded square + R glyph) | Inline component | Not an official mark; drawn for the brand-guidelines layout demonstration |
| Logo pack `.zip` | `runway.com/assets/Runway-Brand-Guidelines.zip` | **Not downloaded**; linked externally | Official download page |

## Photography, video and product media

| Reference asset class | Reference delivery | Replacement here |
| --- | --- | --- |
| Hero video / stills | Mux (`image.mux.com/<id>/thumbnail.webp`) with autoplay muted loops | Original SVG artwork system (`src/components/marketing/artwork.tsx`) — 8 deterministic palettes (`dawn, ember, ocean, forest, violet, steel, sand, mono`) with gradient meshes, film grain, horizon lines and light blooms |
| Product demo clips | Mux streams inside the app | Same artwork system at 16:9 / 16:10 / 4:3 / 21:9 |
| Customer-story stills | Mux thumbnails | Same artwork system, labelled by client in card copy |
| Research visuals | Mux / static | Same artwork system |
| Careers/office photography | Static imagery | Same artwork system |
| Model previews | Video thumbnails | Not reproduced; models are presented as text chips/cards |

Rationale: stock photography would misrepresent Runway's product, and re-hosting Mux thumbnails would redistribute proprietary media. The artwork is original, vector, and resolution-independent, so no layout depends on a broken or hotlinked asset.

## Icons

| Asset | Licence | Usage |
| --- | --- | --- |
| Lucide React (`lucide-react@0.469`) | ISC | Chevrons, arrows, close, menu, search, check, eye, spinner, globe, shield, upload, copy |

## Screenshots captured for this project

| File | Description |
| --- | --- |
| `docs/screenshots/home-desktop.png` | Homepage at 1440×1000 |
| `docs/screenshots/home-mobile.png` | Homepage at 390×844 |
| `docs/screenshots/product-desktop.png` | Product page at 1440×1000 |
| `docs/screenshots/careers-desktop.png` | Careers page at 1440×1000 |

These are screenshots of **this** reconstruction, not of runway.com.

## Data snapshots

| Data | Source | Retrieved |
| --- | --- | --- |
| Job listings (51 roles, 13 departments, Ashby IDs) | `runway.com/careers` | 2026-11-16 |
| Pricing plans, credits, feature lists, comparison rows | `runway.com/pricing` | 2026-11-16 |
| Research posts and abstracts | `runway.com/research` | 2026-11-16 |
| News items and resource cards | `runway.com` home + `/resources` | 2026-11-16 |
| Model names and vendor models | `runway.com/product`, `/api` | 2026-11-16 |
| Press list and recognition | `runway.com/careers` | 2026-11-16 |

## Attribution statement

This project is an independent front-end reconstruction created for development and evaluation. Runway and the Runway wordmark are trademarks of Runway AI, Inc. This project is not affiliated with, endorsed by, or operated by Runway AI, Inc., and it must not be deployed in a way that implies it is the official service. The disclosure appears in the site footer on every route, on the auth pages, and in every reconstructed legal document.
