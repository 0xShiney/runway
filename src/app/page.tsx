import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TextReveal } from "@/components/motion/text-reveal";
import {
  ArrowLink,
  CtaBand,
  Eyebrow,
  LogoRow,
  MediaPanel,
  PillLink,
  Section,
  SectionHeader,
} from "@/components/marketing/primitives";
import { Reveal } from "@/components/marketing/reveal";
import { PlatformTabs } from "@/components/sections/platform-tabs";
import { newsItems, partnerLogos, platforms, researchPillars } from "@/data/content";

export const metadata: Metadata = {
  title: "Intelligent tools for scaling content and teams.",
  description:
    "Runway is building foundational Real-World Intelligence that is changing how the world's top brands, companies, agencies and studios tell their stories.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero ---------------------------------------------------------- */}
      <section className="bg-white pb-10 pt-4 md:pb-14">
        <div className="rw-container">
          <div className="relative isolate min-h-[520px] overflow-hidden rounded-xl bg-off-black md:h-[min(78vh,660px)]">
            <MediaPanel
              variant="dawn"
              seed={3}
              rounded="rounded-none"
              className="absolute inset-0 h-full w-full"
              label="Abstract cinematic artwork used in place of Runway product footage"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between px-5 pt-5 text-[11px] uppercase tracking-[0.14em] text-white/60 md:px-8 md:pt-8">
                  <span>Runway — Real-World Intelligence</span>
                  <span className="hidden sm:block">Reconstruction</span>
                </div>
                <div className="mt-auto px-5 pb-8 md:px-10 md:pb-12">
                  <TextReveal
                    as="h1"
                    text="Intelligent tools for scaling content and teams."
                    className="rw-display-l max-w-4xl text-white"
                    split="word"
                    stagger={0.05}
                    delay={0.1}
                    whileInView={false}
                  />
                  <p className="rw-paragraph-m mt-5 max-w-2xl text-white/80">
                    Runway is building foundational Real-World Intelligence that is changing how the
                    world&apos;s top brands, companies, agencies and studios are able to tell their
                    stories.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <PillLink href="/signup" variant="light">
                      Try Runway for free
                    </PillLink>
                    <ArrowLink href="/product" tone="light" className="text-white/85 hover:text-white">
                      Explore the platform
                    </ArrowLink>
                  </div>
                </div>
              </div>
            </MediaPanel>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-b border-light-gray pb-10 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-[13px] leading-relaxed text-slate-gray">
              We partner with the world&apos;s leading organizations to advance their industries:
            </p>
            <LogoRow logos={partnerLogos} />
          </div>
        </div>
      </section>

      {/* Three platforms ---------------------------------------------- */}
      <Section className="pt-6 md:pt-10">
        <SectionHeader
          eyebrow="The platform"
          title={
            <>
              Three platforms built on-top of the same
              <br className="hidden lg:block" /> Real-World Intelligence models
            </>
          }
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <Reveal key={platform.id} delay={index * 90}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-light-gray bg-white">
                <MediaPanel
                  variant={index === 0 ? "violet" : index === 1 ? "ocean" : "steel"}
                  seed={index + 4}
                  ratio="16 / 9"
                  rounded="rounded-none"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="rw-display-xs">{platform.name}</h3>
                  <p className="mt-3 text-[15px] font-medium leading-snug">{platform.headline}</p>
                  <p className="rw-paragraph-s mt-3 text-slate-gray">{platform.body}</p>
                  {platform.note ? (
                    <p className="rw-paragraph-s mt-4 text-slate-gray">{platform.note}</p>
                  ) : null}
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 pt-2">
                    {platform.links.map((link) =>
                      "external" in link && link.external ? (
                        <ArrowLink key={link.label} href={link.href} external>
                          {link.label}
                        </ArrowLink>
                      ) : (
                        <ArrowLink key={link.label} href={link.href}>
                          {link.label}
                        </ArrowLink>
                      ),
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Capability tabs ---------------------------------------------- */}
      <Section tone="off-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Built for the work</Eyebrow>
            <h2 className="rw-display-m mt-3">
              One intelligence layer, every way you create, build and automate.
            </h2>
          </div>
          <ArrowLink href="/solutions">See all solutions</ArrowLink>
        </div>
        <div className="mt-10">
          <PlatformTabs />
        </div>
      </Section>

      {/* Research ----------------------------------------------------- */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <Eyebrow>Runway Research</Eyebrow>
            <h2 className="rw-display-m mt-4 text-balance-tight">
              We are building foundational General World Models
            </h2>
            <p className="rw-paragraph-m mt-5 max-w-xl text-slate-gray">
              We are building foundational General World Models that will be capable of simulating all
              possible worlds and experiences. The next frontier of intelligence will come from models
              that can understand, perceive, generate and act in the world.
            </p>
            <div className="mt-7">
              <PillLink href="/research" variant="dark">
                Learn more
              </PillLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {researchPillars.map((pillar) => (
              <Link
                key={pillar.id}
                href={pillar.href}
                className="group flex flex-col justify-between rounded-xl border border-light-gray bg-white p-6 transition-colors hover:border-off-black/25"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="rw-display-xs">{pillar.title}</h3>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-off-black/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
                <p className="rw-paragraph-s mt-6 text-slate-gray">{pillar.body}</p>
              </Link>
            ))}
            <div className="relative isolate hidden overflow-hidden rounded-xl bg-off-black sm:block">
              <MediaPanel
                variant="violet"
                seed={9}
                rounded="rounded-none"
                className="absolute inset-0 h-full w-full"
              />
              <div className="relative flex h-full min-h-[160px] items-end p-6 text-white">
                <p className="text-[13px] leading-relaxed text-white/85">
                  From video generation to interactive worlds and robot control — one research program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* News -------------------------------------------------------- */}
      <Section tone="off-white">
        <SectionHeader
          title="See the latest from Runway"
          action={<ArrowLink href="/news">View all news</ArrowLink>}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {newsItems.slice(0, 4).map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <Link
                href={item.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-light-gray bg-white transition-colors hover:border-off-black/20"
              >
                <MediaPanel
                  variant={(["sand", "forest", "ember", "steel"] as const)[index % 4]}
                  seed={index + 12}
                  ratio="4 / 3"
                  rounded="rounded-none"
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="rw-eyebrow text-[10px]">{item.category}</p>
                  <h3 className="mt-3 text-[15px] font-medium leading-snug">{item.title}</h3>
                  <p className="rw-paragraph-s mt-2 line-clamp-3 text-slate-gray">{item.excerpt}</p>
                  <span className="mt-auto pt-5 text-[13px] font-medium text-off-black/70 group-hover:text-off-black">
                    Learn more
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Let's build what's next together."
        body="Join the studios, agencies, and brands using Runway to compress timelines, expand creative output, and ship work that wasn't possible before."
        primary={{ label: "Get in touch", href: "/enterprise-contact" }}
        secondary={{ label: "Explore enterprise", href: "/enterprise" }}
      />
    </>
  );
}
