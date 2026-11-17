import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, MediaPanel, Section } from "@/components/marketing/primitives";
import { newsItems } from "@/data/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "News | Runway AI",
  description:
    "The latest from Runway: company news, research, engineering, developer updates and customer stories.",
  alternates: { canonical: "/news" },
};

const filters = [
  { id: "all", label: "All" },
  { id: "company", label: "Company News" },
  { id: "research", label: "Research" },
  { id: "customers", label: "Customer Stories" },
  { id: "engineering", label: "Engineering" },
  { id: "developers", label: "Developers" },
];

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const params = await searchParams;
  const active = filters.some((filter) => filter.id === params.filter) ? params.filter! : "all";

  const visible = newsItems.filter((item) => {
    if (active === "all") return true;
    const category = item.category.toLowerCase();
    if (active === "company") return category.includes("company");
    if (active === "research") return category.includes("research");
    if (active === "customers") return category.includes("customer");
    if (active === "developers") return category.includes("developer");
    return category.includes(active);
  });

  return (
    <>
      <section className="bg-white pb-10 pt-14 md:pt-20">
        <div className="rw-container">
          <p className="rw-eyebrow">News</p>
          <h1 className="rw-display-l mt-3">The latest from Runway</h1>
          <p className="rw-paragraph-m mt-4 max-w-2xl text-slate-gray">
            Company announcements, research, engineering deep dives and customer stories.
          </p>

          <nav aria-label="News filters" className="mt-8 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Link
                key={filter.id}
                href={filter.id === "all" ? "/news" : `/news?filter=${filter.id}`}
                aria-current={active === filter.id ? "page" : undefined}
                className={cn(
                  "rounded-full border px-4 py-2 text-[13px] font-medium transition-colors",
                  active === filter.id
                    ? "border-off-black bg-off-black text-white"
                    : "border-off-black/15 text-off-black/70 hover:border-off-black/35",
                )}
              >
                {filter.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <Section className="pt-4 md:pt-8">
        <p aria-live="polite" className="mb-6 text-[13px] text-slate-gray">
          {visible.length} {visible.length === 1 ? "story" : "stories"}
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-light-gray transition-colors hover:border-off-black/20"
            >
              <MediaPanel
                variant={(["sand", "forest", "ember", "steel", "ocean", "violet"] as const)[index % 6]}
                seed={index + 131}
                ratio="16 / 10"
                rounded="rounded-none"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="rw-eyebrow text-[10px]">
                  {item.category} · {item.date}
                </p>
                <h2 className="mt-3 text-[15px] font-medium leading-snug">{item.title}</h2>
                <p className="rw-paragraph-s mt-2 text-slate-gray">{item.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-[13px] font-medium">
                  Learn more
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="rounded-xl border border-dashed border-off-black/15 p-10 text-center">
            <p className="text-sm font-medium">No stories in this category yet.</p>
            <Link href="/news" className="mt-2 inline-block text-sm underline underline-offset-2">
              View all news
            </Link>
          </div>
        ) : null}

        <p className="mt-10 text-[12px] leading-relaxed text-slate-gray">
          Article titles and summaries captured from runway.com/news on November 16, 2026. Full article
          pages live on the official site; this reconstruction presents the index and card presentation.
        </p>
      </Section>

      <CtaBand
        title="See what you can make with Runway."
        body="Try the creative platform free, or read the research behind it."
        primary={{ label: "Try Runway free", href: "/signup" }}
        secondary={{ label: "Read the research", href: "/research" }}
      />
    </>
  );
}
