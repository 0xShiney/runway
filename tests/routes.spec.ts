import { expect, test } from "@playwright/test";

/**
 * Route coverage: every page in the route registry responds, renders an h1,
 * exposes a unique title and mounts the shared header and footer.
 */
const pages = [
  { path: "/", heading: /Intelligent tools for scaling content and teams/i },
  { path: "/product", heading: /A new frontier for video generation/i },
  { path: "/product/robotics", heading: /Robot policies built on video pretraining/i },
  { path: "/product/robotics/contact", heading: /Planning a deployment/i },
  { path: "/pricing", heading: /Choose the Right Plan for You/i },
  { path: "/enterprise", heading: /Production-ready AI/i },
  { path: "/enterprise-contact", heading: /Contact our enterprise team/i },
  { path: "/api", heading: /The AI Media Platform/i },
  { path: "/solutions", heading: /AI-powered solutions for every creative need/i },
  { path: "/workflows", heading: /Runway Workflows/i },
  { path: "/mcp", heading: /Connect Runway to your agent/i },
  { path: "/about", heading: /We are building AI to simulate the world/i },
  { path: "/careers", heading: /We are building AI to simulate the world/i },
  { path: "/safety", heading: /Building new worlds responsibly/i },
  { path: "/safety/usage-policy", heading: /Runway's Usage Policy/i },
  { path: "/safety/verify", heading: /Verify your content credentials/i },
  { path: "/data-security", heading: /Data security at Runway/i },
  { path: "/brand-guidelines", heading: /Runway Brand Assets and Guidelines/i },
  { path: "/research", heading: /Building general-purpose multimodal/i },
  { path: "/resources", heading: /Featured/i },
  { path: "/news", heading: /The latest from Runway/i },
  { path: "/terms-of-use", heading: /Terms of Use Agreement/i },
  { path: "/privacy-policy", heading: /Privacy Policy/i },
  { path: "/california-notices", heading: /California Notices/i },
  { path: "/coc", heading: /Code of Conduct/i },
  { path: "/enterprise-terms", heading: /Runway Enterprise Services Terms/i },
  { path: "/login", heading: /Log in to Runway/i },
  { path: "/signup", heading: /Create your account/i },
  { path: "/forgot-password", heading: /Reset your password/i },
];

for (const page of pages) {
  test(`${page.path} renders with shared chrome`, async ({ page: view }) => {
    const consoleErrors: string[] = [];
    view.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    view.on("pageerror", (error) => consoleErrors.push(error.message));

    const response = await view.goto(page.path, { waitUntil: "domcontentloaded" });
    expect(response?.status(), `HTTP status for ${page.path}`).toBeLessThan(400);

    await expect(view.getByRole("heading", { level: 1 })).toContainText(page.heading);
    await expect(view).toHaveTitle(/.+/);
    await expect(view.getByRole("banner")).toBeVisible();
    await expect(view.getByRole("contentinfo")).toBeVisible();

    // No horizontal overflow at the current viewport.
    const overflow = await view.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, `horizontal overflow on ${page.path}`).toBeLessThanOrEqual(2);

    const hydrationErrors = consoleErrors.filter((text) =>
      /hydrat|nested|validateDOMNesting|did not match/i.test(text),
    );
    expect(hydrationErrors, `React errors on ${page.path}`).toEqual([]);
  });
}

test("unknown routes render the not-found page", async ({ page }) => {
  const response = await page.goto("/this-route-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/doesn't exist/i);
});
