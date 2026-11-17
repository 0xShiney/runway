"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Check } from "lucide-react";
import { plans } from "@/data/pricing";
import { cn } from "@/lib/utils";

function BillingToggle({
  yearly,
  onChange,
}: {
  yearly: boolean;
  onChange: (next: boolean) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-off-black/10 bg-off-white-alt p-1" role="group" aria-label="Billing interval">
      <button
        type="button"
        onClick={() => onChange(false)}
        aria-pressed={!yearly}
        className={cn(
          "rounded-full px-4 py-2 text-[13px] font-medium transition-colors",
          !yearly ? "bg-white text-off-black shadow-sm" : "text-slate-gray",
        )}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => onChange(true)}
        aria-pressed={yearly}
        className={cn(
          "rounded-full px-4 py-2 text-[13px] font-medium transition-colors",
          yearly ? "bg-white text-off-black shadow-sm" : "text-slate-gray",
        )}
      >
        Yearly
        <span className="ml-1.5 rounded-full bg-off-black px-1.5 py-0.5 text-[10px] text-white">-20%</span>
      </button>
    </div>
  );
}

export function PricingPlans() {
  const [yearly, setYearly] = useState(true);
  const searchParams = useSearchParams();
  const devTab = searchParams.get("tab") === "dev";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/pricing"
            className={cn(
              "rounded-full px-4 py-2 text-[13px] font-medium",
              !devTab ? "bg-off-black text-white" : "text-slate-gray hover:text-off-black",
            )}
          >
            Creative plans
          </Link>
          <Link
            href="/pricing?tab=dev"
            className={cn(
              "rounded-full px-4 py-2 text-[13px] font-medium",
              devTab ? "bg-off-black text-white" : "text-slate-gray hover:text-off-black",
            )}
          >
            Dev pricing
          </Link>
        </div>
        <BillingToggle yearly={yearly} onChange={setYearly} />
      </div>

      {devTab ? (
        <div className="rounded-xl border border-light-gray bg-off-white-alt p-6">
          <h2 className="rw-display-xs">Runway Dev is usage-based</h2>
          <p className="rw-paragraph-m mt-2 max-w-2xl text-slate-gray">
            The developer platform is billed per second of generated media rather than by credits. On the
            live platform, Gen-4.5 starts at $0.12/sec, Aleph 2.0 at $0.28/sec and Seedance 2.5 from
            $0.20/sec, with volume and enterprise agreements available.
          </p>
          <p className="mt-3 text-[13px] text-slate-gray">
            The plan grid below covers Creative subscriptions. For API terms, see the{" "}
            <Link href="/api" className="underline underline-offset-2">
              Dev platform page
            </Link>
            .
          </p>
        </div>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-4">
        {plans.map((plan) => {
          const price = yearly ? plan.priceYearly : plan.priceMonthly;
          const isFree = plan.id === "free";
          return (
            <article
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-xl border p-6",
                plan.highlight
                  ? "border-off-black bg-off-black text-white"
                  : "border-light-gray bg-white text-off-black",
              )}
            >
              {plan.badge ? (
                <span
                  className={cn(
                    "absolute right-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide",
                    plan.highlight ? "bg-white text-off-black" : "bg-off-black text-white",
                  )}
                >
                  {plan.badge}
                </span>
              ) : null}

              <h2 className="rw-display-xs">{plan.name}</h2>
              <p className={cn("mt-1 text-[13px]", plan.highlight ? "text-white/60" : "text-slate-gray")}>
                {plan.tagline}
              </p>

              <div className="mt-5 flex items-end gap-1">
                {isFree ? (
                  <span className="rw-display-m">Free</span>
                ) : (
                  <>
                    <span className="rw-display-m">${price}</span>
                    <span className={cn("pb-1 text-[13px]", plan.highlight ? "text-white/60" : "text-slate-gray")}>
                      /month
                    </span>
                  </>
                )}
              </div>
              {!isFree ? (
                <p className={cn("mt-1 text-[12px]", plan.highlight ? "text-white/50" : "text-slate-gray")}>
                  {yearly
                    ? `Billed annually. Save $${(plan.priceMonthly! - plan.priceYearly!) * 12}/year.`
                    : "Billed monthly."}
                </p>
              ) : null}

              <div className="mt-5 border-t border-current/10 pt-4">
                <p className={cn("text-[13px] font-medium", plan.highlight ? "text-white" : "text-off-black")}>
                  {plan.credits}
                </p>
                <p className={cn("mt-1 text-[12px] leading-relaxed", plan.highlight ? "text-white/55" : "text-slate-gray")}>
                  {plan.creditsDetail}
                </p>
              </div>

              <Link
                href={plan.ctaHref}
                className={cn(
                  "mt-5 inline-flex h-10 items-center justify-center rounded-full text-sm font-medium transition-colors",
                  plan.highlight
                    ? "bg-white text-off-black hover:bg-white/85"
                    : "bg-off-black text-white hover:bg-[#2a2a2a]",
                )}
              >
                {plan.cta}
              </Link>

              <ul className="mt-6 flex flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex gap-2">
                    <Check
                      className={cn(
                        "mt-0.5 size-3.5 shrink-0",
                        plan.highlight ? "text-white/70" : "text-off-black/50",
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        "text-[13px] leading-snug",
                        plan.highlight ? "text-white/80" : "text-off-black/80",
                      )}
                    >
                      {feature.text}
                      {feature.isNew ? (
                        <span
                          className={cn(
                            "ml-1.5 rounded px-1 py-0.5 text-[9px] uppercase tracking-wide",
                            plan.highlight ? "bg-white/15" : "bg-off-black/8",
                          )}
                        >
                          New
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <p className="text-[12px] text-slate-gray">
        Prices captured from runway.com/pricing on November 16, 2026 for this reconstruction. Kling 4.0
        generations were listed at 25% off until November 30. Subscribe flows in this demo are local and
        do not create real accounts.
      </p>
    </div>
  );
}
