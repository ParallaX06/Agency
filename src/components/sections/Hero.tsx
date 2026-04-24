"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import DarkVeil from "@/components/ui/DarkVeil";

export function Hero() {

  return (
    <section className="relative isolate overflow-hidden bg-black" id="hero">
      {/* Interactive DarkVeil Background */}
      <div className="absolute inset-0 -z-40">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0.4}
          speed={0.2}
          scanlineFrequency={100}
          warpAmount={1.5}
        />
      </div>

      <motion.div
        className="pointer-events-none absolute -bottom-[40%] left-0 right-0 -z-20 h-[100%] w-full rounded-[100%] bg-gradient-to-tr from-white/[0.03] via-white/[0.05] to-transparent blur-[100px] md:-bottom-[60%] md:h-[120%] md:blur-[150px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Thin glowing arc line */}
      <motion.div 
        className="pointer-events-none absolute -bottom-[30%] -left-[10%] right-0 -z-10 h-[80%] w-[120%] rounded-[100%] border-t-[1.5px] border-t-white/[0.15] bg-transparent blur-[1px] md:-bottom-[20%] md:h-[90%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <div className="section-shell grid min-h-[calc(100svh-5rem)] items-center gap-12 px-4 py-24 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 max-w-3xl font-display text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-[4.5rem]"
          >
            Professional digital systems that turn attention into qualified revenue.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.55 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
          >
            We combine strategic positioning, demand generation, and high-performance web execution into one operating team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
          </motion.div>

        </div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.7, type: "spring", stiffness: 40 }}
            className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_50px_rgba(255,255,255,0.03)] backdrop-blur-xl"
        >
<div className="pointer-events-none absolute -left-1/2 -top-1/2 h-full w-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
          
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Live Pipeline Snapshot
          </p>
          <div className="relative mt-6 space-y-4">
            <div className="rounded-xl border border-white/5 bg-white/[0.05] p-4">
              <p className="text-xs text-white/50">Current Focus</p>
              <p className="mt-1 text-sm font-semibold text-white/90">B2B Growth + Positioning Sprint</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/5 bg-white/[0.05] p-4">
                <p className="text-xs text-white/50">Lead Quality</p>
                <p className="mt-1 text-xl font-semibold text-white">+31%</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.05] p-4">
                <p className="text-xs text-white/50">CAC Shift</p>
                <p className="mt-1 text-xl font-semibold text-emerald-400">-18%</p>
              </div>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.05] p-4">
              <p className="text-xs text-white/50">Delivery Stack</p>
              <p className="mt-1 text-sm text-white/60">SEO Systems • Paid Media • Creative Ops • CRO Engineering</p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
