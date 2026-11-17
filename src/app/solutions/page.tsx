import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArrowLink, CtaBand, Eyebrow, MediaPanel, PillLink, Section, SectionHeader } from "@/components/marketing/primitives";
import { solutionsByIndustry, solutionsByNeed } from "@/data/content";

export const metadata: Metadata = {
  title: "Runway AI Solutions | Tools for Creative Teams and Enterprises",
  description:
    "Discover how Runway's generative AI tools can transform your workflow, whether you're ideating concepts, creating content or scaling campaigns.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-white pb-14 pt-14 md:pt-20">
        <div className="rw-container">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <Eyebrow>Solutions</Eyebrow>
              <h1 className="rw-display-xl mt-4 max-w-3xl">
                AI-powered solutions for every creative need
              </h1>
              <p className="rw-paragraph-m mt-6 max-w-xl text-slate-gray">
                Discover how Runway&apos;s generative AI tools can transform your workflow, whether
                you&apos;re ideating concepts, creating content or scaling campaigns.
              </p>
              <div className="mt-8">
                <PillLink href="/signup">Get Started</PillLink>
              </div>
            </div>
            <MediaPanel variant="dawn" seed={111} ratio="4 / 5" label="Abstract artwork representing creative solutions" />
          </div>
        </div>
      </section>

      <Section tone="off-white" id="use-cases">
        <SectionHeader
          eyebrow="By creative need"
          title="Solutions by creative need"
          body="Find the right tools for your stage in the creative process."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {solutionsByNeed.map((solution, index) => (
            <Link
              key={solution.title}
              href={solution.href}
              className="group flex flex-col justify-between gap-6 rounded-xl border border-light-gray bg-white p-6 transition-colors hover:border-off-black/25"
            >
              <div>
                <p className="rw-eyebrow text-[10px]">0{index + 1}</p>
                <h3 className="rw-display-xs mt-2">{solution.title}</h3>
                <p className="rw-paragraph-s mt-3 text-slate-gray">{solution.body}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-medium">
                Explore
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative isolate overflow-hidden rounded-xl bg-off-black">
          <MediaPanel variant="ember" seed={115} ratio="21 / 8" rounded="rounded-none" />
          <div className="absolute inset-0 flex items-end bg-gradient-to-r from-black/80 to-transparent p-6 md:p-10">
            <div className="max-w-xl text-white">
              <Eyebrow className="text-white/60">AI for VFX</Eyebrow>
              <h2 className="rw-display-s mt-2">From previs to production-ready shots</h2>
              <p className="rw-paragraph-s mt-2 text-white/70">
                Runway gives VFX teams the tools to shrink timelines, reduce costs, and generate what
                wasn&apos;t possible to shoot.
              </p>
              <div className="mt-4">
                <ArrowLink href="/enterprise" tone="light">
                  Explore AI for VFX
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="off-white">
        <SectionHeader
          eyebrow="By industry"
          title="Solutions by industry"
          body="See how professionals in your field are using Runway."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {solutionsByIndustry.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group flex flex-col justify-between gap-6 rounded-xl border border-light-gray bg-white p-5 transition-colors hover:border-off-black/25"
            >
              <div>
                <h3 className="rw-heading-min">{industry.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-gray">{industry.body}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[12px] font-medium">
                Learn more
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Ready to get started?"
        body="Join the creators, agencies and enterprises using Runway's generative AI tools to transform their creative workflows."
        primary={{ label: "Start Creating", href: "/signup" }}
        secondary={{ label: "Contact Sales", href: "/enterprise-contact" }}
      />
    </>
  );
}
