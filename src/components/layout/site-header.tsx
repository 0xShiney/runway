"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { RunwayWordmark } from "@/components/brand/logo";
import { primaryNav, promoBanner } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const activeItem = primaryNav.find((item) => item.label === openMenu);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {bannerVisible ? (
        <div className="hidden border-b border-white/10 bg-off-black text-white app-banner:block">
          <div className="rw-container flex items-center justify-between gap-4 py-2">
            <p className="rw-paragraph-s text-white/85">
              {promoBanner.message}{" "}
              <a
                href={promoBanner.termsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                See terms
              </a>
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={promoBanner.ctaHref}
                className="rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-off-black transition-colors hover:bg-white/85"
              >
                {promoBanner.ctaLabel}
              </Link>
              <button
                type="button"
                onClick={() => setBannerVisible(false)}
                aria-label="Dismiss promotion"
                className="p-1 text-white/60 transition-colors hover:text-white"
              >
                <X className="size-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div
        ref={navRef}
        className={cn(
          "relative border-b border-light-gray bg-white/95 backdrop-blur transition-shadow duration-200",
          scrolled ? "shadow-[0_1px_20px_rgba(0,0,0,0.06)]" : "",
        )}
        onMouseLeave={scheduleClose}
        onMouseEnter={cancelClose}
      >
        <div className="rw-container flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Runway home"
            className="inline-flex items-center text-off-black transition-opacity hover:opacity-70"
          >
            <RunwayWordmark />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center">
              {primaryNav.map((item) => {
                const hasMenu = Boolean(item.columns);
                const isOpen = openMenu === item.label;
                return (
                  <li key={item.label} className="py-2">
                    <div
                      className="flex items-center"
                      onMouseEnter={() => hasMenu && setOpenMenu(item.label)}
                    >
                      <Link
                        href={item.href}
                        aria-haspopup={hasMenu ? "true" : undefined}
                        aria-expanded={hasMenu ? isOpen : undefined}
                        onClick={() => setOpenMenu(null)}
                        className={cn(
                          "inline-flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-sm font-medium leading-tight transition-colors min-[1440px]:px-3 min-[1440px]:text-[15px]",
                          isOpen ? "text-off-black/60" : "text-off-black hover:text-off-black/60",
                        )}
                      >
                        {item.label}
                        {hasMenu ? (
                          <ChevronDown
                            className={cn(
                              "mt-0.5 size-3.5 transition-transform duration-200",
                              isOpen ? "rotate-180" : "",
                            )}
                            aria-hidden="true"
                          />
                        ) : null}
                      </Link>
                      {hasMenu ? (
                        <button
                          type="button"
                          aria-label={`${isOpen ? "Close" : "Open"} ${item.label} menu`}
                          aria-expanded={isOpen}
                          onClick={() => setOpenMenu(isOpen ? null : item.label)}
                          className="sr-only"
                        >
                          {item.label}
                        </button>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href="/enterprise-contact"
              className="hidden text-sm font-medium text-off-black/70 transition-colors hover:text-off-black xl:inline"
            >
              Enterprise Sales
            </Link>
            <Link
              href="/login"
              className="hidden text-sm font-medium text-off-black/70 transition-colors hover:text-off-black sm:inline"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="hidden h-9 items-center rounded-full bg-off-black px-4 text-sm font-medium text-white transition-colors hover:bg-[#2a2a2a] sm:inline-flex"
            >
              Try Runway
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="inline-flex size-10 items-center justify-center rounded-full text-off-black transition-colors hover:bg-off-black/5 lg:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {activeItem?.columns ? (
          <div
            className="absolute inset-x-0 top-full hidden border-b border-light-gray bg-white shadow-[0_24px_40px_-24px_rgba(0,0,0,0.25)] lg:block"
            onMouseEnter={cancelClose}
          >
            <div className="rw-container grid gap-10 py-10 lg:grid-cols-[1fr_1fr_320px]">
              <div className="grid grid-cols-2 gap-10 lg:col-span-2">
                {activeItem.columns.map((group) => (
                  <div key={group.title ?? "group"} className="flex flex-col gap-3">
                    {group.title ? (
                      <p className="rw-eyebrow text-[11px] text-slate-gray">{group.title}</p>
                    ) : null}
                    <ul className="flex flex-col gap-1">
                      {group.items.map((link) => (
                        <li key={`${group.title}-${link.label}`}>
                          <Link
                            href={link.href}
                            className="group block rounded-lg px-3 py-2 transition-colors hover:bg-off-white-alt"
                            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          >
                            <span className="flex items-center gap-1 text-sm font-medium text-off-black">
                              {link.label}
                              {link.external ? (
                                <ArrowUpRight className="size-3 opacity-40" aria-hidden="true" />
                              ) : null}
                            </span>
                            {link.description ? (
                              <span className="mt-0.5 block text-[13px] leading-snug text-slate-gray">
                                {link.description}
                              </span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {activeItem.featured ? (
                <div className="flex flex-col justify-between rounded-xl bg-off-black p-6 text-white">
                  <div>
                    <p className="rw-eyebrow text-white/50">Featured</p>
                    <p className="mt-3 text-lg font-medium">{activeItem.featured.title}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/65">
                      {activeItem.featured.body}
                    </p>
                  </div>
                  <Link
                    href={activeItem.featured.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white"
                  >
                    {activeItem.featured.cta}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      {mobileOpen ? (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-light-gray bg-white app-banner:top-[97px] lg:hidden"
        >
          <div className="rw-container flex flex-col gap-1 py-4">
            {primaryNav.map((item) => {
              const expanded = mobileSection === item.label;
              return (
                <div key={item.label} className="border-b border-light-gray last:border-b-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className="flex-1 py-3.5 text-[15px] font-medium text-off-black"
                    >
                      {item.label}
                    </Link>
                    {item.columns ? (
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
                        onClick={() => setMobileSection(expanded ? null : item.label)}
                        className="p-2 text-off-black/60"
                      >
                        <ChevronDown
                          className={cn("size-4 transition-transform", expanded ? "rotate-180" : "")}
                          aria-hidden="true"
                        />
                      </button>
                    ) : null}
                  </div>
                  {item.columns && expanded ? (
                    <div className="flex flex-col gap-4 pb-4">
                      {item.columns.map((group) => (
                        <div key={group.title ?? "group"}>
                          {group.title ? (
                            <p className="rw-eyebrow mb-1 text-[11px]">{group.title}</p>
                          ) : null}
                          <ul>
                            {group.items.map((link) => (
                              <li key={`${group.title}-${link.label}`}>
                                <Link
                                  href={link.href}
                                  onClick={closeAll}
                                  className="block py-2 text-sm text-slate-gray"
                                  {...(link.external
                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                    : {})}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}

            <div className="mt-4 flex flex-col gap-3 pb-8">
              <Link
                href="/signup"
                onClick={closeAll}
                className="inline-flex h-11 items-center justify-center rounded-full bg-off-black text-sm font-medium text-white"
              >
                Try Runway
              </Link>
              <Link
                href="/login"
                onClick={closeAll}
                className="inline-flex h-11 items-center justify-center rounded-full border border-off-black/15 text-sm font-medium text-off-black"
              >
                Login
              </Link>
              <Link
                href="/enterprise-contact"
                onClick={closeAll}
                className="inline-flex h-11 items-center justify-center rounded-full border border-off-black/15 text-sm font-medium text-off-black"
              >
                Enterprise Sales
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
