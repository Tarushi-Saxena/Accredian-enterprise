import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Horizontal marquee track. Duplicate content upstream if you need a seamless loop.
 */
export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={cn("marquee overflow-hidden", className)}>
      <div className="marquee-track items-center">{children}</div>
    </div>
  );
}
