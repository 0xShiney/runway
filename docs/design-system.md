# Design system

All values below were measured from the compiled CSS of `runway.com` on 16 November 2026 (three CSS chunks served by the site) and from rendered markup. Where a value could not be measured, it is marked as an estimate. The reconstruction implements these tokens verbatim in `src/app/globals.css`.

## Typography

### Families (reference)

| Role | Family | Weights observed |
| --- | --- | --- |
| UI / body / display | **ABC Normal** (`abcNormal`) | 300 Book, 400 Regular, 500 Neutral |
| Editorial serif | **Times Now** (`timesNow`, `JHA_Times_Now_SemiLight.otf`) | 400 |
| Mono fallback | Courier Prime / Geist Mono | — |

Both families are commercial licences, so they are **not redistributed** here. The reconstruction ships visually equivalent open-source substitutes downloaded at build-authoring time:

| Token | Substitute | Licence | Source |
| --- | --- | --- | --- |
| `--font-sans` | Inter (variable) | SIL OFL 1.1 | Google Fonts |
| `--font-serif` | Newsreader (variable) | SIL OFL 1.1 | Google Fonts |

Files live in `public/assets/fonts/` and are declared with `@font-face` in `globals.css` (`font-display: swap`). Stack: `Inter, "Helvetica Neue", Helvetica, Arial, sans-serif`.

### Scale (measured, used as-is)

| Class | Font size | Weight | Line height | Letter spacing |
| --- | --- | --- | --- | --- |
| `.rw-display-xl` | `clamp(3rem, 2.2571rem + 3.0476vw, 5rem)` | 400 | 1.05 | -0.02em |
| `.rw-display-l` | `clamp(2.25rem, 1.7857rem + 1.9048vw, 3.5rem)` | 400 | 1.1 | -0.015em |
| `.rw-display-m` | `clamp(1.75rem, 1.4714rem + 1.1429vw, 2.5rem)` | 400 | 1.15 | -0.0125em |
| `.rw-display-s` | `clamp(1.5rem, 1.3607rem + 0.5714vw, 1.875rem)` | 400 | 1.2 | -0.01em |
| `.rw-display-xs` | `clamp(1.25rem, 1.1571rem + 0.381vw, 1.5rem)` | 400 | 1.25 | -0.0075em |
| `.rw-heading-min` | 1.125rem | 500 | 1.4 | -0.005em |
| `.rw-paragraph-l` | 1.25rem | 400 | 1.55 | -0.005em |
| `.rw-paragraph-m` | 1rem | 400 | 1.6 | 0 |
| `.rw-paragraph-s` | 0.875rem | 400 | 1.55 | 0 |

Body copy measures roughly 60–72 characters per line; legal documents are constrained to `72ch`.

## Colour

Measured Tailwind theme colors from the reference build:

| Token | Hex | RGB | Usage |
| --- | --- | --- | --- |
| `off-white` | `#EFEEE6` | 239 238 230 | Warm surface / editorial panels |
| `off-white-alt` | `#F6F6F6` | 246 246 246 | Banners, quiet sections, card fills |
| `off-black` | `#0C0C0C` | 12 12 12 | Primary text, dark sections, buttons |
| `light-gray` | `#E4E5E6` | 228 229 230 | Hairlines, borders, dividers |
| `dark-gray` | `#7C7C7C` | 124 124 124 | Secondary text |
| `dark-gray-alt` | `#666E7A` | 102 110 122 | Muted labels, eyebrow |
| page background | `#FFFFFF` | 255 255 255 | `html` carries `bg-white` |
| overlay | `#000` at 20–85% | — | Hero media scrims |

Semantic aliases map to COSS UI tokens (`--color-primary: #0c0c0c`, `--color-accent: #f0f0ee`, `--color-border: #e4e5e6`, `--color-muted-foreground: #666e7a`, `--color-destructive: #dc2626`).

No accent hue is used for CTAs: Runway's call-to-action language is monochrome — a solid near-black pill on light surfaces, a solid white pill on dark. Status colors (green/red) appear only in form validation and documentation tables.

## Layout

| Property | Value |
| --- | --- |
| Container | `.rw-container` — `max-width: 1600px; margin-inline: auto; padding-inline: 1.25rem` |
| Header | Fixed; promo bar 33px + nav 64px (`h-16`) = 97px at ≥640px; 64px below |
| Nav item | `px-2.5 py-2 text-sm`, `min-[1440px]:px-3 text-[15px]` |
| Hero media | `min-h 500px`, mobile `h-[90vh] max-h-[660px]`, desktop ≈ `calc((min(100vw,1600px)-40px)*9/21+64px)` (`aspect-ratio: 21/9` in this build) |
| Section padding | 64px mobile, 96px desktop (`py-16 md:py-24`) |
| Card radius | 12px (`rounded-xl`); pills 999px |
| Card padding | 20–32px (`p-5`/`p-6`/`p-8`) |
| Grid gaps | 16px small, 20px medium (4/5 scale), 32–40px large |
| Footer columns | 8 columns at ≥1280px, 4 at ≥1024px, 3 at ≥640px, 2 below |
| Legal document | 240px sticky TOC + content max `72ch` |

## Motion

| Interaction | Behaviour |
| --- | --- |
| Nav dropdown | Opens on pointer hover or click; panel fades/slides into place; closes on outside click and `Escape`; chevron rotates 180° over 200ms |
| Header | Transparent-to-solid white with `backdrop-blur`; shadow appears after 8px scroll (200ms) |
| Scroll reveal | 18px rise + fade over 700ms, `cubic-bezier(0.22, 1, 0.36, 1)`, staggered 70–90ms per card |
| Hero headline | beUI `TextReveal`: word-by-word spring rise (stiffness 140, damping 26, mass 1.2) with 12px blur clearing; 0.05s stagger |
| Buttons | Colour transition 150ms; no scale transform |
| Before/after slider | Pointer drag and arrow keys, spring divider, hint sweep once in view |
| Tabs | Underline indicator slides between tabs over 200ms |
| Accordions | Height transition 200ms ease-in-out; chevron rotation |
| Dialogs | Backdrop fade + popup opacity/scale 200ms |
| Reduced motion | All transitions/animations clamped to 0.001ms; `.rw-reveal` renders in its final state |

## Elevation and borders

Only two elevation treatments exist: a 1px hairline (`#E4E5E6`) for card and section separation, and a soft `shadow-[0_24px_40px_-24px_rgba(0,0,0,0.25)]` under the open mega-menu. No card drop shadows.

## Iconography

Lucide React, 14–20px, stroke width 2, `currentColor`. External links append `ArrowUpRight` at 40–70% opacity; the icon is decorative and the accessible name includes "(opens in a new tab)" where the link leaves the site.

## Focus and accessibility

Focus ring: 2px solid `#0C0C0C` offset 2px globally; form controls use a 3px soft ring. Skip link is the first focusable element. Colour contrast: primary text `#0C0C0C` on white ≈ 19:1; muted `#666E7A` on white ≈ 5.6:1; white on `#0C0C0C` ≈ 19.4:1.
