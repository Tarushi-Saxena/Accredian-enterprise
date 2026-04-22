"use client";

import { useMemo, useState } from "react";
import { faqItems, faqTabs, type FaqTab } from "@/lib/site-data";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PillTabs } from "@/components/ui/PillTabs";
import { Card } from "@/components/ui/Card";

const tabs = faqTabs.map((t) => ({ id: t, label: t }));

export function FaqSection() {
  const [tab, setTab] = useState<FaqTab>("About the Course");
  const [openKey, setOpenKey] = useState<string | null>(faqItems[tab][0]?.q ?? null);

  const items = useMemo(() => faqItems[tab], [tab]);

  return (
    <Section id="faq" variant="surface" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Answers for sponsors and program owners"
          subtitle="Switch categories to see how delivery, curriculum, and operations typically come together."
          align="center"
        />

        <div className="mx-auto max-w-3xl">
          <PillTabs
            tabs={tabs}
            value={tab}
            onChange={(next) => {
              setTab(next);
              setOpenKey(faqItems[next][0]?.q ?? null);
            }}
            className="justify-center"
          />
        </div>

        <Card className="mt-8 overflow-hidden">
          {items.map((item) => {
            const key = `${tab}:${item.q}`;
            const open = openKey === key;
            return (
              <div key={key} className="border-b border-[var(--border)] last:border-b-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-[var(--surface)]"
                  aria-expanded={open}
                  onClick={() => setOpenKey(open ? null : key)}
                >
                  <span className="text-sm font-extrabold text-[var(--ink)]">{item.q}</span>
                  <span
                    className={cn(
                      "grid h-9 w-9 place-items-center rounded-xl border border-[var(--border)] bg-white text-lg leading-none text-[var(--muted)] transition",
                      open && "rotate-180 border-[color-mix(in_oklab,var(--accent)_25%,var(--border))] text-[var(--accent)]",
                    )}
                    aria-hidden
                  >
                    ⌄
                  </span>
                </button>

                <div className={cn("grid transition-[grid-template-rows] duration-300 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-relaxed text-[var(--muted)]">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Card>
      </Container>
    </Section>
  );
}
