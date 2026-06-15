# Sourav Rawat — Portfolio

A fast, production-ready personal portfolio. Dark, minimal, fully responsive.

**Stack:** Vite + React 18 + TypeScript · Tailwind CSS v4 · Framer Motion · lucide-react

---

## Quick start

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Add your photo

The hero shows an **“SR” monogram fallback** until you add a photo. To use your
real picture, drop a square-ish portrait here:

```
public/profile.jpg
```

A portrait around **800×1000px** (4:5) works best. No code change needed — it’s
loaded from `/profile.jpg` and the layout falls back gracefully if it’s missing.

## Edit your content

Everything on the page comes from **one file**:

```
src/data/profile.ts
```

Update the summary, skills, experience, projects, open-source, and links there —
every section re-renders automatically. Nav links and social URLs live in the
same file.

> **Privacy note.** Client / partner brand names are intentionally generalized
> (e.g. *“tier-1 US sports & entertainment streaming platforms”*) rather than
> named. Employer names and impact are kept. The public résumé matches this —
> no phone number or personal email is exposed; recruiters reach out via
> LinkedIn. Keep this in mind if you edit the content.

## Résumé & social card

The downloadable résumé (`public/resume.pdf`) and the social share image
(`public/og-image.png`) are **generated** from anonymized templates in `scripts/`
using your local Chrome — no extra dependencies:

```bash
npm run resume:pdf
```

- Résumé template: `scripts/resume-template.html`
- OG image template: `scripts/og-template.html`

Edit the templates and re-run the command to regenerate both. (You only need to
run this if you change those templates; the generated files are already committed
in `public/`.)

## Verify the open-source links

Before sharing, confirm the two repo URLs in `src/data/profile.ts` resolve:

- `https://github.com/souravnoobcoder/roku-focus-list`
- `https://github.com/souravnoobcoder/adb-dashboard`

If a repo name differs, update its `href` there.

## Deploy to Vercel

This repo is Vercel-ready (`vercel.json` is included).

**Option A — Dashboard**
1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Framework preset is auto-detected as **Vite**. Build command `npm run build`,
   output directory `dist`. Click **Deploy**.

**Option B — CLI**
```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

### Live URL

Deployed at <https://portfolio-gilt-chi-58.vercel.app>. The canonical / OG /
Twitter tags in `index.html`, plus `public/robots.txt` and `public/sitemap.xml`,
point at this domain. If you later attach a custom domain, update those spots so
SEO and social previews resolve to it.

## Notes

- `npm audit` reports advisories in **esbuild**, a build-time-only dependency of
  Vite. It is not part of the deployed static output and has no runtime impact;
  the suggested `--force` fix upgrades Vite to a major version. Left on stable
  Vite 6 intentionally.
- Animations respect `prefers-reduced-motion`.

## Project structure

```
public/            static assets (favicon, resume.pdf, og-image.png, profile.jpg)
scripts/           résumé + OG image generators (headless Chrome)
src/
  data/profile.ts  ← all content lives here
  components/       sections (Hero, About, Skills, Experience, …)
    ui/             shared primitives (Section, Reveal, Avatar, …)
  lib/cn.ts         classname helper
  index.css         Tailwind v4 theme + base styles
  App.tsx           page composition
```
