# Testing report

Run date: **16 November 2026** · Environment: Ubuntu 24.04, Bun 1.4.4, Node 26.13, Next.js 15.5.29, Chromium 159 (Playwright headless shell).

## Commands and results

| Check | Command | Result |
| --- | --- | --- |
| TypeScript | `bun run typecheck` (`tsc --noEmit`, strict) | **Pass** — 0 errors |
| Lint | `bun run lint` (`eslint .`, next/core-web-vitals + next/typescript) | **Pass** — 0 errors, 0 warnings |
| Production build | `bun run build` | **Pass** — 31 routes compiled; 30 static, `/news` dynamic |
| E2E — desktop (1440×1000) | `bunx playwright test --project=desktop` | **45 passed, 1 skipped** |
| E2E — mobile (Pixel 7 / 412×915) | `bunx playwright test --project=mobile` | **46 passed** |

The single desktop skip is the mobile-only navigation test, which is guarded by project name (and vice versa).

## Coverage

### Routes (30 tests × 2 projects)

Every route in the table below is loaded and asserted for: HTTP status < 400, an `h1` containing expected text, a non-empty `<title>`, visible site header and footer, no horizontal overflow (>2px tolerance), and no React hydration / invalid-nesting console errors.

`/`, `/product`, `/product/robotics`, `/product/robotics/contact`, `/pricing`, `/enterprise`, `/enterprise-contact`, `/api`, `/solutions`, `/workflows`, `/mcp`, `/about`, `/careers`, `/safety`, `/safety/usage-policy`, `/safety/verify`, `/data-security`, `/brand-guidelines`, `/research`, `/resources`, `/news`, `/terms-of-use`, `/privacy-policy`, `/california-notices`, `/coc`, `/enterprise-terms`, `/login`, `/signup`, `/forgot-password`, plus the 404 boundary.

This test caught two real defects during development: a nested `<a>` inside the robotics research cards (invalid HTML, hydration error) and a duplicated safety-page link label. Both were fixed by correcting the markup rather than relaxing the assertion.

### Navigation (tests/interactions.spec.ts)

- Desktop mega-menu opens on hover, exposes a grouped link, and closes on `Escape`.
- Mobile navigation opens, expands a section, collapses it, and navigates to `/pricing`.
- Promo banner is visible and dismissible at desktop width.
- Footer link navigates to `/privacy-policy`.
- Footer link integrity: every internal `href` on the homepage returns < 400; every external `href` is `https://` or `mailto:`; every `target="_blank"` link carries `rel="noopener"`.
- Metadata: canonical exists, stays on the reconstruction domain, and description length > 40 characters.

### Interaction coverage

| Area | Assertion |
| --- | --- |
| Cookie preferences | Dialog opens; "strictly necessary" switch is disabled; toggling analytics and saving writes `rw-demo-cookie-preferences`; after reload the stored state is restored |
| Pricing | Yearly price `$12` shown; switching to Monthly shows `$15`; comparison table and Gen-4.5 row present; `?tab=dev` renders the usage-based explainer |
| Careers | Searching "robotics" surfaces the robotics role and removes commercial roles; filtering to Legal shows the fellowship and hides support roles |
| Legal TOC | Clicking "Data retention" updates the hash, scrolls the section into view, and keeps the demonstration notice visible |
| Auth (4 tests) | Required-field errors; successful demo login writes `rw-demo-user` and shows the success card; **zero** requests to `runway.com`, `runwayml.com`, `accounts.google` or any `oauth` host; show-password toggle switches the input type; signup enforces password rules and terms acceptance; recovery simulates a reset with no email |
| C2PA verifier | Manual coverage only: verified the dropzone renders, file picker is labelled and the demo disclaimer is present (no automated test) |

### Responsive coverage

Automated at 1440×1000 (desktop project) and 412×915 with mobile emulation. Manual spot checks at 1280, 1024, 768, 390 and 360 were used during development; the overflow assertion runs per route on both projects.

### Accessibility

Verified: single `h1` per page, labelled navigation landmarks, skip link, focus-visible styling, `aria-expanded`/`aria-pressed`/`aria-current`/`role="switch"` states, `aria-live` regions for async results, dialog focus handling and reduced-motion fallbacks. **Not run:** axe-core/Lighthouse automated audits.

## Visual verification

Screenshots of the reconstruction were captured and reviewed at 1440×1000 and 390×844 (see `docs/screenshots/`). Review confirmed: fixed header with promo bar, hero media card with headline and CTAs, partner logo row (an overflow was found and fixed), three-platform card grid, and mobile stacking at 390px.

**Not performed:** pixel comparison against runway.com. No browser session against the live site was available in this environment, so the visual target was reconstructed from measured CSS tokens and page markup rather than image diffing. Video/media content is intentionally replaced with original artwork.

## Known limitations

1. No automated visual regression (screenshot diffing) against the reference.
2. `/coc` is an independent demonstration document; the reference route returns Usage Policy content.
3. Long-tail pages (individual apps, use cases, prompts, reports, news articles) are enumerated but not implemented.
4. Auth, forms, file inspection and cookie choices are local demonstrations with no backend.
5. Browser dependencies are provisioned by `scripts/setup-test-env.sh`; a restored workspace needs that script re-run before `bun test`.
