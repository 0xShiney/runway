import type { Metadata } from "next";
import { ArrowLink, CtaBand, Eyebrow, MediaPanel, PillLink, Section, SectionHeader } from "@/components/marketing/primitives";
import { CodeSample } from "@/components/sections/code-sample";

export const metadata: Metadata = {
  title: "Runway MCP",
  description:
    "Connect Runway to ChatGPT, Claude, Codex and other agents with the Runway MCP server.",
  alternates: { canonical: "/mcp" },
};

const clients = [
  { name: "ChatGPT", note: "Generate and edit media from a conversation." },
  { name: "Claude", note: "Bring Runway tools into Claude and Claude Code." },
  { name: "Codex", note: "Build integrations without leaving the editor." },
  { name: "Cursor", note: "Inspect and rerun generations while you build." },
];

export default function McpPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-14 md:pt-20">
        <div className="rw-container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>Runway MCP</Eyebrow>
              <h1 className="rw-display-xl mt-4 max-w-2xl">Connect Runway to your agent.</h1>
              <p className="rw-paragraph-m mt-5 max-w-xl text-slate-gray">
                The Runway MCP server exposes generation, editing and asset management to the assistants
                you already work in — ChatGPT, Claude, Codex, Cursor and other MCP-compatible clients.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PillLink href="https://docs.dev.runwayml.com/guides/mcp/" external>
                  Read the MCP guide
                </PillLink>
                <PillLink href="/api" variant="outline">
                  Developer platform
                </PillLink>
              </div>
            </div>
            <MediaPanel variant="violet" seed={161} ratio="4 / 3" label="Abstract artwork for Runway MCP" />
          </div>
        </div>
      </section>

      <Section tone="off-white">
        <SectionHeader eyebrow="Clients" title="Works with the tools you already use" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <div key={client.name} className="rounded-xl border border-light-gray bg-white p-5">
              <h3 className="rw-heading-min">{client.name}</h3>
              <p className="rw-paragraph-s mt-2 text-slate-gray">{client.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>Setup</Eyebrow>
            <h2 className="rw-display-m mt-3">Add the server in a few minutes</h2>
            <ol className="mt-6 flex flex-col gap-4">
              {[
                "Create an API key in the Runway Dev portal and keep it out of version control.",
                "Add the Runway MCP server to your client's configuration.",
                "Restart the client and authorize access to your workspace.",
                "Ask the agent to generate or edit an asset, then review the result in Runway.",
              ].map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-off-black text-[11px] font-medium text-white">
                    {index + 1}
                  </span>
                  <span className="text-[14px] leading-relaxed text-off-black/80">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[12px] leading-relaxed text-slate-gray">
              Keys are managed by Runway. This reconstruction does not include an MCP server, a proxy or any
              credential handling.
            </p>
            <div className="mt-6">
              <ArrowLink href="https://docs.dev.runwayml.com/guides/mcp/" external>
                Official setup instructions
              </ArrowLink>
            </div>
          </div>
          <CodeSample />
        </div>
      </Section>

      <Section tone="off-white">
        <SectionHeader
          eyebrow="Use cases"
          title="What agents can do with Runway"
          body="Once connected, an agent can call the same models and workflows available in the platform."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { title: "Generate variants", body: "Ask for ten on-brand variations of a hero stat and compare outputs." },
            { title: "Edit an existing cut", body: "Relight, restyle or remove elements from a shot by describing the change." },
            { title: "Automate a pipeline", body: "Chain models into a workflow and trigger it from your agent." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-light-gray bg-white p-6">
              <h3 className="rw-heading-min">{item.title}</h3>
              <p className="rw-paragraph-s mt-2 text-slate-gray">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Build with Runway inside your agent."
        body="Get an API key, connect the MCP server and start generating from your editor."
        primary={{ label: "Get API key", href: "https://dev.runwayml.com/" }}
        secondary={{ label: "Read the docs", href: "https://docs.dev.runwayml.com/" }}
      />
    </>
  );
}
