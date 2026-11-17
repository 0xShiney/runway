export type Job = {
  title: string;
  department: string;
  location: string;
  applyUrl: string;
};

export type JobDepartment = {
  name: string;
  jobs: Job[];
};

/**
 * Snapshot of Runway's public Ashby job board, retrieved from
 * https://runway.com/careers on 2026-11-16. Listings change frequently; this
 * reconstruction presents the captured snapshot and links every application
 * to the original Ashby posting.
 */
export const jobsSnapshotDate = "November 16, 2026";

const roles: Array<[string, string, string, string]> = [
  ["AI Engagement Manager", "Commercial", "New York, NY / Remote", "37be5175-5a9a-4bee-9b5e-fb475350806b"],
  ["Enterprise/Sr. Enterprise Account Executive", "Commercial", "Remote / New York, NY", "0a79e4be-d7ea-4d43-9400-33a23f552b81"],
  ["General Manager, Japan", "Commercial", "Japan / Remote", "5d5a91ae-b091-425c-96b5-2d4a88d0c796"],
  ["Business Development Representative", "Commercial", "Remote / Seattle, WA / New York, NY", "928bc96e-1f23-42f7-8fce-b6530ee5e8d5"],
  ["VP/Director, Enterprise Revenue", "Commercial", "Remote / Denver, CO / New York, NY", "09442bd6-8749-45a0-bac3-cb4de65bc6f2"],
  ["Forward Deployed Engineer", "Commercial", "Remote / Seattle, WA / London", "d761c781-5291-461e-aa7a-d25b3165663b"],
  ["Mid-Market Account Executive, London", "Commercial", "London / Remote", "e20a834c-9efa-4a0d-ab63-3c123d0c7d41"],

  ["Support Specialist, Creative Enterprise Tier 3", "Customer Experience", "Remote", "f6e8f3fa-0440-484e-92f7-6ae2e67f1d07"],
  ["Support Specialist, US Tier 2", "Customer Experience", "Remote / Seattle, WA / New York, NY", "9f6d216d-2f54-4970-84d7-43ab0a2b4852"],
  ["Support Systems Engineer", "Customer Experience", "Remote / Seattle, WA / London", "9a9f687a-6d61-4ab5-8b26-c4d67d527560"],
  ["Support Specialist, APAC Tier 1", "Customer Experience", "Remote", "08d42c3a-7ac6-4576-ad4a-75a0d80bf0d6"],
  ["Support Specialist, US Tier 1", "Customer Experience", "Remote", "15b2fbc9-a6a4-4c87-84bb-527f6616cf7d"],

  ["Member of Technical Staff, Backend Engineer, API", "Engineering", "Remote", "8489a08a-f0cf-4418-968c-c7c803d538bc"],
  ["Engineering Manager, API", "Engineering", "Remote", "b5d136bb-4143-400b-914a-0ae7377ad8ed"],
  ["Senior/Staff Product Engineer", "Engineering", "Remote", "0feb8680-6573-458b-b00d-98aea86a94f5"],
  ["Member of Technical Staff, ML Platform (Evals)", "Engineering", "Remote", "9a5bef1b-cd54-4258-bb71-4dc7dfded54c"],
  ["Infrastructure Security Engineer", "Engineering", "Remote", "0c750d2f-f894-4c8d-8b47-f03ddbb794a6"],
  ["Detection & Response Engineer", "Engineering", "Remote", "06590ce3-fe8f-493f-8545-3f905c74f05f"],

  ["Strategic Finance", "Finance", "San Francisco, CA / Remote", "40598dd0-234b-4256-b2a2-91608b66b8aa"],

  ["Commercial Counsel / Senior Commercial Counsel", "Legal", "Remote / New York, NY / San Francisco, CA", "9e54a328-8bf2-4255-9358-7f26c5d1e7aa"],
  ["Counsel/Senior Counsel, Litigation", "Legal", "Remote / New York, NY / San Francisco, CA", "628c7415-5638-46e0-93c7-067522579e82"],
  ["Commercial Counsel Fellowship", "Legal", "Hybrid / New York, NY / San Francisco, CA", "f4aa3f24-a6ff-4168-97ef-7e9d140ee19e"],

  ["Creative Workflow Architect (Fluent in Japanese)", "Marketing & Creative", "Remote", "6da9edec-0ad7-4871-b51f-cc2714688d91"],
  ["Motion Designer + Editor, Social", "Marketing & Creative", "Remote", "91826105-13e0-4265-842b-7d756c9a766e"],
  ["Director/VP of Product Marketing", "Marketing & Creative", "Remote / New York, NY / San Francisco, CA", "0de946b6-757b-48b1-a0a7-694db51c7eb1"],
  ["Marketing Manager, Partnerships", "Marketing & Creative", "Remote / Seattle, WA / New York, NY", "f7c8903e-7b20-49cc-824f-502524ee29fb"],
  ["Designer, Growth Marketing", "Marketing & Creative", "Remote / Seattle, WA / New York, NY", "dc812ced-119a-42b0-9695-5d1fe23b9a35"],
  ["Campaign Creative, Product Marketing", "Marketing & Creative", "Remote", "4ab5877c-1289-439e-a885-8e6942a2409f"],
  ["Social Media Lead", "Marketing & Creative", "New York, NY / San Francisco, CA / Remote", "c73b244e-1bca-4bc3-94a7-7deb11f30011"],
  ["Enterprise Demand Generation Marketing Manager", "Marketing & Creative", "Hybrid / San Francisco, CA", "d86c22ca-aab9-4a92-9f53-dcbc76567348"],

  ["Executive Assistant / Senior Executive Assistant to the Co-founder", "Operations & Partnerships", "New York, NY / Remote", "1c757b83-d669-4100-9ccd-5d50d7a68986"],
  ["Member of Strategic Staff, Model Ecosystem", "Operations & Partnerships", "Remote / Seattle, WA / New York, NY", "8a24e440-20b5-4910-885c-3aeae2ec8805"],

  ["Senior/Staff Technical Recruiter", "People", "Remote", "54ae5057-1bd1-4b14-9444-e01e3643f6cc"],
  ["Sr/Staff Business/GTM Recruiter", "People", "Remote", "f65e164b-d577-4bd3-993b-7868d51fab5d"],
  ["Senior/Staff HRBP", "People", "Remote / New York, NY / San Francisco, CA", "a1835fab-ef8e-4c66-b3fa-2eeb9163a34a"],
  ["Senior HR Generalist", "People", "Remote / New York, NY / San Francisco, CA", "09021655-a511-47c6-8132-edd77a5ee86c"],

  ["Sr/Staff Product Manager, ML Research", "Product", "Remote", "fc409275-6797-4504-9be9-3215276d3645"],
  ["Sr/Staff Product Manager, Applied AI Products", "Product", "Remote", "e9cb4bde-bb05-402d-98a7-a7eb86747d2d"],
  ["Member of Product Staff, Agents", "Product", "Remote / New York, NY / San Francisco, CA", "ba4868ee-b712-42fd-b3bd-5492afd9bd45"],
  ["Pricing Lead", "Product", "Remote / New York, NY / San Francisco, CA", "aec67956-59a4-4633-9faa-0f0a41c48e4c"],

  ["Sr./Staff Product Designer, Growth", "Product Design", "Remote", "28e151ac-cb29-4695-9041-a9e352624111"],
  ["Sr./Staff Product Designer", "Product Design", "Remote", "b283e7c0-944a-4d4e-be69-49875008c738"],
  ["Sr./Staff Product Designer, Developer Platform", "Product Design", "Remote", "e0fec99f-ae6e-4f92-ac1a-7d227179261f"],

  ["Research Science Manager, Foundation Models", "Research", "Remote", "5e8d6c9b-0d30-4bb2-90a9-df7d937aa44e"],
  ["Member of Technical Staff, Applied Research Scientist", "Research", "Remote", "0b7b8839-037f-4ccf-886b-6d247923601c"],
  ["Research Engineer, Data Foundations", "Research", "Remote", "f74afbd9-b4e8-4b87-835a-5e22dcc556ae"],
  ["Member of Technical Staff, Research Engineer", "Research", "Remote", "98e4b160-3bbe-4acd-b106-ad75ccc49675"],
  ["Member of Technical Staff, Robotics Engineer", "Research", "New York, NY", "0f1c42db-8bbf-4e69-a17c-b6f45244605d"],

  ["Design Engineer", "Runway Labs", "Remote", "92044f68-4957-4cf0-9590-98952732b219"],
  ["Prototype Researcher", "Runway Labs", "Remote / Seattle, WA / New York, NY", "d8afa330-e713-4a2d-833b-cd2e4c6e0fcc"],
];

