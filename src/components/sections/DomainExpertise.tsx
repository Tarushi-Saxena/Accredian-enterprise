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
    <Section id="domains" variant="surface" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="pointer-events-none absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-[120px] mix-blend-screen" />
      <div className="pointer-events-none absolute right-[-5%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[130px] mix-blend-screen" />
      
      <Container>
        <SectionHeading
          eyebrow="Our Domain Expertise"
          title="Specialized Programs Designed to Fuel Innovation"
          subtitle="Pick a domain—we map competencies, assessments, and capstones to your org chart and tooling."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 z-10 relative">
          {domainCards.map((card) => (
            <TiltSurface key={card.title} maxTilt={10}>
              <Card interactive className="card-shine group relative h-full p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] bg-card border border-white/10 overflow-visible transition-all duration-500 hover:shadow-[0_30px_70px_-20px_rgba(0,255,255,0.15)]" style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[28px]" />
                <div className="flex items-start justify-between gap-4" style={{ transform: 'translateZ(40px)' }}>
                  <div
                    className={cn(
                      "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-base font-extrabold text-white shadow-xl ring-2 ring-white/20 transition-transform duration-500 group-hover:scale-110",
                      toneClass[card.tone],
                    )}
                    aria-hidden
                  >
                    {initialsFromTitle(card.title)}
                  </div>
                  <span className="rounded-full bg-black/5 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-[var(--accent)] ring-1 ring-[var(--accent)]/30 shadow-[0_0_15px_rgba(0,180,255,0.2)]">
                    Domain
                  </span>
                </div>

                <div className="mt-8" style={{ transform: 'translateZ(30px)' }}>
                  <h3 className="text-xl font-black text-[var(--ink)] tracking-tight drop-shadow-sm">{card.title}</h3>
                  <p className="mt-3 text-sm leading-loose text-[var(--muted)] font-medium">{card.description}</p>
                </div>

                <div 
                  className="mt-8"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  <p className="inline-flex items-center gap-2 text-sm font-extrabold text-[var(--accent)] opacity-80 transition-all duration-300 group-hover:opacity-100 shadow-sm border-b border-transparent group-hover:border-[var(--accent)] cursor-pointer">
                    Explore curriculum 
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </p>
                </div>
              </Card>
            </TiltSurface>
          ))}
        </div>

        {/* Futuristic 3D Hologram Banner using Accredian Hero Image */}
        <div className="mt-24 sm:mt-32 w-full flex justify-center relative z-20">
          <TiltSurface maxTilt={8} className="w-full max-w-5xl">
            <div 
              className="relative w-full rounded-[40px] p-1 bg-gradient-to-br from-cyan-400/40 via-indigo-500/30 to-purple-600/30 shadow-[0_50px_100px_-20px_rgba(99,102,241,0.4)] backdrop-blur-3xl overflow-visible transition-shadow duration-[1.5s] hover:shadow-[0_80px_120px_-30px_rgba(6,182,212,0.6)] group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -inset-8 bg-gradient-to-tr from-indigo-500/30 to-cyan-400/30 rounded-full blur-[80px] -z-10 group-hover:opacity-100 opacity-60 transition-opacity duration-700" />
              
              <div 
                className="relative h-[350px] sm:h-[480px] w-full overflow-hidden rounded-[36px] bg-[#0A0F1C]"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
              >
                {/* Embedded Accredian Enterprise Background */}
                <Image 
                  src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hero-section-image-3-compressed.webp"
                  alt="Accredian futuristic domain expertise"
                  fill
                  className="object-cover opacity-70 mix-blend-luminosity scale-[1.05] transition-transform duration-[2s] group-hover:scale-[1.12]"
                  priority
                />
                
                {/* Holographic Overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.05),rgba(10,15,28,0.85))]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

                <div 
                  className="absolute inset-0 flex flex-col justify-end p-8 sm:p-14" 
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div style={{ transform: "translateZ(60px)" }}>
                    <span className="inline-flex py-1.5 px-4 rounded-full bg-cyan-400/20 border border-cyan-300/40 text-cyan-50 text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(0,255,255,0.3)] backdrop-blur-md mb-4">
                      Cyber-Ready Workforce
                    </span>
                    <h3 className="text-3xl sm:text-5xl font-black text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] leading-[1.1] max-w-3xl">
                      Elevate your teams to the next <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">dimension of reality.</span>
                    </h3>
                  </div>
                  
                  {/* Floating Analytical Badges */}
                  <div 
                    className="absolute top-10 right-10 hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-3xl shadow-2xl"
                    style={{ transform: "translateZ(80px)" }}
                  >
                    <div className="h-12 w-12 rounded-full border-2 border-[var(--accent)] flex items-center justify-center relative shadow-[0_0_20px_var(--accent)]">
                      <div className="absolute inset-1 rounded-full border-t-2 border-cyan-300 animate-spin" style={{ animationDuration: '3s' }} />
                      <span className="text-white font-extrabold text-sm">PRO</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-cyan-200 uppercase font-bold tracking-wider">System Integrity</p>
                      <p className="text-white text-xl font-black shrink-0">99.9%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltSurface>
        </div>
      </Container>
    </Section>
  );
}
