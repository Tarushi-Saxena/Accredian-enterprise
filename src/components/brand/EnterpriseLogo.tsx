import { cn } from "@/lib/cn";
import Image from "next/image";

type EnterpriseLogoProps = {
  /** `dark`: for light backgrounds (nav/footer). `light`: for dark hero backgrounds. */
  theme?: "dark" | "light";
  /** `full` includes wordmark; `icon` is mark only (compact mobile / favor). */
  mode?: "full" | "icon";
  className?: string;
};

const sizeMap = {
  full: "w-[148px] sm:w-[168px]",
  icon: "h-9 w-9 sm:h-10 sm:w-10",
} as const;

/**
 * Enterprise Logo
 */
export function EnterpriseLogo({ theme = "dark", mode = "full", className }: EnterpriseLogoProps) {
  const ink = theme === "dark" ? "text-[#0b1020]" : "text-white";
  const subInk = theme === "dark" ? "text-[#0b1020]/60" : "text-white/70";

  return (
    <div className={cn("flex items-center gap-2 select-none", sizeMap[mode], className)}>
      <Image 
        src="/accredian-new-logo.webp" 
        alt="Accredian" 
        width={40} 
        height={40} 
        className={cn("object-contain flex-shrink-0")} 
        priority
      />
      {mode === "full" ? (
        <div className="flex flex-col justify-center leading-none">
          <span className={cn("text-[18px] font-[800] leading-none mb-0.5", ink)} style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
            Accredian
          </span>
          <span
            className={cn("text-[10px] font-[800] tracking-[0.22em] leading-none", subInk)}
            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
          >
            ENTERPRISE
          </span>
        </div>
      ) : null}
    </div>
  );
}
