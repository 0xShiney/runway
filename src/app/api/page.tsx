import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import {
  ArrowLink,
  Badge,
  CtaBand,
  Eyebrow,
  LogoRow,
  MediaPanel,
  PillLink,
  Section,
  SectionHeader,
} from "@/components/marketing/primitives";
import { CodeSample } from "@/components/sections/code-sample";
import { partnerLogos } from "@/data/content";

export const metadata: Metadata = {
  title: "Runway Developer Platform",
  description:
    "The AI media platform for developers. The best image, video and audio models from Runway and other frontier labs, behind one API.",
  alternates: { canonical: "/api" },
};

const pillars = [
  { title: "Access", body: "Models, Workflows, Recipes and Characters — all accessible through a single API." },
  { title: "Evaluate", body: "Run the same prompt across models. Score by quality, speed and cost before committing to production." },
  { title: "Automate", body: "Set a preference for cost, latency or quality. The platform routes every request to the best model automatically." },
  { title: "Control", body: "Full visibility into cost per model, per endpoint, per team. One invoice for everything." },
];

const apiModels = [
  { name: "Gen-4.5", note: "Balanced everyday video generation", resolution: "720p", inputs: "Text, Image", duration: "Up to 10s", price: "$0.12/sec" },
  { name: "Aleph 2.0", note: "Precise video editing", resolution: "Matches input", inputs: "Text, Image, Video", duration: "Up to 30s", price: "$0.28/sec" },
  { name: "Seedance 2.5", note: "Multi-reference video up to 30s", resolution: "480p, 720p, 1080p", inputs: "Text, Image, Video", duration: "Up to 30s", price: "From $0.20/sec" },
  { name: "Ruby", note: "Color grading to true HDR", resolution: "Matches input", inputs: "Video", duration: "Up to 30s", price: "From $0.20/sec" },
  { name: "Gemini Omni Flash 1.1", note: "Google's multimodal video model with native audio", resolution: "360p – 4K", inputs: "Text, Image, Video", duration: "Up to 10s", price: "From $0.03/sec" },
  { name: "GPT Image 2", note: "OpenAI's latest image model, up to 4K", resolution: "1K, 2K, 4K", inputs: "Text, Image", duration: "N/A", price: "From $0.01/image" },
  { name: "Nano Banana Pro", note: "Google's most capable image model", resolution: "1K, 2K, 4K", inputs: "Text, Image", duration: "N/A", price: "From $0.20/image" },
  { name: "Seedream 5.0 Pro", note: "Reasoning image editing with multi-reference fusion", resolution: "1K, 2K", inputs: "Text, Image", duration: "N/A", price: "From $0.05/image" },
];

const enterpriseFeatures = [
  "99.9% uptime",
  "No training on your data",
  "You own your outputs",
  "Enterprise-level support",
  "SOC 2 Type II",
  "IP indemnification",
  "Content moderation",
];

