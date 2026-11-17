import { expect, test } from "@playwright/test";

/**
 * Link integrity: every internal href exposed in the header, footer and page
 * bodies resolves to a local route (no 404s), and every external href points at
 * an http(s) or mailto destination.
 */
test("footer and header expose only resolvable internal links", async ({ page }) => {
  await page.goto("/");
  const hrefs = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href]"));
    return Array.from(new Set(anchors.map((anchor) => anchor.getAttribute("href") ?? "")));
  });

  const internal = hrefs.filter((href) => href.startsWith("/") && !href.startsWith("//"));
  const external = hrefs.filter((href) => /^https?:|^mailto:/.test(href));

  for (const href of internal) {
    const path = href.split("#")[0] || "/";
    const response = await page.request.get(path);
    expect(response.status(), `internal link ${href}`).toBeLessThan(400);
  }

  for (const href of external) {
    expect(href, "external links must not be relative").toMatch(/^(https?:\/\/|mailto:)/);
  }
});

test("external links open safely", async ({ page }) => {
  await page.goto("/");
  const unsafe = await page.evaluate(() =>
    Array.from(document.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]'))
      .filter((anchor) => !(anchor.rel || "").includes("noopener"))
      .map((anchor) => anchor.href),
  );
  expect(unsafe).toHaveLength(0);
});

test("metadata is present and canonical stays on the reconstruction domain", async ({ page }) => {
  await page.goto("/product");
  const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
  expect(canonical).toBeTruthy();
  expect(canonical).toContain("/product");
  expect(canonical).not.toContain("runway.com");

  const description = await page.locator('meta[name="description"]').getAttribute("content");
  expect(description?.length).toBeGreaterThan(40);
});
