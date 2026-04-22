import { deliverySteps } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Delivery() {
  return (
    <Section id="delivery" variant="dark" className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(760px_520px_at_20%_0%,rgba(99,102,241,0.45),transparent_55%),radial-gradient(720px_520px_at_90%_30%,rgba(6,182,212,0.35),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(closest-side at 50% 10%, black, transparent)",
          }}
        />
      </div>

      <Container className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="How We Deliver Results That Matter?"
          title="A Structured Three-Step Approach to Skill Development"
          subtitle="From diagnosis to delivery—transparent milestones, stakeholder alignment, and proof of progress."
          align="center"
        />
        <ol className="mx-auto grid max-w-4xl gap-4">
          {deliverySteps.map((text, idx) => (
            <li
              key={text}
              className="flex gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 shadow-[0_18px_70px_-55px_rgba(0,0,0,0.75)] backdrop-blur-xl"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white/20 to-white/5 text-sm font-extrabold text-white ring-1 ring-white/15">
                {idx + 1}
              </span>
              <p className="text-sm font-semibold leading-relaxed text-slate-100/90">{text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
