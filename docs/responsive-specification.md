# Responsive specification

## Breakpoints used

| Name | Width | Source |
| --- | --- | --- |
| `sm` | 640px | Tailwind default; mobile nav becomes full header with Login/Try CTAs |
| `app-banner` | 640px | Custom token matching the reference's `app-banner` variant (promo bar visibility) |
| `md` | 768px | Two-column section splits, tablet hero height |
| `lg` | 1024px | Desktop navigation appears; 2–3 column grids; sticky TOC |
| `xl` | 1280px | Enterprise Sales link appears; 4-column grids; 8-column footer |
| `min-[1440px]` | 1440px | Nav item padding/type increase (reference behaviour) |

Tested viewports: 1440×1000, 1280×900, 1024×768, 768×1024, 390×844, 360×800.

## Global chrome

- **Promo bar**: hidden below 640px (matches reference `hidden app-banner:block`); at ≥640px it is 33px tall, text truncates gracefully, CTA "Contact sales" and dismiss button right-aligned.
- **Header**: 64px tall. Logo left; nav centre only ≥1024px; right side shows Login + Try Runway from 640px and Enterprise Sales from 1280px. Below 1024px a hamburger replaces the nav.
- **Mobile menu**: fixed panel from 64px (97px when the promo bar is visible) to the viewport bottom, scrolls independently, locks body scroll, closes on navigation/Escape.
- **Mega-menu**: only ≥1024px; three-column layout (two link columns + 320px featured card). Hidden entirely on mobile in favour of accordions.
- **Footer**: 2 columns at 360px, 3 at 640px, 4 at 1024px, 8 at 1280px. Legal row wraps into multiple lines; the language indicator drops to its own line.

## Page-level behaviour

| Page | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Home | 21:9 hero, 3-up platform cards, 5-up capability columns | 2-up cards, capability columns wrap 2/3 | Full-bleed hero at 90vh (max 660px), 1-up cards, tab labels scroll horizontally |
| Product | Hero 72vh; 4-up tool cards; 4-up model chips; two-column edit section | 2-up cards; chips 3-up | Hero stacked, cards 1-up, before/after slider keeps 3:2 frame, chips wrap |
| Pricing | 4-up plan grid; comparison table full width | 2-up plans | 1-up plans, table scrolls horizontally with min-width 720px |
| Enterprise | Split hero, 3-up value props, 2-up research cards, form beside copy | 2-up cards, form below copy | Form single column, all fields stack |
| Careers | Job rows title left / apply right; benefits two-column | Benefits stack | Job rows stack with Apply button left-aligned; department select full width |
| Safety | 4-up safeguard columns per phase | 2-up | 1-up |
| Research | Paper rows with 160px date column | two columns | single column, paper meta above abstract |
| News | 3-up cards | 2-up | 1-up |
| Legal | 240px sticky TOC + 72ch content | TOC above content (not sticky) | TOC above content, anchors scroll with 7rem offset |
| Auth | Split screen (form left, artwork right) | Artwork hidden | Single column, demo notice at top |
| Brand guidelines | Don'ts 3-up with visual examples | 2-up | 1-up, examples scale down |
| Verify credentials | Centered 3xl dropzone | full width | full width, reduced padding |

## Media rules

- Artwork is SVG with `preserveAspectRatio="xMidYMid slice"`; containers carry explicit `aspect-ratio` so layout never shifts.
- Hero media uses `min-h-[500px]` at mobile and `aspect-[21/9]` at ≥1024px, capped at 660px on mobile.
- No horizontal page overflow: verified programmatically for every route at desktop and mobile (overflow ≤ 2px tolerance).
- Tables that cannot fit are wrapped in `overflow-x-auto` with a `min-w-*` so the page itself never scrolls sideways.

## Typography behaviour

Fluid display sizes use the reference clamp formulas, so the H1 ranges from 36px at 360px width to 56px at 1440px (`rw-display-l`), and up to 80px for `rw-display-xl`. Body copy stays 14–16px. Legal content caps at 72ch on every viewport.

## Verified responsive gaps

- The mobile menu has no transition (opens instantly) — acceptable but differs from the reference's taller animation.
- Horizontal model/tool chip rows scroll on very small screens rather than wrapping in all cases.
- `prefers-reduced-motion` is honoured globally; no parallax or scroll-jacking exists to disable.
