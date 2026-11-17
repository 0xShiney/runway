import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";
import { footerColumns, footerLegal } from "@/data/navigation";
import { RunwayWordmark } from "@/components/brand/logo";
import { CookieSettings } from "@/components/layout/cookie-settings";

export function SiteFooter() {
  return (
    <footer className="border-t border-light-gray bg-white text-off-black">
      <div className="rw-container py-14 md:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3">
              <h2 className="rw-eyebrow text-[11px] text-slate-gray">{column.title}</h2>
              <ul className="flex flex-col gap-2">
                {column.items.map((item) => (
                  <li key={`${column.title}-${item.label}`}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 text-[13px] leading-snug text-off-black/75 transition-colors hover:text-off-black"
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {item.label}
                      {item.external ? (
                        <ArrowUpRight className="size-3 opacity-40" aria-hidden="true" />
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-light-gray">
        <div className="rw-container flex flex-col gap-6 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Link href="/" aria-label="Runway home" className="inline-flex text-off-black">
              <RunwayWordmark className="h-[16px]" />
            </Link>
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-off-black/70">
              {footerLegal.map((item, index) => (
                <li key={item.label} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-off-black/20">
                      /
                    </span>
                  ) : null}
                  {item.label === "Cookie Settings" ? (
                    <CookieSettings label={item.label} />
                  ) : (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-off-black"
                      {...(item.external && /^https?:/.test(item.href)
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <p className="inline-flex items-center gap-1.5 text-[13px] text-off-black/60">
              <Globe className="size-3.5" aria-hidden="true" />
              <span>English</span>
            </p>
          </div>

          <div className="flex flex-col gap-2 border-t border-light-gray pt-6 text-[12px] leading-relaxed text-off-black/45 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Runway AI, Inc. — reproduced for an independent front-end reconstruction exercise.</p>
            <p>
              Not affiliated with, endorsed by, or operated by Runway AI, Inc. Media shown is original
              placeholder artwork.{" "}
              <a
                href="https://runway.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-off-black"
              >
                Official site
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
