import { testimonials } from "@/lib/site-data";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { TiltSurface } from "@/components/visual/TiltSurface";
import Image from "next/image";

export function Testimonials() {
  return (
    <Section id="testimonials" variant="dark" className="py-24 sm:py-32 overflow-hidden relative">
      {/* Deep Space Background Effects */}
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
        
        <div className="mt-16 grid gap-10 lg:grid-cols-12 items-center">
          {/* Futuristic Hologram Image Block */}
          <div className="lg:col-span-5 order-last lg:order-first">
             <TiltSurface maxTilt={12}>
               <div className="relative w-full aspect-[4/5] rounded-[40px] p-1 bg-gradient-to-b from-cyan-400/50 via-indigo-500/20 to-transparent shadow-[0_0_80px_rgba(6,182,212,0.2)] group" style={{ transformStyle: 'preserve-3d' }}>
                 <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
                 
                 <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0b1020] to-[#060913] border border-white/10" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
                   
                   {/* Glowing Grid Background */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
                   
                   <Image 
                     src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/customer-care-indian-hero-section-image-removebg-preview.webp"
                     alt="Global Network"
                     fill
                     className="object-contain object-bottom scale-110 drop-shadow-[0_20px_30px_rgba(0,255,255,0.2)] transition-transform duration-[1.5s] group-hover:scale-125 group-hover:-translate-y-4"
                     style={{ transform: 'translateZ(40px)' }}
                   />
                   
                   <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/40 to-transparent mix-blend-multiply" />
                   
                   {/* Hologram Floating UI Elements */}
                   <div className="absolute bottom-8 left-8 right-8" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(80px)' }}>
                     <div className="flex -space-x-3 mb-4 drop-shadow-2xl">
                       {[...Array(4)].map((_, i) => (
                         <div key={i} className="h-10 w-10 rounded-full border border-cyan-400/50 bg-[#0b1020] flex items-center justify-center p-1 shadow-[0_0_15px_rgba(0,255,255,0.2)] backdrop-blur-sm">
                           <div className="h-full w-full rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 opacity-60" />
                         </div>
                       ))}
                       <div className="h-10 w-10 rounded-full border border-cyan-400 bg-cyan-500/20 text-cyan-200 flex items-center justify-center text-xs font-black shadow-[0_0_20px_rgba(0,255,255,0.5)] backdrop-blur-md">
                         +5k
                       </div>
                     </div>
                     <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl transition hover:bg-white/10">
                       <p className="text-cyan-50 font-bold text-sm tracking-wide">
                         Active Enterprise Nodes Connected.
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             </TiltSurface>
          </div>

          {/* Glowing Testimonial Nodes */}
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {testimonials.slice(0, 4).map((t, idx) => (
              <TiltSurface key={t.quote} maxTilt={8} className={cn(idx === 1 && "sm:mt-12", idx === 3 && "sm:mt-12")}>
                <div className="group relative h-full">
                  <div className="pointer-events-none absolute -inset-0.5 rounded-[28px] bg-gradient-to-br from-cyan-400/40 via-indigo-500/20 to-transparent opacity-0 blur-lg transition duration-500 group-hover:opacity-100" />
                  
                  <Card className="relative h-full p-6 sm:p-8 bg-[#0A0F1C]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-cyan-400/30 overflow-visible" style={{ transformStyle: 'preserve-3d' }}>
                    
                    <div className="absolute top-0 right-10 w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="flex items-start justify-between gap-4" style={{ transform: 'translateZ(40px)' }}>
                      <p className="text-5xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-indigo-600 drop-shadow-lg">
                        “
                      </p>
                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-cyan-300 ring-1 ring-cyan-400/30 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                        Verified
                      </span>
                    </div>
                    
                    <blockquote 
                      className="mt-4 text-sm leading-relaxed text-slate-300 font-medium"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      {t.quote}
                    </blockquote>
                    
                    <figcaption 
                      className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6"
                      style={{ transform: 'translateZ(50px)' }}
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-xs font-black text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] ring-1 ring-white/20">
                        {t.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                      </span>
                      <div className="text-sm">
                        <p className="font-black text-white tracking-wide drop-shadow-md">{t.name}</p>
                        <p className="text-cyan-200/80 font-semibold text-[11px] mt-0.5 uppercase tracking-wider">{t.role}</p>
                      </div>
                    </figcaption>
                    
                  </Card>
                </div>
              </TiltSurface>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
