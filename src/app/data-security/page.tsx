import type { Metadata } from "next";
import { CtaBand, Eyebrow, MediaPanel, Section, SectionHeader } from "@/components/marketing/primitives";
import { securityPillars } from "@/data/safety";

export const metadata: Metadata = {
  title: "Data Security | Runway",
  description:
    "How Runway protects customer data: encryption in transit and at rest, access controls, retention and SOC 2 Type II.",
  alternates: { canonical: "/data-security" },
};

const controls = [
  { area: "Encryption", detail: "TLS 1.2+ in transit; AES-256 at rest across storage and backups." },
  { area: "Access", detail: "Role-based access, least-privilege reviews, and SSO via SAML or OIDC." },
  { area: "Isolation", detail: "Per-customer workspaces with separated storage and asset access." },
  { area: "Retention", detail: "Configurable retention and deletion; zero-data-retention options for API." },
  { area: "Training", detail: "Customer content is excluded from model training by default." },
  { area: "Audits", detail: "SOC 2 Type II, annual penetration testing and continuous monitoring." },
];

const subprocessors = [
  "Amazon Web Services",
  "Google Cloud",
  "Cloudflare",
  "Stripe",
  "Mux",
  "Datadog",
];

export default function DataSecurityPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-off-black text-white">
        <MediaPanel variant="steel" seed={81} rounded="rounded-none" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="rw-container relative py-20 md:py-28">
          <Eyebrow className="text-white/50">Enterprise</Eyebrow>
          <h1 className="rw-display-l mt-4 max-w-3xl">Data security at Runway</h1>
          <p className="rw-paragraph-m mt-5 max-w-2xl text-white/75">
            The enterprise-ready infrastructure layer for AI media: zero-data-retention options and
            enterprise-grade security standards as the default.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Commitments"
          title="Built for enterprise scale"
          body="The security posture below reflects the commitments Runway publishes for enterprise customers. This reconstruction documents them for reference and does not represent a current certification."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {securityPillars.map((pillar) => (
            <div key={pillar.title} className="rounded-xl border border-light-gray p-6">
              <h3 className="rw-heading-min">{pillar.title}</h3>
              <p className="rw-paragraph-s mt-2 text-slate-gray">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="off-white">
        <SectionHeader eyebrow="Controls" title="Security controls by area" />
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <caption className="sr-only">Security controls by area</caption>
            <thead>
              <tr className="border-b border-off-black/15">
                <th scope="col" className="py-3 pr-6 text-[12px] font-medium uppercase tracking-wide text-slate-gray">
                  Area
                </th>
                <th scope="col" className="py-3 text-[12px] font-medium uppercase tracking-wide text-slate-gray">
                  Control
                </th>
              </tr>
            </thead>
            <tbody>
              {controls.map((control) => (
                <tr key={control.area} className="border-b border-light-gray">
                  <th scope="row" className="py-4 pr-6 align-top text-[14px] font-medium">
                    {control.area}
                  </th>
                  <td className="py-4 text-[14px] leading-relaxed text-off-black/75">{control.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Subprocessors</Eyebrow>
            <h2 className="rw-display-s mt-3">Infrastructure and service providers</h2>
            <p className="rw-paragraph-m mt-3 max-w-md text-slate-gray">
              A representative list of the categories of providers involved in delivering the service.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {subprocessors.map((provider) => (
                <li key={provider} className="rounded-full border border-off-black/10 px-3.5 py-1.5 text-[13px]">
                  {provider}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-light-gray bg-off-white-alt p-6">
            <h3 className="rw-heading-min">Report a security issue</h3>
            <p className="rw-paragraph-s mt-2 text-slate-gray">
              Security researchers should report vulnerabilities responsibly to Runway. This
              reconstruction has no backend and no data to protect.
            </p>
            <a
              href="mailto:security@runwayml.com"
              className="mt-4 inline-flex text-[13px] font-medium underline underline-offset-2"
            >
              security@runwayml.com
            </a>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Talk to our team about your security review."
        body="Enterprise plans include SSO, custom permissions, retention controls and support."
        primary={{ label: "Contact sales", href: "/enterprise-contact" }}
        secondary={{ label: "Enterprise overview", href: "/enterprise" }}
      />
    </>
  );
}
