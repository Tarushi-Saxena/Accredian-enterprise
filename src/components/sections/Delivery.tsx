import { deliverySteps } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltSurface } from "@/components/visual/TiltSurface";
import Image from "next/image";

export function Delivery() {
  return (
    <Section id="delivery" variant="dark" className="relative overflow-hidden py-16 sm:py-20 flex flex-col md:flex-row items-center gap-10">
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

      <Container className="relative grid gap-14 lg:grid-cols-2 items-center">
        <div>
          <SectionHeading
            tone="dark"
            eyebrow="How We Deliver Results That Matter?"
            title="A Structured Three-Step Approach to Skill Development"
            subtitle="From diagnosis to delivery—transparent milestones, stakeholder alignment, and proof of progress."
          />
          <ol className="mt-8 grid gap-5">
            {deliverySteps.map((text, idx) => (
              <TiltSurface key={text} maxTilt={6}>
                <li
                  className="flex gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 shadow-[0_18px_70px_-55px_rgba(0,0,0,0.75)] backdrop-blur-xl transition hover:bg-white/15"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <span 
                    className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white/20 to-white/5 text-[15px] font-extrabold text-white ring-1 ring-white/15 shadow-md"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    {idx + 1}
                  </span>
                  <p 
                    className="text-sm font-semibold leading-relaxed text-slate-100/90 tracking-wide"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    {text}
                  </p>
                </li>
              </TiltSurface>
            ))}
          </ol>
        </div>

        <TiltSurface maxTilt={5} className="mt-10 lg:mt-0">
          <div className="relative w-full aspect-[4/3] rounded-[30px] border border-white/20 bg-white/5 p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-md">
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/30 to-cyan-400/30 blur-2xl rounded-[40px] -z-10" />
            <div className="relative h-full w-full overflow-hidden rounded-[24px]">
              <Image 
                src="/hero-image.webp" 
                alt="Delivery of Enterprise training" 
                fill
                className="object-cover transition-transform duration-[2s] hover:scale-105"
                style={{ transform: 'translateZ(10px)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/90 via-[#0b1020]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6" style={{ transform: 'translateZ(50px)' }}>
                <div className="inline-block px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                  Active Collaboration
                </div>
                <p className="mt-3 text-lg sm:text-xl font-extrabold text-white leading-snug drop-shadow-lg">
                  Bridging the gap between strategy and execution.
                </p>
              </div>
            </div>
          </div>
        </TiltSurface>
      </Container>
    </Section>
  );
}
