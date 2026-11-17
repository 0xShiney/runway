import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  ArrowLink,
  Badge,
  CtaBand,
  Eyebrow,
  MediaPanel,
  PillLink,
  Section,
  SectionHeader,
} from "@/components/marketing/primitives";
import { Reveal } from "@/components/marketing/reveal";
import { BeforeAfterSlider } from "@/components/motion/before-after-slider";
import { Artwork } from "@/components/marketing/artwork";
import { apps, creativeTools, customerStories, latestTools, models, newsItems } from "@/data/content";

export const metadata: Metadata = {
  title: "AI Image and Video Generator",
  description:
    "Every model you need to make anything you want. Bring your entire creative workflow together inside of Runway.",
  alternates: { canonical: "/product" },
};

export default function ProductPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-4">
        <div className="rw-container">
          <div className="relative isolate min-h-[480px] overflow-hidden rounded-xl bg-off-black md:h-[min(72vh,600px)]">
            <MediaPanel
              variant="ocean"
              seed={5}
              rounded="rounded-none"
              className="absolute inset-0 h-full w-full"
              label="Abstract ocean-toned artwork representing Runway video generation"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6 md:p-12">
                <h1 className="rw-display-l max-w-3xl text-white">
                  A new frontier for video generation.
                </h1>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <PillLink href="/signup" variant="light">
                    Get Started
                  </PillLink>
                  <p className="rw-paragraph-s text-white/70">
                    Used by 60M+ users globally — try today and cancel anytime
                  </p>
                </div>
              </div>
            </MediaPanel>
          </div>
        </div>
      </section>

      <Section id="models" className="pt-4 md:pt-8">
        <SectionHeader
          eyebrow="Models"
          title="Every model you need to make anything you want."
          body="Bring your entire creative workflow together inside of Runway with access to the world's best image, video, audio, editing and language models."
        />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {models.map((model) => (
            <li
              key={model.name}
              className="flex items-center justify-between gap-2 rounded-lg border border-light-gray px-4 py-3"
            >
              <span className="text-[13px] font-medium">{model.name}</span>
              <span className="text-[10px] uppercase tracking-wide text-slate-gray">{model.kind}</span>
            </li>
          ))}
        </ul>
        <p className="rw-paragraph-m mt-8 max-w-3xl text-slate-gray">
          A new kind of creative toolkit with everything you need to generate any video, image or piece of
          content you want.
        </p>
      </Section>

      <Section tone="off-white">
        <SectionHeader eyebrow="Latest" title="Our latest models and tools" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {latestTools.map((tool, index) => (
            <Reveal key={tool.title} delay={(index % 4) * 70}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-light-gray bg-white">
                <MediaPanel
                  variant={(["violet", "ember", "forest", "ocean"] as const)[index % 4]}
                  seed={index + 20}
                  ratio="16 / 10"
                  rounded="rounded-none"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[15px] font-medium leading-snug">{tool.title}</h3>
                  <p className="rw-paragraph-s mt-2 text-slate-gray">{tool.description}</p>
                  <div className="mt-auto flex items-center justify-between pt-5">
                    <ArrowLink href={tool.href}>{tool.cta}</ArrowLink>
                    {index < 2 ? <Badge>New</Badge> : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="agent">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>Creative toolkit</Eyebrow>
            <h2 className="rw-display-m mt-3">Dozens of tools. Endless ways to create.</h2>
            <p className="rw-paragraph-m mt-4 max-w-lg text-slate-gray">
              Transform a shot, build a mood board, stage a room, try on a garment or sketch an entire
              sequence — then keep going without leaving the workspace.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {creativeTools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-off-black/10 bg-white px-3.5 py-1.5 text-[13px] text-off-black/75"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-light-gray p-4">
              <h3 className="rw-heading-min">Edit, Transform and Generate Video</h3>
              <p className="rw-paragraph-s mt-2 text-slate-gray">
                Easily change the lighting of a scene, restyle a shot or subject, add or remove elements
                from a take and much more. All just by telling the model what you&apos;re looking for.
              </p>
              <div className="mt-4">
                <BeforeAfterSlider
                  showLabels
                  hint
                  before={<Artwork variant="steel" seed={31} label="Before: original plate" />}
                  after={<Artwork variant="ember" seed={32} label="After: restyled shot" />}
                  className="rounded-lg"
                />
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {["change outfit", "change art direction", "remove background", "remove elements", "change object"].map(
                  (chip) => (
                    <li
                      key={chip}
                      className="rounded-full bg-off-white-alt px-3 py-1 text-[12px] text-off-black/70"
                    >
                      {chip}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="characters" tone="off-white">
        <SectionHeader
          eyebrow="Customer stories"
          title="How the world's leading organizations and artists are using Runway."
          body="Runway is helping change the way work gets made across all industries."
          action={<ArrowLink href="/news?filter=customers">View all case studies</ArrowLink>}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {customerStories.slice(0, 3).map((story, index) => (
            <Link
              key={story.client}
              href={story.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-light-gray bg-white"
            >
              <MediaPanel
                variant={(["forest", "sand", "steel"] as const)[index]}
                seed={index + 40}
                ratio="16 / 10"
                rounded="rounded-none"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="rw-eyebrow text-[10px]">{story.client} · Customer Stories</p>
                <h3 className="mt-3 text-[15px] font-medium leading-snug">{story.line}</h3>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium">
                  Read more
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="apps">
        <SectionHeader eyebrow="Apps" title="Explore other apps" />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <article
              key={app.title}
              className="flex flex-col gap-2 rounded-xl border border-light-gray p-5 transition-colors hover:border-off-black/20"
            >
              <h3 className="rw-heading-min">{app.title}</h3>
              <p className="rw-paragraph-s text-slate-gray">{app.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Eyebrow className="text-white/50">Workflows</Eyebrow>
            <h2 className="rw-display-m mt-3">Build the Workflows That Work for You.</h2>
            <p className="rw-paragraph-m mt-4 max-w-lg text-white/70">
              Create your own custom node-based workflows that chain together multiple models, modalities
              and intermediary steps for even more control of your generations.
            </p>
            <div className="mt-7">
              <PillLink href="/workflows" variant="light">
                Learn more about Workflows
              </PillLink>
            </div>
          </div>
          <MediaPanel variant="violet" seed={55} ratio="16 / 10" />
        </div>
      </Section>

      <Section>
        <SectionHeader title="News" action={<ArrowLink href="/news">View all news</ArrowLink>} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {newsItems.slice(0, 3).map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col gap-3 rounded-xl border border-light-gray p-5 transition-colors hover:border-off-black/20"
            >
              <p className="rw-eyebrow text-[10px]">{item.category}</p>
              <h3 className="text-[15px] font-medium leading-snug">{item.title}</h3>
              <p className="rw-paragraph-s text-slate-gray">{item.excerpt}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-[13px] font-medium">
                Read more <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Start making anything you want."
        body="Try Runway free, or talk to our team about bringing generative media into your production pipeline."
        primary={{ label: "Try Runway for free", href: "/signup" }}
        secondary={{ label: "Contact sales", href: "/enterprise-contact" }}
      />
    </>
  );
}
