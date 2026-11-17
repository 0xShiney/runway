import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  ArrowLink,
  Badge,
  Eyebrow,
  LogoRow,
  MediaPanel,
  PillLink,
  Section,
  SectionHeader,
} from "@/components/marketing/primitives";
import { ContactForm } from "@/components/sections/contact-form";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { customerStories, partnerLogos } from "@/data/content";
import { securityPillars } from "@/data/safety";

export const metadata: Metadata = {
  title: "Production-ready AI Made for Enterprise",
  description:
    "Runway's full suite of creative AI tools can help your teams realize bigger ideas with smaller budgets and timelines. SOC 2 Type II, SSO and no training on your data.",
  alternates: { canonical: "/enterprise" },
};

const valueProps = [
  { title: "Unlock Bigger Possibilities", body: "Turn impossible ideas into realities." },
  { title: "Smaller Budgets", body: "10x your creative output at 10% the cost." },
  { title: "Creative Control", body: "Your brand, your style, your IP — own what you create." },
];

export default function EnterprisePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-off-black text-white">
        <MediaPanel variant="sand" seed={41} rounded="rounded-none" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        <div className="rw-container relative py-20 md:py-28">
          <h1 className="rw-display-xl max-w-3xl">
            Production-ready AI
            <br className="hidden md:block" /> Made for Enterprise
          </h1>
          <p className="rw-paragraph-m mt-6 max-w-xl text-white/75">
            Our full suite of creative AI tools can help your teams realize bigger ideas with smaller
            budgets and timelines.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillLink href="#contact" variant="light">
              Contact Sales
            </PillLink>
            <PillLink href="/pricing#team" variant="ghost">
              Team plan
            </PillLink>
          </div>
        </div>
      </section>

      <section className="border-b border-light-gray bg-white py-10">
        <div className="rw-container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xs text-[13px] text-slate-gray">
            We partner with the world&apos;s leading organizations to advance their industries:
          </p>
          <LogoRow logos={partnerLogos} />
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Why enterprise</Eyebrow>
            <h2 className="rw-display-m mt-3">New creative tools for every workflow and industry.</h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="rw-paragraph-l">
              Whether you&apos;re an advertising agency putting together pitch decks or an architecture
              firm iterating on new building concepts, Runway&apos;s full suite of creative and production
              AI tools lets you explore ideas and executions efficiently.
            </p>
            <p className="rw-paragraph-m text-slate-gray">
              All without needing to learn complex new interfaces or technical setups.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {valueProps.map((prop) => (
                <div key={prop.title} className="rounded-lg bg-off-white-alt p-4">
                  <p className="text-[13px] font-medium">{prop.title}</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-gray">{prop.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="off-white">
        <SectionHeader
          eyebrow="Built for Enterprise"
          title="Scalable and Secure"
          body="Security reviews are part of every enterprise rollout. These are the commitments the live Runway site publishes for enterprise customers."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {securityPillars.map((pillar) => (
            <div key={pillar.title} className="rounded-xl border border-light-gray bg-white p-6">
              <h3 className="rw-heading-min">{pillar.title}</h3>
              <p className="rw-paragraph-s mt-2 text-slate-gray">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Research and products"
          title="Our latest Research and Products"
          action={<ArrowLink href="/research">Explore research</ArrowLink>}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Introducing GWM-1",
              body: "GWM-1: our state-of-the-art General World Model, built to simulate reality in real time. Interactive, controllable and general-purpose. Three variants: GWM Worlds, GWM Avatars and GWM Robotics.",
              variant: "violet" as const,
              href: "/research#gwm-1",
            },
            {
              title: "Gen-4.5: A new frontier for video generation.",
              body: "The world's top-rated video model, offering unprecedented visual fidelity and creative control while providing limitless creative freedom and precise control over every aspect of generation.",
              variant: "ocean" as const,
              href: "/research#gen-4-5",
            },
          ].map((item, index) => (
            <article key={item.title} className="overflow-hidden rounded-xl border border-light-gray">
              <MediaPanel variant={item.variant} seed={index + 61} ratio="16 / 9" rounded="rounded-none" />
              <div className="p-6">
                <h3 className="rw-display-xs">{item.title}</h3>
                <p className="rw-paragraph-s mt-3 text-slate-gray">{item.body}</p>
                <div className="mt-5">
                  <ArrowLink href={item.href}>Learn more</ArrowLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="off-white">
        <SectionHeader
          eyebrow="Customers"
          title="How the world's leading organizations and artists are using Runway."
          action={<ArrowLink href="/news?filter=customers">View all case studies</ArrowLink>}
        />
        <div className="mt-10">
          <TestimonialCarousel />
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {customerStories.slice(0, 3).map((story) => (
            <Link
              key={story.client}
              href={story.href}
              className="flex items-start justify-between gap-4 rounded-xl border border-light-gray bg-white p-5 transition-colors hover:border-off-black/20"
            >
              <div>
                <p className="rw-eyebrow text-[10px]">{story.client}</p>
                <p className="mt-2 text-[13px] leading-snug">{story.line}</p>
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-off-black/40" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Section>

      <Section id="contact">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Contact sales</Eyebrow>
            <h2 className="rw-display-m mt-3">Fill out your information and a Runway expert will reach out.</h2>
            <p className="rw-paragraph-m mt-4 max-w-md text-slate-gray">
              Need help right away? These resources cover most questions.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                { label: "Contact customer support", href: "https://help.runwayml.com/hc/en-us/articles/20821762056723-Getting-Help-with-your-Runway-Account" },
                { label: "Explore the Runway Dev docs", href: "https://docs.dev.runwayml.com/" },
                { label: "Visit our help center", href: "https://help.runwayml.com/hc/en-us" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
                  >
                    {item.label}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Badge>Demo form — nothing is transmitted</Badge>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
