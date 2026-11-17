import type { Metadata } from "next";
import { Suspense } from "react";
import { CtaBand, Eyebrow, PillLink, Section, SectionHeader } from "@/components/marketing/primitives";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { Faq } from "@/components/sections/faq";
import { comparisonGroups, pricingFaq, teamPlan } from "@/data/pricing";

export const metadata: Metadata = {
  title: "AI Image and Video Pricing from $12/month",
  description:
    "Choose the right Runway plan. Compare Free, Standard, Pro and Max credits, model access, team plans and enterprise options.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-white pb-10 pt-14 md:pt-16">
        <div className="rw-container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Pricing</Eyebrow>
              <h1 className="rw-display-l mt-3">Choose the Right Plan for You</h1>
            </div>
            <PillLink href="/signup">Start Free</PillLink>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="rw-container">
          <Suspense fallback={<div className="h-96 rounded-xl border border-light-gray bg-off-white-alt" />}>
            <PricingPlans />
          </Suspense>
        </div>
      </section>

      <Section tone="off-white" id="compare">
        <SectionHeader
          eyebrow="Compare"
          title="Compare models across plans"
          body="Approximate generation capacity per year on annual billing. Credit costs vary by model, duration and resolution."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <caption className="sr-only">
              Generations per year by plan for video, image and audio models
            </caption>
            <thead>
              <tr className="border-b border-off-black/15">
                <th scope="col" className="py-4 pr-4 text-[12px] font-medium uppercase tracking-wide text-slate-gray">
                  Model
                </th>
                <th scope="col" className="px-4 py-4 text-[13px] font-medium">
                  Standard
                  <span className="block text-[11px] font-normal text-slate-gray">$12 /month · 7,500 credits/year</span>
                </th>
                <th scope="col" className="px-4 py-4 text-[13px] font-medium">
                  Pro
                  <span className="block text-[11px] font-normal text-slate-gray">$28 /month · 27,000 credits/year</span>
                </th>
                <th scope="col" className="px-4 py-4 text-[13px] font-medium">
                  Max
                  <span className="block text-[11px] font-normal text-slate-gray">$76 /month · 114,000 credits/year</span>
                </th>
              </tr>
            </thead>
            {comparisonGroups.map((group) => (
              <tbody key={group.group}>
                <tr>
                  <th
                    scope="colgroup"
                    colSpan={4}
                    className="pb-2 pt-8 text-left text-[13px] font-medium uppercase tracking-wide text-off-black/60"
                  >
                    {group.group}
                  </th>
                </tr>
                {group.rows.map((row, index) => (
                  <tr key={`${group.group}-${index}`} className="border-t border-light-gray">
                    <th scope="row" className="py-3 pr-4 text-[13px] font-normal">
                      {row.model}
                      <span className="block text-[11px] text-slate-gray">{row.unit}</span>
                    </th>
                    <td className="px-4 py-3 text-[13px] text-off-black/75">{row.standard}</td>
                    <td className="px-4 py-3 text-[13px] text-off-black/75">{row.pro}</td>
                    <td className="px-4 py-3 text-[13px] text-off-black/75">{row.max}</td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </Section>

      <Section id="team">
        <div className="grid gap-8 rounded-xl border border-light-gray p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow>{teamPlan.title}</Eyebrow>
            <h2 className="rw-display-m mt-3">One workspace for the whole team</h2>
            <p className="rw-paragraph-m mt-4 max-w-xl text-slate-gray">{teamPlan.body}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <PillLink href="/enterprise-contact">Talk to sales</PillLink>
              <PillLink href="/enterprise" variant="outline">
                Enterprise overview
              </PillLink>
            </div>
          </div>
          <ul className="flex flex-col gap-3">
            {teamPlan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 rounded-lg bg-off-white-alt px-4 py-3 text-[13px]">
                <span className="size-1.5 rounded-full bg-off-black" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="off-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="rw-display-m mt-3">Questions about plans and credits</h2>
          </div>
          <Faq items={pricingFaq} />
        </div>
      </Section>

      <CtaBand
        title="Try Runway free, upgrade when you're ready."
        body="125 one-time credits on the Free plan. Cancel any paid plan at any time."
        primary={{ label: "Start free", href: "/signup" }}
        secondary={{ label: "Compare enterprise", href: "/enterprise" }}
      />
    </>
  );
}
