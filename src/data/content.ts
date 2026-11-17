export type Model = { name: string; kind: "video" | "image" | "audio" | "language" };

/** Models listed on the live product page (November 2026 snapshot). */
export const models: Model[] = [
  { name: "Gen-4.5", kind: "video" },
  { name: "Seedance 2.0", kind: "video" },
  { name: "Kling 3.0", kind: "video" },
  { name: "Nano Banana 2.1", kind: "image" },
  { name: "Seedream 5.0", kind: "image" },
  { name: "Gemini Omni", kind: "video" },
  { name: "Nano Banana Pro", kind: "image" },
  { name: "Seedance 2.5", kind: "video" },
  { name: "Claude Opus 5.5", kind: "language" },
  { name: "Wan 3.0", kind: "video" },
  { name: "FLUX.3", kind: "image" },
  { name: "Eleven v4", kind: "audio" },
];

export const platforms = [
  {
    id: "creative",
    name: "Runway Creative",
    headline: "Your complete Creative Suite with everything you need, to make anything you want.",
    body: "An all-in-one cloud-based creative platform that offers endless ways to generate and edit video, images and audio in one workspace. Built for individuals and teams of all sizes.",
    note: "Used by 60m+ creatives around the world. Try free, cancel anytime.",
    links: [
      { label: "Try now", href: "/signup", primary: true },
      { label: "Learn more", href: "/product" },
      { label: "For Enterprise", href: "/enterprise" },
    ],
  },
  {
    id: "dev",
    name: "Runway Dev",
    headline: "The AI media platform for developers to build with the best models from Runway and other labs.",
    body: "The API platform with Runway's expertise built in. Access the best models and the creative tooling to easily get production-ready output from them, at scale.",
    links: [
      { label: "Get API Key", href: "https://dev.runwayml.com/", external: true, primary: true },
      { label: "View documentation", href: "https://docs.dev.runwayml.com/", external: true },
      { label: "For Enterprise", href: "/enterprise" },
    ],
  },
  {
    id: "robotics",
    name: "Runway Robotics",
    headline: "Robot policies built on video pretraining.",
    body: "Start with Praxis-1, our state-of-the-art world action model, available to everyone with open weights under the Apache 2.0 license. Fine-tune it on your embodiment and run it on your own hardware.",
    links: [
      { label: "Learn more", href: "/product/robotics", primary: true },
      { label: "Contact Sales", href: "/product/robotics/contact" },
    ],
  },
];

export const creativeCapabilities = [
  { label: "How Runway is Used", description: "Advertising, film, VFX, gaming and design teams compressing production timelines." },
  { label: "Create with Agent", description: "Describe the video you want. Runway plans shots, generates and assembles the edit." },
  { label: "Build your own Workflows", description: "Chain models, prompts and modalities into node-based pipelines you can rerun." },
  { label: "Enterprise-grade", description: "SOC 2 Type II, SSO, custom permissions and no training on your data." },
  { label: "The World's Best Models", description: "Runway models alongside Seedance, Kling, Gemini and more in one workspace." },
];

export const latestTools = [
  {
    title: "Runway Plugins",
    description: "Generate, edit and extend footage inside Premiere Pro and After Effects.",
    href: "/news?filter=company",
    cta: "Try now",
  },
  {
    title: "Runway MCP",
    description: "Connect Runway to your agent — Claude, ChatGPT and more.",
    href: "/mcp",
    cta: "Try now",
  },
  {
    title: "Aleph 2.0 & Edit Studio",
    description: "Edit a frame in a video, apply it to the rest of the video.",
    href: "/product#models",
    cta: "Try now",
  },
  {
    title: "Runway Agent",
    description: "Create end-to-end videos with simple conversations.",
    href: "/product#agent",
    cta: "Try now",
  },
  {
    title: "Characters: Real-time Video Agents",
    description: "Real-time AI video agents with natural conversation.",
    href: "/product#characters",
    cta: "Try now",
  },
  {
    title: "Seedance 2.5",
    description: "Use text, image, video or audio to generate videos.",
    href: "/product#models",
    cta: "Try now",
  },
  {
    title: "Multi-Shot Video App",
    description: "Write a simple prompt, get a multiple shots video.",
    href: "/product#apps",
    cta: "Try now",
  },
  {
    title: "Gen-4.5: Frontier Video Generation",
    description: "State-of-the-art motion quality and visual fidelity.",
    href: "/research#gen-4-5",
    cta: "Try now",
  },
];

