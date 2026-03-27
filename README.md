# Personal Portfolio — Gubba Yasodhar

Production-grade portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech

- Next.js + React
- TypeScript (strict)
- Tailwind CSS
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Customize content

Edit:

- `src/content/site.ts` (name, tagline, links, email)
- `src/content/skills.ts`
- `src/content/projects.ts`

## Resume

Replace `public/resume.pdf` with your real resume PDF (same filename) to keep the “Download Resume” button working.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push the repo to GitHub.
2. In Vercel, click **New Project** → import your repo.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `next build` (default)
5. Output: managed by Next.js (default)
6. Deploy.

### Post-deploy checklist

- Update `metadataBase` in `src/app/layout.tsx` to your real domain (e.g. `https://yourname.vercel.app` or custom domain).

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# portfolio
# portfolio
