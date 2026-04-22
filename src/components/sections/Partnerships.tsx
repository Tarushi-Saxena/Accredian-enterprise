import { partnerPlaceholders } from "@/lib/site-data";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";

function PartnerPill({ name }: { name: string }) {
  return (
    <div
      className={cn(
        "flex h-14 min-w-[148px] items-center justify-center rounded-2xl border border-[var(--border)] bg-white px-4",
        "text-sm font-extrabold tracking-wide text-[var(--muted)] shadow-[0_14px_40px_-34px_rgba(15,23,42,0.45)]",
      )}
    >
      {name}
    </div>
  );
}

export function Partnerships() {
  return (
    <Section id="partnerships" variant="surface" className="border-y border-[var(--border)] py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Proven Partnerships"
          title="Successful Collaborations With the Industry’s Best"
          subtitle="Trusted by teams that need predictable quality, governance-friendly delivery, and crisp reporting."
          align="center"
        />

        <div className="mt-2">
          <Marquee className="py-2">
            {[...partnerPlaceholders, ...partnerPlaceholders].map((name, idx) => (
              <PartnerPill key={`${name}-${idx}`} name={name} />
            ))}
          </Marquee>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            { title: "Security-first mindset", body: "Aligned to enterprise policies, data handling, and access controls." },
            { title: "Stakeholder orchestration", body: "Sponsors, managers, and learners stay aligned with a shared scorecard." },
            { title: "Operational fit", body: "Scheduling, localization, and enablement designed around real work weeks." },
          ].map((x) => (
            <div key={x.title} className="rounded-2xl border border-[var(--border)] bg-white/70 p-5 shadow-sm backdrop-blur">
              <p className="text-sm font-extrabold text-[var(--ink)]">{x.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{x.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
