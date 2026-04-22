import { catSteps } from "@/lib/site-data";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function CatFramework() {
  return (
    <Section id="framework" variant="white" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="The CAT Framework"
          title="Our Proven Approach to Learning Excellence"
          subtitle="A simple loop your stakeholders can repeat: diagnose, design, deliver—then measure what changed."
          align="center"
        />

        <div className="relative grid gap-6 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklab,var(--accent)_35%,var(--border))] to-transparent lg:block" />

          {catSteps.map((step) => (
            <Card key={step.step} className={cn("relative overflow-hidden p-7")}>
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent)] opacity-80" />
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[color-mix(in_oklab,var(--accent)_55%,var(--accent-2))] text-sm font-extrabold text-white shadow-sm">
                {step.step}
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-[var(--ink)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{step.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
