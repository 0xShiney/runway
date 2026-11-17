# Interaction inventory

| Component | Location | Trigger | Behaviour | Keyboard | Reduced motion |
| --- | --- | --- | --- | --- | --- |
| Promo banner | All pages | Page load; close button | Visible ≥640px; dismiss hides it for the session | Close button is focusable with label "Dismiss promotion" | No animation |
| Primary nav links | Header | Click | Navigates; closes any open menu | Tab/Enter; `aria-expanded` on parents | n/a |
| Mega-menu | Header, 5 items | Hover or click on label / chevron button | Full-width white panel with two link columns and a featured dark card; hover-out closes after 120ms | `Escape` closes; outside pointer-down closes; focus moves through links in DOM order | Fade removed |
| Header elevation | All pages | Scroll > 8px | Adds a soft shadow, stays fixed | n/a | Transition clamped |
| Mobile menu | Header <1024px | Hamburger button | Full-height white panel; sections expand/collapse; body scroll locked | `Escape` closes; `aria-expanded`/`aria-controls` | No animation |
| Language indicator | Footer | Static | Shows "English" with a globe icon (no switcher on reference) | Not interactive | n/a |
| Cookie settings | Footer legal row | Button | Opens COSS dialog: four categories, three toggles plus one locked-on; Accept all / Reject non-essential / Save; persists to `localStorage` key `rw-demo-cookie-preferences`; confirmation message announced in `aria-live` | `Escape` closes; switches are `role="switch"` with `aria-checked`; focus trapped by Base UI dialog | Dialog transitions clamped |
| Platform tabs | Home | Tab click | Swaps five feature columns between Creative/Dev/Robotics content | Arrow keys move between tabs (Base UI Tabs); `aria-selected` | Indicator transition clamped |
| Scroll reveals | Home, cards | IntersectionObserver | 18px rise + fade once per element | n/a | Content rendered visible |
| Hero text reveal | Home + auth pages | Mount | Word-by-word spring + blur clear | n/a (text remains in DOM for AT/SEO) | Static text |
| Before/after slider | Product | Drag, click, arrow keys | Moves a divider between two generated frames; labels "Before/After"; one hint sweep in view | Arrow keys ±step; `aria-valuenow` on the handle | Hint sweep disabled |
| Pricing billing toggle | Pricing | Button group | Monthly ↔ Yearly changes displayed prices and the "Save $X/year" line | Two buttons with `aria-pressed` | No animation |
| Pricing tabs | Pricing | Links | Creative plans vs Dev pricing (`?tab=dev`), which renders a usage-based explainer | Native links | n/a |
| Job search | Careers | Text input | Filters by title/location/department; live result count in `aria-live` | Standard input | n/a |
| Department filter | Careers | Select | Narrows groups; empty state offers email fallback | Native select | n/a |
| Benefits accordion | Careers | Accordion trigger | Expands one panel at a time | Enter/Space; chevron rotates | Height transition clamped |
| FAQ accordions | Pricing, Workflows | Trigger | Single-open accordion | Enter/Space | Height transition clamped |
| Testimonial carousel | Enterprise | Prev/next buttons | Cycles three quotes and stats; position announced `1 / 3` | Buttons labelled Previous/Next testimonial | No animation |
| Contact forms | Enterprise, Enterprise contact, Robotics contact | Submit | Local validation (required fields, email pattern, message length ≥20, product selection); simulated success card; "Submit another response" resets | Labels bound via `for`/`id`; errors linked with `aria-describedby`, `aria-invalid` | n/a |
| C2PA verifier | Safety / Verify | Drag-drop or file picker | Client-side type and 512MB size check; shows name, type, size and an explicit demo result | File input labelled; error in `role="alert"` | n/a |
| Auth forms | Login, Signup, Forgot password | Submit | Local validation, password visibility toggle, password rule checklist (signup), terms checkbox; simulated 700ms delay; mock session in `localStorage` (`rw-demo-user`); no network request of any kind | Toggle has `aria-pressed` and dynamic label; errors inline | Spinner animation only |
| Legal table of contents | 5 legal pages | Anchor click / scroll | Sticky TOC with scroll-spy highlighting via IntersectionObserver; anchors have `scroll-margin-top` so the fixed header does not cover headings | Native anchors, `aria-current="true"` on active | Scroll behaviour switches to `auto` |
| 404 links | Not found | Click | Four popular destinations | n/a | n/a |

## Deliberately not implemented

- Real authentication, OAuth, email delivery, file upload, C2PA parsing, payments and checkout — all are either unsafe to reconstruct or require a backend.
- Video playback controls: no Runway video is redistributed; the hero media is original SVG artwork.
- Language switching beyond an English indicator.
- Live news article bodies and job application submission.
