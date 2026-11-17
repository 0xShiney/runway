import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalList, LegalSection } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "A code of conduct reconstruction for the Runway website exercise, with demonstration content and links to the official policies.",
  alternates: { canonical: "/coc" },
};

const toc = [
  { id: "purpose", title: "Purpose" },
  { id: "expected", title: "Expected behavior" },
  { id: "unacceptable", title: "Unacceptable behavior" },
  { id: "scope", title: "Scope" },
  { id: "reporting", title: "Reporting" },
  { id: "enforcement", title: "Enforcement" },
  { id: "attribution", title: "Attribution" },
];

export default function CodeOfConductPage() {
  return (
    <LegalLayout
      eyebrow="Community"
      title="Code of Conduct"
      updated="October 23, 2026"
      intro={
        <p>
          A shared standard for the people who build with and around Runway: researchers, engineers,
          artists, partners and event participants.
        </p>
      }
      toc={toc}
      officialHref="https://runway.com/coc"
      officialLabel="runway.com/coc"
      asideExtra={
        <div className="rounded-lg border border-light-gray p-4">
          <p className="text-[12px] leading-relaxed text-slate-gray">
            On the reference site this route resolves to the Usage Policy content. This page presents an
            independent demonstration document, and the usage policy is available{" "}
            <Link href="/safety/usage-policy" className="underline underline-offset-2">
              here
            </Link>
            .
          </p>
        </div>
      }
    >
      <LegalSection id="purpose" title="Purpose">
        <p>
          This code describes how we expect people to treat each other while participating in the
          community. It applies alongside the Terms of Use and the Usage Policy; where they overlap, the
          stricter standard applies.
        </p>
      </LegalSection>

      <LegalSection id="expected" title="Expected behavior">
        <LegalList
          items={[
            "Be direct and generous with technical feedback, and assume good faith in others.",
            "Credit collaborators, and respect the provenance of images, video, audio and datasets.",
            "Respect confidentiality and do not share another person's work or data without permission.",
            "Consider the effect of generated content on the people depicted and on the audience.",
          ]}
        />
      </LegalSection>

      <LegalSection id="unacceptable" title="Unacceptable behavior">
        <LegalList
          items={[
            "Harassment, intimidation, or discriminatory comments based on a protected characteristic.",
            "Sharing sexualized imagery of any person without consent, or any imagery involving minors.",
            "Deliberate misrepresentation of affiliation with Runway or another organization.",
            "Retaliation against someone who reports a concern in good faith.",
          ]}
        />
      </LegalSection>

      <LegalSection id="scope" title="Scope">
        <p>
          The code applies in project spaces, events, community channels, and any setting where someone is
          representing the community.
        </p>
      </LegalSection>

      <LegalSection id="reporting" title="Reporting">
        <p>
          Concerns can be reported to{" "}
          <a href="mailto:conduct@runwayml.com" className="underline underline-offset-2">
            conduct@runwayml.com
          </a>
          . Reports are handled discreetly, and reporters are protected from retaliation. For content
          generated on the platform, use the reporting flow described in the{" "}
          <Link href="/safety" className="underline underline-offset-2">
            Safety
          </Link>{" "}
          pages.
        </p>
      </LegalSection>

      <LegalSection id="enforcement" title="Enforcement">
        <p>
          Responses may include a private conversation, a warning, removal from a program or event, or
          suspension of access, depending on severity and pattern.
        </p>
      </LegalSection>

      <LegalSection id="attribution" title="Attribution">
        <p>
          This demonstration document is original content written for the reconstruction exercise. It is
          not a Runway policy and creates no obligations.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
