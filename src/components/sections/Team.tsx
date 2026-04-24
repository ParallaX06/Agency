"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { team } from "@/data/team";

export function Team() {
  return (
    <section id="team" className="bg-bg-secondary px-4 py-20 md:px-8 md:py-24">
      <div className="section-shell">
        <h2 className="mt-5 font-display text-3xl font-semibold text-text-primary md:text-5xl">Operators and specialists behind every engagement.</h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="group rounded-xl border border-border bg-bg-primary p-5"
            >
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-2 border-border transition group-hover:border-text-primary">
                <Image src={member.image} alt={member.name} fill unoptimized sizes="160px" className="h-full w-full object-cover grayscale transition group-hover:grayscale-0" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-text-primary">{member.name}</h3>
              <p className="text-sm font-medium text-text-primary">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{member.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
