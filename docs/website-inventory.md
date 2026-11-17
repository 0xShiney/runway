# Website inventory

Discovery date: **16 November 2026**. Sources: `https://runway.com/` (rendered HTML, primary and footer navigation), `https://runway.com/sitemap.xml`, `https://runway.com/robots.txt` (implicit), page metadata, and the public Ashby job board embedded in `/careers`.

Priority: **P0** = required by the brief or primary navigation · **P1** = secondary navigation or linked from a P0 page · **P2** = long-tail, external or out of scope.

## Domains encountered

| Domain | Role | Handling here |
| --- | --- | --- |
| `runway.com` | Marketing site, research, legal, trust pages | Reconstructed locally where in scope |
| `app.runwayml.com` | Product application, checkout, login | Demo only; real links open externally |
| `dev.runwayml.com` | Developer console / API keys | External link |
| `docs.dev.runwayml.com` | API documentation, guides, recipes, MCP | External link |
| `help.runwayml.com` | Help center, changelog, release notes | External link |
| `academy.runwayml.com` | Learning platform | External link |
| `jobs.ashbyhq.com/runway-ml` | Job board (Ashby) | Listings reproduced from snapshot; apply links external |
| `aiff.runwayml.com`, `gen48.runwayml.com` | Events / programs | External link |
| `status.runwayml.com` | System status | External link |
| `image.mux.com` | Video thumbnails/poster images | Not reused; replaced with original artwork |
| `huggingface.co`, `github.com` | Model weights and code | External link |

## Discovered pages

### Marketing & product

| Route | Name | Category | Parent | Source | Priority | Status | External |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Homepage | Marketing | — | sitemap, header logo | P0 | Implemented | no |
| `/product` | Creative platform | Product | Creative | header | P0 | Implemented | no |
| `/product/agent` | Agent | Product | Creative | header menu | P1 | Merged into `/product#agent` | no |
| `/product/characters` | Characters | Product | Creative | product page | P1 | Merged into `/product#characters` | no |
| `/product/robotics` | Runway Robotics / Praxis-1 | Product | Robotics | header | P0 | Implemented | no |
| `/product/robotics/contact` | Robotics contact | Product | Robotics | robotics page | P1 | Implemented | no |
| `/pricing` | Pricing | Marketing | — | header | P0 | Implemented | no |
| `/pricing?tab=dev` | Dev pricing tab | Marketing | Pricing | footer | P1 | Implemented as a tab state | no |
| `/enterprise` | Enterprise | Marketing | — | header | P0 | Implemented | no |
| `/enterprise-contact` | Contact sales | Marketing | Enterprise | header/CTA | P1 | Implemented (demo form) | no |
| `/api` | Runway Dev / developer platform | Product | Dev | footer, product | P1 | Implemented | no |
| `/solutions` | Solutions | Marketing | Creative | footer | P1 | Implemented | no |
| `/workflows` | Workflows | Product | Dev/Creative | footer, product | P2 | Implemented | no |
| `/mcp` | Runway MCP | Product | Dev | footer | P2 | Implemented | no |
| `/apps/*` (9 pages) | Individual apps | Product | Creative | product page | P2 | Not implemented; app grid presented on `/product#apps` | no |
| `/use-cases/*` (18 pages) | Industry landing pages | Marketing | Solutions | sitemap | P2 | Not implemented; grouped on `/solutions` | no |
| `/ai-for-ads`, `/ai-for-vfx`, `/ai-for-gaming` | Vertical pages | Marketing | Solutions | product page | P2 | Not implemented; linked to `/solutions` / `/enterprise` | no |
| `/team-plan` | Team plan | Marketing | Creative | footer | P2 | Merged into `/pricing#team` | no |
| `/studios`, `/rewards`, `/builders`, `/creative-partners-program` | Programs | Marketing | Events & Programs | footer | P2 | External links to `runwayml.com` | yes |
| `/gen48` | Gen:48 | Program | Events & Programs | footer | P2 | External link | yes |
| `/educators` | Education | Marketing | Enterprise | footer | P2 | External link | yes |

