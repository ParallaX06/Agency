# AgencyFlux Website

Premium agency website implementation based on your planning documents.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion
- React Hook Form + Zod
- Nodemailer API route

## Quick Start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Environment Variables

Set these in `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://youragency.com

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
SMTP_FROM=noreply@youragency.com
SMTP_TO=contact@youragency.com

NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Implemented Sections

- Sticky glass-style navigation
- Hero with gradient atmosphere and background video hook point
- Services, Process, Portfolio, Testimonials, Team
- CTA contact form with validation
- Contact API endpoint at `/api/contact`
- SEO endpoints: `/robots.txt`, `/sitemap.xml`

## Notes

- Place your hero video at `public/videos/hero-bg.mp4`.
- Current portfolio and team images use external URLs for placeholders.
- `npm run lint` shows non-blocking warnings recommending `next/image` for remote images.
