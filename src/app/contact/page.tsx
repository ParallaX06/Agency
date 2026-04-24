import { Footer } from "@/components/common/Footer";
import { Navigation } from "@/components/common/Navigation";
import { CTA } from "@/components/sections/CTA";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <main>
        <section className="px-4 pt-16 md:px-8 md:pt-20">
          <div className="section-shell rounded-2xl border border-border bg-bg-secondary p-6 md:p-10">
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-text-primary md:text-5xl">
              Tell us what you are trying to build next.
            </h1>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Share your goals, constraints, and timeline. We will respond with a practical path forward.
            </p>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
