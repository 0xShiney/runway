export type Plan = {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number | null;
  priceYearly: number | null;
  priceLabel?: string;
  credits: string;
  creditsDetail: string;
  cta: string;
  ctaHref: string;
  badge?: string;
  highlight?: boolean;
  features: Array<{ text: string; isNew?: boolean }>;
};

/** Pricing captured from https://runway.com/pricing on 2026-11-16. */
export const pricingSnapshotDate = "November 16, 2026";

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "For exploring what's possible",
    priceMonthly: 0,
    priceYearly: 0,
    priceLabel: "Free",
    credits: "125 credits (one time)",
    creditsDetail: "A one-time credit deposit that doesn't expire.",
    cta: "Start Free",
    ctaHref: "/signup",
    features: [
      { text: "Includes 125 credits (one time)" },
      { text: "A selection of generative creative models to test concepts" },
      { text: "5GB asset storage" },
    ],
  },
  {
    id: "standard",
    name: "Standard",
    tagline: "For curious creators trying AI video",
    priceMonthly: 15,
    priceYearly: 12,
    credits: "625 credits /mo",
    creditsDetail: "625 credits monthly = 52s of Gen-4.5, 104s of Gen-4 Turbo, or 78 Gen-4 Images (1080p).",
    cta: "Get Standard",
    ctaHref: "/signup?plan=standard",
    features: [
      { text: "Access to all AI video & image models" },
      { text: "Agentic creative collaborator" },
      { text: "Build creative apps in App Studio", isNew: true },
      { text: "Generate, test and publish ads with Runway Ads", isNew: true },
      { text: "Parallel generations: 5 videos & images" },
      { text: "Music, voice & sound effects generation" },
      { text: "Up to 3 projects" },
      { text: "No watermarks" },
      { text: "4K upscaling" },
      { text: "20GB storage" },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For creators leveling up their craft",
    priceMonthly: 35,
    priceYearly: 28,
    credits: "2,250 credits /mo",
    creditsDetail: "2,250 credits monthly = 187s of Gen-4.5, 375s of Gen-4 Turbo, or 281 Gen-4 Images (1080p).",
    cta: "Get Pro",
    ctaHref: "/signup?plan=pro",
    badge: "Popular",
    highlight: true,
    features: [
      { text: "Access to all AI video & image models" },
      { text: "Agentic creative collaborator" },
      { text: "Build creative apps in App Studio", isNew: true },
      { text: "Generate, test and publish ads with Runway Ads", isNew: true },
      { text: "Parallel generations: 15 videos & images" },
      { text: "Up to 5 projects" },
      { text: "1 Brand Kit" },
      { text: "1 custom voice clone" },
      { text: "Top-up credits anytime" },
      { text: "Runway MCP" },
      { text: "Unlimited 4K video upscaling" },
      { text: "100GB storage" },
    ],
  },
  {
    id: "max",
    name: "Max",
    tagline: "Best value for heavy solo usage",
    priceMonthly: 95,
    priceYearly: 76,
    credits: "9,500 credits /mo",
    creditsDetail:
      "9,500 credits = 791s of Gen-4.5, 791s of Gen-4, 1,900s of Gen-4 Turbo, 1,187 Gen-4 Images (1080p), or 475 Nano Banana Pro images (2K).",
    cta: "Get Max",
    ctaHref: "/signup?plan=max",
    badge: "Best value",
    features: [
      { text: "Early access to new models" },
      { text: "Agentic creative collaborator" },
      { text: "Build creative apps in App Studio", isNew: true },
      { text: "Generate, test and publish ads with Runway Ads", isNew: true },
      { text: "Parallel generations: 20 videos & images" },
      { text: "Roll over unused credits for 1 month" },
      { text: "Up to 10 projects" },
      { text: "Up to 3 Brand Kits" },
      { text: "Up to 3 custom voice clones" },
      { text: "Runway MCP" },
      { text: "Studio-grade quality generations: HDR, ProRes, image sequences" },
      { text: "Unlimited 4K video upscaling" },
      { text: "500GB storage" },
    ],
  },
];

