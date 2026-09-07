# Alberto Díez Sánchez — Portfolio

Static personal site with **two distinct visual designs** and identical CV content.

Live project site (after GitHub Pages is enabled):

**https://adiezsanchez.github.io/portfolio/**

| Version | Path | Design |
| --- | --- | --- |
| Chooser | `/` | Compare both designs |
| A | `/v1` | Scientific dark — microscopy / data, teal–cyan |
| C | `/v3` | Bold modern — card grids and snappy reveals |

Deployed URLs:

- https://adiezsanchez.github.io/portfolio/
- https://adiezsanchez.github.io/portfolio/v1
- https://adiezsanchez.github.io/portfolio/v3

`/v2` is removed and redirects to the chooser.

Built with Vite + React. No backend, no secrets.

## Local development

Requires Node.js 20+ (22 is fine).

```bash
npm install
npm run dev
```

The Vite `base` is `/portfolio/` so the app is served at:

**http://localhost:5173/portfolio/**

Open that URL (not the bare `/`). The root of the app is the design chooser.

## Production build

```bash
npm run build
```

Output: `dist/` (GitHub Pages ready). The build also writes `dist/404.html` so client-side routes (`/v1`, `/v3`) work on GitHub Pages.

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
