# Reference research

Observations from the live site on 16 November 2026. Content was read from rendered text and raw HTML; layout was derived from the page markup, Tailwind classes and compiled CSS. No interactive browser session against runway.com was used, so hover/motion timings are inferred from class names (e.g. `transition-transform duration-200`) and from the CSS motion utilities, not measured frame-by-frame.

## Shared chrome

- **Promo bar** directly below the fixed header: "Enterprises get up to 2 months of usage free. Sign by 12/31." with a "See terms" link to `/code-terms/enterprise-bonus-terms` and a "Contact sales" CTA. Dismissible (close icon, `aria-label="Dismiss banner"`).
- **Header**: Runway wordmark (84×19 SVG), primary nav `Creative, Dev, Robotics, Research, Resources, Enterprise, Pricing`, then `Enterprise Sales`, `Login`, `Try Runway`. Items with dropdowns expose `aria-haspopup`/`aria-expanded` and a chevron that rotates.
- **Footer**: eight columns (Creative, Dev, Robotics, Enterprise, Research, Resources, Events & Programs, Company), a legal row (Terms of Use / Privacy Policy / California Notices / Your Privacy Choices / Cookie Settings / Code of Conduct / System Status / English) and `© 2026 Runway AI, Inc.` External items carry `↗`.

## Homepage

1. Full-bleed 21:9 rounded media card (Mux thumbnail) with a 20% black scrim. H1 bottom-left: "Intelligent tools for scaling content and teams." Paragraph about "foundational Real-World Intelligence". CTA "Try Runway for free".
2. Partner line: "We partner with the world's leading organizations to advance their industries:" with logos.
3. "Three platforms built on-top of the same Real-World Intelligence models" — three cards: Runway Creative, Runway Dev, Runway Robotics (headline, description, link row, "Used by 60m+ creatives…").
4. A tabbed capability strip labelled with the three platform names, showing: How Runway is Used · Create with Agent · Build your own Workflows · Enterprise-grade · The World's Best Models.
5. Runway Research block: GWM-1, Gen-4.5, General World Models cards.
6. "See the latest from Runway" — four news cards (Runway Ads, Praxis-1, App Studio, Dev plugins).

## Product (`/product`)

H1 "A new frontier for video generation." over media; "Used by 60M+ users globally". Section "Every model you need to make anything you want." with a 12-model list (Gen-4.5, Seedance 2.0, Kling 3.0, Nano Banana 2.1, Seedream 5.0, Gemini Omni, Nano Banana Pro, Seedance 2.5, Claude Opus 5.5, Wan 3.0, FLUX.3, Eleven v4). "Our latest models and tools" (8 cards). "Dozens of tools. Endless ways to create." with 10 tool labels. "Edit, Transform and Generate Video" with chips (change outfit, art direction, remove background, remove elements, change object). Customer stories. "Explore other apps" (9). Workflows block. News (3).

## Pricing (`/pricing`)

H1 "Choose the Right Plan for You". Free (125 one-time credits, selection of models, 5GB), Standard ($15 / $12 annual, 625 credits), Pro ($35 / $28, 2,250 credits, "Popular"), Max ($95 / $76, 9,500 credits, "Best value", credits roll over 1 month). Yearly discount labelled "-20%"/"Save $36–228/year". Feature lists captured verbatim. Comparison table grouped by AI video / AI image / AI audio with per-model credit costs and yearly generation counts. FAQ includes credits explanation (Gen-4.5 = 12 credits/second).

## Enterprise (`/enterprise`)

H1 "Production-ready AI / Made for Enterprise" over media, CTA Contact Sales. Partner logos. Long-form value copy. Contact form (first/last name, business email, company, company size, job title, phone, product interest incl. Model Weights Licensing, message). Testimonials with stats (2 weeks saved, 80% cost savings). Research cards (GWM-1, Gen-4.5). "Built for Enterprise" (Scalable and Secure; Transformative and Impactful; Workflows for Every Team). Case-study carousel. Closing CTA.

## About (`/about`)

