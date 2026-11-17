import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { TableOfContents, type TocItem } from "@/components/legal/table-of-contents";
import { DemoNotice } from "@/components/legal/demo-notice";

/**
 * Shared long-form document shell used by legal and trust pages: breadcrumb,
 * document header, sticky table of contents and a readable measure.
 */
export function LegalLayout({
  eyebrow,
  title,
  updated,
  intro,
  toc,
  children,
  breadcrumb,
  officialHref,
  officialLabel,
  asideExtra,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro?: ReactNode;
  toc: TocItem[];
  children: ReactNode;
  breadcrumb?: { label: string; href: string };
  officialHref: string;
  officialLabel: string;
  asideExtra?: ReactNode;
}) {
  return (
    <article className="bg-white">
      <header className="border-b border-light-gray bg-off-white-alt">
        <div className="rw-container py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-[12px] text-slate-gray">
            {breadcrumb ? (
              <>
                <Link href={breadcrumb.href} className="hover:text-off-black">
                  {breadcrumb.label}
                </Link>
                <ChevronRight className="size-3" aria-hidden="true" />
              </>
            ) : null}
            <span aria-current="page" className="text-off-black/70">
              {title}
            </span>
          </nav>
          <p className="rw-eyebrow">{eyebrow}</p>
          <h1 className="rw-display-m mt-3 max-w-3xl text-balance-tight">{title}</h1>
          <p className="mt-4 text-[13px] text-slate-gray">Last updated {updated}</p>
          {intro ? <div className="rw-paragraph-m mt-6 max-w-2xl text-slate-gray">{intro}</div> : null}
        </div>
      </header>

      <div className="rw-container grid gap-12 py-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:py-16">
        <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <TableOfContents items={toc} />
          {asideExtra}
          <div className="rounded-lg border border-light-gray p-4">
            <p className="text-[12px] leading-relaxed text-slate-gray">
              Official document:{" "}
              <a
                href={officialHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-off-black underline underline-offset-2"
              >
                {officialLabel}
              </a>
            </p>
          </div>
        </aside>

        <div className="min-w-0 max-w-[72ch]">
          <DemoNotice />
          <div className="legal-prose mt-8">{children}</div>
        </div>
      </div>
    </article>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-light-gray pt-8 first:border-t-0 first:pt-0 [&+&]:mt-8">
      <h2 className="rw-display-xs scroll-mt-28">{title}</h2>
      <div className="mt-4 flex flex-col gap-4 text-[15px] leading-relaxed text-off-black/80">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-off-black/35">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
