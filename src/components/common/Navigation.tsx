"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4 md:px-6">
      <nav className="section-shell mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-[#D8B4FE]/20 bg-[#05000A]/70 px-4 shadow-[0_18px_45px_rgba(21,8,40,0.45)] backdrop-blur-2xl supports-[backdrop-filter]:bg-[#05000A]/60 md:h-18 md:px-6">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-semibold tracking-tight text-text-primary md:text-xl">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#D8B4FE]/35 text-[10px] text-text-primary md:h-8 md:w-8 md:text-xs">
            AF
          </span>
          1ne Click Media
        </Link>

        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm font-medium text-text-secondary transition hover:text-text-primary">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="/contact" aria-label="Start a project with 1ne Click Media">
            <Button size="sm">Start A Project</Button>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full border border-[#D8B4FE]/20 bg-white/5 px-4 py-2 text-sm text-text-primary backdrop-blur-md md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mx-auto mt-3 max-w-6xl rounded-3xl border border-[#D8B4FE]/20 bg-[#0A0014]/90 px-4 py-4 shadow-[0_18px_45px_rgba(21,8,40,0.35)] backdrop-blur-2xl md:hidden"
        >
          <ul className="grid gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="block py-1 text-sm text-text-secondary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ) : null}
    </header>
  );
}