H1 "We are building AI to simulate the world through merging art and science." + View Careers. Thesis: world models as the frontier; language models alone insufficient; trial and error accelerated in simulation; "World models offer the most clear path to general-purpose simulation." GWM-1 feature. Offices: New York, San Francisco, Seattle, London, Paris, Tel Aviv, Tokyo, plus remote. Five featured roles. Research cards.

## Careers (`/careers`)

H1 identical to About, with "Join our global team…" and office list. 51 roles across Commercial, Customer Experience, Engineering, Finance, Legal, Marketing & Creative, Operations & Partnerships, People, Product, Product Design, Research, Runway Labs, Runway Studios. Every role links to an Ashby posting; Studios roles link to a Google Form. Benefits: unlimited PTO, 16-week parental leave, full medical/dental/vision, quarterly donations, $600 wellness, $600 learning, travel stipend, remote/phone stipend ($250/$50), 3% 401k, $500 tech setup. Recognition (Built In, Best Companies Group, Inc., Crain's). Press list. Research block.

## Safety (`/safety`)

Hero "Building new worlds responsibly". Our approach (three paragraphs). Safeguards grouped Prevent (usage policy, model-level, red teaming, product-level), Detect (input/output detection, human review, continuous monitoring), Enforce (account enforcement), Transparency (C2PA). Report content CTA.

## Usage Policy (`/safety/usage-policy`)

Breadcrumb Safety / Usage Policy; eyebrow Trust & Safety; "Last updated March 6, 2026"; intro referencing Terms of Use and Enterprise Terms; seven policy sections (children's safety; violence & gore; sexually explicit content & nudity; hateful conduct, harassment and self-harm; rights of others; misleading content; additional character policies); appeal address; report link.

## Research (`/research`)

H1 "Building general-purpose multimodal simulators of the world." Three papers listed with dates and abstracts (Praxis-1 2026-11-11; GWM Worlds 2 2026-09-03; Solaris 2026-09-01). Pillars: GWM-1, Gen-4.5, General World Models. RNA Sessions. Latest research news.

## Dev (`/api`)

Own developer-portal chrome on the reference (Runway Dev logo, Models/Products/For Agents/Docs, Log In/Sign Up) — this reconstruction deliberately uses the shared marketing header for cohesion. Hero "The AI Media Platform for Developers". Four pillars (Access, Evaluate, Automate, Control). Model cards with resolution/aspect/inputs/duration/pricing. Router, Recipes, MCP. Workflows and Characters. Code sample (Node/Python/cURL). Enterprise features (99.9% uptime, SOC 2 Type II, IP indemnification…).

## Robotics (`/product/robotics`)

H1 area "Praxis-1 is now available" with eyebrow Runway Robotics. Intro paragraph. Praxis-1 section "Run and adapt it on your own hardware" with three numbered principles. Download cards (Hugging Face, GitHub). Contact CTA. Research cards.

## Legal

- **Terms of Use** — 18 numbered sections, capitalised warnings, last updated October 23, 2026, link to Enterprise Services Terms.
- **Privacy Policy** — effective October 23, 2026; index of sections; long categories of collected data; disclosure tables; California section with two tables.
- **California Notices** — separate footer destination; rights and choices.
- **Code of Conduct** (`/coc`) — the reference returns Usage Policy content at this path.
- **Brand Guidelines** — name guidance, 24px/1in minimum, black/white wordmarks, clear space (x + ½x), six don'ts, symbol usage, downloadable logo pack.
- **Verify Content Credentials** (`/safety/verify`) — C2PA verifier with drag-and-drop, 512MB limit, terms note.

## Authentication

The public login lives at `app.runwayml.com`; homepage Login links there. This reconstruction presents a local-only login/signup/recovery flow and never contacts that domain.

## Gaps in this research

- No screenshots of the reference site were captured (no direct browser session), so pixel-level comparison was not performed; visual decisions rely on measured CSS tokens and markup.
- Video/media content could not be preserved; original artwork stands in.
- Long-tail content (individual app, use-case, prompt, news article pages) was enumerated from the sitemap but not individually inspected.
