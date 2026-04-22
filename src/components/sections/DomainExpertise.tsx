import { domainCards } from "@/lib/site-data";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const toneClass = {
  violet: "from-violet-500 to-fuchsia-600",
  cyan: "from-cyan-400 to-blue-600",
  amber: "from-amber-400 to-orange-600",
  blue: "from-sky-400 to-indigo-600",
  emerald: "from-emerald-400 to-teal-600",
  indigo: "from-indigo-500 to-purple-600",
  rose: "from-rose-400 to-pink-600",
} as const;

function initialsFromTitle(title: string) {
  const letters = [...title.matchAll(/\b([A-Za-z])/g)].map((m) => m[1]!.toUpperCase());
  return letters.slice(0, 2).join("") || "A";
}

export function DomainExpertise() {
  return (
    <Section id="domains" variant="surface" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Domain Expertise"
          title="Specialized Programs Designed to Fuel Innovation"
          subtitle="Pick a domain—we map competencies, assessments, and capstones to your org chart and tooling."
          align="center"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domainCards.map((card) => (
            <Card key={card.title} interactive className="card-shine group relative p-7">
              <div className="flex items-start justify-between gap-4">
                <div
                  className={cn(
                    "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-extrabold text-white shadow-sm ring-1 ring-black/5",
                    toneClass[card.tone],
                  )}
                  aria-hidden
                >
                  {initialsFromTitle(card.title)}
                </div>
                <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[var(--accent)]">
                  Domain
                </span>
              </div>

              <h3 className="mt-4 text-lg font-extrabold text-[var(--ink)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{card.description}</p>

              <p className="mt-5 text-sm font-extrabold text-[var(--accent)] opacity-0 transition group-hover:opacity-100">
                Explore curriculum →
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