const studios: Job[] = ["Animator", "VFX Artist", "Screenwriter", "Creative Producer"].map((title) => ({
  title,
  department: "Runway Studios",
  location: "New York",
  applyUrl: "https://forms.gle/HEKs8puDzxZaSSsV6",
}));

export const departments: JobDepartment[] = (() => {
  const order = [
    "Commercial",
    "Customer Experience",
    "Engineering",
    "Finance",
    "Legal",
    "Marketing & Creative",
    "Operations & Partnerships",
    "People",
    "Product",
    "Product Design",
    "Research",
    "Runway Labs",
  ];
  const grouped = new Map<string, Job[]>();
  for (const [title, department, location, id] of roles) {
    const list = grouped.get(department) ?? [];
    list.push({ title, department, location, applyUrl: `https://jobs.ashbyhq.com/runway-ml/${id}` });
    grouped.set(department, list);
  }
  grouped.set("Runway Studios", studios);
  return order.map((name) => ({ name, jobs: grouped.get(name) ?? [] }));
})();

export const allJobs: Job[] = departments.flatMap((department) => department.jobs);

export const offices = [
  "New York",
  "San Francisco",
  "Seattle",
  "London",
  "Paris",
  "Tel Aviv",
  "Tokyo",
];

export const benefits = [
  {
    title: "Unlimited paid time off",
    body: "We offer unlimited PTO with a recommended minimum of 15 days a year. We also have a paid sabbatical program that employees are eligible for after they have been with Runway for 3, 5 and 7 years.",
  },
  {
    title: "Parental leave, for all parents",
    body: "We offer 16 weeks of fully paid parental leave, plus a gradual return to work plan. This coverage is for all parents, regardless of how a child is brought into the family.",
  },
  {
    title: "Medical, dental and vision coverage",
    body: "We cover 100% of medical, dental and vision for our US-based employees and their dependents. Based on the plans selected, we also offer complimentary mental health benefits and a free One Medical membership.",
  },
  {
    title: "Donations supporting our community",
    body: "Beyond our employees, we have a commitment to our communities. Every quarter, Runway employees choose an organization for the company to support through a donation.",
  },
  {
    title: "Wellness stipend",
    body: "We believe it's important to invest in employees' mental and physical health. The $600 annual wellness stipend can be used for anything from therapy sessions to gym memberships.",
  },
  {
    title: "Learning stipend",
    body: "We're investing in our employees' long term growth by giving every employee $600 per year to spend on their personal or professional development.",
  },
  {
    title: "Travel stipend",
    body: "Employees receive an annual travel budget that can be used for in-person collaboration, attending our annual festival, AIF, and other company-organized events and/or continued learning at various research conferences.",
  },
  {
    title: "Remote/phone stipend",
    body: "Employees outside of commuting distance (10 miles) from the NY or SF office can expense up to $250 USD per month for co-working spaces, internet and cellphone bills, lunches, and other related expenses. Employees within commuting distance can expense up to $50 per month for phone plan reimbursements.",
  },
  { title: "401k matching", body: "We provide a 3% 401K match for our US-based employees." },
  {
    title: "Tech setup stipend",
    body: "In addition to a computer of their choice, all employees receive a $500 stipend to customize their tech set up.",
  },
];

