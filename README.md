# Portfolio

Personal portfolio built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Editing content

All content (bio, skills, projects, experience, education, links) lives in
[`src/data/site.ts`](src/data/site.ts). The resume is `public/Pranav_Resume.pdf`.

## Commands

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the build locally                   |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages.
