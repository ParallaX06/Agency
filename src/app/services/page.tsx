import Link from "next/link";
import { Footer } from "@/components/common/Footer";
import { Navigation } from "@/components/common/Navigation";

const coreServices = [
  {
    href: "/services/seo",
    title: "SEO Optimization",
    summary: "Technical SEO systems that increase qualified organic demand and lower blended acquisition cost.",
    bullets: ["Technical audits", "Topic clusters", "Authority growth"],
  },
  {
    href: "/services/meta-ads",
    title: "Meta Ads Management",
    summary: "Creative-led acquisition programs across Facebook and Instagram focused on scalable CAC efficiency.",
    bullets: ["Creative testing", "Offer strategy", "Retargeting loops"],
  },
  {
    href: "/services/google-ads",
    title: "Google Ads",
    summary: "Intent-focused search programs built around conversion quality, pipeline velocity, and measurable ROI.",
    bullets: ["Keyword architecture", "Bid strategy", "Conversion tracking"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <main className="px-4 py-16 md:px-8 md:py-20">
        <section className="section-shell rounded-2xl border border-border bg-bg-secondary p-6 md:p-10">
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-text-primary md:text-5xl">
            Specialist service lines built for sustainable growth.
          </h1>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Choose the operating lane you need right now. Each service can run independently or as part of a unified growth system.
          </p>
        </section>

        <section className="section-shell mt-8 grid gap-4 lg:grid-cols-3">
          {coreServices.map((service) => (
            <article key={service.href} className="rounded-xl border border-border bg-bg-secondary p-6">
              <h2 className="font-display text-2xl font-semibold text-text-primary">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{service.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-text-secondary">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-text-primary" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-semibold text-text-primary transition hover:border-text-primary"
              >
                View Service
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
