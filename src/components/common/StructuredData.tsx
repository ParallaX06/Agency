export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "1ne Click Media",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    description:
      "Full-service digital agency specializing in SEO, ads, social, web development, and app development.",
    sameAs: ["https://www.linkedin.com", "https://x.com"],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
