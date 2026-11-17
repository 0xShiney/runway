import type { Metadata } from "next";
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
import { Faq } from "@/components/sections/faq";
import { apps, featuredWorkflows } from "@/data/content";

export const metadata: Metadata = {
  title: "Runway Workflows",
  description:
    "Granular control over every step of your creative process. Choose from Runway-created workflows or build your own custom pipelines — no coding required.",
  alternates: { canonical: "/workflows" },
};

const why = [
  {
    title: "Combine multiple models, modalities and tasks",
    body: "Chain generations together without having to manually copy and paste between tools. Connect outputs directly to inputs and watch your creative pipeline run automatically.",
  },
  {
    title: "Create reusable templates",
    body: "Build it once, use it forever. Save your workflows as templates so your team can produce consistent, high-quality results every time — without starting from scratch.",
  },
  {
    title: "Automate repetitive tasks",
    body: "Stop repeating the same steps manually. Combine prompting, generation, and refinement into one seamless workflow that runs with a single click.",
  },
];

const nodes = [
  {
    title: "Input Nodes",
    body: "Start here. These nodes let you upload media or enter text manually — the workflow's entry point.",
    outputs: ["Image", "Video", "Text"],
    uses: ["Bringing your own images and videos into the workflow", "Writing prompts that guide generation", "Adding custom prompt instructions for LLM nodes"],
  },
  {
    title: "Media Model Nodes",
    body: "Model nodes transform your inputs into new images and videos using Runway's generative models. Mix and match models in the same workflow.",
    outputs: ["Image", "Video"],
    uses: ["Gen-4", "Gen-4 Turbo", "Flash 2.5", "Veo 3.1", "And more"],
  },
  {
    title: "LLM Nodes",
    body: "LLM nodes analyze, enhance, and refine your prompts automatically — so you can focus on creating instead of prompt engineering.",
    outputs: ["Text"],
    uses: ["Turning basic prompts into detailed prompts", "Analyzing images and generating descriptions", "Maintaining consistent prompt style across generations"],
  },
];

const workflowFaq = [
  { question: "Do workflows take credits?", answer: "Yes. Media model nodes and LLM nodes use credits when they run." },
  {
    question: "Can I only use third party models in workflows?",
    answer:
      "Third-party models are available throughout the Runway platform, including in Workflows. The platform selects the best model based on your needs and prompt — whether that's a Runway native model or a third-party option.",
  },
  {
    question: "Can I edit an existing workflow?",
    answer:
      "Yes. You can modify workflows after creating them by adding or removing nodes, adjusting links, and changing settings.",
  },
  {
    question: "What do the different colors of nodes mean?",
    answer: "Node colors indicate the content type: orange for text, pink for image and green for video.",
  },
  {
    question: "How do I create a node?",
    answer:
      "Add a new node by right-clicking anywhere in the Workflow Editor, or by clicking the + symbol on the left-hand side of the editor, then selecting the desired node.",
  },
  {
    question: "How do I run my workflow once I've built it?",
    answer:
      "Run all from the top-right corner processes the full workflow from start to finish. Running an individual node processes just that step, which is useful for testing or regenerating one part of a pipeline.",
  },
];

export default function WorkflowsPage() {
  return (
    <>
      <section className="bg-white pb-14 pt-14 md:pt-20">
        <div className="rw-container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>Introducing Runway Workflows</Eyebrow>
              <h1 className="rw-display-xl mt-4 max-w-2xl">Runway Workflows</h1>
              <p className="rw-paragraph-m mt-5 max-w-xl text-slate-gray">
                Workflows give you granular control over every step of your creative process. Choose from
                Runway-created workflows or build your own custom pipelines — no coding required.
              </p>
              <div className="mt-8">
                <PillLink href="/signup">Get Started</PillLink>
              </div>
            </div>
            <MediaPanel variant="ocean" seed={141} ratio="4 / 3" label="Abstract artwork of a node-based workflow" />
          </div>
        </div>
      </section>

      <Section tone="off-white">
        <SectionHeader eyebrow="Runway Workflows" title="Why Workflows?" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {why.map((item, index) => (
            <div key={item.title} className="rounded-xl border border-light-gray bg-white p-6">
              <span className="text-[12px] font-medium text-slate-gray">0{index + 1}</span>
              <h3 className="rw-heading-min mt-3">{item.title}</h3>
              <p className="rw-paragraph-s mt-2 text-slate-gray">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Featured workflows" title="Start from a template" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredWorkflows.map((workflow, index) => (
            <article
              key={workflow}
              className="group overflow-hidden rounded-xl border border-light-gray transition-colors hover:border-off-black/20"
            >
              <MediaPanel
                variant={(["violet", "ember", "forest", "ocean", "sand", "steel"] as const)[index % 6]}
                seed={index + 145}
                ratio="16 / 10"
                rounded="rounded-none"
              />
              <div className="flex items-center justify-between p-5">
                <h3 className="text-[14px] font-medium">{workflow}</h3>
                <ArrowUpRight className="size-4 text-off-black/40" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-[12px] text-slate-gray">
          Workflow templates open in the Runway app on the live site; this reconstruction presents the
          gallery without linking into the product.
        </p>
      </Section>

      <Section tone="off-white">
        <SectionHeader
          eyebrow="Build your own"
          title="Build your own Workflow"
          body="Every workflow is assembled from three kinds of nodes."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {nodes.map((node) => (
            <div key={node.title} className="flex flex-col rounded-xl border border-light-gray bg-white p-6">
              <h3 className="rw-heading-min">{node.title}</h3>
              <p className="rw-paragraph-s mt-2 text-slate-gray">{node.body}</p>
              <p className="mt-5 text-[11px] uppercase tracking-wide text-slate-gray">Use them for</p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {node.uses.map((use) => (
                  <li key={use} className="flex gap-2 text-[13px] text-off-black/75">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-off-black/40" aria-hidden="true" />
                    {use}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[11px] uppercase tracking-wide text-slate-gray">Outputs</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {node.outputs.map((output) => (
                  <span key={output} className="rounded-full bg-off-white-alt px-2.5 py-1 text-[11px]">
                    {output}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Apps</Eyebrow>
            <h2 className="rw-display-m mt-3">Explore easy to use Apps</h2>
            <p className="rw-paragraph-m mt-3 max-w-xl text-slate-gray">
              If you&apos;re looking for an easier way to get to great outputs, try our pre-made Apps that
              make generating as easy as asking.
            </p>
          </div>
          <ArrowLink href="/product#apps">View all apps</ArrowLink>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {apps.slice(0, 6).map((app) => (
            <article key={app.title} className="rounded-xl border border-light-gray p-5">
              <h3 className="rw-heading-min">{app.title}</h3>
              <p className="rw-paragraph-s mt-2 text-slate-gray">{app.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="off-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="rw-display-m mt-3">Workflow questions</h2>
          </div>
          <Faq items={workflowFaq} />
        </div>
      </Section>

      <CtaBand
        title="Build the Workflows that work for you."
        primary={{ label: "Try Runway free", href: "/signup" }}
        secondary={{ label: "See the creative platform", href: "/product" }}
      />
    </>
  );
}
