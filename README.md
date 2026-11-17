# Runway — independent website reconstruction

An independent, front-end reconstruction of the public **runway.com** website: marketing, product, company, trust, legal and authentication presentation. Built with Next.js App Router, React 19, TypeScript, Tailwind CSS v4, Bun, COSS UI primitives and beUI motion components.

> **This is not Runway.** It is not affiliated with, endorsed by, or operated by Runway AI, Inc. All product media is replaced with original artwork, the Runway wordmark is used only for fidelity in this exercise, and authentication/legal content is demonstration-only. The disclosure appears in the footer of every page.

## Quick start

```bash
bun install
bun run dev          # http://localhost:3000
```

Other scripts:

```bash
bun run typecheck    # tsc --noEmit (strict)
bun run lint         # eslint .
bun run build        # production build
bun run test         # Playwright suite (see browser setup below)
```

## Routes

31 compiled routes: `/`, `/product`, `/product/robotics`, `/product/robotics/contact`, `/pricing`, `/enterprise`, `/enterprise-contact`, `/api`, `/solutions`, `/workflows`, `/mcp`, `/about`, `/careers`, `/safety`, `/safety/usage-policy`, `/safety/verify`, `/data-security`, `/brand-guidelines`, `/research`, `/resources`, `/news`, `/terms-of-use`, `/privacy-policy`, `/california-notices`, `/coc`, `/enterprise-terms`, `/login`, `/signup`, `/forgot-password`, `/robots.txt`, `/sitemap.xml`, plus the 404 boundary.

The canonical list lives in `src/lib/routes.ts`; navigation trees in `src/data/navigation.ts`.

## Documentation

| Document | Contents |
| --- | --- |
| [website-inventory.md](docs/website-inventory.md) | Every discovered route, priority, category, external destination |
| [route-map.md](docs/route-map.md) | Local routes, nav and footer destinations, verified external URLs |
| [design-system.md](docs/design-system.md) | Measured type scale, palette, layout, motion, focus states |
| [reference-research.md](docs/reference-research.md) | Section-by-section observations of the live site |
| [interaction-inventory.md](docs/interaction-inventory.md) | Every interactive component and its behaviour |
| [asset-inventory.md](docs/asset-inventory.md) | Fonts, brand marks, media policy, data snapshots |
| [responsive-specification.md](docs/responsive-specification.md) | Breakpoints and per-page responsive behaviour |
| [implementation-notes.md](docs/implementation-notes.md) | Architecture and engineering decisions |
| [testing-report.md](docs/testing-report.md) | Actual commands, results and limitations |

## Testing note

Playwright needs Chromium's system libraries. If `bunx playwright install-deps` cannot run (no root), use the documented workaround:

```bash
bash scripts/setup-test-env.sh
export LD_LIBRARY_PATH="$HOME/libs"
export FONTCONFIG_FILE="$HOME/fonts.conf"
bunx playwright test
```

## Configuration

`NEXT_PUBLIC_SITE_URL` sets the canonical origin used for metadata, `sitemap.xml` and `robots.txt` (default `https://runway-reconstruction.example`). It must never be set to a Runway domain.
