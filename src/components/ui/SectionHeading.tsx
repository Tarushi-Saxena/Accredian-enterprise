import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowClass = tone === "dark" ? "text-sky-100/90" : "text-[var(--accent)]";
  const titleClass = tone === "dark" ? "text-white" : "text-[var(--ink)]";
  const subtitleClass = tone === "dark" ? "text-slate-100/85" : "text-[var(--muted)]";

  return (
    <div className={cn("mb-10 max-w-3xl space-y-3", alignment, className)}>
      {eyebrow ? (
        <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${eyebrowClass}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-balance text-3xl font-semibold tracking-tight sm:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`text-pretty text-base leading-relaxed sm:text-lg ${subtitleClass}`}>{subtitle}</p>
      ) : null}
    </div>
  );
}
