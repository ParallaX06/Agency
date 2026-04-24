import { Footer } from "@/components/common/Footer";
import { Navigation } from "@/components/common/Navigation";

const principles = [
  "Clarity before activity",
  "Performance over vanity",
  "Systems over one-off campaigns",
  "Weekly execution accountability",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <main className="px-4 py-16 md:px-8 md:py-20">
        <section className="section-shell rounded-2xl border border-border bg-bg-secondary p-6 md:p-10">
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-text-primary md:text-5xl">
            We are an independent growth partner for focused teams.
          </h1>
          <p className="mt-4 max-w-3xl text-text-secondary">
            1ne Click Media combines strategy, creative, and performance execution in one team so businesses can move faster without sacrificing quality.
          </p>
        </section>

        <section className="section-shell mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-xl border border-border bg-bg-secondary p-6">
            <h2 className="font-display text-2xl font-semibold text-text-primary">How we work</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Every engagement starts with diagnosis, then moves into focused execution sprints with transparent reporting and prioritized decisions.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Our model is intentionally lean: fewer meetings, clearer owners, faster iteration, and outcomes your leadership team can trust.
            </p>
          </article>
          <article className="rounded-xl border border-border bg-bg-secondary p-6">
            <h2 className="font-display text-2xl font-semibold text-text-primary">Operating Principles</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              {principles.map((principle) => (
                <li key={principle} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-text-primary" aria-hidden />
                  {principle}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