export const creativeTools = [
  "Transform Video",
  "Mood Boards",
  "Virtual Staging",
  "Character Performance",
  "Virtual Try-On",
  "Design Explorations",
  "Storyboarding",
  "Animatics",
  "Generate Yourself",
  "Visual Effects",
];

export const apps = [
  { title: "Remove from Video", description: "Remove anything from any video with a simple prompt." },
  { title: "Reshoot Product", description: "Transform product shots without reshooting. Just upload and describe." },
  { title: "Upscale Video", description: "Enhance any video to higher resolution with one click." },
  { title: "Add Dialogue", description: "Bring characters to life by typing what they should say." },
  { title: "Change Image Style", description: "Reimagine any image in different styles and artistic moods." },
  { title: "Add Performance", description: "Map your voice and expressions onto any image or character." },
  { title: "Change Backdrop", description: "Transform the background in any video." },
  { title: "Change Time of Day", description: "Adjust the time of the day in any video." },
  { title: "Relight Scene", description: "Change the lighting in any video instantly." },
];

export type ResearchPost = {
  title: string;
  date: string;
  authors: string;
  summary: string;
  slug: string;
  kind: "paper" | "announcement";
};

/** Research listings captured from runway.com/research (November 2026). */
export const researchPosts: ResearchPost[] = [
  {
    title: "Praxis-1: From Video Pretraining to Robot Control",
    date: "November 11, 2026",
    authors: "by Runway",
    summary:
      "With Praxis-1, we turn a 27B-parameter video foundation model into an open weight world model that predicts the future in short chunks. A small action expert reads the video model's internal state as it imagines what comes next. Each time the robot acts, Praxis-1 predicts both what the scene will look like and the motion that will get it there.",
    slug: "/product/robotics",
    kind: "paper",
  },
  {
    title: "GWM Worlds 2",
    date: "September 3, 2026",
    authors: "by Runway",
    summary:
      "GWM Worlds 2 turns high-fidelity video and audio generation into real-time interactive simulation. You define a world — its environment, subjects, visual style, physical rules and ambience — then steer it with free-form text actions and continuous camera motion, generating continuous 720p video at 24 fps and audio at 48,000 Hz that responds to your inputs as you explore.",
    slug: "/research#gwm-1",
    kind: "paper",
  },
  {
    title: "Solaris: Towards Interfaces That Are Generated, Not Coded",
    date: "September 1, 2026",
    authors: "by Yuval Alaluf, Omri Avrahami, Anastasis Germanidis + 20 authors",
    summary:
      "Digital interfaces are traditionally implemented through intermediate representations such as code, requiring their appearance and behavior to be specified in advance. We introduce Solaris, an interface world model that instead generates an interactive UI directly, frame by frame, in response to user actions.",
    slug: "/research#publications",
    kind: "paper",
  },
  {
    title: "Introducing Praxis-1",
    date: "September 30, 2026",
    authors: "by Runway",
    summary:
      "An open-weight world action model that turns Runway's video pretraining into control for real robots.",
    slug: "/product/robotics#praxis-1",
    kind: "announcement",
  },
];

export const researchPillars = [
  {
    id: "gwm-1",
    title: "GWM-1",
    body: "A state-of-the-art General World Model built to interact with the real world. And a major step towards universal simulation.",
    href: "/research#publications",
  },
  {
    id: "gen-4-5",
    title: "Gen-4.5",
    body: "The world's best video model, featuring state-of-the-art motion quality, prompt adherence and visual fidelity.",
    href: "/research#publications",
  },
  {
    id: "general-world-models",
    title: "General World Models",
    body: "Our long-term research effort to build AI systems that understand the visual world and its dynamics.",
    href: "/research#publications",
  },
];

