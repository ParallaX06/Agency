"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cardHover } from "@/lib/animations";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <motion.article
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className={cn(
        "rounded-xl border border-border bg-bg-secondary p-6 shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all",
        className
      )}
    >
      {children}
    </motion.article>
  );
}
