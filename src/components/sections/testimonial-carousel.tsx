"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MediaPanel } from "@/components/marketing/primitives";

const testimonials = [
  {
    stat: "2 weeks",
    label: "Saved on production timeline despite no access to on-camera talent",
    client: "Tool of North America for Under Armour",
    quote:
      "We were able to shoot what we needed and extend it into a national spot without the logistics of a traditional production.",
  },
  {
    stat: "A few hours",
    label: "Instead of a month of on-location VFX and editing work",
    client: "Eggplant Picture & Sound, History Channel",
    quote:
      "It would be hugely expensive and time-consuming to shoot on-location and use conventional VFX and editing methods. With Runway, we were able to do in a few hours what would previously have taken a month.",
    attribution: "Geoff Marshall, Creative Director",
  },
  {
    stat: "80%",
    label: "Cost savings versus a traditional VFX pipeline",
    client: "Tropico for Under Armour",
    quote:
      "Runway's tools allowed us to create these produced visuals and tell the story, but do it on a budget and timeframe we could afford.",
    attribution: "Jon Erwin, Writer and Director",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const go = (direction: number) => {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
      <div className="relative overflow-hidden rounded-xl bg-off-black">
        <MediaPanel
          variant={index === 0 ? "forest" : index === 1 ? "sand" : "ember"}
          seed={70 + index}
          rounded="rounded-none"
          className="absolute inset-0 h-full w-full"
        />
        <div className="relative flex h-full min-h-[260px] flex-col justify-end p-6 text-white">
          <p className="rw-display-l">{active.stat}</p>
          <p className="rw-paragraph-s mt-2 max-w-xs text-white/75">{active.label}</p>
          <p className="mt-4 text-[12px] uppercase tracking-wide text-white/50">{active.client}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-xl border border-light-gray bg-white p-6">
        <blockquote>
          <p className="rw-paragraph-l">&ldquo;{active.quote}&rdquo;</p>
          <footer className="mt-4 text-[13px] text-slate-gray">
            {active.attribution ? `${active.attribution} — ` : ""}
            {active.client}
          </footer>
        </blockquote>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-[12px] tabular-nums text-slate-gray" aria-live="polite">
            {index + 1} / {testimonials.length}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex size-9 items-center justify-center rounded-full border border-off-black/15 transition-colors hover:bg-off-black hover:text-white"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex size-9 items-center justify-center rounded-full border border-off-black/15 transition-colors hover:bg-off-black hover:text-white"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