export const newsItems = [
  {
    title: "Runway Ads Is Generally Available",
    excerpt:
      "Runway Ads is now on every paid plan. Connect Meta, Google and TikTok, generate on-brand variants of your top ads and publish the ones your team approves.",
    category: "Company News",
    date: "November 2026",
    href: "/news?filter=company",
  },
  {
    title: "Praxis-1 Is Now Available",
    excerpt:
      "Praxis-1, Runway's world action model for robotics, is now available with open weights under Apache 2.0. Download it on Hugging Face and GitHub.",
    category: "Company News",
    date: "November 2026",
    href: "/news?filter=company",
  },
  {
    title: "Introducing Runway App Studio",
    excerpt:
      "App Studio lets you build custom creative apps inside Runway with no code. Describe the tool you need, then share it with your team or anyone on Runway.",
    category: "Company News",
    date: "October 2026",
    href: "/news?filter=company",
  },
  {
    title: "Runway Dev is in Claude Code, Codex and Cursor",
    excerpt:
      "Runway's developer platform now ships as a plugin for the coding agents teams already use, so integrations are built and maintained in the editor.",
    category: "Developers",
    date: "October 2026",
    href: "/news?filter=developers",
  },
  {
    title: "Introducing Runway Media Router",
    excerpt:
      "Set a preference for cost, latency or quality, and the platform routes every request to the best model automatically.",
    category: "Company News",
    date: "September 2026",
    href: "/news?filter=company",
  },
  {
    title: "The AI Media Report: Cost, Speed and What Comes Next",
    excerpt:
      "A look at how production costs and timelines shift when generative media becomes part of the pipeline.",
    category: "Company News",
    date: "September 2026",
    href: "/news?filter=company",
  },
  {
    title: "Introducing Runway GWM-1",
    excerpt:
      "A state-of-the-art General World Model, built to simulate reality in real time: interactive, controllable and general-purpose.",
    category: "Research",
    date: "September 2026",
    href: "/research#gwm-1",
  },
  {
    title: "Introducing Runway Gen-4.5",
    excerpt:
      "The world's top-rated video model, offering unprecedented visual fidelity and precise creative control.",
    category: "Research",
    date: "August 2026",
    href: "/research#gen-4-5",
  },
];

export const customerStories = [
  {
    client: "House of David",
    line: "How “House of David” Used Runway to Become Amazon's Latest Hit Series",
    href: "/news?filter=customers",
  },
  {
    client: "Eggplant Picture & Sound",
    line: "How Eggplant Picture & Sound transformed History Channel's “Life After People” with Runway",
    href: "/news?filter=customers",
  },
  {
    client: "Under Armour",
    line: "Behind the Scenes of an Under Armour TV Commercial, Powered by Runway",
    href: "/news?filter=customers",
  },
  {
    client: "upperfast",
    line: "How upperfast Brought UNHCR's FIFA World Cup Film to Life With Runway",
    href: "/news?filter=customers",
  },
  {
    client: "Salomon",
    line: "Inside Salomon's Latest Global Brand Campaign, Built on Runway",
    href: "/news?filter=customers",
  },
  {
    client: "Silverside AI",
    line: "How Silverside AI Builds Coca-Cola's Best Ads for 65% Less",
    href: "/news?filter=customers",
  },
];

export const partnerLogos = [
  "Lionsgate",
  "Getty Images",
  "Tribeca",
  "Canva",
  "CBS",
  "Musixmatch",
  "Media.Monks",
  "Publicis",
];

