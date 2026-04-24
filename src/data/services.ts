import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "seo",
    title: "SEO Optimization",
    description: "Technical SEO, content strategy, and authority building to grow rankings and revenue.",
    icon: "Search",
    features: ["Technical audits", "On-page SEO", "Link velocity strategy"],
  },
  {
    id: "meta-ads",
    title: "Meta Ads Management",
    description: "Creative-led Facebook and Instagram funnels optimized for scale and CAC efficiency.",
    icon: "Megaphone",
    features: ["Creative testing", "Funnel optimization", "Retargeting"],
  },
  {
    id: "google-ads",
    title: "Google Ads",
    description: "High-intent search and performance campaigns built around measurable business outcomes.",
    icon: "Target",
    features: ["Keyword architecture", "Bid strategy", "Conversion tracking"],
  },
  {
    id: "social",
    title: "Social Media Marketing",
    description: "Brand storytelling and social growth systems across short-form, long-form, and community.",
    icon: "Sparkles",
    features: ["Content systems", "Community loops", "Creator collabs"],
  },
  {
    id: "web",
    title: "Web Development",
    description: "Fast, conversion-focused websites engineered for trust, clarity, and performance.",
    icon: "Globe",
    features: ["UX architecture", "Performance", "CMS workflows"],
  },
  {
    id: "app",
    title: "App Development",
    description: "Product-focused iOS and Android experiences from MVP to polished launch.",
    icon: "Smartphone",
    features: ["Rapid prototyping", "Cross-platform", "Analytics instrumentation"],
  },
];
