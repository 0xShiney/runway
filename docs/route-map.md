# Route map

Canonical registry: `src/lib/routes.ts`. Navigation trees: `src/data/navigation.ts`.

## Local routes

| Path | Page | Parent | Type |
| --- | --- | --- | --- |
| `/` | Home | — | static |
| `/product` | Creative platform | Creative | static |
| `/product/robotics` | Runway Robotics | Robotics | static |
| `/product/robotics/contact` | Robotics deployment contact | Robotics | static |
| `/pricing` | Pricing (plus `?tab=dev`) | — | static + client tab |
| `/enterprise` | Enterprise | — | static |
| `/enterprise-contact` | Contact sales | Enterprise | static |
| `/api` | Runway Dev | Dev | static |
| `/solutions` | Solutions | Creative | static |
| `/workflows` | Workflows | Dev | static |
| `/mcp` | Runway MCP | Dev | static |
| `/about` | About | Company | static |
| `/careers` | Careers | Company | static |
| `/safety` | Safety | Company | static |
| `/safety/usage-policy` | Usage Policy | Safety | static |
| `/safety/verify` | Verify Content Credentials | Safety | static |
| `/data-security` | Data Security | Enterprise | static |
| `/brand-guidelines` | Brand Guidelines | Company | static |
| `/research` | Research hub | Research | static |
| `/resources` | Resource hub | Resources | static |
| `/news` | News index (filterable) | Resources | dynamic (search params) |
| `/terms-of-use` | Terms of Use | Legal | static |
| `/privacy-policy` | Privacy Policy | Legal | static |
| `/california-notices` | California Notices | Legal | static |
| `/coc` | Code of Conduct | Legal | static |
| `/enterprise-terms` | Enterprise Terms | Legal | static |
| `/login` | Login (demo) | Auth | client |
| `/signup` | Signup (demo) | Auth | client |
| `/forgot-password` | Password recovery (demo) | Auth | client |
| `/robots.txt` | Robots | System | generated |
| `/sitemap.xml` | Sitemap | System | generated |
| `not-found` | 404 boundary | System | static |

## Primary navigation destinations

`Creative` (menu) · `Dev` (menu) · `Robotics` (menu) · `Research` (menu) · `Resources` (menu) · `Enterprise` · `Pricing` · `Enterprise Sales` · `Login` · `Try Runway`.

Each menu item points at a local overview route plus local anchors or verified external destinations:

- Creative → `/product`, `/product#agent`, `/product#characters`, `/workflows`, `/solutions`, `/pricing`, `/pricing#team`, `/mcp`, `/login`; external iOS/Android apps.
- Dev → `/api`, `/api#models`, `/api#router`, `/api#recipes`, `/api#characters`, `/workflows`, `dev.runwayml.com`, `docs.dev.runwayml.com`.
- Robotics → `/product/robotics`, `#praxis-1`, `#research`, `/product/robotics/contact`.
- Research → `/research`, `/news?filter=research`, `/research#publications`, `/research#rna-sessions`, model anchors.
- Resources → `/resources`, `/news`, plus Academy, Help Center, Changelog, Meetups, AI Festival, Gen:48, Studios, Creative Partners, Builders.

## Footer destinations

Eight columns reproduced from the reference: Creative, Dev, Robotics, Enterprise, Research, Resources, Events & Programs, Company. Legal row: Terms of Use · Privacy Policy · California Notices · Your Privacy Choices · Cookie Settings (dialog) · Code of Conduct · System Status · English.

## External destinations (verified)

| Destination | URL |
| --- | --- |
| Product app / login | `https://app.runwayml.com/` (linked from login page notes) |
| iOS app | `https://apps.apple.com/app/runway-ai-video-photo-maker/id1665024375` |
| Android app | `https://play.google.com/store/apps/details?id=com.runwayml.prod` |
| Dev console | `https://dev.runwayml.com/` |
| Dev docs | `https://docs.dev.runwayml.com/` |
| Help center | `https://help.runwayml.com/hc/en-us` |
| Academy | `https://academy.runwayml.com/` |
| Job board | `https://jobs.ashbyhq.com/runway-ml` |
| Report content | `https://runway.com/report-content` |
| Status | `https://status.runwayml.com/` |
| Brand assets | `https://runway.com/assets/Runway-Brand-Guidelines.zip` |
| Praxis-1 weights | `https://huggingface.co/collections/runwayml/praxis-1` |
| Praxis-1 code | `https://github.com/runwayml/praxis-1-oss` |

## Redirects avoided

`/coc` on the reference domain resolves to Usage Policy content. This reconstruction keeps `/coc` as an independent demonstration document and links to the Usage Policy, rather than fabricating a redirect that would break the footer's information architecture.
