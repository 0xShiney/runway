import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalList, LegalSection } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "A reconstruction of the Runway Privacy Policy presentation, including table of contents, anchors and California disclosures.",
  alternates: { canonical: "/privacy-policy" },
};

const toc = [
  { id: "information-we-collect", title: "Information we collect about you" },
  { id: "how-we-use-information", title: "How we use information about you" },
  { id: "when-we-disclose", title: "When we disclose information" },
  { id: "cookies", title: "Cookies and tracking" },
  { id: "rights-and-choices", title: "Exercising your rights and choices" },
  { id: "us-state-rights", title: "Additional US state-specific rights" },
  { id: "residents-of-california", title: "Residents of California" },
  { id: "data-retention", title: "Data retention" },
  { id: "international-transfers", title: "International data transfer" },
  { id: "children", title: "Children" },
  { id: "changes", title: "Changes to this Privacy Policy" },
  { id: "contact", title: "How to contact us" },
];

const californiaRows = [
  ["Identifiers and contact information", "Vendors, ad and analytics partners, affiliates", "Provide the service, communicate, improve, market, legal and safety"],
  ["Commercial information", "Vendors, ad and analytics partners, affiliates", "Provide the service, communicate, improve, market, legal and safety"],
  ["Financial data (limited payment information)", "Vendors, affiliates, payment processors", "Provide the service, legal and safety"],
  ["Internet or network activity", "Vendors, affiliates, ad and analytics partners", "Provide the service, improve, market, legal and safety"],
  ["Sensory information (images, audio, video)", "Vendors, affiliates, legal and safety entities", "Provide the service, legal and safety"],
  ["Inferences", "Vendors, affiliates, legal and safety entities", "Provide the service, market, legal and safety"],
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="October 23, 2026"
      intro={
        <p>
          This policy describes how information about you is processed through the website, services,
          mobile application, social media pages, marketing activities and live events.
        </p>
      }
      toc={toc}
      officialHref="https://runway.com/privacy-policy"
      officialLabel="Privacy Policy on runway.com"
      asideExtra={
        <div className="rounded-lg bg-off-white-alt p-4">
          <p className="text-[12px] leading-relaxed text-off-black/65">
            Privacy choices in this reconstruction are local only. Use the cookie settings in the footer
            to change preferences stored in your browser.
          </p>
        </div>
      }
    >
      <div className="rounded-lg bg-off-white-alt p-5">
        <p className="text-[13px] leading-relaxed text-off-black/75">
          <strong className="font-medium">Index.</strong> The reference document opens with a compact
          index of sections. The sidebar reproduces that navigation, including anchor links and active
          section highlighting.
        </p>
      </div>

      <LegalSection id="information-we-collect" title="Information we collect about you">
        <p>
          <strong className="font-medium">Information you provide to us.</strong> Categories described on
          the reference site include:
        </p>
        <LegalList
          items={[
            "Identifiers and contact data, such as name, email address, billing and mailing addresses, and phone number.",
            "Demographic data, such as city, state, country, postal code and age.",
            "Account login and profile data, including credentials, profile image and preferences.",
            "Professional data, such as job title and company name.",
            "Communications data from support requests and other exchanges.",
            "Commercial and transactional data, including order and transaction history.",
            "Inference and marketing data, such as communication preferences and engagement.",
            "User content, such as prompts, images, video, audio, messages and associated metadata.",
            "Biometric data, such as voice and facial scans submitted to certain features.",
          ]}
        />
        <p>
          <strong className="font-medium">Information we collect automatically.</strong> Device, browser,
          network and usage information is collected through cookies and similar technologies.
        </p>
      </LegalSection>

      <LegalSection id="how-we-use-information" title="How we use information about you">
        <p>
          Information is used to provide and secure the service, communicate with you, personalize
          experiences, analyze and improve the product, comply with legal obligations, and — where
          permitted — for marketing.
        </p>
      </LegalSection>

      <LegalSection id="when-we-disclose" title="When we disclose the information we collect about you">
        <p>
          <strong className="font-medium">Other users and the public.</strong> Profile and user-generated
          content may be visible to other users and the public. Such information can be cached, copied or
          screen-captured by others.
        </p>
        <p>
          Information may also be disclosed to vendors, affiliates, advertising and analytics partners,
          professional advisers, and where required for legal or safety reasons.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="Cookies and tracking">
        <p>
          Cookies and similar technologies are used for strictly necessary functions, preferences,
          analytics and advertising. In this reconstruction no third-party scripts are loaded and choices
          are stored locally by the cookie settings panel.
        </p>
      </LegalSection>

      <LegalSection id="rights-and-choices" title="Exercising your rights and choices">
        <p>
          Depending on where you live, you may have rights to access, correct, delete, port or restrict the
          use of your information, and to object to certain processing. Requests can be made through the
          privacy contact listed below.
        </p>
      </LegalSection>

      <LegalSection id="us-state-rights" title="Additional US state-specific rights">
        <p>
          Residents of certain US states have additional rights, including the right to opt out of targeted
          advertising, sale or sharing of personal information, and the right to appeal a decision.
        </p>
      </LegalSection>

      <LegalSection id="residents-of-california" title="Residents of California">
        <p>
          <strong className="font-medium">How we collect, use, and disclose personal information.</strong>{" "}
          The table below reproduces the presentation of the reference disclosure, with demonstration
          categories.
        </p>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full min-w-[640px] border-collapse text-left text-[12.5px]">
            <caption className="sr-only">California disclosure categories</caption>
            <thead>
              <tr className="border-b border-off-black/15">
                <th scope="col" className="py-3 pr-4 font-medium">Category</th>
                <th scope="col" className="py-3 pr-4 font-medium">Disclosed to</th>
                <th scope="col" className="py-3 font-medium">Purposes of use</th>
              </tr>
            </thead>
            <tbody>
              {californiaRows.map((row) => (
                <tr key={row[0]} className="border-b border-light-gray align-top">
                  <th scope="row" className="py-3 pr-4 font-normal">{row[0]}</th>
                  <td className="py-3 pr-4 text-off-black/70">{row[1]}</td>
                  <td className="py-3 text-off-black/70">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          California notices are also presented separately at{" "}
          <Link href="/california-notices" className="underline underline-offset-2">
            California Notices
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection id="data-retention" title="Data retention">
        <p>
          Information is retained only as long as necessary to provide the service and for legitimate
          business purposes such as safety, security, compliance and dispute resolution.
        </p>
      </LegalSection>

      <LegalSection id="international-transfers" title="International data transfer">
        <p>
          Information may be transferred to and processed in countries other than your own. Appropriate
          safeguards, such as standard contractual clauses, are used for those transfers.
        </p>
      </LegalSection>

      <LegalSection id="children" title="Children">
        <p>
          The service is not directed to children under 13, and accounts for users below the age required
          in their jurisdiction are not permitted.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="Changes to this Privacy Policy">
        <p>
          The policy may be modified at any time. Material changes are communicated by updating the date and
          posting the revised policy. Continued use after the effective date indicates acknowledgement of
          the modified policy.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="How to contact us">
        <p>
          Privacy questions can be sent to{" "}
          <a href="mailto:privacy@runwayml.com" className="underline underline-offset-2">
            privacy@runwayml.com
          </a>
          . The authoritative document is the{" "}
          <a
            href="https://runway.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Runway Privacy Policy
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
