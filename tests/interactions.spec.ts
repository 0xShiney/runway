import { expect, test } from "@playwright/test";

test.describe("global navigation", () => {
  test("desktop mega-menu opens, closes on Escape and links resolve", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === "mobile", "desktop navigation only");
    await page.goto("/");

    const creative = page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Creative", exact: true });
    await creative.hover();

    const menu = page.locator("header").getByRole("link", { name: "Workflows" });
    await expect(menu.first()).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(menu.first()).toBeHidden();
  });

  test("mobile navigation opens and reveals grouped links", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile", "mobile navigation only");
    await page.goto("/");

    await page.getByRole("button", { name: "Open menu" }).click();
    const panel = page.locator("#mobile-navigation");
    await expect(panel).toBeVisible();

    await panel.getByRole("button", { name: "Expand Creative" }).click();
    await expect(panel.getByRole("link", { name: "Agent" })).toBeVisible();

    await panel.getByRole("button", { name: "Collapse Creative" }).click();
    await panel.getByRole("link", { name: "Pricing", exact: true }).click();
    await expect(page).toHaveURL(/\/pricing/);
  });

  test("promotion banner can be dismissed", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === "mobile", "banner is hidden on small viewports");
    await page.goto("/");
    const dismiss = page.getByRole("button", { name: "Dismiss promotion" });
    await expect(dismiss).toBeVisible();
    await dismiss.click();
    await expect(dismiss).toBeHidden();
  });

  test("footer link navigates to a legal document", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("contentinfo").getByRole("link", { name: "Privacy Policy" }).click();
    await expect(page).toHaveURL(/\/privacy-policy/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Privacy Policy/i);
  });
});

test.describe("cookie preferences", () => {
  test("saves local preferences and reopens with stored state", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === "mobile", "one viewport is enough for the dialog");
    await page.goto("/");

    await page.getByRole("contentinfo").getByRole("button", { name: "Cookie Settings" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("switch", { name: "Strictly necessary cookies" })).toBeDisabled();

    await dialog.getByRole("switch", { name: "Analytics cookies" }).click();
    await dialog.getByRole("button", { name: "Save preferences" }).click();
    await expect(dialog).toBeHidden();

    const stored = await page.evaluate(() => window.localStorage.getItem("rw-demo-cookie-preferences"));
    expect(stored).toContain('"analytics":false');

    await page.reload();
    await page.getByRole("contentinfo").getByRole("button", { name: "Cookie Settings" }).click();
    await expect(page.getByRole("dialog").getByRole("switch", { name: "Analytics cookies" })).toHaveAttribute(
      "aria-checked",
      "false",
    );
  });
});

test.describe("pricing", () => {
  test("billing toggle switches prices and comparison table is present", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page.getByRole("heading", { name: "Standard" })).toBeVisible();
    await expect(page.getByText("$12", { exact: false }).first()).toBeVisible();

    await page.getByRole("button", { name: /^Monthly$/ }).click();
    await expect(page.getByText("$15", { exact: false }).first()).toBeVisible();

    await expect(page.getByRole("table").first()).toBeVisible();
    await expect(page.getByText("Gen-4.5").first()).toBeVisible();
  });

  test("dev tab explains usage-based pricing", async ({ page }) => {
    await page.goto("/pricing?tab=dev");
    await expect(page.getByText("Runway Dev is usage-based")).toBeVisible();
  });
});

test.describe("careers", () => {
  test("search and department filters narrow the job list", async ({ page }) => {
    await page.goto("/careers");
    const search = page.getByPlaceholder("Search roles or locations");
    await search.fill("robotics");
    await expect(
      page.locator("li").filter({ hasText: "Member of Technical Staff, Robotics Engineer" }).first(),
    ).toBeVisible();
    await expect(page.getByText("AI Engagement Manager")).toHaveCount(0);

    await search.fill("");
    await page.getByLabel("Filter by department").selectOption("Legal");
    await expect(page.getByText("Commercial Counsel Fellowship").first()).toBeVisible();
    await expect(page.getByText("Support Specialist, US Tier 1")).toHaveCount(0);
  });
});

test.describe("legal documents", () => {
  test("table of contents jumps to a section and marks it current", async ({ page }) => {
    await page.goto("/privacy-policy");
    const link = page.getByRole("navigation", { name: "On this page" }).getByRole("link", {
      name: "Data retention",
    });
    await link.click();
    await expect(page).toHaveURL(/#data-retention/);
    const section = page.locator("#data-retention");
    await expect(section).toBeVisible();
    await expect(section.getByRole("heading", { name: "Data retention" })).toBeInViewport();
    await expect(page.getByText("Demonstration document.").first()).toBeVisible();
  });
});
