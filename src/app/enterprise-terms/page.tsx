import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalList, LegalSection } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Enterprise Terms",
  description:
    "A demonstration reconstruction of the Runway Enterprise Services Terms document presentation.",
  alternates: { canonical: "/enterprise-terms" },
};

const toc = [
  { id: "scope", title: "1. Scope and order of precedence" },
  { id: "access", title: "2. Access and use rights" },
  { id: "restrictions", title: "3. Restrictions" },
  { id: "customer-content", title: "4. Customer content and outputs" },
  { id: "security", title: "5. Security and data protection" },
  { id: "fees", title: "6. Fees and payment" },
  { id: "support", title: "7. Support and service levels" },
  { id: "warranties", title: "8. Warranties and disclaimers" },
  { id: "indemnity", title: "9. Indemnification" },
  { id: "liability", title: "10. Limitation of liability" },
  { id: "term", title: "11. Term and termination" },
  { id: "general", title: "12. General terms" },
];

export default function EnterpriseTermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Runway Enterprise Services Terms"
      updated="October 23, 2026"
      intro={
        <p>
          These terms would apply to organizations using enterprise services. The structure below mirrors
          the presentation of the reference document; the wording is demonstration content.
        </p>
      }
      toc={toc}
      officialHref="https://runway.com/enterprise-terms"
      officialLabel="Enterprise Terms on runway.com"
      asideExtra={
        <div className="rounded-lg bg-off-white-alt p-4">
          <p className="text-[12px] leading-relaxed text-off-black/65">
            Individual accounts are governed by the{" "}
            <Link href="/terms-of-use" className="underline underline-offset-2">
              Terms of Use
            </Link>
            .
          </p>
        </div>
      }
    >
      <LegalSection id="scope" title="1. Scope and order of precedence">
        <p>
          These terms govern enterprise services and prevail over the standard Terms of Use in case of
          conflict. An order form, statement of work or data processing addendum controls in the order
          specified in the master agreement.
        </p>
      </LegalSection>

      <LegalSection id="access" title="2. Access and use rights">
        <p>
          The customer receives a non-exclusive, non-transferable right to access the services during the
          subscription term for internal business purposes, and to permit authorised users to do the same.
        </p>
      </LegalSection>

      <LegalSection id="restrictions" title="3. Restrictions">
        <LegalList
          items={[
            "No resale, sublicensing or service-bureau use except as expressly agreed.",
            "No reverse engineering, except to the extent permitted by law.",
            "No use in violation of the Usage Policy or applicable law.",
            "No attempts to circumvent usage limits, moderation or security controls.",
          ]}
        />
      </LegalSection>

      <LegalSection id="customer-content" title="4. Customer content and outputs">
        <p>
          The customer retains ownership of content it submits. Outputs are owned by the customer subject
          to the terms in effect at generation time. Customer content is not used to train models by
          default.
        </p>
      </LegalSection>

      <LegalSection id="security" title="5. Security and data protection">
        <p>
          The provider maintains administrative, technical and physical safeguards, undergoes independent
          audits, and processes personal data as described in the data processing addendum.
        </p>
      </LegalSection>

      <LegalSection id="fees" title="6. Fees and payment">
        <p>
          Fees are invoiced as specified in the order form. Usage-based components are measured and
          reported, and invoiced monthly unless otherwise agreed.
        </p>
      </LegalSection>

      <LegalSection id="support" title="7. Support and service levels">
        <p>
          Enterprise plans include a named support channel, prioritised response targets and, where agreed,
          uptime commitments with service credits as the sole remedy for missed targets.
        </p>
      </LegalSection>

      <LegalSection id="warranties" title="8. Warranties and disclaimers">
        <p>
          The provider warrants that the services will be performed in a professional manner. To the extent
          permitted by law, all other warranties are disclaimed, including fitness for a particular purpose.
        </p>
      </LegalSection>

      <LegalSection id="indemnity" title="9. Indemnification">
        <p>
          The provider will defend the customer against third-party claims alleging that the services
          infringe intellectual property rights, subject to the customer promptly notifying the provider and
          allowing the provider to control the defence.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="10. Limitation of liability">
        <p>
          Aggregate liability is limited to the fees paid in the twelve months preceding the claim. Neither
          party is liable for indirect or consequential damages. These limits do not apply to
          confidentiality breaches, indemnity obligations or gross negligence.
        </p>
      </LegalSection>

      <LegalSection id="term" title="11. Term and termination">
        <p>
          The subscription runs for the term in the order form and renews as specified there. Either party
          may terminate for material breach that remains uncured after thirty days&apos; notice.
        </p>
      </LegalSection>

      <LegalSection id="general" title="12. General terms">
        <p>
          This demonstration document creates no legal obligations. The official enterprise terms are
          published by Runway and are linked in the sidebar.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
