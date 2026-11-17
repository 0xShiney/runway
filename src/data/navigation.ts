export type LinkItem = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  badge?: string;
};

export type MenuGroup = {
  title?: string;
  items: LinkItem[];
};

export type NavItem = {
  label: string;
  href: string;
  columns?: MenuGroup[];
  featured?: {
    title: string;
    body: string;
    href: string;
    cta: string;
  };
};

/**
 * Primary navigation, reconstructed from runway.com (retrieved November 2026).
 * Mega-menu contents mirror the groups exposed by the live site's navigation
 * and footer; every destination is either a local route in this
 * reconstruction or the verified external run-time destination.
 */
export const primaryNav: NavItem[] = [
  {
    label: "Creative",
    href: "/product",
    columns: [
      {
        title: "Platform",
        items: [
          { label: "Overview", href: "/product", description: "The complete creative suite." },
          { label: "Agent", href: "/product#agent", description: "End-to-end video from a conversation." },
          { label: "Workflows", href: "/workflows", description: "Node-based creative pipelines." },
          { label: "Characters", href: "/product#characters", description: "Real-time video agents." },
          { label: "Use Cases", href: "/solutions", description: "By creative need and industry." },
          { label: "Pricing", href: "/pricing" },
          { label: "Team Plan", href: "/pricing#team" },
        ],
      },
      {
        title: "Apps",
        items: [
          { label: "iOS app", href: "https://apps.apple.com/app/runway-ai-video-photo-maker/id1665024375", external: true },
          { label: "Android app", href: "https://play.google.com/store/apps/details?id=com.runwayml.prod", external: true },
          { label: "ChatGPT Plugin", href: "/mcp", description: "Runway inside ChatGPT." },
          { label: "MCP", href: "/mcp", description: "Connect Runway to your agent." },
          { label: "Login", href: "/login" },
        ],
      },
    ],
    featured: {
      title: "Gen-4.5",
      body: "The world's best video model, with state-of-the-art motion and visual fidelity.",
      href: "/research/introducing-runway-gen-4-5",
      cta: "Read the research",
    },
  },
  {
    label: "Dev",
    href: "/api",
    columns: [
      {
        title: "Platform",
        items: [
          { label: "Overview", href: "/api", description: "One API for production media." },
          { label: "Models", href: "/api#models", description: "Best-in-class models, day one." },
          { label: "Model Router", href: "/api#router", description: "Cost, quality or latency." },
          { label: "Workflows", href: "/workflows", description: "Custom endpoints at scale." },
          { label: "Recipes", href: "/api#recipes", description: "Runway expertise, packaged." },
          { label: "Characters", href: "/api#characters", description: "Live conversational agents." },
        ],
      },
      {
        title: "Build",
        items: [
          { label: "Get API key", href: "https://dev.runwayml.com/", external: true },
          { label: "Documentation", href: "https://docs.dev.runwayml.com/", external: true },
          { label: "Pricing", href: "/pricing?tab=dev" },
          { label: "Enterprise", href: "/enterprise" },
        ],
      },
    ],
    featured: {
      title: "Runway Dev",
      body: "The AI media platform for developers to build with the best models from Runway and other labs.",
      href: "/api",
      cta: "Explore the platform",
    },
  },
  {
    label: "Robotics",
    href: "/product/robotics",
    columns: [
      {
        title: "Runway Robotics",
        items: [
          { label: "Overview", href: "/product/robotics", description: "Robot policies from video pretraining." },
          { label: "Praxis-1", href: "/product/robotics#praxis-1", description: "Open-weight world action model." },
          { label: "Research", href: "/product/robotics#research" },
          { label: "Get access", href: "/product/robotics/contact", description: "Plan a deployment with our team." },
        ],
      },
    ],
    featured: {
      title: "Praxis-1",
      body: "Open weights under Apache 2.0, with inference and fine-tuning code on GitHub.",
      href: "/product/robotics",
      cta: "Learn more",
    },
  },
  {
    label: "Research",
    href: "/research",
    columns: [
      {
        title: "Research",
        items: [
          { label: "Research Hub", href: "/research" },
          { label: "Research News", href: "/news?filter=research" },
          { label: "Publications", href: "/research#publications" },
          { label: "RNA Sessions", href: "/research#rna-sessions", description: "Talks on frontier AI and art." },
        ],
      },
      {
        title: "Models",
        items: [
          { label: "GWM-1", href: "/research#gwm-1" },
          { label: "Gen-4.5", href: "/research#gen-4-5" },
          { label: "Aleph 2.0", href: "/product#models" },
          { label: "Ruby", href: "/product#models" },
          { label: "General World Models", href: "/research#general-world-models" },
        ],
      },
    ],
    featured: {
      title: "GWM-1",
      body: "A state-of-the-art General World Model built to interact with the real world.",
      href: "/research",
      cta: "See the research",
    },
  },
  {
    label: "Resources",
    href: "/resources",
    columns: [
      {
        title: "Learn",
        items: [
          { label: "Resource Hub", href: "/resources" },
          { label: "Academy", href: "https://academy.runwayml.com/", external: true },
          { label: "Help Center", href: "https://help.runwayml.com/hc/en-us", external: true },
          { label: "News", href: "/news" },
          { label: "Changelog", href: "https://help.runwayml.com/hc/en-us/sections/44244547844115-Release-Notes", external: true },
        ],
      },
      {
        title: "Community",
        items: [
          { label: "Meetups", href: "https://lu.ma/runway", external: true },
          { label: "AI Festival", href: "https://aiff.runwayml.com/", external: true },
          { label: "Gen:48", href: "https://gen48.runwayml.com/", external: true },
          { label: "Studios", href: "https://runwayml.com/studios", external: true },
          { label: "Creative Partners Program", href: "https://runwayml.com/creative-partners-program", external: true },
          { label: "Runway Builders", href: "https://runwayml.com/builders", external: true },
        ],
      },
    ],
    featured: {
      title: "Resource Hub",
      body: "Guides and playbooks for prompting, production and scaling creative work.",
      href: "/resources",
      cta: "Browse resources",
    },
  },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Pricing", href: "/pricing" },
];

