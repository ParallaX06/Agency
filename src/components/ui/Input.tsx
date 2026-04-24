import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <label className="grid gap-2 text-sm text-text-secondary" htmlFor={inputId}>
      {label}
      <input
        id={inputId}
        className={cn(
          "h-12 rounded-lg border border-border bg-bg-tertiary px-4 text-text-primary placeholder:text-text-tertiary transition focus:outline-none focus:ring-2 focus:ring-text-primary/40",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error ? <span className="text-sm text-red-500">{error}</span> : null}
    </label>
  );
}
