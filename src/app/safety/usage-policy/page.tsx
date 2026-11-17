import type { Metadata } from "next";
import { LegalLayout, LegalList, LegalSection } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Runway's Usage Policy",
  description:
    "A reconstruction of Runway's Usage Policy presentation. Demonstration content, with a link to the official policy.",
  alternates: { canonical: "/safety/usage-policy" },
};

const toc = [
  { id: "overview", title: "Overview" },
  { id: "childrens-safety", title: "Children's Safety" },
  { id: "violence-and-gore", title: "Violence & Gore" },
  { id: "sexually-explicit-content-and-nudity", title: "Sexually Explicit Content & Nudity" },
  { id: "hateful-conduct-harassment-and-self-harm", title: "Hateful Conduct, Harassment, and Self-Harm" },
  { id: "content-that-may-violate-the-rights-of-others", title: "Content that May Violate the Rights of Others" },
  { id: "misleading-content", title: "Misleading Content" },
  { id: "additional-character-policies", title: "Additional Character Policies" },
  { id: "reporting", title: "Reporting and appeals" },
];

export default function UsagePolicyPage() {
  return (
    <LegalLayout
      eyebrow="Trust & Safety"
      title="Runway's Usage Policy"
      updated="March 6, 2026"
      intro={
        <p>
          At Runway, the mission is to help people tell stories by building the tools that make that
          possible. This policy works alongside the Terms of Use to enable creative expression while
          reducing the risk of harm.
        </p>
      }
      toc={toc}
      breadcrumb={{ label: "Safety", href: "/safety" }}
      officialHref="https://runway.com/safety/usage-policy"
      officialLabel="Runway's Usage Policy on runway.com"
      asideExtra={
        <div className="rounded-lg bg-off-white-alt p-4">
          <p className="text-[12px] leading-relaxed text-off-black/65">
            Runway combines automated systems with internal human review to detect and block harmful
            content in inputs and outputs, and prioritizes child-safety reports.
          </p>
        </div>
      }
    >
      <LegalSection id="overview" title="Overview">
        <p>
          This document is an illustrative reconstruction of the structure and reading experience of
          Runway&apos;s Usage Policy. The categories below summarize the kinds of content the policy
          addresses; they are written for this exercise and are not the official text.
        </p>
        <p>
          Accounts may be suspended for violating these rules. On the real platform, suspensions can be
          appealed by emailing{" "}
          <a href="mailto:suspension@runwayml.com" className="underline underline-offset-2">
            suspension@runwayml.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="childrens-safety" title="Children's Safety">
        <p>The policy prohibits:</p>
        <LegalList
          items={[
            "Content that sexualizes children or facilitates child sexual abuse, including generated material. Reports are escalated to the National Center for Missing and Exploited Children and associated accounts are suspended.",
            "Content that facilitates grooming of a minor, including generating content designed to impersonate a minor.",
            "Content depicting child abuse or a minor taking part in harmful or dangerous acts.",
          ]}
        />
        <p>
          A stricter standard applies to potentially harmful or inappropriate content whenever a child is
          depicted.
        </p>
      </LegalSection>

      <LegalSection id="violence-and-gore" title="Violence & Gore">
        <p>The policy prohibits:</p>
        <LegalList
          items={[
            "Content that promotes terrorism or violent extremism.",
            "Graphic violence, or content that incites violence toward humans or animals.",
            "Gore such as dismemberment, beheading, mutilation, or exposed organs and bone.",
          ]}
        />
      </LegalSection>

      <LegalSection id="sexually-explicit-content-and-nudity" title="Sexually Explicit Content & Nudity">
        <p>The policy prohibits:</p>
        <LegalList
          items={[
            "Sexually explicit content, including sex toys and certain fetish content.",
            "Adult nudity.",
            "Attempts to create or modify non-consensual intimate imagery.",
            "Some sexually suggestive content, such as imagery focused on underwear or lingerie, is limited.",
          ]}
        />
      </LegalSection>

      <LegalSection
        id="hateful-conduct-harassment-and-self-harm"
        title="Hateful Conduct, Harassment, and Self-Harm"
      >
        <p>The policy prohibits:</p>
        <LegalList
          items={[
            "Content that dehumanizes people or promotes discrimination or violence based on a protected attribute such as race, ethnicity, religion, gender, or sexual orientation.",
            "Use of the service to harass, bully, intimidate, defame, or abuse others.",
            "Content that depicts, facilitates, or promotes self-harm, including disordered eating.",
          ]}
        />
      </LegalSection>

      <LegalSection
        id="content-that-may-violate-the-rights-of-others"
        title="Content that May Violate the Rights of Others"
      >
        <p>The policy prohibits:</p>
        <LegalList
          items={[
            "Using another person's image, video, or audio without permission.",
            "Content that compromises the privacy of others.",
            "Content that may infringe intellectual property rights.",
            "Attempts to create content in the style of a known, living artist.",
          ]}
        />
      </LegalSection>

      <LegalSection id="misleading-content" title="Misleading Content">
        <p>The policy prohibits:</p>
        <LegalList
          items={[
            "Using the service to defraud, scam, or deliberately mislead others.",
            "Using the service to impersonate a person or organization, or to misrepresent an affiliation.",
          ]}
        />
      </LegalSection>

      <LegalSection id="additional-character-policies" title="Additional Character Policies">
        <p>
          The policies above apply to Runway Characters. These additional limits apply to that product:
        </p>
        <LegalList
          items={[
            "Characters based on the face or voice of a person under 18.",
            "Characters intended to engage users under 18, including narrative or visual styles made for children.",
            "Characters intended to provide medical, legal, or financial advice, or to mimic professional therapy or counseling.",
          ]}
        />
        <p>
          The list is not exhaustive, and these policies evolve as products and their use change.
        </p>
      </LegalSection>

      <LegalSection id="reporting" title="Reporting and appeals">
        <p>
          If you encounter content that appears to violate these policies, report it. On the live site the
          reporting flow lives at{" "}
          <a
            href="https://runway.com/report-content"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            runway.com/report-content
          </a>
          . Questions about content ownership and commercial rights are covered in Runway&apos;s Help
          Center.
        </p>
        <p>
          The authoritative document for this exercise is{" "}
          <a
            href="https://runway.com/safety/usage-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Runway&apos;s Usage Policy
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
