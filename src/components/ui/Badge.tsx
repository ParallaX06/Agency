import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  variant?: "cyan" | "pink" | "default";
  className?: string;
};

const styles = {
  default: "border-text-primary/10 bg-text-primary/5 text-text-primary",
  cyan: "border-text-primary/10 bg-text-primary/5 text-text-primary",
  pink: "border-red-500/30 bg-red-500/10 text-red-500",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
