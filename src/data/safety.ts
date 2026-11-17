export type Safeguard = { title: string; body: string; href?: string; linkLabel?: string };

export const safeguards: Array<{ phase: string; items: Safeguard[] }> = [
  {
    phase: "Prevent",
    items: [
      {
        title: "Usage policy",
        body: "This policy sets the foundation for all of our safety work.",
        href: "/safety/usage-policy",
        linkLabel: "This policy",
      },
      {
        title: "Model-Level Safeguards",
        body: "We build safety directly into model behavior, filtering data before training and applying post-training techniques to teach our models to avoid generating certain types of harmful content.",
      },
      {
        title: "Red Teaming",
        body: "We subject our models to rigorous adversarial testing—both automated and manual—before launch to identify risks and understand how products could be misused.",
      },
      {
        title: "Product-Level Safeguards",
        body: "We build safety mitigations directly into the product.",
      },
    ],
  },
  {
    phase: "Detect",
    items: [
      {
        title: "Input & output detection",
        body: "We use AI-based classifiers to analyze user inputs and generated outputs to catch potentially harmful content before it reaches users.",
      },
      {
        title: "Human review",
        body: "We review user reports and suspension appeals, catching what automated systems may miss or get wrong, and continuously improve our filters.",
        href: "/safety/usage-policy",
        linkLabel: "user reports",
      },
      {
        title: "Continuous monitoring",
        body: "We actively track usage trends, how the industry is evolving and shifts in the risk landscape to ensure our safeguards are keeping pace.",
      },
    ],
  },
  {
    phase: "Enforce",
    items: [
      {
        title: "Account enforcement",
        body: "We use systematic tooling to identify and remove bad actors, including automatic suspensions for users who repeatedly trigger moderation systems or upload unlawful content.",
      },
    ],
  },
  {
    phase: "Transparency",
    items: [
      {
        title: "Provenance signals",
        body: "We implement C2PA so that AI-generated content can be traced back to its source.",
        href: "/safety/verify",
        linkLabel: "Verify content credentials",
      },
    ],
  },
];

export const usagePolicySections = [
  {
    id: "childrens-safety",
    title: "Children's Safety",
    intro: "We prohibit the following:",
    items: [
      "Content that depicts, facilitates, or promotes child sexual abuse or the sexualization of children. We report any child sexual abuse material (CSAM) that we become aware of to the National Center for Missing and Exploited Children (NCMEC), which works with global law enforcement agencies around the world, and we indefinitely suspend all associated accounts.",
      "Content that facilitates minor grooming, including generating content designed to impersonate a minor",
      "Content depicting child abuse or minor participation in harmful or dangerous acts",
    ],
    outro:
      "We also apply a stricter standard for potential harmful and inappropriate content (as outlined below) when a child is depicted.",
  },
  {
    id: "violence-and-gore",
    title: "Violence & Gore",
    intro: "We prohibit the following:",
    items: [
      "Content that depicts, facilitates, or promotes terrorism or violent extremism",
      "Graphic violence or content that incites violence towards humans or animals",
      "Gore, such as dismemberment, beheadings, mutilations, and exposed organs/bones/muscle",
    ],
  },
  {
    id: "sexually-explicit-content-and-nudity",
    title: "Sexually Explicit Content & Nudity",
    intro: "We prohibit the following:",
    items: [
      "Sexually explicit content, including sex toys and certain fetish content",
      "Adult nudity",
      "Attempts to create or modify non-consensual intimate imagery (NCII)",
      "In some cases, we limit sexually suggestive content, including content featuring underwear or lingerie",
    ],
  },
  {
    id: "hateful-conduct-harassment-and-self-harm",
    title: "Hateful Conduct, Harassment, and Self-Harm",
    intro: "We prohibit the following:",
    items: [
      "Content that dehumanizes or promotes discrimination or violence on the basis of a protected attribute such as race, ethnicity, religion, gender, or sexual orientation",
      "Use of the service to create content with the aim of harassing, bullying, intimidating, defaming, or abusing others",
      "Content that depicts, facilitates, or promotes self-harm, including disordered eating",
    ],
  },
  {
    id: "content-that-may-violate-the-rights-of-others",
    title: "Content that May Violate the Rights of Others",
    intro: "We prohibit the following:",
    items: [
      "Use of an image, video, or audio of another person without their permission",
      "Content that compromises the privacy of others",
      "Content that may violate intellectual property rights",
      "Attempts to create content in the style of a known, living artist",
    ],
  },
  {
    id: "misleading-content",
    title: "Misleading Content",
    intro: "We prohibit the following:",
    items: [
      "Use of the service to defraud, scam, or deliberately mislead others",
      "Use of the service to impersonate an individual or entity, or to misrepresent your affiliation with an individual or entity",
    ],
  },
  {
    id: "additional-character-policies",
    title: "Additional Character Policies",
    intro: "The policies outlined above apply to Runway Characters. We also prohibit the following in this product:",
    items: [
      "Characters based on the face or voice of a person under the age of 18.",
      "Characters that are intended to engage users under the age of 18, including narrative elements or visual styles intended for children",
      "Characters that are intended to provide medical, legal, or financial advice or mimic professional therapeutic or counseling interventions.",
    ],
    outro:
      "This list is not exhaustive, and these policies will continue to evolve over time as our products and their use changes.",
  },
];

export const securityPillars = [
  { title: "We don't train on your data", body: "Customer content is excluded from model training by default." },
  { title: "SOC 2 Type 2", body: "Independently audited controls across security and availability." },
  { title: "Customizable access & permissions", body: "Role-based controls, workspaces and audit visibility." },
  { title: "Full ownership of your outputs", body: "You own what you create and can use it commercially." },
  { title: "Single Sign On (SSO)", body: "SAML and OIDC integrations for identity providers." },
];
