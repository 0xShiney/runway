import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArrowLink, MediaPanel, PillLink, Section, SectionHeader } from "@/components/marketing/primitives";
import { JobList } from "@/components/careers/job-list";
import { Faq } from "@/components/sections/faq";
import { allJobs, benefits, departments, jobsSnapshotDate, offices, press, recognition } from "@/data/jobs";
import { researchPosts } from "@/data/content";

export const metadata: Metadata = {
  title: "Careers in AI Video Technology",
  description:
    "Join our global team of researchers, engineers, artists and designers building AI to simulate the world.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-4">
        <div className="rw-container">
          <div className="relative isolate min-h-[520px] overflow-hidden rounded-xl bg-off-black md:h-[min(70vh,620px)]">
            <MediaPanel
              variant="forest"
              seed={13}
              rounded="rounded-none"
              className="absolute inset-0 h-full w-full"
              label="Abstract artwork representing the Runway team"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6 md:p-12">
                <h1 className="rw-display-l max-w-3xl text-white">
                  We are building AI to simulate the world through merging art and science.
                </h1>
                <p className="rw-paragraph-m mt-5 max-w-xl text-white/75">
                  Join our global team of researchers, engineers, artists and designers.
                </p>
                <div className="mt-7">
                  <PillLink href="#open-roles" variant="light">
                    See open roles
                  </PillLink>
                </div>
              </div>
            </MediaPanel>
          </div>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-[13px] text-slate-gray">
              Offices in {offices.join(", ")} — with team members working remotely from all over the world.
            </p>
            <p className="text-[13px] text-slate-gray">
              {allJobs.length} open roles · snapshot {jobsSnapshotDate}
            </p>
          </div>
        </div>
      </section>

      <Section id="open-roles" className="pt-4 md:pt-8">
        <SectionHeader
          eyebrow="Open Roles"
          title="Find your next role."
          body="Roles are grouped by department. Every application opens the original posting on Runway's Ashby job board."
        />
        <div className="mt-10">
          <JobList departments={departments} snapshotDate={jobsSnapshotDate} />
        </div>

        <div className="mt-12 rounded-xl border border-light-gray bg-off-white-alt p-6 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="rw-heading-min">Don&apos;t see your role?</h3>
            <p className="rw-paragraph-s mt-1 text-slate-gray">
              Send an email and Runway will let you know if there&apos;s a fit.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <PillLink href="mailto:recruiting@runwayml.com" size="sm">
              recruiting@runwayml.com
            </PillLink>
          </div>
        </div>
      </Section>

      <Section tone="off-white">
        <SectionHeader
          eyebrow="Benefits"
          title="Support for the whole person, not just the work."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <MediaPanel variant="ocean" seed={17} ratio="4 / 5" label="Abstract artwork of the Runway studio" />
          <div>
            <Faq items={benefits.map((benefit) => ({ question: benefit.title, answer: benefit.body }))} />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Recognition" title="Runway is proud to be recognized as a Best Place to Work." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recognition.map((item) => (
            <div key={item.org} className="rounded-xl border border-light-gray p-6">
              <p className="rw-display-xs">{item.org}</p>
              <p className="rw-paragraph-s mt-2 text-slate-gray">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="off-white">
        <SectionHeader eyebrow="In the Press" title="Recent coverage" action={<ArrowLink href="/news">All news</ArrowLink>} />
        <ul className="mt-10 divide-y divide-light-gray border-y border-light-gray">
          {press.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 py-4 md:flex-row md:items-baseline md:gap-8"
              >
                <span className="w-28 shrink-0 text-[12px] uppercase tracking-wide text-slate-gray">
                  {item.date}
                </span>
                <span className="w-36 shrink-0 text-[13px] font-medium">{item.outlet}</span>
                <span className="flex-1 text-[15px] leading-snug text-off-black/85 group-hover:text-off-black">
                  {item.title}
                </span>
                <ArrowUpRight className="hidden size-4 shrink-0 text-off-black/40 md:block" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader eyebrow="Our Research" title="Pioneering general-purpose multimodal simulators" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {researchPosts.slice(0, 3).map((post) => (
            <Link
              key={post.title}
              href={post.slug}
              className="rounded-xl border border-light-gray p-6 transition-colors hover:border-off-black/20"
            >
              <p className="rw-eyebrow text-[10px]">{post.date}</p>
              <h3 className="rw-heading-min mt-3">{post.title}</h3>
              <p className="rw-paragraph-s mt-2 line-clamp-3 text-slate-gray">{post.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
