import { expect, test } from "@playwright/test";

/**
 * Authentication safety and behavior. The demo must validate locally, store a
 * mock session and never contact Runway or any third-party auth endpoint.
 */
test.describe("demo authentication", () => {
  test("login validates required fields and completes locally", async ({ page }) => {
    const external: string[] = [];
    page.on("request", (request) => {
      const url = request.url();
      if (/runwayml\.com|runway\.com|accounts\.google|oauth/i.test(url)) external.push(url);
    });

    await page.goto("/login");
    await expect(page.getByText("Demo authentication.")).toBeVisible();

    await page.getByRole("button", { name: "Log in" }).click();
    await expect(page.getByText("Enter your email address.")).toBeVisible();
    await expect(page.getByText("Enter a password.")).toBeVisible();

    await page.getByLabel("Email").fill("demo@example.com");
    await page.locator("#password").fill("demo1234");
    await page.getByRole("button", { name: "Log in" }).click();

    await expect(page.getByRole("heading", { name: /Signed in to the demo/i })).toBeVisible();
    const stored = await page.evaluate(() => window.localStorage.getItem("rw-demo-user"));
    expect(stored).toContain("demo@example.com");

    expect(external, `unexpected external auth requests: ${external.join(", ")}`).toHaveLength(0);
  });

  test("show-password toggle reveals the value", async ({ page }) => {
    await page.goto("/login");
    const input = page.locator("#password");
    await input.fill("demo1234");
    await expect(input).toHaveAttribute("type", "password");
    await page.getByRole("button", { name: "Show password" }).click();
    await expect(input).toHaveAttribute("type", "text");
  });

  test("signup enforces password rules and terms acceptance", async ({ page }) => {
    await page.goto("/signup");
    await page.getByLabel("Full name").fill("Demo Person");
    await page.getByLabel("Email").fill("signup@example.com");
    await page.locator("#password").fill("short");
    await page.getByRole("button", { name: "Create demo account" }).click();

    await expect(page.getByText("Your password doesn't meet the rules yet.")).toBeVisible();
    await expect(page.getByText("Accept the terms to continue.")).toBeVisible();

    await page.locator("#password").fill("longenough1");
    await page.getByRole("checkbox").check();
    await page.getByRole("button", { name: "Create demo account" }).click();
    await expect(page.getByRole("heading", { name: /Demo account created/i })).toBeVisible();
  });

  test("password recovery simulates a reset without sending mail", async ({ page }) => {
    await page.goto("/forgot-password");
    await page.getByLabel("Email").fill("reset@example.com");
    await page.getByRole("button", { name: "Send reset link" }).click();
    await expect(page.getByRole("heading", { name: /Reset link simulated/i })).toBeVisible();
  });
});
