import { domainCards } from "@/lib/site-data";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { TiltSurface } from "@/components/visual/TiltSurface";
import Image from "next/image";

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
    <Section id="domains" variant="surface" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px]" />
      
      <Container>
        <SectionHeading
          eyebrow="Our Domain Expertise"
          title="Specialized Programs Designed to Fuel Innovation"
          subtitle="Pick a domain—we map competencies, assessments, and capstones to your org chart and tooling."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 z-10 relative">
          {domainCards.map((card) => (
            <TiltSurface key={card.title} maxTilt={6}>
              <Card interactive className="card-shine group relative p-7 h-full shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)]">
                <div className="flex items-start justify-between gap-4" style={{ transform: 'translateZ(40px)' }}>
                  <div
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-[15px] font-extrabold text-white shadow-lg ring-1 ring-black/5 transition-transform group-hover:scale-110",
                      toneClass[card.tone],
                    )}
                    aria-hidden
                  >
                    {initialsFromTitle(card.title)}
                  </div>
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-[var(--accent)] shadow-sm border border-[var(--accent)]/10">
                    Domain
                  </span>
                </div>

                <div style={{ transform: 'translateZ(30px)' }}>
                  <h3 className="mt-6 text-xl font-extrabold text-[var(--ink)]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{card.description}</p>
                </div>

                <p 
                  className="mt-6 text-sm font-extrabold text-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  Explore curriculum &rarr;
                </p>
              </Card>
            </TiltSurface>
          ))}
        </div>

        {/* Standard Professional Image Banner */}
        <div className="mt-16 sm:mt-24 w-full flex justify-center">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[24px] shadow-lg">
            <div className="relative h-[300px] sm:h-[400px] w-full">
              <Image 
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hero-section-image-3-compressed.webp"
                alt="Domain expertise in action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-10 max-w-2xl">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white drop-shadow-md">
                  Elevate your workforce to the next dimension.
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate-200">
                  Accredian bridges the gap between potential and performance with our industry-leading curriculums.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
