import { testimonials } from "@/lib/site-data";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltSurface } from "@/components/visual/TiltSurface";
import Image from "next/image";

export function Testimonials() {
  // Duplicate array for seamless infinite marquee scroll
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <Section id="testimonials" variant="dark" className="py-24 sm:py-32 overflow-hidden relative">
      <div className="pointer-events-none absolute inset-0 bg-[#060913]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          tone="dark"
          eyebrow="Enterprise Network"
          title="Trust Validated by Industry Leaders"
          subtitle="Join a thriving ecosystem where reliability meets the cutting edge of technological capability."
          align="center"
        />

        <div className="mt-16 flex flex-col gap-16">
          {/* Hologram Image Header */}
          <div className="mx-auto max-w-5xl w-full">
             <TiltSurface maxTilt={5}>
               <div className="relative w-full aspect-[21/10] sm:aspect-[3/1] rounded-[40px] p-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent flex items-center justify-center">
                 <div className="absolute inset-0 bg-cyan-500/10 rounded-[40px] blur-[20px] -z-10" />
                 
                 <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-[#0A0F1C] border border-white/10 flex items-center">
                   
                   <div className="relative z-10 w-full sm:w-1/2 p-8 sm:p-12">
                      <div className="inline-block h-12 w-12 rounded-full border border-cyan-400 bg-cyan-500/20 text-cyan-200 flex items-center justify-center text-sm font-black shadow-[0_0_20px_rgba(0,255,255,0.5)] backdrop-blur-md mb-4">
                         +5k
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug drop-shadow-lg">Active Enterprise Nodes</h3>
                      <p className="text-cyan-200 text-sm mt-2">Connecting global teams instantly.</p>
                   </div>

                   <div className="absolute top-0 right-0 z-0 w-2/3 sm:w-1/2 h-full overflow-hidden mask-image-gradient">
                     <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C] via-[#0A0F1C]/50 to-transparent z-10" />
                     <Image 
                       src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/customer-care-indian-hero-section-image-removebg-preview.webp"
                       alt="Global Network"
                       fill
                       className="object-cover object-[center_10%] opacity-90 scale-105"
                     />
                   </div>
                 </div>
               </div>
             </TiltSurface>
          </div>

          {/* Marquee Reviews */}
          <div className="marquee w-full h-[320px] flex items-center overflow-hidden">
            <div className="marquee-track flex w-max gap-8 px-8 hover:[animation-play-state:paused]">
              {marqueeItems.map((t, idx) => (
                <div key={`${t.quote}-${idx}`} className="w-[380px] shrink-0">
                  <div className="group relative h-full">
                    <div className="pointer-events-none absolute -inset-0.5 rounded-[28px] bg-gradient-to-br from-cyan-400/40 via-indigo-500/20 to-transparent opacity-0 blur-lg transition duration-500 group-hover:opacity-100" />
                    
                    {/* Replaced Card with div to ensure background styling works properly */}
                    <div className="relative h-full min-h-[260px] p-8 rounded-3xl bg-[#0A0F1C]/90 backdrop-blur-3xl border border-white/15 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-cyan-400/30 overflow-visible flex flex-col justify-between" style={{ transformStyle: 'preserve-3d' }}>
                      <div className="absolute top-0 right-10 w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-4xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-indigo-600 drop-shadow-lg">
                            “
                          </p>
                          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-cyan-300 ring-1 ring-cyan-400/30 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                            Verified
                          </span>
                        </div>
                        
                        <blockquote className="mt-4 text-[13px] leading-loose text-slate-300 font-medium">
                          {t.quote}
                        </blockquote>
                      </div>
                      
                      <figcaption className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-xs font-black text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] ring-1 ring-white/20">
                          {t.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                        </span>
                        <div className="text-sm">
                          <p className="font-black text-white tracking-wide drop-shadow-md truncate">{t.name}</p>
                          <p className="text-cyan-200/80 font-semibold text-[11px] mt-0.5 uppercase tracking-wider">{t.role}</p>
                        </div>
                      </figcaption>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
