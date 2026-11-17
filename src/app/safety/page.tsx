import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArrowLink, Eyebrow, MediaPanel, PillLink, Section } from "@/components/marketing/primitives";
import { safeguards } from "@/data/safety";

export const metadata: Metadata = {
  title: "Safety | Runway",
  description:
    "Safety at Runway: building new worlds responsibly with safeguards at every layer — prevent, detect, enforce and transparency.",
  alternates: { canonical: "/safety" },
};

export default function SafetyPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-off-black text-white">
        <MediaPanel
          variant="steel"
          seed={33}
          rounded="rounded-none"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="rw-container relative py-20 md:py-28">
          <Eyebrow className="text-white/50">Safety at Runway</Eyebrow>
          <h1 className="rw-display-l mt-4 max-w-3xl">Building new worlds responsibly</h1>
          <p className="rw-paragraph-m mt-5 max-w-2xl text-white/75">
            We&apos;re committed to building our products with safeguards at every layer so creators can
            focus on what they do best.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillLink href="/safety/usage-policy" variant="light">
              Read the usage policy
            </PillLink>
            <PillLink href="https://runway.com/report-content" variant="ghost">
              Report content
            </PillLink>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <Eyebrow>Our approach</Eyebrow>
          </div>
          <div className="flex flex-col gap-5">
            <p className="rw-paragraph-l">
              Safety is built into our products from the ground up, not bolted on after the fact. We
              design multi-layered defenses to ensure that our safeguards are resilient.
            </p>
            <p className="rw-paragraph-m text-slate-gray">
              As our models grow more capable, our safety systems must grow with them. We continually
              reassess risks, update our tooling and invest in new detection methods to stay ahead of
              emerging threats.
            </p>
            <p className="rw-paragraph-m text-slate-gray">
              We focus on preventing the creation of content that is inherently harmful, while preserving
              the creative freedom that makes our tools valuable to creatives, brands, and frontier
              builders everywhere.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="off-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Our safeguards</Eyebrow>
            <h2 className="rw-display-m mt-3">Layered defenses at every stage</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {safeguards.map((phase) => (
              <a
                key={phase.phase}
                href={`#${phase.phase.toLowerCase()}`}
                className="rounded-full border border-off-black/15 bg-white px-4 py-2 text-[13px] font-medium"
              >
                {phase.phase}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-12">
          {safeguards.map((phase) => (
            <section key={phase.phase} id={phase.phase.toLowerCase()} className="scroll-mt-28">
              <div className="flex items-baseline gap-4 border-b border-off-black/15 pb-3">
                <h3 className="rw-display-s">{phase.phase}</h3>
                <span className="text-[12px] uppercase tracking-wide text-slate-gray">
                  {phase.items.length} {phase.items.length === 1 ? "safeguard" : "safeguards"}
                </span>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {phase.items.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <h4 className="rw-heading-min">{item.title}</h4>
                    <p className="rw-paragraph-s text-slate-gray">
                      {item.href && item.linkLabel && item.body.includes(item.linkLabel) ? (
                        <>
                          {item.body.split(item.linkLabel)[0]}
                          <Link href={item.href} className="underline underline-offset-2 hover:text-off-black">
                            {item.linkLabel}
                          </Link>
                          {item.body.split(item.linkLabel)[1] ?? ""}
                        </>
                      ) : (
                        <>
                          {item.body}
                          {item.href && item.linkLabel ? (
                            <>
                              {" "}
                              <Link
                                href={item.href}
                                className="underline underline-offset-2 hover:text-off-black"
                              >
                                {item.linkLabel}
                              </Link>
                            </>
                          ) : null}
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 rounded-xl border border-light-gray p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <Eyebrow>Report content</Eyebrow>
            <h2 className="rw-display-s mt-3">Help us keep the platform safe</h2>
            <p className="rw-paragraph-m mt-3 max-w-xl text-slate-gray">
              If you find content which raises concerns, and you believe it was created with our tools,
              please report it. Reports related to child safety are prioritized.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <PillLink href="https://runway.com/report-content">Report content</PillLink>
            <ArrowLink href="/safety/usage-policy">Usage policy</ArrowLink>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { title: "Usage policy", href: "/safety/usage-policy", body: "The foundation for all of our safety work." },
            { title: "Verify content credentials", href: "/safety/verify", body: "Inspect C2PA manifests in media." },
            { title: "Data security", href: "/data-security", body: "How customer data is protected." },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-start justify-between gap-4 rounded-xl border border-light-gray p-6 transition-colors hover:border-off-black/20"
            >
              <div>
                <h3 className="rw-heading-min">{item.title}</h3>
                <p className="rw-paragraph-s mt-2 text-slate-gray">{item.body}</p>
              </div>
              <ArrowUpRight className="size-4 text-off-black/40" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
