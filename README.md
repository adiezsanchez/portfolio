# Alberto Díez Sánchez — Portfolio

Static personal site: a **Bold Modern** layout with a **Dark Mode** toggle that applies the former scientific teal/cyan palette.

Live project site (after GitHub Pages is enabled):

**https://adiezsanchez.github.io/portfolio/**

The site root (`/`) is the portfolio. There is no design chooser. Older paths `/v1`, `/v2`, and `/v3` redirect to `/`.

Dark Mode is available in the top nav (moon icon). The preference is stored in `localStorage` (`portfolio-theme`). Light mode uses orange accents on a cream background; dark mode uses teal/cyan accents on a deep navy background.

Built with Vite + React. No backend, no secrets.

## Local development

Requires Node.js 20+ (22 is fine).

```bash
npm install
npm run dev
```

The Vite `base` is `/portfolio/` so the app is served at:

**http://localhost:5173/portfolio/**

Open that URL (not the bare `/`).

## Production build

```bash
npm run build
```

Output: `dist/` (GitHub Pages ready). The build also writes `dist/404.html` so client-side routes still resolve on GitHub Pages (including the `/v1`–`/v3` redirects).

Preview the production bundle:

```bash
npm run preview
```

Then open **http://localhost:4173/portfolio/**.

## Deploy to GitHub Pages (`adiezsanchez`)

This repo is configured as a **project site** at `https://adiezsanchez.github.io/portfolio/` (`base: '/portfolio/'`).

1. In the GitHub repo: **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Merge to `main` (or run the **Deploy GitHub Pages** workflow manually).
4. The workflow in `.github/workflows/pages.yml` builds with `npm ci && npm run build` and publishes `dist/`.

SPA routing uses `404.html` as a fallback to `index.html`. A `.nojekyll` file is included so GitHub Pages does not process the build with Jekyll.

If Pages is still pointing at a branch/`/docs` folder, switch it to GitHub Actions as above.

## Content

Identity, roles, education, projects, publications, and skills are taken from the provided CV text. Publication titles and DOIs are the official records for those same papers. The CEMIR / St. Olav’s role is dated **Prior to 2024** (no invented months).

Hero and Contact social pills include brand icons for LinkedIn, GitHub, NTNU (official mark from [ntnu.edu](https://www.ntnu.edu/)), and ORCID (green iD icon from [orcid.org](https://orcid.org/)).
