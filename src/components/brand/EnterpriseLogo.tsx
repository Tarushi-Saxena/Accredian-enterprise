import { cn } from "@/lib/cn";

type EnterpriseLogoProps = {
  /** `dark`: for light backgrounds (nav/footer). `light`: for dark hero backgrounds. */
  theme?: "dark" | "light";
  /** `full` includes wordmark; `icon` is mark only (compact mobile / favor). */
  mode?: "full" | "icon";
  className?: string;
};

const sizeMap = {
  full: "h-9 w-[148px] sm:h-10 sm:w-[168px]",
  icon: "h-9 w-9 sm:h-10 sm:w-10",
} as const;

/**
 * Demo brand mark + wordmark (original artwork for this rebuild — not the official Accredian trademark).
 */
export function EnterpriseLogo({ theme = "dark", mode = "full", className }: EnterpriseLogoProps) {
  const ink = theme === "dark" ? "#0b1020" : "#ffffff";
  const subInk = theme === "dark" ? "rgba(11,16,32,0.62)" : "rgba(255,255,255,0.72)";

  return (
    <svg
      viewBox={mode === "icon" ? "0 0 40 40" : "0 0 200 40"}
      className={cn(sizeMap[mode], "select-none", className)}
      role="img"
      aria-label="Accredian Enterprise"
    >
      <defs>
        <linearGradient id="ae-mark-grad" x1="8" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4f46e5" />
          <stop offset="0.55" stopColor="#6366f1" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="ae-glass" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255,255,255,0.92)" />
          <stop offset="1" stopColor="rgba(255,255,255,0.18)" />
        </linearGradient>
        <filter id="ae-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g>
        <rect x="2" y="2" width="36" height="36" rx="12" fill="url(#ae-mark-grad)" />
        <rect x="2" y="2" width="36" height="36" rx="12" fill="none" stroke="rgba(255,255,255,0.22)" />
        <path
          d="M12 27 L20 11 L28 27"
          fill="none"
          stroke="url(#ae-glass)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ae-glow)"
        />
        <path d="M14 23h12" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="16" r="2.1" fill="rgba(255,255,255,0.85)" />
        <circle cx="26" cy="16" r="2.1" fill="rgba(255,255,255,0.85)" />
        <path d="M16 16h8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
      </g>

      {mode === "full" ? (
        <g>
          <text x="48" y="25" fill={ink} fontSize="18" fontWeight="800" fontFamily="ui-sans-serif, system-ui, sans-serif">
            Accredian
          </text>
          <text
            x="48"
            y="37"
            fill={subInk}
            fontSize="10"
            fontWeight="800"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            letterSpacing="0.22em"
          >
            ENTERPRISE
          </text>
        </g>
      ) : null}
    </svg>
  );
}
