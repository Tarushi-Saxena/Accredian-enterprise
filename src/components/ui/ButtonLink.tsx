import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline" | "contrast";
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.99]";

  const variants: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
    primary:
      "bg-[var(--accent)] text-white shadow-[0_14px_40px_-22px_rgba(79,70,229,0.85)] hover:bg-[color-mix(in_oklab,var(--accent)_88%,black)] focus-visible:outline-[var(--accent)]",
    ghost:
      "bg-white/10 text-white hover:bg-white/15 focus-visible:outline-white",
    outline:
      "border border-[var(--border)] bg-white text-[var(--ink)] shadow-[0_1px_0_rgba(15,23,42,0.04)] hover:border-[color-mix(in_oklab,var(--accent)_35%,var(--border))] hover:text-[var(--accent)] focus-visible:outline-[var(--accent)]",
    contrast:
      "bg-white text-[var(--ink)] shadow-[0_18px_60px_-40px_rgba(15,23,42,0.55)] hover:bg-slate-50 focus-visible:outline-white",
  };

  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
