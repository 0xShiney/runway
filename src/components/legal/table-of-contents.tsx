"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type TocItem = { id: string; title: string; level?: 2 | 3 };

/**
 * Sticky document navigation with scroll-spy. Uses IntersectionObserver so the
 * active section follows the reader without polling scroll offsets.
 */
export function TableOfContents({
  items,
  label = "On this page",
  className,
}: {
  items: TocItem[];
  label?: string;
  className?: string;
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -65% 0px", threshold: [0, 1] },
    );

    for (const heading of headings) observer.observe(heading);
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={label} className={cn("flex flex-col gap-3", className)}>
      <p className="rw-eyebrow text-[11px] text-slate-gray">{label}</p>
      <ul className="flex flex-col gap-1.5 border-l border-light-gray">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "-ml-px block border-l-2 py-1 pl-3 text-[13px] leading-snug transition-colors",
                active === item.id
                  ? "border-off-black text-off-black"
                  : "border-transparent text-slate-gray hover:text-off-black",
                item.level === 3 ? "pl-6 text-[12px]" : "",
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
