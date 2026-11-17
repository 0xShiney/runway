import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  ArrowLink,
  CtaBand,
  Eyebrow,
  MediaPanel,
  PillLink,
  Section,
  SectionHeader,
} from "@/components/marketing/primitives";
import { researchPillars, researchPosts } from "@/data/content";

export const metadata: Metadata = {
  title: "AI Video Research & Innovation",
  description:
    "Runway Research is building general-purpose multimodal simulators of the world, from General World Models to robot control.",
  alternates: { canonical: "/research" },
};

const publications = [
  { title: "Praxis-1: From Video Pretraining to Robot Control", date: "November 2026", venue: "Technical report" },
  { title: "GWM Worlds 2", date: "September 2026", venue: "Research preview" },
  { title: "Solaris: Towards Interfaces That Are Generated, Not Coded", date: "September 2026", venue: "arXiv" },
  { title: "Introducing GWM-1", date: "September 2026", venue: "Research announcement" },
  { title: "Gen-4.5", date: "August 2026", venue: "Model release" },
  { title: "Introducing General World Models", date: "December 2023", venue: "Research announcement" },
];

export default function ResearchPage() {
  return (
    <>
      <section className="bg-white pb-14 pt-14 md:pb-20 md:pt-20">
        <div className="rw-container">
          <Eyebrow>Our Research</Eyebrow>
          <h1 className="rw-display-xl mt-5 max-w-4xl">
            Building general-purpose multimodal
            <br className="hidden md:block" /> simulators of the world.
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="rw-paragraph-m max-w-2xl text-slate-gray">
              We believe models that use video as their main input/output modality, when supplemented by
              other modalities like text and audio, will form the next paradigm of computing.
            </p>
            <PillLink href="/news?filter=research">Latest news from our research</PillLink>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="rw-container">
          <div className="relative isolate overflow-hidden rounded-xl">
            <MediaPanel variant="violet" seed={101} ratio="21 / 9" rounded="rounded-xl" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6 md:p-10">
              <div className="text-white">
                <p className="rw-eyebrow text-white/60">Research from Runway</p>
                <h2 className="rw-display-s mt-2 max-w-2xl">
                  Praxis-1: From Video Pretraining to Robot Control
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="publications" className="pt-0">
        <SectionHeader eyebrow="Papers" title="Research from Runway" />
        <ul className="mt-10 divide-y divide-light-gray border-y border-light-gray">
          {researchPosts.map((post) => (
            <li key={post.title} className="py-8">
              <div className="grid gap-4 lg:grid-cols-[160px_1fr_auto] lg:items-start">
                <p className="text-[12px] uppercase tracking-wide text-slate-gray">{post.date}</p>
                <div>
                  <h3 className="rw-display-xs max-w-2xl">{post.title}</h3>
                  <p className="mt-1 text-[12px] text-slate-gray">{post.authors}</p>
                  <p className="rw-paragraph-m mt-3 max-w-3xl text-slate-gray">{post.summary}</p>
                </div>
                <div className="lg:pt-1">
                  <ArrowLink href={post.slug}>Read paper</ArrowLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <PillLink href="/news?filter=research" variant="outline">
            View more publications
          </PillLink>
        </div>
      </Section>

      <Section tone="off-white">
        <SectionHeader
          eyebrow="Research pillars"
          title="Models that understand, perceive, generate and act"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {researchPillars.map((pillar) => (
            <Link
              key={pillar.id}
              id={pillar.id}
              href={pillar.href}
              className="group flex scroll-mt-28 flex-col justify-between rounded-xl border border-light-gray bg-white p-6 transition-colors hover:border-off-black/25"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="rw-display-xs">{pillar.title}</h3>
                <ArrowUpRight className="size-4 shrink-0 text-off-black/40" aria-hidden="true" />
              </div>
              <p className="rw-paragraph-s mt-8 text-slate-gray">{pillar.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="rna-sessions">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <MediaPanel variant="ember" seed={104} ratio="4 / 3" label="Abstract artwork for RNA Sessions" />
          <div>
            <Eyebrow>RNA Sessions</Eyebrow>
            <h2 className="rw-display-m mt-3">AI and art research talks</h2>
            <p className="rw-paragraph-m mt-4 max-w-md text-slate-gray">
              An ongoing series of talks about frontier research in AI and art, hosted by Runway.
            </p>
            <div className="mt-6">
              <ArrowLink href="/news?filter=research">Learn more</ArrowLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="off-white">
        <SectionHeader eyebrow="Publications" title="Selected publications" />
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <caption className="sr-only">Selected Runway publications</caption>
            <thead>
              <tr className="border-b border-off-black/15">
                <th scope="col" className="py-3 pr-6 text-[12px] font-medium uppercase tracking-wide text-slate-gray">
                  Title
                </th>
                <th scope="col" className="py-3 pr-6 text-[12px] font-medium uppercase tracking-wide text-slate-gray">
                  Date
                </th>
                <th scope="col" className="py-3 text-[12px] font-medium uppercase tracking-wide text-slate-gray">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              {publications.map((publication) => (
                <tr key={publication.title} className="border-b border-light-gray">
                  <th scope="row" className="py-4 pr-6 text-[14px] font-normal">
                    {publication.title}
                  </th>
                  <td className="py-4 pr-6 text-[13px] text-slate-gray">{publication.date}</td>
                  <td className="py-4 text-[13px] text-slate-gray">{publication.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Latest news"
          title="From the research blog"
          action={<ArrowLink href="/news?filter=research">View all research news</ArrowLink>}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {researchPosts.slice(0, 3).map((post) => (
            <Link
              key={post.title}
              href={post.slug}
              className="flex flex-col gap-2 rounded-xl border border-light-gray p-6 transition-colors hover:border-off-black/20"
            >
              <p className="rw-eyebrow text-[10px]">{post.date}</p>
              <h3 className="rw-heading-min">{post.title}</h3>
              <p className="rw-paragraph-s text-slate-gray">{post.authors}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Build with the models behind the research."
        body="Start on the creative platform, or integrate the same models through Runway Dev."
        primary={{ label: "Try Runway", href: "/signup" }}
        secondary={{ label: "Explore Runway Dev", href: "/api" }}
      />
    </>
  );
}
