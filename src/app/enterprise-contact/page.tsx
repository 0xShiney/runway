import type { Metadata } from "next";
import Link from "next/link";
import { LogoRow, PillLink, Section } from "@/components/marketing/primitives";
import { ContactForm } from "@/components/sections/contact-form";
import { partnerLogos } from "@/data/content";
import { RunwayWordmark } from "@/components/brand/logo";

export const metadata: Metadata = {
  title: "Contact our Enterprise Team",
  description:
    "Tell us what you're working on and a Runway expert will be in touch within two business days.",
  alternates: { canonical: "/enterprise-contact" },
};

export default function EnterpriseContactPage() {
  return (
    <>
      <div className="border-b border-light-gray bg-white">
        <div className="rw-container flex h-20 items-center">
          <Link href="/" aria-label="Runway home" className="text-off-black">
            <RunwayWordmark />
          </Link>
        </div>
      </div>

      <Section className="pt-12 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h1 className="rw-display-l">Contact our enterprise team.</h1>
            <p className="rw-paragraph-m mt-5 max-w-md text-slate-gray">
              Tell us what you&apos;re working on — we&apos;ll be in touch within two business days.
            </p>

            <div className="mt-10 border-t border-light-gray pt-8">
              <p className="max-w-xs text-[13px] text-slate-gray">
                We partner with the world&apos;s leading organizations to advance their industries:
              </p>
              <div className="mt-4">
                <LogoRow logos={partnerLogos.slice(0, 6)} />
              </div>
            </div>

            <div className="mt-10 rounded-xl bg-off-white-alt p-6">
              <p className="text-[13px] font-medium">Prefer to talk now?</p>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-gray">
                Browse enterprise security commitments or compare plans before reaching out.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <PillLink href="/enterprise" variant="outline" size="sm">
                  Enterprise overview
                </PillLink>
                <PillLink href="/pricing#team" variant="outline" size="sm">
                  Team plan
                </PillLink>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-light-gray p-6 md:p-8">
            <h2 className="rw-display-xs">Tell us more about your use case.</h2>
            <p className="mt-2 text-[13px] text-slate-gray">
              All fields marked * are required. This form validates locally in the browser.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
