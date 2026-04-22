import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionVariant = "default" | "surface" | "dark" | "white";

type SectionProps = {
  id?: string;
  variant?: SectionVariant;
  className?: string;
  children: ReactNode;
  /** Extra top offset for sticky header clearance */
  scrollMarginClassName?: string;
};

const variantClass: Record<SectionVariant, string> = {
  default: "bg-transparent",
  surface: "bg-[var(--surface)]",
  dark: "bg-[var(--hero)] text-white",
  white: "bg-white",
};

export function Section({
  id,
  variant = "default",
  className,
  children,
  scrollMarginClassName = "scroll-mt-24",
}: SectionProps) {
  return (
    <section id={id} className={cn(scrollMarginClassName, variantClass[variant], className)}>
      {children}
    </section>
  );
}
