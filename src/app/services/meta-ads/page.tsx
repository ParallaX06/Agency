import Link from "next/link";
import { Footer } from "@/components/common/Footer";
import { Navigation } from "@/components/common/Navigation";

export default function MetaAdsServicePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <main className="px-4 py-16 md:px-8 md:py-20">
        <section className="section-shell rounded-2xl border border-border bg-bg-secondary p-6 md:p-10">
          <h1 className="mt-5 font-display text-4xl font-semibold text-text-primary md:text-5xl">Meta Ads Management</h1>
          <p className="mt-4 max-w-3xl text-text-secondary">
            Paid social systems designed for clear messaging, stable CAC, and predictable pipeline from Facebook and Instagram.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-border bg-bg-primary p-5">
              <h2 className="font-semibold text-text-primary">Creative Lab</h2>
              <p className="mt-2 text-sm text-text-secondary">Weekly concept testing and messaging iteration built around signal quality.</p>
            </article>
            <article className="rounded-xl border border-border bg-bg-primary p-5">
              <h2 className="font-semibold text-text-primary">Audience Design</h2>
              <p className="mt-2 text-sm text-text-secondary">Full-funnel segmentation from prospecting to retention sequences.</p>
            </article>
            <article className="rounded-xl border border-border bg-bg-primary p-5">
              <h2 className="font-semibold text-text-primary">Performance Controls</h2>
              <p className="mt-2 text-sm text-text-secondary">Budget pacing, attribution checks, and scale rules to protect margin.</p>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-md border border-text-primary bg-text-primary px-5 py-2.5 text-sm font-semibold text-bg-primary">
              Plan Meta Campaigns
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
