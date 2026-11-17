# Implementation notes

## Stack

- **Next.js 15.5** App Router, React 19, TypeScript strict.
- **Tailwind CSS v4** via `@tailwindcss/postcss` (no `tailwind.config`; tokens live in `@theme` inside `src/app/globals.css`).
- **Bun 1.4** as package manager and script runner (`bun install`, `bun run dev|build|typecheck|lint`).
- **COSS UI** (shadcn-compatible registry, Base UI primitives): `button`, `input`, `dialog`, `tabs`, `accordion` — installed with `bunx shadcn add https://coss.com/ui/r/<name>.json` into `src/components/ui/`. `spinner`, `scroll-area` and `segmented-control` came from registry dependencies.
- **beUI** motion components vendored from its registry: `text-reveal` (hero typography) and `before-after-slider` (product edit demo), plus their `lib/ease`, `lib/touch`, `lib/i18n`, `lib/hooks/use-hover-capable` dependencies, normalised to the `@/` alias.
- **Lucide React** icons, **Motion** (beUI peer), **Playwright** for end-to-end tests.

No other runtime dependencies were added. `class-variance-authority`, `clsx`, `tailwind-merge` arrive with the registry components and back `cn()`.

## Architecture

```
src/
  app/                     route segments (31 routes incl. robots + sitemap)
  components/
    layout/                site-header, site-footer, cookie-settings
    marketing/             primitives (Section, PillLink, MediaPanel…), artwork, reveal
    motion/                beUI text-reveal + before-after-slider
    sections/              platform-tabs, pricing-plans, faq, code-sample,
                           contact-form, testimonial-carousel, c2pa-verifier
    legal/                 legal-layout, table-of-contents, demo-notice
    careers/               job-list (search + department filter)
    auth/                  auth-layout, auth-form
    brand/                 logo (wordmark + symbol)
    ui/                    COSS UI primitives
  data/                    navigation, jobs, pricing, content, safety
  lib/                     routes registry, utils, beUI helpers
  types/                   reserved for shared types
```

### Decisions

1. **Content separated from UI.** All copy that repeats or changes (navigation, footer, jobs, pricing, research, news, resources, solutions, safeguards) is typed data in `src/data/*.ts`. Pages compose it. The route registry in `src/lib/routes.ts` drives the sitemap, metadata review and tests.
2. **Design tokens, not ad-hoc Tailwind.** The reference's type scale, palette and container are encoded as `.rw-*` classes and `@theme` tokens, so every page inherits the same measurements. No page overrides display sizes with raw `text-5xl`.
3. **Original media system.** Rather than hotlink Mux thumbnails or use stock photography, `Artwork` renders deterministic SVG scenes. This keeps the layout's cinematic density, is responsive and weightless, and avoids licence problems. Each use is documented in `asset-inventory.md`.
4. **COSS UI for primitives, not for identity.** COSS components are used for accessible behaviour (dialog focus traps, tab semantics, accordion height animation, input wiring) and restyled with Runway tokens (`rounded-full` pills, monochrome palette). No default shadcn visual language leaks through.
5. **beUI for motion where motion is the point.** The hero's word reveal and the product before/after comparison are the two places where the reference uses real animated typography/interaction; both ship with reduced-motion fallbacks.
6. **Navigation fidelity without inventing pages.** Mega-menu groups mirror the evidence (nav + footer + sitemap). Where a destination was external, it is linked externally with `rel="noopener noreferrer"` and an "opens in a new tab" label rather than fabricated locally.
7. **Safety-first auth.** Login, signup and recovery are local demo flows. They validate in the browser, write a mock session to `localStorage`, and never make a network request. Every auth screen carries an explicit demo notice, and the test suite fails if a request to a Runway or OAuth host occurs. The Google button is visibly disabled with an explanation.
8. **Legal documents are presentations, not copies.** Each document reproduces the shell (breadcrumb, eyebrow, last-updated line, sticky TOC with scroll-spy, 72ch measure, numbered sections, tables, lists) with original demonstration wording, a standing "Demonstration document" notice, and a link to the authoritative Runway document.
9. **Metadata per route.** Titles and descriptions are set on each page; canonical URLs resolve against `NEXT_PUBLIC_SITE_URL` (default `https://runway-reconstruction.example`), never `runway.com`. Auth routes are `noindex`. `robots.txt` disallows auth routes and points at the generated sitemap.
10. **Server-first rendering.** Pages are server components; only genuinely interactive islands are `"use client"` (header, tabs, accordions, forms, dialog, carousel, verifier, auth). Homepage first-load JS is ~175 kB.

### Accessibility

- Skip link, semantic landmarks (`banner`, `main`, `contentinfo`, `nav` with labels), single `h1` per page and ordered headings.
- `aria-haspopup`/`aria-expanded` on menu parents, `aria-controls` on the mobile toggle, `aria-current` on active filter/TOC links, `aria-pressed` on toggles, `role="switch"` in cookie settings, `aria-live` for result counts and save confirmations.
- Decorative artwork is `aria-hidden`; meaningful media has `aria-label`.
- Focus-visible ring is global and never removed; dialogs trap focus via Base UI; Escape closes menus and dialogs.
- `prefers-reduced-motion` clamps every transition and reveals content in its final state.

### Performance

- SVG artwork instead of video/image downloads; fonts are two variable `woff2` files (~180 kB total) served locally with `font-display: swap`.
- No third-party scripts, analytics or trackers.
- Route-level static rendering; `/news` renders on the server from search params.
- Layout dimensions are stable (explicit aspect ratios), avoiding cumulative layout shift.

### Tooling caveat

The build sandbox had no root access, so Playwright's browser dependencies could not be installed system-wide. `scripts/setup-test-env.sh` documents the workaround used here: fetch the needed Ubuntu libraries and a font set into `$HOME`, then export `LD_LIBRARY_PATH` and `FONTCONFIG_FILE` before running tests. System packages and caches do not survive workspace archiving, so this script must be re-run after a restore.
