"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-bg-primary px-4 py-20 md:px-8 md:py-24">
      <div className="section-shell">
        <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold text-text-primary md:text-5xl">Trusted by teams that care about performance and clarity.</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="rounded-xl border border-border bg-bg-secondary p-6 transition hover:-translate-y-1 hover:border-text-primary/70"
            >
              <p className="text-lg text-text-primary">&ldquo;</p>
              <p className="mt-3 min-h-28 text-sm leading-relaxed text-text-secondary">{item.quote}</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-text-primary">{item.author}</p>
                <p className="text-sm text-text-tertiary">{item.company}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
