"use client";

import { cn } from "@/lib/cn";

export type PillTab<T extends string> = { id: T; label: string };

type PillTabsProps<T extends string> = {
  tabs: readonly PillTab<T>[];
  value: T;
  onChange: (next: T) => void;
  className?: string;
};

export function PillTabs<T extends string>({ tabs, value, onChange, className }: PillTabsProps<T>) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)} role="tablist" aria-label="Section tabs">
      {tabs.map((tab) => {
        const selected = tab.id === value;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(tab.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]",
              selected
                ? "bg-[var(--accent)] text-white shadow-[0_10px_30px_-18px_rgba(79,70,229,0.75)]"
                : "border border-[var(--border)] bg-white text-[var(--muted)] hover:border-[color-mix(in_oklab,var(--accent)_35%,var(--border))] hover:text-[var(--ink)]",
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
