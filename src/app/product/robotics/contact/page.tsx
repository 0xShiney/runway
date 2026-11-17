import type { Metadata } from "next";
import { Eyebrow, Section } from "@/components/marketing/primitives";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact our robotics team",
  description:
    "Planning a Runway Robotics deployment? Talk to our team about Praxis-1, fine-tuning and hosted inference.",
  alternates: { canonical: "/product/robotics/contact" },
};

export default function RoboticsContactPage() {
  return (
    <Section className="pt-14 md:pt-20">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Eyebrow>Runway Robotics</Eyebrow>
          <h1 className="rw-display-l mt-3">Planning a deployment?</h1>
          <p className="rw-paragraph-m mt-5 max-w-md text-slate-gray">
            Tell us about your hardware, task and timeline. Our robotics team can help with fine-tuning
            Praxis-1, evaluation and hosted inference through Reactor.
          </p>
          <ul className="mt-8 flex flex-col gap-3 text-[13px] text-slate-gray">
            <li>· Open weights under Apache 2.0 for commercial use</li>
            <li>· Full fine-tuning and LoRA support</li>
            <li>· LeRobot and vLLM-Omni integrations</li>
          </ul>
        </div>
        <div className="rounded-xl border border-light-gray p-6 md:p-8">
          <h2 className="rw-display-xs">Tell us about your deployment.</h2>
          <p className="mt-2 text-[13px] text-slate-gray">
            This demo form validates locally and does not transmit anything.
          </p>
          <div className="mt-6">
            <ContactForm variant="robotics" />
          </div>
        </div>
      </div>
    </Section>
  );
}
