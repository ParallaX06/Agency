"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { containerStagger, itemSlideUp } from "@/lib/animations";

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-bg-secondary px-4 py-20 md:px-8 md:py-24">
      <div className="section-shell">
        <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold text-text-primary md:text-5xl">
          Case studies built around outcomes, not vanity metrics.
        </h2>

        <motion.div
          className="mt-12 grid gap-5 lg:grid-cols-2"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolio.map((item) => (
            <motion.article key={item.id} variants={itemSlideUp} className="group overflow-hidden rounded-xl border border-border bg-bg-primary">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>

              <div className="space-y-4 border-t border-border p-6">
                <h3 className="font-display text-2xl font-semibold text-text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
                <div className="flex gap-6 text-sm md:gap-8">
                  <p className="text-text-secondary">
                    Traffic <span className="font-semibold text-text-primary">{item.results.traffic}</span>
                  </p>
                  <p className="text-text-secondary">
                    Conversion <span className="font-semibold text-red-500">{item.results.conversion}</span>
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
