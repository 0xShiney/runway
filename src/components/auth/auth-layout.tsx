import Link from "next/link";
import type { ReactNode } from "react";
import { ShieldAlert } from "lucide-react";
import { RunwayWordmark } from "@/components/brand/logo";
import { MediaPanel } from "@/components/marketing/primitives";

export function AuthLayout({
  children,
  title,
  subtitle,
  aside,
}: {
  children: ReactNode;
  title: string;
  subtitle: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="grid min-h-[calc(100vh-64px)] lg:grid-cols-[1fr_1fr]">
      <div className="flex flex-col justify-center px-5 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-sm">
          <Link href="/" aria-label="Runway home" className="inline-flex text-off-black">
            <RunwayWordmark />
          </Link>

          <div className="mt-10 flex items-start gap-2.5 rounded-lg border border-amber-500/30 bg-amber-50 p-3">
            <ShieldAlert className="mt-0.5 size-4 shrink-0 text-amber-700" aria-hidden="true" />
            <p className="text-[11.5px] leading-relaxed text-amber-900">
              <strong className="font-medium">Demo authentication.</strong> This is a local
              reconstruction. Do not enter a real Runway password — nothing here connects to Runway and no
              credentials are transmitted.
            </p>
          </div>

          <div className="mt-8">
            <h1 className="rw-display-s">{title}</h1>
            <div className="rw-paragraph-s mt-2 text-slate-gray">{subtitle}</div>
          </div>

          <div className="mt-8">{children}</div>
          {aside ? <div className="mt-8">{aside}</div> : null}
        </div>
      </div>

      <div className="relative hidden lg:block">
        <MediaPanel
          variant="dawn"
          seed={151}
          ratio="auto"
          rounded="rounded-none"
          className="absolute inset-0 h-full w-full"
          label="Abstract Runway artwork"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-10 left-10 right-10 text-white">
          <p className="rw-display-s max-w-md">Intelligent tools for scaling content and teams.</p>
          <p className="rw-paragraph-s mt-3 text-white/60">
            Demo environment · no account is created on runway.com
          </p>
        </div>
      </div>
    </div>
  );
}
