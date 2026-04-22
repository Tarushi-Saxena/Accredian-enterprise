import { audienceCards } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Audience() {
  return (
    <Section id="audiences" variant="surface" className="border-y border-[var(--border)] py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Strategic Skill Enhancement"
          title="Programs calibrated to how your teams actually work"
          subtitle="Meet learners where they are—then stretch them with relevant practice, feedback, and accountability."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {audienceCards.map((card, idx) => (
            <Card key={card.title} interactive className="card-shine relative p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--accent)]">Audience</p>
                <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-extrabold text-[var(--muted)]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-[var(--ink)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{card.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
