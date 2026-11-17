export type RouteMeta = {
  path: string;
  title: string;
  category: "marketing" | "product" | "company" | "trust" | "legal" | "auth" | "system";
  priority: "P0" | "P1" | "P2";
  description: string;
};

/**
 * Canonical route registry for the reconstruction. Every local route in the
 * application is registered here so navigation, sitemap and tests share one
 * source of truth.
 */
export const routes: RouteMeta[] = [
  { path: "/", title: "Intelligent tools for scaling content and teams.", category: "marketing", priority: "P0", description: "Runway builds foundational Real-World Intelligence for creatives, developers and robotics teams." },
  { path: "/product", title: "AI Image and Video Generator", category: "product", priority: "P0", description: "Every model you need to make anything you want, in one creative workspace." },
  { path: "/product/robotics", title: "Runway Robotics | Praxis-1, open-weight robot policies", category: "product", priority: "P1", description: "Robot policies built on video pretraining, available with open weights under Apache 2.0." },
  { path: "/product/robotics/contact", title: "Contact our robotics team", category: "product", priority: "P2", description: "Plan a Runway Robotics deployment with our team." },
  { path: "/pricing", title: "AI Image and Video Pricing from $12/month", category: "marketing", priority: "P0", description: "Choose the right Runway plan, compare credits and models across Standard, Pro and Max." },
  { path: "/enterprise", title: "Production-ready AI Made for Enterprise", category: "marketing", priority: "P0", description: "Runway's full suite of creative AI tools helps enterprise teams realize bigger ideas." },
  { path: "/enterprise-contact", title: "Contact our Enterprise Team", category: "marketing", priority: "P1", description: "Tell us what you're working on and a Runway expert will be in touch." },
  { path: "/api", title: "Runway Developer Platform", category: "product", priority: "P1", description: "The AI media platform for developers: the best image, video and audio models in one API." },
  { path: "/solutions", title: "Runway AI Solutions | Tools for Creative Teams and Enterprises", category: "marketing", priority: "P1", description: "AI-powered solutions for every creative need, from ideation to distribution." },
  { path: "/workflows", title: "Runway Workflows", category: "product", priority: "P2", description: "Granular control over every step of your creative process with node-based workflows." },
  { path: "/mcp", title: "Runway MCP", category: "product", priority: "P2", description: "Connect Runway to ChatGPT, Claude and other agents with the Runway MCP server." },
  { path: "/about", title: "About Runway AI Video Platform", category: "company", priority: "P0", description: "We are building AI to simulate the world through merging art and science." },
  { path: "/careers", title: "Careers in AI Video Technology", category: "company", priority: "P0", description: "Join a global team of researchers, engineers, artists and designers building AI to simulate the world." },
  { path: "/safety", title: "Safety | Runway", category: "trust", priority: "P0", description: "Building new worlds responsibly, with safeguards at every layer." },
  { path: "/safety/usage-policy", title: "Runway's Usage Policy", category: "trust", priority: "P0", description: "How Runway enables creative expression while mitigating the risk of harm." },
  { path: "/safety/verify", title: "Verify Content Credentials", category: "trust", priority: "P1", description: "Inspect C2PA manifests embedded in images, videos and audio." },
  { path: "/data-security", title: "Data Security | Runway", category: "trust", priority: "P1", description: "How Runway protects customer data, from encryption to SOC 2 Type II." },
  { path: "/brand-guidelines", title: "Brand Guidelines & Assets", category: "company", priority: "P1", description: "Best practices for using the Runway brand, with guidance on logos and clear space." },
  { path: "/research", title: "AI Video Research & Innovation", category: "company", priority: "P0", description: "Building general-purpose multimodal simulators of the world." },
  { path: "/resources", title: "Resource Hub", category: "company", priority: "P1", description: "Guides, playbooks and featured resources for creative AI." },
  { path: "/news", title: "News | Runway AI", category: "company", priority: "P1", description: "The latest from Runway: company news, research, engineering and customer stories." },
  { path: "/terms-of-use", title: "Terms of Use", category: "legal", priority: "P0", description: "Demonstration terms of use reconstruction for the Runway website exercise." },
  { path: "/privacy-policy", title: "Privacy Policy", category: "legal", priority: "P0", description: "Demonstration privacy policy reconstruction with a full table of contents." },
  { path: "/california-notices", title: "California Notices", category: "legal", priority: "P1", description: "Demonstration California privacy notices and choices." },
  { path: "/coc", title: "Code of Conduct", category: "legal", priority: "P1", description: "Demonstration code of conduct for the Runway reconstruction." },
  { path: "/enterprise-terms", title: "Enterprise Terms", category: "legal", priority: "P2", description: "Demonstration enterprise services terms reconstruction." },
  { path: "/login", title: "Log in", category: "auth", priority: "P1", description: "Demo authentication screen — not connected to Runway." },
  { path: "/signup", title: "Sign up", category: "auth", priority: "P1", description: "Demo registration screen — not connected to Runway." },
  { path: "/forgot-password", title: "Reset your password", category: "auth", priority: "P2", description: "Demo password recovery screen — not connected to Runway." },
];

export const routeMap = new Map(routes.map((route) => [route.path, route]));