export default function DevPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-off-black text-white">
        <MediaPanel variant="violet" seed={91} rounded="rounded-none" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/30" />
        <div className="rw-container relative py-20 md:py-28">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Runway Dev</Badge>
            <span className="rw-eyebrow text-white/50">Developer platform</span>
          </div>
          <h1 className="rw-display-xl mt-5 max-w-3xl">
            The AI Media Platform
            <br className="hidden md:block" /> for Developers
          </h1>
          <p className="rw-paragraph-m mt-6 max-w-xl text-white/75">
            The best image, video and audio models from Runway and other frontier labs. One API platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillLink href="https://dev.runwayml.com/" variant="light">
              Get API key
            </PillLink>
            <PillLink href="#models" variant="ghost">
              Explore models
            </PillLink>
          </div>
        </div>
      </section>

      <section className="border-b border-light-gray bg-white py-10">
        <div className="rw-container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] uppercase tracking-wide text-slate-gray">Trusted by</p>
          <LogoRow logos={partnerLogos.slice(0, 6)} />
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Platform"
          title="One API for production media generation."
          body="Deploy the best media models, generation workflows and real-time conversational agents through a single integration, with the visibility and controls to build at scale."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-xl border border-light-gray p-6">
              <h3 className="rw-heading-min">{pillar.title}</h3>
              <p className="rw-paragraph-s mt-2 text-slate-gray">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="models" tone="off-white">
        <SectionHeader
          eyebrow="Models"
          title="State-of-the-art models"
          body="The best video, image and audio models, from Runway and other labs, available the day they release."
          action={<ArrowLink href="https://docs.dev.runwayml.com/guides/using-the-api/" external>View SDK docs</ArrowLink>}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {apiModels.map((model) => (
            <article key={model.name} className="rounded-xl border border-light-gray bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="rw-heading-min">{model.name}</h3>
                  <p className="mt-1 text-[13px] text-slate-gray">{model.note}</p>
                </div>
                <span className="shrink-0 rounded-full bg-off-white-alt px-2.5 py-1 text-[11px]">
                  {model.price}
                </span>
              </div>
              <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-light-gray pt-4 text-[12px]">
                <div>
                  <dt className="text-slate-gray">Resolution</dt>
                  <dd className="mt-0.5 font-medium">{model.resolution}</dd>
                </div>
                <div>
                  <dt className="text-slate-gray">Inputs</dt>
                  <dd className="mt-0.5 font-medium">{model.inputs}</dd>
                </div>
                <div>
                  <dt className="text-slate-gray">Max duration</dt>
                  <dd className="mt-0.5 font-medium">{model.duration}</dd>
                </div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-4">
                <ArrowLink href="https://docs.dev.runwayml.com/guides/models/" external>
                  Documentation
                </ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Expertise built in"
          title="The best outputs, with the least work"
          body="We train frontier models and know how to get the most out of them. That expertise is built into the platform, so every call carries it."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[
            {
              id: "router",
              title: "Model router",
              body: "Set your priority between cost, quality and latency, plus a cost ceiling per generation. The router picks the best model for every request.",
              href: "https://docs.dev.runwayml.com/model-routers/",
              cta: "More on model routing",
            },
            {
              id: "recipes",
              title: "Recipes",
              body: "Runway-built endpoints with our prompting and workflow expertise packaged in. One call returns a production-ready asset.",
              href: "https://docs.dev.runwayml.com/recipes/",
              cta: "Explore Recipes",
            },
            {
              id: "characters",
              title: "Characters",
              body: "Build expressive characters with custom voices, knowledge and tools — ready for live interaction directly from your product.",
              href: "https://docs.dev.runwayml.com/characters/",
              cta: "Explore Characters",
            },
          ].map((item) => (
            <article key={item.id} id={item.id} className="scroll-mt-28 rounded-xl border border-light-gray p-6">
              <h3 className="rw-heading-min">{item.title}</h3>
              <p className="rw-paragraph-s mt-2 text-slate-gray">{item.body}</p>
              <div className="mt-4">
                <ArrowLink href={item.href} external>
                  {item.cta}
                </ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="off-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>Integration</Eyebrow>
            <h2 className="rw-display-m mt-3">Seamless integration</h2>
            <p className="rw-paragraph-m mt-4 max-w-md text-slate-gray">
              One client, one key, one bill. Start with a model call and add workflows, recipes or live
              characters when your product needs them.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Models", "Workflows", "Recipes", "Characters"].map((chip) => (
                <span key={chip} className="rounded-full border border-off-black/10 bg-white px-3 py-1.5 text-[12px]">
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <ArrowLink href="https://docs.dev.runwayml.com/" external>
                Read the documentation
              </ArrowLink>
            </div>
          </div>
          <CodeSample />
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Enterprise"
          title="Built for enterprise scale"
          body="The enterprise-ready infrastructure layer for AI media. Zero-data retention and enterprise-grade security standards as default."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {enterpriseFeatures.map((feature) => (
            <li key={feature} className="rounded-lg border border-light-gray px-4 py-3 text-[13px]">
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <PillLink href="https://dev.runwayml.com/" external>
            Get API key
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </PillLink>
          <PillLink href="/enterprise-contact" variant="outline">
            Talk to sales
          </PillLink>
        </div>
      </Section>

      <CtaBand
        title="Build generative media into your platform."
        body="Start building with the API, or work with our team on a production rollout."
        primary={{ label: "Start building", href: "https://dev.runwayml.com/" }}
        secondary={{ label: "Documentation", href: "https://docs.dev.runwayml.com/" }}
      />
    </>
  );
}
