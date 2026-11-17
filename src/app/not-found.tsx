import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MediaPanel, PillLink } from "@/components/marketing/primitives";

export default function NotFound() {
  return (
    <div className="bg-white">
      <div className="rw-container py-16 md:py-24">
        <div className="relative isolate overflow-hidden rounded-xl bg-off-black">
          <MediaPanel variant="steel" seed={171} ratio="21 / 9" rounded="rounded-none" />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 text-white md:p-12">
            <p className="rw-eyebrow text-white/50">404</p>
            <h1 className="rw-display-l mt-3 max-w-2xl">This page doesn&apos;t exist.</h1>
            <p className="rw-paragraph-m mt-4 max-w-lg text-white/70">
              The link may be out of date, or the page may not be part of this reconstruction.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <PillLink href="/" variant="light">
                Back to home
              </PillLink>
              <PillLink href="/product" variant="ghost">
                Explore the product
              </PillLink>
            </div>
          </div>
        </div>

        <nav aria-label="Popular pages" className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Pricing", href: "/pricing" },
            { label: "Research", href: "/research" },
            { label: "Careers", href: "/careers" },
            { label: "Safety", href: "/safety" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between rounded-xl border border-light-gray p-5 text-[14px] font-medium transition-colors hover:border-off-black/20"
            >
              {item.label}
              <ArrowUpRight className="size-4 text-off-black/40" aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
