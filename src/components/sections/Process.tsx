"use client";

import { motion } from "framer-motion";
import { containerStagger, itemSlideUp } from "@/lib/animations";

const steps = [
  { id: "01", title: "Discovery", text: "We audit your funnel, channels, offer, and analytics depth." },
  { id: "02", title: "Positioning", text: "We sharpen your category narrative and conversion message." },
  { id: "03", title: "Execution", text: "Creative, performance, and product improvements run in weekly sprints." },
  { id: "04", title: "Scale", text: "We double-down on proven growth loops with clear forecast targets." },
];

export function Process() {
  return (
    <section id="process" className="bg-bg-primary px-4 py-20 md:px-8 md:py-24">
      <div className="section-shell">
        <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold text-text-primary md:text-5xl">A disciplined operating model, built for measurable progress.</h2>

        <motion.div
          className="relative mt-12 grid gap-4 lg:grid-cols-4"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => (
            <motion.article
              key={step.id}
              variants={itemSlideUp}
              className="rounded-xl border border-border bg-bg-secondary p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-primary">Step {step.id}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-text-primary">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{step.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
