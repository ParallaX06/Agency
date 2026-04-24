import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({ label, error, className, id, ...props }: TextareaProps) {
  const textareaId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <label className="grid gap-2 text-sm text-text-secondary" htmlFor={textareaId}>
      {label}
      <textarea
        id={textareaId}
        className={cn(
          "min-h-36 rounded-lg border border-border bg-bg-tertiary px-4 py-3 text-text-primary placeholder:text-text-tertiary transition focus:outline-none focus:ring-2 focus:ring-text-primary/40",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error ? <span className="text-sm text-red-500">{error}</span> : null}
    </label>
  );
}
