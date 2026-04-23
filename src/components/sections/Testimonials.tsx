import { testimonials } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { TiltSurface } from "@/components/visual/TiltSurface";

export function Testimonials() {
  return (
    <Section id="testimonials" variant="white" className="py-16 sm:py-20 overflow-hidden relative">
      <Container>
        <SectionHeading
          eyebrow="Testimonials from Our Partners"
          title="What Our Clients Are Saying"
          subtitle="A few notes from teams who needed enterprise-grade reliability—not just a vendor, but a partner."
          align="center"
        />
        
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TiltSurface key={t.quote} maxTilt={6}>
              <figure className="group relative h-full w-full">
                <div className="pointer-events-none absolute -inset-0.5 rounded-[28px] bg-gradient-to-br from-[color-mix(in_oklab,var(--accent)_35%,transparent)] via-transparent to-[color-mix(in_oklab,var(--accent-2)_30%,transparent)] opacity-0 blur-md transition duration-500 group-hover:opacity-100" />
                <Card className="card-shine relative h-full p-7 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] transition-shadow duration-500 group-hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] bg-white/70 backdrop-blur-lg border border-white/50" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="flex items-start justify-between gap-4" style={{ transform: 'translateZ(30px)' }}>
                    <p className="text-6xl font-black leading-none text-[color-mix(in_oklab,var(--accent)_18%,var(--border))] drop-shadow-sm">
                      “
                    </p>
                    <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[var(--accent)] shadow-sm">
                      Partner
                    </span>
                  </div>
                  <blockquote 
                    className="mt-2 text-sm leading-relaxed text-[#2a3040] font-medium"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    {t.quote}
                  </blockquote>
                  <figcaption 
                    className="mt-8 flex items-center gap-4"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[color-mix(in_oklab,var(--accent)_55%,var(--accent-2))] text-xs font-bold text-white shadow-lg ring-2 ring-white">
                      {t.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                    </span>
                    <div className="text-sm">
                      <p className="font-extrabold text-[#0b1020] tracking-tight">{t.name}</p>
                      <p className="text-[var(--muted)] font-medium text-xs mt-0.5">{t.role}</p>
                    </div>
                  </figcaption>
                </Card>
              </figure>
            </TiltSurface>
          ))}
        </div>
      </Container>
    </Section>
  );
}
