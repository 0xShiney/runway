import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, Eyebrow, MediaPanel, Section, SectionHeader } from "@/components/marketing/primitives";
import { resources } from "@/data/content";

export const metadata: Metadata = {
  title: "Resource Hub",
  description:
    "Guides, playbooks and featured resources for prompting, production and scaling creative work with Runway.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  const featured = resources.slice(0, 3);
  const rest = resources.slice(3);

  return (
    <>
      <section className="bg-white pb-12 pt-14 md:pt-20">
        <div className="rw-container">
          <Eyebrow>Resource Hub</Eyebrow>
          <h1 className="rw-display-l mt-3">Featured</h1>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {featured.map((resource, index) => (
              <article key={resource.title} className="group overflow-hidden rounded-xl border border-light-gray">
                <MediaPanel
                  variant={(["sand", "forest", "steel"] as const)[index]}
                  seed={index + 121}
                  ratio="16 / 10"
                  rounded="rounded-none"
                />
                <div className="p-6">
                  <p className="rw-eyebrow text-[10px]">{resource.kind}</p>
                  <h2 className="rw-display-xs mt-3">{resource.title}</h2>
                  <p className="rw-paragraph-s mt-3 text-slate-gray">{resource.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-medium">
                    Read the article
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section tone="off-white">
        <SectionHeader eyebrow="All resources" title="All Resources" />
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((resource) => (
            <article
              key={resource.title}
              className="flex flex-col gap-2 rounded-xl border border-light-gray bg-white p-5 transition-colors hover:border-off-black/20"
            >
              <p className="rw-eyebrow text-[10px]">{resource.kind}</p>
              <h3 className="text-[14px] font-medium leading-snug">{resource.title}</h3>
              <p className="text-[12.5px] leading-relaxed text-slate-gray">{resource.description}</p>
              <p className="mt-auto pt-3 text-[11px] text-slate-gray">
                Leah Retta / {resource.date}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-[12px] text-slate-gray">
          Article listings captured from runway.com/resources on November 16, 2026. In this
          reconstruction, cards present the captured titles and summaries without reproducing the
          original article bodies.
        </p>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Academy", body: "Structured lessons on prompting, editing and production.", href: "https://academy.runwayml.com/" },
            { title: "Help Center", body: "Account, billing and product answers.", href: "https://help.runwayml.com/hc/en-us" },
            { title: "News", body: "Company, research and customer announcements.", href: "/news" },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-start justify-between gap-4 rounded-xl border border-light-gray p-6 transition-colors hover:border-off-black/20"
            >
              <div>
                <h3 className="rw-heading-min">{item.title}</h3>
                <p className="rw-paragraph-s mt-2 text-slate-gray">{item.body}</p>
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-off-black/40" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Put the playbooks to work."
        body="Start free and try the techniques from these guides on your own project."
        primary={{ label: "Try Runway free", href: "/signup" }}
        secondary={{ label: "Explore workflows", href: "/workflows" }}
      />
    </>
  );
}
