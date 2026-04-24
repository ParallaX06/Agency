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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg-primary/90 backdrop-blur-sm">
      <nav className="section-shell flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3 font-display text-xl font-semibold tracking-tight text-text-primary">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-text-primary/70 text-xs text-text-primary">
            AF
          </span>
          1ne Click Media
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
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
          className="rounded-md border border-border px-3 py-2 text-sm text-text-primary md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-border bg-bg-secondary px-4 py-4 md:hidden"
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