### Company, research & resources

| Route | Name | Category | Parent | Source | Priority | Status |
| --- | --- | --- | --- | --- | --- | --- |
| `/about` | About | Company | — | footer | P0 | Implemented |
| `/careers` | Careers | Company | — | footer | P0 | Implemented |
| `/research` | Research hub | Company | Research | header | P0 | Implemented |
| `/research/publications` | Publications | Company | Research | footer | P1 | Merged into `/research#publications` |
| `/research/rna-sessions` | RNA Sessions | Company | Research | sitemap | P2 | Section on `/research#rna-sessions` |
| `/news` | News index | Company | Resources | footer | P1 | Implemented with filters |
| `/news?filter=customers` | Customer stories | Company | Resources | footer | P1 | Implemented as filter |
| `/news?filter=research` | Research news | Company | Research | footer | P1 | Implemented as filter |
| `/resources` | Resource hub | Company | Resources | footer | P1 | Implemented |
| `/resource/*`, `/app/*`, `/prompts/*` | Long-tail content | Company | Resources | sitemap | P2 | Not implemented; listed in `/resources` |
| `/reports/*` | Reports | Company | Resources | sitemap | P2 | Not implemented |
| `/news/<slug>` articles | Article pages | Company | News | sitemap | P2 | Not implemented; index links to filter views and note external originals |

### Trust, legal & system

| Route | Name | Category | Parent | Source | Priority | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/safety` | Safety | Trust | Company | footer | P0 | Implemented | |
| `/safety/usage-policy` | Usage Policy | Trust | Safety | safety page | P0 | Implemented | Demonstration wording |
| `/safety/verify` | Verify Content Credentials | Trust | Company | footer | P1 | Implemented | Local file inspection only |
| `/data-security` | Data Security | Trust | Enterprise | footer | P1 | Implemented | |
| `/brand-guidelines` | Brand Guidelines | Company | Company | footer | P1 | Implemented | Wordmark used for reconstruction |
| `/terms-of-use` | Terms of Use | Legal | — | footer | P0 | Implemented | Non-binding summary |
| `/privacy-policy` | Privacy Policy | Legal | — | footer | P0 | Implemented | Index + tables |
| `/california-notices` | California Notices | Legal | Legal | footer | P1 | Implemented | |
| `/coc` | Code of Conduct | Legal | Legal | footer | P1 | Implemented | Reference route serves the Usage Policy; see notes |
| `/enterprise-terms` | Enterprise Terms | Legal | Legal | terms page | P2 | Implemented | |
| `/report-content` | Report content | Trust | Safety | safety page | P1 | External link to official form |
| Cookie settings | Privacy choices | System | Legal | footer | P1 | Implemented as a local dialog |

### Authentication

| Route | Name | Category | Priority | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| `/login` | Login | Auth | P1 | Implemented as demo | Reference login is `app.runwayml.com` |
| `/signup` | Signup | Auth | P1 | Implemented as demo | No account created |
| `/forgot-password` | Password recovery | Auth | P2 | Implemented as demo | No email sent |

## Summary

- **Discovered** distinct public paths: ~120 in the sitemap plus navigation-only routes (apps, use cases, prompts, reports, news articles).
- **Local routes implemented:** 31 (`/`, 27 content pages, `/robots.txt`, `/sitemap.xml`, plus the 404 boundary).
- **Intentionally external:** 22 verified destinations (product app, docs, help, job board, events, programs, report form, system status).
- **Unavailable / out of scope:** long-tail app, use-case, prompt and news article pages; individual research papers and publications PDFs.
- **Not verified in a real browser session:** hover-only micro-interactions on the live site (no visual diff possible), and the authenticated product UI.
