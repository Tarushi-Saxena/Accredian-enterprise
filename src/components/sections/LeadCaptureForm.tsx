"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { isValidEmail, normalizeRequired } from "@/lib/validation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { TextAreaField, TextField } from "@/components/ui/TextField";

type FormState = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<Record<"name" | "email" | "company" | "message", string>>;

export function LeadCaptureForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const checklist = useMemo(
    () => [
      "Typical response time: 1–2 business days",
      "NDA-friendly engagement options",
      "Global delivery across time zones",
    ],
    [],
  );

  function validateClient(name: string, email: string, company: string): FieldErrors {
    const next: FieldErrors = {};

    if (normalizeRequired(name).length < 2) next.name = "Please enter your full name.";
    if (!isValidEmail(email)) next.email = "Please enter a valid work email.";
    if (normalizeRequired(company).length < 2) next.company = "Please enter your company name.";

    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const company = String(formData.get("company") ?? "");
    const message = String(formData.get("message") ?? "");

    const nextFieldErrors = validateClient(name, email, company);
    setFieldErrors(nextFieldErrors);
    if (Object.keys(nextFieldErrors).length) {
      setState("idle");
      setError(null);
      return;
    }

    setState("submitting");
    setError(null);

    const payload = {
      name: normalizeRequired(name),
      email: email.trim(),
      company: normalizeRequired(company),
      message: message.trim(),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong");
        setState("error");
        return;
      }

      setState("success");
      setFieldErrors({});
      form.reset();
    } catch {
      setError("Network error");
      setState("error");
    }
  }

  return (
    <Section id="contact" variant="white" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Enquire Now"
              title="Tell us about your teams and timelines"
              subtitle="We will respond with a tailored proposal, sample outlines, and a measurement plan your sponsors can defend."
              className="lg:max-w-none"
            />
            <ul className="mt-8 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--muted)]">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[11px] font-extrabold text-[var(--accent)]">
                    ✓
                  </span>
                  <span className="font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <Card className="p-7 shadow-[0_22px_80px_-55px_rgba(15,23,42,0.45)]">
              <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <TextField label="Full name" name="name" autoComplete="name" placeholder="Priya Sharma" error={fieldErrors.name} />
                  <TextField
                    label="Work email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    error={fieldErrors.email}
                  />
                </div>
                <TextField label="Company" name="company" autoComplete="organization" placeholder="Acme Corp" error={fieldErrors.company} />
                <TextAreaField
                  label="Goals (optional)"
                  name="message"
                  rows={4}
                  placeholder="Cohort size, domains, timelines, compliance needs…"
                  error={fieldErrors.message}
                />

                {error ? <p className="text-sm font-semibold text-[var(--danger)]">{error}</p> : null}
                {state === "success" ? (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-900">
                    Thanks—your enquiry was captured. We will follow up shortly.
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={state === "submitting" || state === "success"}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_55px_-30px_rgba(79,70,229,0.85)] transition hover:bg-[color-mix(in_oklab,var(--accent)_88%,black)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {state === "submitting" ? "Sending…" : state === "success" ? "Submitted" : "Submit enquiry"}
                </button>

                <p className="text-xs leading-relaxed text-[var(--muted)]">
                  This demo stores submissions in memory on the server (reset on cold start). Wire to CRM or a database for production.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
