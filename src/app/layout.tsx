import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StructuredData } from "@/components/common/StructuredData";
import "./globals.css";

const inter = Inter({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "1ne Click Media | Premium Digital Growth Agency",
  description:
    "Full-service digital agency for SEO, Meta Ads, Google Ads, Social Media, Web Development, and App Development.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "1ne Click Media | Premium Digital Growth Agency",
    description:
      "High-converting growth systems with modern design and performance-focused execution.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    siteName: "1ne Click Media",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1ne Click Media",
    description: "Premium growth agency for ambitious brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-bg-primary font-body text-text-primary">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
