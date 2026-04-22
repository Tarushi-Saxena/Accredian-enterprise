import { testimonials } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Testimonials() {
  return (
    <Section id="testimonials" variant="white" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Testimonials from Our Partners"
          title="What Our Clients Are Saying"
          subtitle="A few notes from teams who needed enterprise-grade reliability—not just a vendor, but a partner."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.quote} className="group relative">
              <div className="pointer-events-none absolute -inset-px rounded-[26px] bg-gradient-to-br from-[color-mix(in_oklab,var(--accent)_35%,transparent)] via-transparent to-[color-mix(in_oklab,var(--accent-2)_30%,transparent)] opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
              <Card className="card-shine relative h-full p-7">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-5xl font-extrabold leading-none text-[color-mix(in_oklab,var(--accent)_18%,var(--border))]">
                    “
                  </p>
                  <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[var(--accent)]">
                    Partner
                  </span>
                </div>
                <blockquote className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[color-mix(in_oklab,var(--accent)_55%,var(--accent-2))] text-xs font-extrabold text-white shadow-sm">
                    {t.name
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div className="text-sm">
                    <p className="font-extrabold text-[var(--ink)]">{t.name}</p>
                    <p className="text-[var(--muted)]">{t.role}</p>
                  </div>
                </figcaption>
              </Card>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
