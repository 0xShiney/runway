import type { Metadata } from "next";
import { LegalLayout, LegalList, LegalSection } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "California Notices",
  description:
    "California privacy notices and choices, reconstructed for layout and presentation with demonstration content.",
  alternates: { canonical: "/california-notices" },
};

const toc = [
  { id: "scope", title: "Scope of these notices" },
  { id: "categories", title: "Categories of information" },
  { id: "sources", title: "Sources of information" },
  { id: "purposes", title: "Purposes of use" },
  { id: "disclosures", title: "Disclosures and sharing" },
  { id: "sensitive", title: "Sensitive personal information" },
  { id: "rights", title: "Your California rights" },
  { id: "choices", title: "Your privacy choices" },
  { id: "contact", title: "Contact" },
];

export default function CaliforniaNoticesPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="California Notices"
      updated="October 23, 2026"
      intro={
        <p>
          Additional disclosures for California residents under the CCPA, as amended by the CPRA. This
          reconstruction preserves the structure of the notice; the content is illustrative.
        </p>
      }
      toc={toc}
      officialHref="https://runway.com/privacy-policy#residents-of-california"
      officialLabel="California section of the Runway Privacy Policy"
    >
      <LegalSection id="scope" title="Scope of these notices">
        <p>
          These notices apply to California residents whose personal information is processed in connection
          with the service. Where a business customer processes information on its own behalf, that
          customer&apos;s privacy notice applies instead.
        </p>
      </LegalSection>

      <LegalSection id="categories" title="Categories of information">
        <LegalList
          items={[
            "Identifiers, such as name, email address, IP address and account identifiers.",
            "Customer records, such as billing details and contact information.",
            "Commercial information, such as purchase and usage history.",
            "Internet or network activity, such as interactions with the service.",
            "Sensory information, such as images, audio and video you submit.",
            "Professional or employment information you provide.",
            "Inferences drawn to build a profile or preference summary.",
          ]}
        />
      </LegalSection>

      <LegalSection id="sources" title="Sources of information">
        <p>
          Information is collected directly from you, automatically through your use of the service, from
          service providers, and from partners such as advertising and analytics providers.
        </p>
      </LegalSection>

      <LegalSection id="purposes" title="Purposes of use">
        <LegalList
          items={[
            "Providing, maintaining and securing the service.",
            "Communicating with you about the service and your account.",
            "Analyzing and improving product performance and features.",
            "Marketing and advertising, subject to your choices.",
            "Legal, safety, fraud-prevention and dispute-resolution purposes.",
          ]}
        />
      </LegalSection>

      <LegalSection id="disclosures" title="Disclosures and sharing">
        <p>
          Information may be disclosed to service providers, affiliates, advertising and analytics partners,
          professional advisers and authorities where required by law. Some disclosures may be considered
          &ldquo;sharing&rdquo; or a &ldquo;sale&rdquo; under California law; you may opt out using the
          privacy choices below.
        </p>
      </LegalSection>

      <LegalSection id="sensitive" title="Sensitive personal information">
        <p>
          Certain features involve biometric identifiers such as voice or facial data. Where you choose to
          use those features, the information is used to provide the requested feature and is not used to
          infer characteristics about you.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="Your California rights">
        <LegalList
          items={[
            "Right to know what personal information is collected, used, disclosed or shared.",
            "Right to delete personal information, subject to exceptions.",
            "Right to correct inaccurate personal information.",
            "Right to opt out of the sale or sharing of personal information and of targeted advertising.",
            "Right to limit the use of sensitive personal information.",
            "Right to non-discrimination for exercising these rights.",
          ]}
        />
      </LegalSection>

      <LegalSection id="choices" title="Your privacy choices">
        <p>
          In this reconstruction, privacy choices are demonstration-only and stored in your browser. Use
          Cookie Settings in the footer to review categories and save a local preference. No choice is
          transmitted anywhere.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact">
        <p>
          Requests may be submitted to{" "}
          <a href="mailto:privacy@runwayml.com" className="underline underline-offset-2">
            privacy@runwayml.com
          </a>
          . Authorised agents may submit requests on your behalf with proof of authorisation.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
