"use client";

import type { PointerEvent, ReactNode } from "react";
import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type TiltSurfaceProps = {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees */
  maxTilt?: number;
};

/**
 * Pointer-driven 3D tilt (CSS transforms). Keeps motion subtle for enterprise polish.
 */
export function TiltSurface({ children, className, maxTilt = 7 }: TiltSurfaceProps) {
  const root = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState("");

  const onMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const el = root.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      const rx = (-py * maxTilt).toFixed(2);
      const ry = (px * maxTilt).toFixed(2);
      setTilt(`rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`);
    },
    [maxTilt],
  );

  const onLeave = useCallback(() => setTilt(""), []);

  return (
    <div ref={root} className={cn("[perspective:1100px]", className)} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div
        className={cn(
          "transform-gpu will-change-transform",
          !tilt && "transition-transform duration-500 ease-out",
        )}
        style={{ transform: tilt || "rotateX(0deg) rotateY(0deg)", transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}
