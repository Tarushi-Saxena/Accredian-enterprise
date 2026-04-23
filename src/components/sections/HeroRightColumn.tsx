"use client";

import { cn } from "@/lib/cn";
import { TiltSurface } from "@/components/visual/TiltSurface";
import Image from "next/image";

export function HeroRightColumn() {
  return (
    <div className="relative space-y-5 lg:col-span-5">
      <div className="pointer-events-none absolute -inset-10 blur-3xl">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-cyan-400/25" />
        <div className="absolute bottom-6 right-6 h-44 w-44 rounded-full bg-indigo-500/25" />
      </div>

      <div className="relative h-[240px] w-full overflow-hidden rounded-[28px] border border-white/15 bg-white/5 ring-1 ring-white/10 lg:h-[300px]">
        <Image 
          src="/hero-image.webp" 
          alt="Hero representation" 
          fill 
          className="object-cover object-top opacity-90"
          priority
        />
      </div>

      <TiltSurface className="relative" maxTilt={8}>
        <div className="card-shine relative rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.85)] ring-1 ring-white/10 backdrop-blur-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-100">Program snapshot</p>
              <p className="mt-1 text-xs text-slate-200/75">Live readiness across your cohorts</p>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-100 ring-1 ring-emerald-300/25">
              Healthy
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {[
              { k: "Cohort readiness", v: "On track", tone: "emerald" },
              { k: "Skill uplift (avg.)", v: "+32%", tone: "cyan" },
              { k: "NPS (last quarter)", v: "68", tone: "indigo" },
            ].map((row) => (
              <div key={row.k} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span className="text-sm text-slate-100">{row.k}</span>
                <span
                  className={cn(
                    "text-sm font-semibold",
                    row.tone === "emerald" && "text-emerald-100",
                    row.tone === "cyan" && "text-cyan-100",
                    row.tone === "indigo" && "text-indigo-100",
                  )}
                >
                  {row.v}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { label: "Design", value: "96%" },
              { label: "Delivery", value: "92%" },
              { label: "Adoption", value: "88%" },
            ].map((m) => (
              <div key={m.label} className="rounded-2xl border border-white/10 bg-black/10 px-3 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-200/70">{m.label}</p>
                <p className="mt-1 text-lg font-extrabold text-white">{m.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate-200/70">
            Illustrative metrics for demo purposes—replace with live analytics from your LMS.
          </p>
        </div>
      </TiltSurface>
    </div>
  );
}
