import type { Metadata } from "next";
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
import { Artwork } from "@/components/marketing/artwork";

export const metadata: Metadata = {
  title: "Runway Robotics | Praxis-1, open-weight robot policies",
  description:
    "Runway Robotics turns the video pretraining behind our general world models into control for real robots. Praxis-1 is available with open weights under Apache 2.0.",
  alternates: { canonical: "/product/robotics" },
};

const principles = [
  {
    title: "Open weights, Apache 2.0",
    body: "Weights on Hugging Face, with inference and fine-tuning code on GitHub. Licensed for commercial use.",
  },
  {
    title: "Adapt it to your hardware",
    body: "A single Praxis-1 checkpoint adapts to new embodiments with fine-tuning.",
  },
  {
    title: "Runs where you build",
    body: "Available in LeRobot and vLLM-Omni, with hosted inference on Reactor.",
  },
];

export default function RoboticsPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-4">
        <div className="rw-container">
          <div className="relative isolate min-h-[540px] overflow-hidden rounded-xl bg-off-black md:h-[min(72vh,620px)]">
            <MediaPanel variant="steel" seed={21} rounded="rounded-none" className="absolute inset-0 h-full w-full" label="Abstract artwork representing robotics and world action models">
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6 md:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>Praxis-1 is now available</Badge>
                  <span className="rw-eyebrow text-white/60">Runway Robotics</span>
                </div>
                <h1 className="rw-display-l mt-4 max-w-3xl text-white">
                  Robot policies built on video pretraining.
                </h1>
                <div className="mt-7 flex flex-wrap gap-3">
                  <PillLink href="/news?filter=company" variant="light">
                    Read the announcement
                  </PillLink>
                  <PillLink href="#praxis-1" variant="ghost">
                    Explore Praxis-1
                  </PillLink>
                </div>
              </div>
            </MediaPanel>
          </div>
        </div>
      </section>

      <Section className="pt-6 md:pt-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Introduction</Eyebrow>
          </div>
          <p className="rw-paragraph-l max-w-3xl">
            Runway Robotics turns the video pretraining behind our general world models into control for
            real robots. Our first release, Praxis-1, is a state-of-the-art world action model, available
            to everyone with open weights under the Apache 2.0 license.
          </p>
        </div>
      </Section>

      <Section id="praxis-1" tone="off-white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Praxis-1</Eyebrow>
            <h2 className="rw-display-m mt-3">Run and adapt it on your own hardware.</h2>
            <p className="rw-paragraph-m mt-5 text-slate-gray">
              Praxis-1 learns how objects behave and how tasks unfold from large-scale video, which gives
              it a head start on a new embodiment before fine-tuning on any hardware or domain-specific
              data. Give it camera observations, your robot&apos;s state and a task, and it predicts the
              actions to carry it out.
            </p>
          </div>
          <MediaPanel variant="steel" seed={24} ratio="4 / 3" label="Abstract visualization of a world action model predicting scene motion" />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {principles.map((principle, index) => (
            <div key={principle.title} className="rounded-xl border border-light-gray bg-white p-6">
              <span className="text-[12px] font-medium text-slate-gray">0{index + 1}</span>
              <h3 className="rw-heading-min mt-3">{principle.title}</h3>
              <p className="rw-paragraph-s mt-2 text-slate-gray">{principle.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <a
            href="https://huggingface.co/collections/runwayml/praxis-1"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-xl border border-light-gray p-8 transition-colors hover:border-off-black/25"
          >
            <div>
              <p className="rw-eyebrow">Weights</p>
              <h3 className="rw-display-xs mt-3">Download the weights</h3>
              <p className="rw-paragraph-s mt-3 max-w-sm text-slate-gray">
                Get the Praxis-1 checkpoints on Hugging Face under the Apache 2.0 license, including for
                commercial use.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium">
              Open on Hugging Face
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </a>
          <a
            href="https://github.com/runwayml/praxis-1-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-xl border border-light-gray p-8 transition-colors hover:border-off-black/25"
          >
            <div>
              <p className="rw-eyebrow">Code</p>
              <h3 className="rw-display-xs mt-3">View the code</h3>
              <p className="rw-paragraph-s mt-3 max-w-sm text-slate-gray">
                Inference, policy server and fine-tuning code on GitHub, with support for both full
                fine-tuning and LoRA.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium">
              Open on GitHub
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-xl bg-off-black p-8 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="rw-display-xs">Planning a deployment?</h3>
            <p className="rw-paragraph-s mt-1 text-white/65">
              Talk to our robotics team about fine-tuning, evaluation and hosted inference.
            </p>
          </div>
          <PillLink href="/product/robotics/contact" variant="light">
            Contact our robotics team
          </PillLink>
        </div>
      </Section>

      <Section id="research" tone="off-white">
        <SectionHeader eyebrow="Research" title="The latest from Runway Research." />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="flex flex-col gap-3 rounded-xl border border-light-gray bg-white p-6">
            <div className="overflow-hidden rounded-lg">
              <Artwork variant="violet" seed={27} />
            </div>
            <p className="rw-eyebrow text-[10px]">Research · September 30, 2026</p>
            <h3 className="rw-heading-min">Introducing Praxis-1</h3>
            <p className="rw-paragraph-s text-slate-gray">
              An open-weight world action model that turns Runway&apos;s video pretraining into control
              for real robots.
            </p>
            <ArrowLink href="/research#publications">Read the post</ArrowLink>
          </article>
          <LinkCard />
        </div>
      </Section>

      <CtaBand
        title="Bring robot policies into your hardware stack."
        body="Start with the open weights, or work with our team on a deployment."
        primary={{ label: "Contact our robotics team", href: "/product/robotics/contact" }}
        secondary={{ label: "Read the research", href: "/research" }}
      />
    </>
  );
}

function LinkCard() {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-light-gray bg-white p-6">
      <div className="overflow-hidden rounded-lg">
        <Artwork variant="steel" seed={28} />
      </div>
      <p className="rw-eyebrow text-[10px]">Technical blog · November 11, 2026</p>
      <h3 className="rw-heading-min">Praxis-1: From Video Pretraining to Robot Control</h3>
      <p className="rw-paragraph-s text-slate-gray">
        How Praxis-1 is built, how we train it and how it scales.
      </p>
      <ArrowLink href="/research#publications">Read the post</ArrowLink>
    </article>
  );
}