export const recognition = [
  { org: "Built In", detail: "Best Places to Work NYC 2023, 2024" },
  { org: "Best Companies Group", detail: "Inclusive Workplace 2022, 2023" },
  { org: "Inc.", detail: "Best Workplaces 2023" },
  { org: "Crain's", detail: "Best Places to Work NYC 2022–2024" },
];

export const press = [
  { date: "October 2026", outlet: "Not Boring", title: "Runway: Learning From Watching the World", href: "https://www.notboring.co/p/runway-learning-from-watching-the" },
  { date: "October 2026", outlet: "AdAge", title: "AI creative platforms are moving into agency territory—inside Runway's push into advertising", href: "https://adage.com/technology/ai/aa-runway-platforms-move-into-agency-territory/" },
  { date: "October 2026", outlet: "The Neuron", title: "What If Apps Didn't Need Code?", href: "https://www.youtube.com/watch?v=DbfWxmGsh2M" },
  { date: "October 2026", outlet: "60 Minutes", title: "How we made an AI version of Jon Wertheim", href: "https://www.youtube.com/watch?v=3Sb28oodLsw" },
  { date: "October 2026", outlet: "The Deep View", title: "Runway CEO sees a much bigger future for video AI", href: "https://www.thedeepview.com/articles/runway-ceo-sees-a-much-bigger-future-for-video-ai" },
  { date: "October 2026", outlet: "The Robot Report", title: "Runway introduces Praxis-1 world action model for robotics", href: "https://www.therobotreport.com/runway-introduces-praxis-1-world-action-model-robotics/" },
  { date: "September 2026", outlet: "AdWeek", title: "Runway's AI Video Agent Creates and Measures Ads Across Platforms", href: "https://www.adweek.com/programmatic/runways-ai-video-agent-creates-and-measures-ads-across-platforms/" },
  { date: "September 2026", outlet: "Bloomberg", title: "AI Startup Runway Hits $200 Million in Annual Recurring Revenue", href: "https://www.bloomberg.com/news/articles/2026-09-08/ai-startup-runway-hits-200-million-in-annual-recurring-revenue" },
];
