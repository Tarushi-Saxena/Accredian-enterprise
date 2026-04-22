import { heroBullets } from "@/lib/site-data";
import { EnterpriseLogo } from "@/components/brand/EnterpriseLogo";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroRightColumn } from "@/components/sections/HeroRightColumn";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[var(--hero)] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_18%_-10%,rgba(99,102,241,0.55),transparent_60%),radial-gradient(760px_520px_at_92%_10%,rgba(6,182,212,0.45),transparent_55%),radial-gradient(520px_420px_at_60%_120%,rgba(79,70,229,0.35),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(closest-side at 50% 20%, black, transparent)",
          }}
        />
      </div>

      <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:items-center lg:py-24">
        <div className="space-y-7 lg:col-span-7">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur">
            <EnterpriseLogo theme="light" mode="icon" className="!h-8 !w-8" />
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
              Accredian · Enterprise L&D
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Next-Gen Expertise for <span className="text-gradient">Your Enterprise</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-100/90">
              Cultivate high-performance teams through expert learning—aligned to your strategy, culture, and operating cadence.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {heroBullets.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-white/20 to-white/5 ring-1 ring-white/15">
                  <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_0_6px_rgba(34,211,238,0.12)]" />
                </span>
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#contact" variant="contrast" className="!px-6 !py-3">
              Enquire Now
            </ButtonLink>
            <ButtonLink href="#track-record" variant="ghost" className="!px-6 !py-3 ring-1 ring-white/25">
              View impact
            </ButtonLink>
          </div>

          <p className="text-xs leading-relaxed text-slate-200/70">
            Designed for enterprise procurement: clear outcomes, transparent delivery model, and stakeholder-ready reporting.
          </p>
        </div>

        <HeroRightColumn />
      </Container>
    </section>
  );
}
