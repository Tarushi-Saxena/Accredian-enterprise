import { edgePillars } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Edge() {
  return (
    <Section id="edge" variant="white" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="The Accredian Edge"
          title="Key Aspects of Our Strategic Training"
          subtitle="A focused operating model that keeps learning tied to performance—not attendance."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {edgePillars.map((item, idx) => (
            <Card key={item.title} interactive className="card-shine relative p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--accent)]">0{idx + 1}</p>
                <span className="h-2 w-2 rounded-full bg-[color-mix(in_oklab,var(--accent)_35%,var(--border))]" />
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-[var(--ink)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
