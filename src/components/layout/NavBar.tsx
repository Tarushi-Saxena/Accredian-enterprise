"use client";

import { useEffect, useMemo, useState } from "react";
import { navItems, scrollSpySectionIds } from "@/lib/site-data";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { EnterpriseLogo } from "@/components/brand/EnterpriseLogo";
import { ButtonLink } from "@/components/ui/ButtonLink";

function hrefToId(href: string) {
  return href.startsWith("#") ? href.slice(1) : href;
}

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(scrollSpySectionIds, { rootMargin: "-18% 0px -62% 0px" });

  const navLinkClass = useMemo(
    () =>
      cn(
        "whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition sm:text-[13px]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]",
      ),
    [],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled ? "border-[var(--border)] bg-white/85 backdrop-blur-xl" : "border-transparent bg-white/65 backdrop-blur-lg",
      )}
    >
      <Container className="flex h-16 items-center gap-3 sm:gap-4">
        <a href="#hero" className="flex shrink-0 items-center gap-2 text-[var(--ink)]">
          <EnterpriseLogo theme="dark" mode="full" className="hidden sm:block" />
          <EnterpriseLogo theme="dark" mode="icon" className="block sm:hidden" />
        </a>

        <nav className="hidden min-w-0 flex-1 justify-center lg:flex">
          <div className="no-scrollbar flex max-w-[820px] items-center gap-1 overflow-x-auto rounded-full border border-[var(--border)] bg-white/70 px-1 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
            {navItems.map((item) => {
              const id = hrefToId(item.href);
              const active = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    navLinkClass,
                    active
                      ? "bg-[var(--accent)] text-white shadow-[0_12px_30px_-18px_rgba(79,70,229,0.75)]"
                      : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--ink)]",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <ButtonLink href="#contact" variant="outline" className="!py-2">
            Enquire Now
          </ButtonLink>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white text-[var(--ink)] shadow-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="relative block h-3.5 w-4">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-full rounded bg-current transition",
                open ? "translate-y-1.5 rotate-45" : "",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-full rounded bg-current transition",
                open ? "opacity-0" : "",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-0.5 w-full rounded bg-current transition",
                open ? "-translate-y-1.5 -rotate-45" : "",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden overflow-hidden border-[var(--border)] transition-[max-height,opacity] duration-300",
          open ? "max-h-[720px] border-t opacity-100" : "max-h-0 border-t border-transparent opacity-0",
        )}
      >
        <div className="bg-white px-4 pb-6 pt-2 shadow-lg">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navItems.map((item) => {
              const id = hrefToId(item.href);
              const active = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3 py-3 text-base font-semibold transition",
                    active ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "text-[var(--ink)] hover:bg-[var(--surface)]",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
            <ButtonLink href="#contact" className="mt-2 w-full" variant="primary" onClick={() => setOpen(false)}>
              Enquire Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
