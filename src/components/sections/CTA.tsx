"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(1000),
});

type FormValues = z.infer<typeof schema>;

export function CTA() {
  const [serverState, setServerState] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormValues;
        setError(field, { type: "manual", message: issue.message });
      });
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      setServerState("success");
      reset();
      return;
    }

    setServerState("error");
  };

  return (
    <section id="contact" className="px-4 py-20 md:px-8 md:py-24">
      <div className="section-shell rounded-2xl border border-border bg-bg-secondary p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="mt-5 font-display text-3xl font-semibold text-text-primary md:text-5xl">Bring us your goals. We will shape the execution plan.</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Tell us your growth target, timeline, and current bottlenecks. We will return a practical action map.
            </p>
            <div className="mt-6 space-y-3 rounded-xl border border-border bg-bg-primary p-4 text-sm text-text-secondary">
              <p className="font-semibold text-text-primary">What happens next</p>
              <p>1) We review fit and goals.</p>
              <p>2) We schedule a 30-minute discovery call.</p>
              <p>3) You receive a scoped delivery proposal.</p>
            </div>
          </div>

          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input label="Name" placeholder="Your name" error={errors.name?.message} {...register("name")} />
            <Input label="Email" type="email" placeholder="you@company.com" error={errors.email?.message} {...register("email")} />

            <label className="grid gap-2 text-sm text-text-secondary" htmlFor="service">
              Service
              <select
                id="service"
                {...register("service")}
                className="h-12 rounded-lg border border-border bg-bg-tertiary px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-text-primary/40"
              >
                <option value="">Select a service</option>
                <option value="seo">SEO Optimization</option>
                <option value="meta-ads">Meta Ads</option>
                <option value="google-ads">Google Ads</option>
                <option value="social">Social Media</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
              </select>
              {errors.service?.message ? <span className="text-sm text-red-500">{errors.service.message}</span> : null}
            </label>

            <Textarea label="Message" placeholder="Project goals, timeline, and budget range..." error={errors.message?.message} {...register("message")} />

            <Button type="submit" className="w-full" loading={isSubmitting}>
              Send Inquiry
            </Button>

            {serverState === "success" ? <p className="text-sm font-semibold text-text-primary">Message sent successfully.</p> : null}
            {serverState === "error" ? <p className="text-sm font-semibold text-red-500">Something went wrong. Please retry.</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