export type FooterColumn = { title: string; items: LinkItem[] };

/** Footer information architecture, as it appears on runway.com. */
export const footerColumns: FooterColumn[] = [
  {
    title: "Creative",
    items: [
      { label: "Overview", href: "/product" },
      { label: "Agent", href: "/product#agent" },
      { label: "Android app", href: "https://play.google.com/store/apps/details?id=com.runwayml.prod", external: true },
      { label: "iOS app", href: "https://apps.apple.com/app/runway-ai-video-photo-maker/id1665024375", external: true },
      { label: "ChatGPT Plugin", href: "/mcp" },
      { label: "MCP", href: "/mcp" },
      { label: "Use Cases", href: "/solutions" },
      { label: "Pricing", href: "/pricing" },
      { label: "Team Plan", href: "/pricing#team" },
      { label: "Login", href: "/login" },
    ],
  },
  {
    title: "Dev",
    items: [
      { label: "Platform", href: "/api" },
      { label: "Models", href: "/api#models", external: true },
      { label: "Model Router", href: "/api#router", external: true },
      { label: "Workflows", href: "/workflows" },
      { label: "Recipes", href: "/api#recipes", external: true },
      { label: "Characters", href: "/api#characters", external: true },
      { label: "Documentation", href: "https://docs.dev.runwayml.com/", external: true },
      { label: "Pricing", href: "/pricing?tab=dev" },
    ],
  },
  {
    title: "Robotics",
    items: [
      { label: "Overview", href: "/product/robotics" },
      { label: "Get Access", href: "/product/robotics/contact" },
      { label: "Praxis-1", href: "/product/robotics#praxis-1" },
    ],
  },
  {
    title: "Enterprise",
    items: [
      { label: "Overview", href: "/enterprise" },
      { label: "Data Security", href: "/data-security" },
      { label: "Customer Stories", href: "/news?filter=customers" },
      { label: "For Education", href: "https://runwayml.com/educators", external: true },
      { label: "Contact Sales", href: "/enterprise-contact" },
    ],
  },
  {
    title: "Research",
    items: [
      { label: "Research Hub", href: "/research" },
      { label: "Research News", href: "/news?filter=research" },
      { label: "Publications", href: "/research#publications" },
      { label: "Gen-4.5", href: "/research#gen-4-5" },
      { label: "Aleph 2.0", href: "/product#models" },
      { label: "Ruby", href: "/product#models" },
      { label: "Act-Two", href: "/product#models" },
      { label: "Solaris", href: "/research#publications" },
      { label: "Robotics", href: "/product/robotics" },
      { label: "World Simulation", href: "/research#general-world-models" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Academy", href: "https://academy.runwayml.com/", external: true },
      { label: "Help Center", href: "https://help.runwayml.com/hc/en-us", external: true },
      { label: "Resource Hub", href: "/resources" },
      { label: "News", href: "/news" },
      { label: "Changelog", href: "https://help.runwayml.com/hc/en-us/sections/44244547844115-Release-Notes", external: true },
      { label: "Meetups", href: "https://lu.ma/runway", external: true },
    ],
  },
  {
    title: "Events & Programs",
    items: [
      { label: "AI Festival", href: "https://aiff.runwayml.com/", external: true },
      { label: "AI Summit 2026", href: "https://aiff.runwayml.com/", external: true },
      { label: "Gen:48", href: "https://gen48.runwayml.com/", external: true },
      { label: "Studios", href: "https://runwayml.com/studios", external: true },
      { label: "Creative Partners Program", href: "https://runwayml.com/creative-partners-program", external: true },
      { label: "Runway Builders", href: "https://runwayml.com/builders", external: true },
      { label: "Runway Rewards", href: "https://runwayml.com/rewards", external: true },
      { label: "Talent Network", href: "https://jobs.ashbyhq.com/runway-ml", external: true },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Safety", href: "/safety" },
      { label: "Verify Content Credentials", href: "/safety/verify" },
      { label: "Brand Guidelines", href: "/brand-guidelines" },
      { label: "Press", href: "mailto:press@runwayml.com", external: true },
      { label: "Partnerships", href: "/enterprise-contact" },
    ],
  },
];

export const footerLegal: LinkItem[] = [
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "California Notices", href: "/california-notices" },
  { label: "Your Privacy Choices", href: "/privacy-policy#residents-of-california" },
  { label: "Cookie Settings", href: "#cookie-settings" },
  { label: "Code of Conduct", href: "/coc" },
  { label: "System Status", href: "https://status.runwayml.com/", external: true },
];

export const promoBanner = {
  message: "Enterprises get up to 2 months of usage free. Sign by 12/31.",
  termsHref: "https://runway.com/code-terms/enterprise-bonus-terms",
  ctaLabel: "Contact sales",
  ctaHref: "/enterprise-contact",
};

export const appBanner = {
  title: "Create anything, anytime.",
  ctaLabel: "Try app",
  href: "https://apps.apple.com/app/runway-ai-video-photo-maker/id1665024375",
};
