import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, Eyebrow, PillLink, Section, SectionHeader } from "@/components/marketing/primitives";
import { RunwaySymbol, RunwayWordmark } from "@/components/brand/logo";

export const metadata: Metadata = {
  title: "Brand Guidelines & Assets",
  description:
    "Best practices for using the Runway brand: name, minimum logo size, legibility, clear space and symbol usage.",
  alternates: { canonical: "/brand-guidelines" },
};

const donts = [
  "Do not place the symbol next to the wordmark. The wordmark should always stand alone.",
  "Do not stack the symbol and the wordmark vertically.",
  'Do not replace the "r" in the wordmark with the symbol.',
  "Do not type out the wordmark in any font.",
  "Do not skew the wordmark.",
  "Do not rotate the wordmark.",
];

export default function BrandGuidelinesPage() {
  return (
    <>
      <Section className="pt-14 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Eyebrow>Brand</Eyebrow>
            <h1 className="rw-display-l mt-3 max-w-2xl">Runway Brand Assets and Guidelines</h1>
            <p className="rw-paragraph-m mt-5 max-w-xl text-slate-gray">
              This guide provides best practices for using the Runway brand to enhance its impact and
              visibility. Downloadable assets are also available.
            </p>
          </div>
          <div className="rounded-xl bg-off-white-alt p-6">
            <p className="text-[13px] font-medium">Logo Pack</p>
            <p className="mt-1 text-[13px] leading-relaxed text-slate-gray">
              The official vector assets are distributed by Runway. This reconstruction does not
              redistribute them.
            </p>
            <a
              href="https://runway.com/assets/Runway-Brand-Guidelines.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-9 items-center gap-1.5 rounded-full bg-off-black px-4 text-[13px] font-medium text-white"
            >
              Download from runway.com
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
            <p className="mt-3 text-[11px] leading-relaxed text-slate-gray">
              By downloading you agree you have read and accept the applicable guidelines and other terms
              for use.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="off-white">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <Eyebrow>Name</Eyebrow>
            <h2 className="rw-display-m mt-3">Name</h2>
          </div>
          <div>
            <p className="rw-paragraph-l">
              Please refer to us as <strong className="font-medium">Runway</strong>. Not Runway AI,
              RunwayML or other variations.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Runway", "Runway AI", "RunwayML"].map((variant, index) => (
                <div
                  key={variant}
                  className={
                    index === 0
                      ? "rounded-xl border border-green-600/30 bg-white p-6"
                      : "rounded-xl border border-red-500/25 bg-white p-6"
                  }
                >
                  <p className="text-[15px] font-medium">{variant}</p>
                  <p
                    className={
                      index === 0
                        ? "mt-1 text-[12px] text-green-700"
                        : "mt-1 text-[12px] text-red-600"
                    }
                  >
                    {index === 0 ? "Correct" : "Incorrect"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Minimum logo size"
          title="Minimum Logo Size"
          body="Establishing a minimum size ensures that the impact and legibility of the logo are not compromised in an application."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-light-gray p-10">
            <RunwayWordmark className="h-[24px]" />
            <div className="h-8 w-px bg-off-black/20" aria-hidden="true" />
            <p className="text-[13px] text-slate-gray">
              Digital — <span className="font-medium text-off-black">24px</span> minimum height
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-light-gray p-10">
            <div className="flex h-24 w-40 items-center justify-center border border-dashed border-off-black/25">
              <RunwayWordmark className="h-[18px]" />
            </div>
            <p className="text-[13px] text-slate-gray">
              Print — <span className="font-medium text-off-black">1 in</span> minimum width
            </p>
          </div>
        </div>
      </Section>

      <Section tone="off-white">
        <SectionHeader
          eyebrow="Legibility"
          title="Legibility: Black & White"
          body="To ensure optimal visibility and contrast, use the black wordmark on light-colored backgrounds, including white and soft imagery. Conversely, use the white wordmark on dark-colored backgrounds, such as black or complex imagery."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-white">
            <RunwayWordmark className="h-7 text-off-black" />
          </div>
          <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-off-black">
            <RunwayWordmark className="h-7 text-white" />
          </div>
        </div>
        <div className="mt-3 flex justify-between text-[12px] text-slate-gray">
          <span>Black wordmark on light backgrounds</span>
          <span>White wordmark on dark backgrounds</span>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <Eyebrow>Clear space</Eyebrow>
            <h2 className="rw-display-m mt-3">Clear Space</h2>
          </div>
          <div>
            <p className="rw-paragraph-m max-w-xl text-slate-gray">
              Clear space ensures the legibility and impact of the logo by isolating it from competing
              visual elements, such as copy or supporting graphics. This space should be considered the
              absolute minimum safe distance, and it is always equal to the leg height (x), with an extra
              1/2x to accommodate the descender.
            </p>
            <div className="mt-8 rounded-xl border border-dashed border-off-black/25 p-10">
              <div className="mx-auto flex max-w-md items-center justify-center border border-dashed border-off-black/15 p-8">
                <RunwayWordmark className="h-6" />
              </div>
              <p className="mt-4 text-center text-[12px] text-slate-gray">
                Dashed guides represent the minimum clear space around the wordmark.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="off-white">
        <SectionHeader eyebrow="Misuse" title="Don'ts" body="The following are common misuse cases when dealing with our wordmark." />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {donts.map((dont, index) => (
            <li key={dont} className="rounded-xl border border-light-gray bg-white p-5">
              <div className="mb-4 flex h-24 items-center justify-center rounded-lg bg-off-white-alt">
                <div
                  className={
                    index === 1
                      ? "flex flex-col items-center gap-1"
                      : index === 2
                        ? "flex items-center gap-1"
                        : index === 3
                          ? "font-serif text-2xl tracking-tight"
                          : index === 4
                            ? "skew-x-12"
                            : index === 5
                              ? "rotate-[-8deg]"
                              : "flex items-center gap-2"
                  }
                >
                  {index >= 3 ? (
                    <span>Runway</span>
                  ) : (
                    <>
                      <RunwayWordmark className="h-4" />
                      {index === 0 || index === 1 ? <RunwaySymbol className="size-4" /> : null}
                    </>
                  )}
                </div>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-gray">
                <span className="font-medium text-off-black">{index + 1}.</span> {dont}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Symbol</Eyebrow>
            <h2 className="rw-display-m mt-3">Symbol usage</h2>
            <p className="rw-paragraph-m mt-4 max-w-md text-slate-gray">
              In smaller applications where the full wordmark doesn&apos;t fit, you may use the symbol as
              a stand-in.
            </p>
            <div className="mt-6">
              <PillLink href="/enterprise-contact" variant="outline">
                Contact us
              </PillLink>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex aspect-square flex-1 items-center justify-center rounded-xl bg-off-white-alt">
              <RunwaySymbol className="size-12 text-off-black" />
            </div>
            <div className="flex aspect-square flex-1 items-center justify-center rounded-xl bg-off-black">
              <RunwaySymbol className="size-12 text-off-black" />
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Using the Runway name in your project?"
        body="Follow these guidelines and request assets from the official brand page."
        primary={{ label: "Official brand page", href: "https://runway.com/brand-guidelines" }}
        secondary={{ label: "Contact us", href: "/enterprise-contact" }}
      />
    </>
  );
}