export const resources = [
  {
    title: "Can AI generate cinematic video",
    description: "Which models do it, how to prompt for a cinematic look and where filmmakers still step in.",
    kind: "Resource",
    date: "October 26, 2026",
  },
  {
    title: "Content creation tools",
    description: "Tailor the tools you use to the job you're trying to do.",
    kind: "Resource",
    date: "October 19, 2026",
  },
  {
    title: "Sketch to render AI",
    description:
      "Learn how to turn sketches, CAD elevations and 3D model views into polished architectural renders while preserving geometry, composition and design intent.",
    kind: "Resource",
    date: "October 19, 2026",
  },
  {
    title: "AI UGC: what it is, when it works and what still needs a real customer",
    description: "Where synthetic creators help, and where audiences still expect a human.",
    kind: "Resource",
    date: "October 19, 2026",
  },
  {
    title: "UGC campaigns: a guide for brands and creators",
    description: "How to plan a creator-style campaign that survives platform review.",
    kind: "Resource",
    date: "October 19, 2026",
  },
  {
    title: "Social media video editing software: what matters most before you pick one",
    description: "A checklist for choosing an editor your team will actually keep using.",
    kind: "Resource",
    date: "October 12, 2026",
  },
  {
    title: "Real estate social media marketing: how to turn one listing into a week of content",
    description: "One shoot, seven posts, no extra crew.",
    kind: "Resource",
    date: "October 12, 2026",
  },
  {
    title: "Video prototyping: how to test a concept before full production",
    description: "Validate a look, a pace and a story before money is on the table.",
    kind: "Resource",
    date: "October 12, 2026",
  },
  {
    title: "How to turn an image into a 3D model",
    description: "From a single still to a usable asset.",
    kind: "Resource",
    date: "October 12, 2026",
  },
  {
    title: "Why do AI images look weird? How to fix the most common causes",
    description: "Hands, text, symmetry and the prompts that make them worse.",
    kind: "Resource",
    date: "October 12, 2026",
  },
  {
    title: "AI camera control: 5 ways to direct shots for video generation",
    description: "Camera language that models understand.",
    kind: "Resource",
    date: "October 12, 2026",
  },
  {
    title: "AI image cost: a 2026 pricing guide",
    description: "What a generation actually costs across models and resolutions.",
    kind: "Resource",
    date: "October 5, 2026",
  },
];

export const solutionsByNeed = [
  {
    title: "AI for Brainstorming and Ideation",
    body: "Use AI for brainstorming and ideation before committing to production. Test concepts, explore directions and align stakeholders faster than any traditional concepting process.",
    href: "/product",
  },
  {
    title: "AI for Content Creation",
    body: "Generate production-ready assets from scratch. Create video content for YouTube, TikTok, Instagram and marketing campaigns that would be expensive or impossible to shoot.",
    href: "/product",
  },
  {
    title: "Enhancement & Editing",
    body: "Transform and elevate your existing content. Add effects, extend footage, and polish your visuals.",
    href: "/workflows",
  },
  {
    title: "AI Marketing Video Generator",
    body: "Scale marketing campaigns and adapt video content for every channel. Generate more variations, repurpose existing footage and produce AI marketing content in a fraction of the time.",
    href: "/enterprise",
  },
];

export const solutionsByIndustry = [
  {
    title: "Media and Entertainment",
    body: "AI-powered tools for film, TV, and content production that help you visualize concepts, create impossible shots, and bring stories to life faster than ever.",
    href: "/enterprise",
  },
  {
    title: "Marketing and Advertising",
    body: "Generate concept mockups, produce campaign variations, and create compelling content at the speed of your ideas. Scale your creative output without scaling your team.",
    href: "/enterprise",
  },
  {
    title: "Product and Design",
    body: "Visualize product concepts, iterate on designs and generate compelling product videos before physical prototyping.",
    href: "/product",
  },
  {
    title: "Professional Services and Agencies",
    body: "Create compelling presentations, visualize client proposals, and produce high-quality content that sets you apart. Deliver more value in less time.",
    href: "/enterprise",
  },
  {
    title: "Gaming and Interactive",
    body: "Runway gives game teams creative freedom at every stage — no mocap studio, no outsourced pipeline, just ideas made playable.",
    href: "/product",
  },
  {
    title: "Education",
    body: "Give students hands-on experience with cutting-edge AI tools. Create engaging educational content and bring concepts to life in ways traditional methods cannot.",
    href: "/resources",
  },
  {
    title: "Architecture and Design",
    body: "From concept to client-ready, Runway gives architecture and design teams the tools to animate renders, visualize spaces, and win pitches — in hours, not weeks.",
    href: "/product",
  },
  {
    title: "Fashion",
    body: "From moodboards to campaign-ready content, Runway gives fashion teams the tools to visualize collections, create virtual try-ons, and produce editorial content at the speed of the season.",
    href: "/product",
  },
];

export const featuredWorkflows = [
  "Image Style Generator",
  "Image Variations",
  "Storyboard Creator",
  "Virtual Try On",
  "Custom Instructions Workshop",
  "Image to Text",
  "Hair Salon",
  "Animatic Generator",
  "Style Blend",
];
