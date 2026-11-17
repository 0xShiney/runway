import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalList, LegalSection } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "A reconstruction of the Runway Terms of Use presentation with demonstration, non-binding content.",
  alternates: { canonical: "/terms-of-use" },
};

const sections = [
  ["use-of-the-services", "1. Use of the Services"],
  ["registration", "2. Registration"],
  ["responsibility-for-content", "3. Responsibility for Content"],
  ["ownership", "4. Ownership"],
  ["user-conduct", "5. User Conduct"],
  ["investigations", "6. Investigations"],
  ["interactions-with-other-users", "7. Interactions with Other Users"],
  ["fees-and-purchase-terms", "8. Fees and Purchase Terms"],
  ["indemnification", "9. Indemnification"],
  ["disclaimer-of-warranties", "10. Disclaimer of Warranties"],
  ["limitation-of-liability", "11. Limitation of Liability"],
  ["copyright", "12. Procedure for Making Claims of Copyright Infringement"],
  ["monitoring-and-enforcement", "13. Monitoring and Enforcement"],
  ["term-and-termination", "14. Term and Termination"],
  ["dispute-resolution", "15. Dispute Resolution"],
  ["third-party-services", "16. Third-Party Services"],
  ["general-provisions", "17. General Provisions"],
  ["contact", "18. Questions, Complaints, Claims"],
] as const;

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Use Agreement"
      updated="October 23, 2026"
      intro={
        <p>
          These terms govern use of the services, including the website, hosted services, software
          applications and APIs. This reconstruction reproduces the document structure only.
        </p>
      }
      toc={sections.map(([id, title]) => ({ id, title }))}
      officialHref="https://runway.com/terms-of-use"
      officialLabel="Terms of Use on runway.com"
      asideExtra={
        <div className="rounded-lg border border-light-gray p-4">
          <p className="text-[12px] leading-relaxed text-slate-gray">
            Enterprise customers are governed by a separate agreement. See the{" "}
            <Link href="/enterprise-terms" className="underline underline-offset-2">
              Enterprise Terms
            </Link>{" "}
            reconstruction.
          </p>
        </div>
      }
    >
      <div className="mb-10 rounded-lg bg-off-white-alt p-5">
        <p className="text-[13px] leading-relaxed text-off-black/75">
          <strong className="font-medium">PLEASE READ CAREFULLY.</strong> On the reference site this
          section is set in capitals to emphasize the binding nature of the agreement and the arbitration
          provision. In this reconstruction the language is a plain-language summary of what each clause
          addresses.
        </p>
      </div>

      <LegalSection id="use-of-the-services" title="1. Use of the Services">
        <p>
          The services may be used only in compliance with this agreement and applicable law. Subject to
          that compliance, the company grants a limited, non-exclusive, non-transferable licence to access
          and use the services for their intended purpose.
        </p>
        <p>
          <strong className="font-medium">1.1 Software Application License.</strong> Where a downloadable
          application is provided, the licence covers installation and use on devices you control, and
          excludes redistribution or reverse engineering except where the law permits it.
        </p>
      </LegalSection>

      <LegalSection id="registration" title="2. Registration">
        <p>
          <strong className="font-medium">2.1 Registering Your Account; API Keys.</strong> Some features
          require a registered account. Accounts, passwords and API keys are personal, must be kept secure,
          and must not be shared. You are responsible for activity under your credentials.
        </p>
      </LegalSection>

      <LegalSection id="responsibility-for-content" title="3. Responsibility for Content">
        <p>
          <strong className="font-medium">3.1 Types of Content.</strong> You are responsible for the
          images, video, audio, text and other materials you upload, submit or generate, including inputs
          and outputs, and for having the rights needed to use them.
        </p>
      </LegalSection>

      <LegalSection id="ownership" title="4. Ownership">
        <p>
          <strong className="font-medium">4.1 The Services.</strong> The company and its suppliers own all
          rights in the services themselves. You may not remove proprietary notices from the services.
        </p>
        <p>
          <strong className="font-medium">4.6 Feedback.</strong> Suggestions you send are provided at your
          own risk, and the company has no confidentiality obligation regarding them.
        </p>
      </LegalSection>

      <LegalSection id="user-conduct" title="5. User Conduct">
        <p>
          As a condition of use, you agree not to use the services for any purpose prohibited by this
          agreement — including the{" "}
          <Link href="/safety/usage-policy" className="underline underline-offset-2">
            Usage Policy
          </Link>{" "}
          — or by applicable law.
        </p>
      </LegalSection>

      <LegalSection id="investigations" title="6. Investigations">
        <p>
          The services may allow users to report violations. Reports must be made truthfully and in good
          faith. The company has discretion over whether and how to act on a report, and may monitor or
          review the services and content.
        </p>
      </LegalSection>

      <LegalSection id="interactions-with-other-users" title="7. Interactions with Other Users">
        <p>
          <strong className="font-medium">7.1 User Responsibility.</strong> You are solely responsible for
          your interactions with other users. The company may, but is not obligated to, intervene in
          disputes.
        </p>
      </LegalSection>

      <LegalSection id="fees-and-purchase-terms" title="8. Fees and Purchase Terms">
        <p>
          <strong className="font-medium">8.1 Payment.</strong> Paid features require a valid payment
          method through the payment provider, or approved purchase order information.
        </p>
        <p>
          <strong className="font-medium">8.4 Automatic Renewal.</strong> Subscriptions renew
          automatically for an equivalent period at the then-current price until cancelled. Fees may change
          going forward, and continued use after a change constitutes acceptance.
        </p>
        <p>
          <strong className="font-medium">8.5 Refunds.</strong> Except where required by law or stated in
          the agreement, fees are non-refundable and cancellation does not create a pro-rated refund.
        </p>
      </LegalSection>

      <LegalSection id="indemnification" title="9. Indemnification">
        <p>
          You agree to indemnify the company against claims arising from your content, your use of the
          services in breach of the agreement, or your violation of law or third-party rights.
        </p>
      </LegalSection>

      <LegalSection id="disclaimer-of-warranties" title="10. Disclaimer of Warranties">
        <p>
          <strong className="font-medium">10.1 As Is.</strong> To the extent permitted by law, the services
          are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, with all faults, without
          warranties of merchantability, fitness for a particular purpose or non-infringement.
        </p>
      </LegalSection>

      <LegalSection id="limitation-of-liability" title="11. Limitation of Liability">
        <p>
          To the extent permitted by law, neither party is liable for indirect, incidental, special or
          consequential damages, and total liability is limited to the amounts paid for the services in
          the twelve months before the claim.
        </p>
      </LegalSection>

      <LegalSection id="copyright" title="12. Procedure for Making Claims of Copyright Infringement">
        <p>
          It is the company&apos;s policy to terminate the privileges of users who repeatedly infringe
          copyright following prompt notification by the rights holder or their agent. Notices should
          identify the work, the infringing material and the contact details required by law.
        </p>
      </LegalSection>

      <LegalSection id="monitoring-and-enforcement" title="13. Monitoring and Enforcement">
        <p>
          The company may remove or refuse to post content, restrict or terminate access, and report
          conduct to law enforcement where it believes content violates the agreement, infringes rights, or
          threatens personal safety.
        </p>
      </LegalSection>

      <LegalSection id="term-and-termination" title="14. Term and Termination">
        <p>
          <strong className="font-medium">14.1 Term.</strong> The agreement begins when you accept it or
          first use the services, and continues while you use them unless terminated earlier.
        </p>
        <p>
          <strong className="font-medium">14.3 Effect of Termination.</strong> Termination removes access
          to the affected service and bars further use. Sections that by their nature survive termination
          continue to apply.
        </p>
      </LegalSection>

      <LegalSection id="dispute-resolution" title="15. Dispute Resolution">
        <p>
          The reference agreement includes an arbitration provision covering disputes between you and the
          company, with a class-action waiver and a limited opt-out window. This reconstruction does not
          create any such obligation.
        </p>
        <p>
          For the purposes of this exercise, the governing law would be that of the State of New York,
          consistent with the federal arbitration act, without regard to conflict-of-law principles.
        </p>
      </LegalSection>

      <LegalSection id="third-party-services" title="16. Third-Party Services">
        <p>
          Links to third-party websites are provided for convenience and are governed by those parties&apos;
          terms. On the live service, payment processing is provided by Stripe, Inc. and its affiliates.
        </p>
        <p>
          <strong className="font-medium">17.3 Non-Runway Services.</strong> Services may connect to tools
          you or a third party provide, including through an MCP server. Those services are not part of the
          platform and are provided without warranties.
        </p>
      </LegalSection>

      <LegalSection id="general-provisions" title="17. General Provisions">
        <LegalList
          items={[
            <>
              <strong className="font-medium">18.1 Electronic Communications.</strong> Communications may
              take place electronically, and electronic notices satisfy any writing requirement.
            </>,
            <>
              <strong className="font-medium">18.8 Notice.</strong> You are responsible for keeping your
              email address current; notices sent to the last address on file are effective.
            </>,
            <>
              <strong className="font-medium">18.10 Waiver &amp; severability.</strong> A failure to enforce
              a provision is not a waiver, and unenforceable provisions are severed while the remainder
              stays in effect.
            </>,
            <>
              <strong className="font-medium">18.12 Export control.</strong> The services may not be
              exported or transferred in breach of U.S. export law or to restricted parties.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="contact" title="18. Questions, Complaints, Claims">
        <p>
          Questions about the services should go to{" "}
          <a href="mailto:support@runwayml.com" className="underline underline-offset-2">
            support@runwayml.com
          </a>
          . The official, binding agreement is the{" "}
          <a
            href="https://runway.com/terms-of-use"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Runway Terms of Use
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
