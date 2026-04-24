import Link from "next/link";
import { Footer } from "@/components/common/Footer";
import { Navigation } from "@/components/common/Navigation";

export default function GoogleAdsServicePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <main className="px-4 py-16 md:px-8 md:py-20">
        <section className="section-shell rounded-2xl border border-border bg-bg-secondary p-6 md:p-10">
          <h1 className="mt-5 font-display text-4xl font-semibold text-text-primary md:text-5xl">Google Ads</h1>
          <p className="mt-4 max-w-3xl text-text-secondary">
            Search and performance campaigns built around high-intent demand capture and conversion quality.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-border bg-bg-primary p-5">
              <h2 className="font-semibold text-text-primary">Intent Mapping</h2>
              <p className="mt-2 text-sm text-text-secondary">Granular keyword structures aligned with each stage of buyer readiness.</p>
            </article>
            <article className="rounded-xl border border-border bg-bg-primary p-5">
              <h2 className="font-semibold text-text-primary">Landing Alignment</h2>
              <p className="mt-2 text-sm text-text-secondary">Ad-to-page message matching that improves quality score and close rates.</p>
            </article>
            <article className="rounded-xl border border-border bg-bg-primary p-5">
              <h2 className="font-semibold text-text-primary">Revenue Tracking</h2>
              <p className="mt-2 text-sm text-text-secondary">End-to-end measurement tied to qualified pipeline instead of vanity clicks.</p>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-md border border-text-primary bg-text-primary px-5 py-2.5 text-sm font-semibold text-bg-primary">
              Launch Google Ads Strategy
            </Link>
            <Link href="/services" className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-text-primary">
              Back to Services
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
