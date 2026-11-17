import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://runway-reconstruction.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Runway — Intelligent tools for scaling content and teams.",
    template: "%s | Runway (independent reconstruction)",
  },
  description:
    "An independent front-end reconstruction of the public Runway website: creative tools, developer platform, robotics, research and company pages.",
  applicationName: "Runway reconstruction",
  keywords: [
    "Runway",
    "AI video",
    "generative video",
    "creative platform",
    "world models",
    "robotics",
  ],
  authors: [{ name: "Independent reconstruction project" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Runway (independent reconstruction)",
    title: "Runway — Intelligent tools for scaling content and teams.",
    description:
      "An independent front-end reconstruction of the public Runway website. Not affiliated with Runway AI, Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Runway — Intelligent tools for scaling content and teams.",
    description:
      "An independent front-end reconstruction of the public Runway website. Not affiliated with Runway AI, Inc.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white">
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-off-black focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1 pt-16 app-banner:pt-[97px]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
