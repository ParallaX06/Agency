"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";
import { containerStagger, itemSlideUp } from "@/lib/animations";

const serviceIcon: Record<string, string> = {
  Search: "⌕",
  Megaphone: "◉",
  Target: "◎",
  Sparkles: "✦",
  Globe: "◌",
  Smartphone: "▣",
};

export function Services() {
  return (
    <section id="services" className="bg-bg-secondary px-4 py-20 md:px-8 md:py-24">
      <div className="section-shell">
        <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold text-text-primary md:text-5xl">
          Specialized execution teams for each stage of your growth journey.
        </h2>
        <p className="mt-4 max-w-2xl text-text-secondary">
          Each engagement combines strategic direction, execution ownership, and transparent reporting cadence.
        </p>

        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={itemSlideUp}>
              <Card className="h-full border-border bg-bg-primary p-0">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-border px-6 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-primary">
                      {(index + 1).toString().padStart(2, "0")}
                    </p>
                    <span className="text-lg text-text-tertiary">{serviceIcon[service.icon] ?? "✦"}</span>
                  </div>
                  <div className="px-6 py-5">
                    <h3 className="font-display text-2xl font-semibold text-text-primary">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{service.description}</p>
                  </div>
                  <ul className="mt-auto grid gap-2 border-t border-border px-6 py-4 text-sm text-text-secondary">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-text-primary/90" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
