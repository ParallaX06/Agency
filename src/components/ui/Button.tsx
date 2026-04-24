"use client";

import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonHover } from "@/lib/animations";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black border border-white hover:bg-gray-100 shadow-[0_0_24px_rgba(255,255,255,0.4)]",
  secondary:
    "bg-white/5 text-white border border-white/10 hover:bg-white/10 backdrop-blur-md shadow-sm",
  ghost: "bg-transparent text-text-secondary border border-transparent hover:bg-white/10 hover:text-text-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  className,
  children,
  variant = "primary",
  size = "md",
  disabled,
  loading,
  ...props
}: ButtonProps) {
  return (
    <motion.div
      variants={buttonHover}
      initial="rest"
      whileHover={disabled ? "rest" : "hover"}
      whileTap={disabled ? "rest" : "tap"}
    >
      <button
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-semibold tracking-[0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:cursor-not-allowed disabled:opacity-60",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-bg-primary/50 border-t-bg-primary" />
            Sending...
          </span>
        ) : (
          children
        )}
      </button>
    </motion.div>
  );
}
