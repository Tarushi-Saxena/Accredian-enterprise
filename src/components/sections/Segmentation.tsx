import { segmentationRows } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Segmentation() {
  return (
    <Section id="segmentation" variant="white" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Tailored Course Segmentation"
          title="Explore Custom-fit Courses Designed to Address Every Professional Focus"
          subtitle="A modular catalog you can assemble by program, industry, topic, and seniority—without losing governance."
          align="center"
        />

        <Card className="overflow-hidden">
          <div className="divide-y divide-[var(--border)]">
            {segmentationRows.map((row, idx) => (
              <div key={row.title} className="relative grid gap-4 p-6 sm:grid-cols-12 sm:items-center">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[var(--accent)] to-[var(--accent-2)] opacity-70 sm:hidden" />
                <div className="hidden sm:block sm:col-span-1">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-sm font-extrabold text-[var(--accent)]">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
                <p className="text-base font-extrabold text-[var(--ink)] sm:col-span-4">{row.title}</p>
                <p className="text-sm leading-relaxed text-[var(--muted)] sm:col-span-7">{row.detail}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="mt-8 p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--accent)]">Who Should Join?</p>
              <p className="mt-2 max-w-3xl text-base leading-relaxed text-[var(--muted)]">
                Leaders building capability systems, program owners modernizing academies, and teams shipping complex change.
              </p>
            </div>
            <div className="shrink-0 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--ink)]">
              Built for enterprise scale
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
