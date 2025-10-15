# HotSpringMaps — Minimal Next.js + Tailwind Starter

A modern, accessible starter for HotSpringMaps.com with App Router, TailwindCSS, brand colors, routing, and a waitlist API route. Ready for Vercel.

## 1) Getting Started

```bash
# Install deps
pnpm i   # or: npm i  /  yarn

# Dev
pnpm dev # http://localhost:3000
```

## 2) Files to Notice

- `app/page.tsx` — Homepage with CTA + waitlist
- `app/(routes)/explore/page.tsx` — Map placeholder
- `app/(routes)/community/page.tsx` — Community placeholder
- `components/Header.tsx`, `components/Footer.tsx`
- `app/api/waitlist/route.ts` — Demo POST endpoint
- `app/layout.tsx` — Global metadata, fonts, shell
- `app/globals.css` + `tailwind.config.ts` — Styling and brand colors

## 3) Deploy to Vercel

1. Push to GitHub (new repo).
2. Create a new Vercel Project → Import the repo.
3. Use default build settings (`next build`). Click **Deploy**.

## 4) Next Steps

- Integrate Mapbox in `/explore`.
- Replace waitlist API with MailerLite/ConvertKit.
- Add Supabase Auth, Profiles, Reviews, Check-ins.
- Add SEO schema and sitemap once content exists.

---

© HotSpringMaps.com
