import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Artwork, type ArtworkVariant } from "@/components/marketing/artwork";

export function Section({
  children,
  className,
  id,
  tone = "white",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "off-white" | "dark" | "none";
}) {
  const tones = {
    white: "bg-white text-off-black",
    "off-white": "bg-off-white-alt text-off-black",
    dark: "bg-off-black text-white",
    none: "",
  };
  return (
    <section id={id} className={cn("py-16 md:py-24", tones[tone], className)}>
      <div className="rw-container">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("rw-eyebrow", className)}>{children}</p>;
}

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
  action,
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-4", align === "center" ? "max-w-3xl items-center" : "max-w-3xl")}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className={cn("rw-display-m text-balance-tight", titleClassName)}>{title}</h2>
        {body ? <div className="rw-paragraph-m max-w-2xl text-slate-gray">{body}</div> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

type PillVariant = "dark" | "light" | "outline" | "ghost";

const pillStyles: Record<PillVariant, string> = {
  dark: "bg-off-black text-white hover:bg-[#2a2a2a] border border-transparent",
  light: "bg-white text-off-black hover:bg-white/90 border border-transparent",
  outline: "border border-off-black/20 text-off-black hover:bg-off-black/[0.04]",
  ghost: "border border-white/30 text-white hover:bg-white/10",
};

export function PillLink({
  href,
  children,
  variant = "dark",
  external,
  className,
  size = "default",
}: {
  href: string;
  children: ReactNode;
  variant?: PillVariant;
  external?: boolean;
  className?: string;
  size?: "default" | "sm";
}) {
  const isExternal = external ?? /^https?:|^mailto:/.test(href);
  const classes = cn(
    "inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition-colors duration-150",
    size === "sm" ? "h-8 px-4 text-[13px]" : "h-11 px-6 text-sm",
    pillStyles[variant],
    className,
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <ArrowUpRight className="size-3.5 opacity-70" aria-hidden="true" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  external,
  className,
  tone = "dark",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  tone?: "dark" | "light" | "muted";
}) {
  const isExternal = external ?? /^https?:|^mailto:/.test(href);
  const toneClass =
    tone === "light" ? "text-white" : tone === "muted" ? "text-slate-gray" : "text-off-black";
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight
        className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </>
  );
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-1.5 text-sm font-medium", toneClass, className)}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
      {isExternal ? <span className="sr-only">(opens in a new tab)</span> : null}
    </Link>
  );
}

export function MediaPanel({
  variant = "dawn",
  seed = 1,
  className,
  ratio = "16 / 9",
  children,
  label,
  rounded = "rounded-xl",
}: {
  variant?: ArtworkVariant;
  seed?: number;
  className?: string;
  ratio?: string;
  children?: ReactNode;
  label?: string;
  rounded?: string;
}) {
  return (
    <div
      className={cn("relative isolate overflow-hidden bg-off-black", rounded, className)}
      style={{ aspectRatio: ratio }}
    >
      <Artwork variant={variant} seed={seed} label={label} />
      {children ? <div className="absolute inset-0">{children}</div> : null}
    </div>
  );
}

export function LogoRow({ logos = [] }: { logos?: string[] }) {
  return (
    <ul className="flex min-w-0 flex-wrap items-center justify-start gap-x-6 gap-y-4 md:justify-end md:gap-x-10">
      {logos.map((logo) => (
        <li
          key={logo}
          className="text-[15px] font-medium tracking-tight text-off-black/45 transition-colors hover:text-off-black/80"
        >
          {logo}
        </li>
      ))}
    </ul>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="rw-display-s">{value}</span>
      <span className="rw-paragraph-s text-slate-gray">{label}</span>
    </div>
  );
}

export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <Section tone="dark" className="overflow-hidden">
      <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="rw-display-m text-balance-tight">{title}</h2>
          {body ? <p className="rw-paragraph-m mt-4 text-white/65">{body}</p> : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <PillLink href={primary.href} variant="light">
            {primary.label}
          </PillLink>
          {secondary ? (
            <PillLink href={secondary.href} variant="ghost">
              {secondary.label}
            </PillLink>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-off-black/10 bg-white/70 px-2.5 py-1 text-[11px] font-medium tracking-wide text-off-black/70">
      {children}
    </span>
  );
}

export function Card({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "hairline";
}) {
  const tones = {
    light: "bg-off-white-alt",
    dark: "bg-off-black text-white",
    hairline: "bg-white border border-light-gray",
  };
  return <div className={cn("rounded-xl p-6", tones[tone], className)}>{children}</div>;
}
