import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  ArrowLink,
  Eyebrow,
  MediaPanel,
  PillLink,
  Section,
  SectionHeader,
} from "@/components/marketing/primitives";
import { Reveal } from "@/components/marketing/reveal";
import { allJobs, offices } from "@/data/jobs";
import { researchPosts } from "@/data/content";

export const metadata: Metadata = {
  title: "About Runway AI Video Platform",
  description:
    "We are building AI to simulate the world through merging art and science. Runway is pioneering general-purpose multimodal simulators.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const preview = allJobs.filter((job) =>
    [
      "Member of Technical Staff, Backend Engineer, API",
      "Sr./Staff Product Designer, Growth",
      "Sr./Staff Product Designer",
      "Research Science Manager, Foundation Models",
      "Member of Technical Staff, Applied Research Scientist",
    ].includes(job.title),
  );

  return (
    <>
      <section className="bg-white pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="rw-container">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <Eyebrow>About Runway</Eyebrow>
              <h1 className="rw-display-xl mt-5 text-balance-tight">
                We are building AI to simulate the world through merging art and science.
              </h1>
              <div className="mt-8">
                <PillLink href="/careers">View Careers</PillLink>
              </div>
            </div>
            <MediaPanel variant="sand" seed={7} ratio="4 / 5" label="Abstract artwork representing Runway research" />
          </div>
        </div>
      </section>

      <Section tone="off-white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Our thesis</Eyebrow>
          </div>
          <div className="flex flex-col gap-6">
            <p className="rw-paragraph-l">
              We believe that world models are at the frontier of progress in artificial intelligence.
              Language models alone won&apos;t solve the world&apos;s hardest problems — robotics, disease,
              scientific discovery.
            </p>
            <p className="rw-paragraph-m text-slate-gray">
              Real progress requires models that experience the world and learn from their mistakes, the
              same way that humans do. And this kind of trial and error can be massively accelerated when
              done in simulation, rather than in the real world.
            </p>
            <p className="rw-display-s max-w-2xl">
              World models offer the most clear path to general-purpose simulation.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Link
            href="/research#gwm-1"
            className="group relative isolate flex min-h-[360px] flex-col justify-end overflow-hidden rounded-xl bg-off-black p-8 text-white"
          >
            <MediaPanel
              variant="violet"
              seed={11}
              rounded="rounded-none"
              className="absolute inset-0 h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="relative">
              <p className="rw-eyebrow text-white/60">Research</p>
              <h2 className="rw-display-m mt-3">Introducing GWM-1</h2>
              <p className="rw-paragraph-m mt-3 max-w-md text-white/75">
                A state-of-the-art General World Model built to interact with the real world — and a major
                step towards universal simulation.
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
                Read the research
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </div>
          </Link>

          <div className="flex flex-col justify-between rounded-xl border border-light-gray p-8">
            <div>
              <Eyebrow>Offices</Eyebrow>
              <p className="rw-display-s mt-3">
                We have offices around the world, with team members working remotely from everywhere.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {offices.map((office) => (
                  <li
                    key={office}
                    className="rounded-full border border-off-black/10 px-3.5 py-1.5 text-[13px]"
                  >
                    {office}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <ArrowLink href="/careers">Open roles</ArrowLink>
              <ArrowLink href="/news">Company news</ArrowLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="off-white" id="roles">
        <SectionHeader
          eyebrow="Open roles"
          title="Build the next paradigm of computing with us."
          action={<ArrowLink href="/careers">View all openings</ArrowLink>}
        />
        <ul className="mt-10 divide-y divide-light-gray border-y border-light-gray">
          {preview.map((job) => (
            <li key={job.title}>
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-[15px] font-medium">{job.title}</p>
                  <p className="mt-0.5 text-[13px] text-slate-gray">
                    {job.department} · {job.location}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[13px] font-medium text-off-black/70 group-hover:text-off-black">
                  Apply <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Our Research"
          title="We are pioneering general-purpose multimodal simulators of the world."
          action={<ArrowLink href="/research">Read more</ArrowLink>}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {researchPosts.slice(0, 3).map((post, index) => (
            <Reveal key={post.title} delay={index * 80}>
              <Link
                href={post.slug}
                className="group flex h-full flex-col rounded-xl border border-light-gray p-6 transition-colors hover:border-off-black/20"
              >
                <p className="rw-eyebrow text-[10px]">Research · {post.date}</p>
                <h3 className="rw-heading-min mt-3">{post.title}</h3>
                <p className="rw-paragraph-s mt-3 line-clamp-4 text-slate-gray">{post.summary}</p>
                <span className="mt-auto pt-5 text-[13px] font-medium">Read more</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
