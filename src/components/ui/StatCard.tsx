import { cn } from "@/lib/cn";

type StatCardProps = {
  value: string;
  label: string;
  className?: string;
};

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-7 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.35)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] blur-2xl" />
        <div className="absolute -bottom-28 -right-24 h-56 w-56 rounded-full bg-[color-mix(in_oklab,var(--accent-2)_16%,transparent)] blur-2xl" />
      </div>
      <p className="relative text-5xl font-extrabold tracking-tight">
        <span className="text-gradient">{value}</span>
      </p>
      <p className="relative mt-4 text-sm leading-relaxed text-[var(--muted)]">{label}</p>
    </article>
  );
}