export const comparisonGroups = [
  {
    group: "AI video",
    rows: [
      { model: "Gen-4.5", unit: "60 credits/5s", standard: "125 videos", pro: "450 videos", max: "1,900 videos" },
      { model: "Aleph 2.0", unit: "140 credits/5s", standard: "53 videos", pro: "192 videos", max: "814 videos" },
      { model: "Kling 4.0 1080p", unit: "89 credits/5s", standard: "84 videos", pro: "303 videos", max: "1,280 videos" },
      { model: "Seedance 2.0 Pro 1080p", unit: "160 credits/4s", standard: "46 videos", pro: "168 videos", max: "712 videos" },
    ],
  },
  {
    group: "AI image",
    rows: [
      { model: "Gen-4 Image 1080p", unit: "8 credits/image", standard: "937 images", pro: "3,375 images", max: "14,250 images" },
      { model: "Gen-4 Image Turbo", unit: "2 credits/image", standard: "3,750 images", pro: "13,500 images", max: "57,000 images" },
      { model: "Nano Banana Pro 2K", unit: "11 credits/image", standard: "681 images", pro: "2,454 images", max: "10,363 images" },
      { model: "Nano Banana Pro 2K", unit: "20 credits/image", standard: "375 images", pro: "1,350 images", max: "5,700 images" },
    ],
  },
  {
    group: "AI audio",
    rows: [
      { model: "Seed Audio 1.0", unit: "15 credits/min", standard: "500 minutes", pro: "1,800 minutes", max: "7,600 minutes" },
      { model: "Lyria 3 Pro", unit: "8 credits/song", standard: "937 songs", pro: "3,375 songs", max: "14,250 songs" },
      { model: "Lyria 3 Clip", unit: "4 credits/song", standard: "1,875 songs", pro: "6,750 songs", max: "28,500 songs" },
      { model: "Text to Speech", unit: "1 credit/50 chars", standard: "375,000 characters", pro: "1,350,000 characters", max: "5,700,000 characters" },
    ],
  },
];

export const pricingFaq = [
  {
    question: "Can I change my plan after subscribing?",
    answer:
      "Yes. You can upgrade, downgrade or cancel at any time from your account settings. Changes take effect at the start of your next billing period, and unused credits follow the rules of the plan you move to.",
  },
  {
    question: "How do credits work?",
    answer:
      "Credits are the unit you spend to generate images, video, and audio on Runway. Each model uses a set number of credits per generation depending on the model, duration, and resolution — for example, Gen-4.5 uses 12 credits per second of generated video. Paid plans include a monthly credit allotment, and the Free plan includes a one-time deposit of 125 credits that doesn't expire.",
  },
  {
    question: "What's the difference between monthly and yearly billing?",
    answer:
      "Yearly billing is discounted by up to 20% compared to paying month to month. Yearly plans are paid upfront for the full year and renew automatically until cancelled.",
  },
  {
    question: "Do unused credits roll over?",
    answer:
      "Max plans roll unused credits over for one month. Standard and Pro plans reset each billing period; you can top up credits at any time.",
  },
  {
    question: "Can I use what I make commercially?",
    answer:
      "Yes. On paid plans you own your outputs and can use them commercially, subject to the Terms of Use and Usage Policy. Free plan outputs include a watermark.",
  },
  {
    question: "Do you offer team or enterprise plans?",
    answer:
      "Yes. Team Plan adds shared workspaces, centralized billing and brand controls. Enterprise adds SSO, custom access and permissions, SOC 2 Type II, zero data retention options, and dedicated support.",
  },
];

export const teamPlan = {
  title: "Runway for teams",
  body: "Bring your whole team into one workspace with shared projects, brand kits, centralized billing and admin controls.",
  features: [
    "Shared workspaces and projects",
    "Centralized billing and seat management",
    "Brand Kits and custom voice clones",
    "Admin controls and usage visibility",
    "Priority support",
  ],
};
