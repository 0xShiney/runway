import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://runway-reconstruction.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes
    .filter((route) => route.category !== "auth")
    .map((route) => ({
      url: `${baseUrl}${route.path === "/" ? "" : route.path}`,
      lastModified: now,
      changeFrequency: route.path === "/" ? "daily" : "weekly",
      priority: route.priority === "P0" ? 1 : route.priority === "P1" ? 0.8 : 0.5,
    }));
}
