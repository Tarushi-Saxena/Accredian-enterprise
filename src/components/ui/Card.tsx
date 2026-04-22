import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** Adds hover lift + border tint */
  interactive?: boolean;
};

export function Card({ children, className, interactive = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] shadow-[0_1px_0_rgba(15,23,42,0.04)]",
        interactive &&
          "transition duration-300 will-change-transform hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--accent)_28%,var(--border))] hover:shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
