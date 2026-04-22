import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Base = {
  label: string;
  error?: string | null;
  hint?: ReactNode;
};

const controlClass =
  "w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-[var(--ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] outline-none transition placeholder:text-slate-400/80 focus:ring-2";

function fieldState(error?: string | null) {
  return error
    ? "border-red-300 focus:border-red-400 focus:ring-red-200"
    : "border-[var(--border)] focus:border-[color-mix(in_oklab,var(--accent)_35%,var(--border))] focus:ring-[color-mix(in_oklab,var(--accent)_25%,white)]";
}

export function TextField({
  label,
  error,
  hint,
  id,
  name,
  className,
  ...props
}: Base & InputHTMLAttributes<HTMLInputElement>) {
  const inputId = id ?? name;

  return (
    <div className="grid gap-1 text-sm">
      <label htmlFor={inputId} className="font-semibold text-[var(--ink)]">
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={hint ? `${inputId}-hint` : undefined}
        className={cn(controlClass, fieldState(error), className)}
        {...props}
      />
      {error ? <p className="text-xs font-medium text-[var(--danger)]">{error}</p> : null}
      {hint && !error ? (
        <p id={`${inputId}-hint`} className="text-xs text-[var(--muted)]">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export function TextAreaField({
  label,
  error,
  hint,
  id,
  name,
  className,
  rows = 4,
  ...props
}: Base & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const inputId = id ?? name;

  return (
    <div className="grid gap-1 text-sm">
      <label htmlFor={inputId} className="font-semibold text-[var(--ink)]">
        {label}
      </label>
      <textarea
        id={inputId}
        name={name}
        rows={rows}
        aria-invalid={Boolean(error)}
        aria-describedby={hint ? `${inputId}-hint` : undefined}
        className={cn(controlClass, "min-h-[110px] resize-y", fieldState(error), className)}
        {...props}
      />
      {error ? <p className="text-xs font-medium text-[var(--danger)]">{error}</p> : null}
      {hint && !error ? (
        <p id={`${inputId}-hint`} className="text-xs text-[var(--muted)]">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
