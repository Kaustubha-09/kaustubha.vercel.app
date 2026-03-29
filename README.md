# Kaustubha Eluri — Portfolio

Personal portfolio of Kaustubha Eluri, Research Software Engineer and AI/ML Systems Engineer.
Live at **[kaustubha-09.github.io](https://kaustubha-09.github.io)**

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Routing | React Router v7 |
| Theme | next-themes (dark / light) |
| Icons | Lucide React |
| UI primitives | Radix UI (Card, Badge, etc.) |
| Fonts | Bricolage Grotesque + IBM Plex Mono (Google Fonts) |
| Deployment | GitHub Pages via GitHub Actions |

## Design System

- **Accent** — Electric teal `#00D4AA`
- **Dark background** — Deep slate `#0F1923`
- **Warm white** — `#F0EDE6`
- **Display font** — Bricolage Grotesque (headings, weight 200–900, optical range 12–96)
- **Mono font** — IBM Plex Mono (section eyebrows, code chips, labels)
- **Motion** — Framer Motion `whileInView`, `prefers-reduced-motion` respected
- **Noise texture** — Subtle SVG `feTurbulence` overlay (2% opacity)

## Sections

| # | Section | File |
|---|---|---|
| 01 | About | `About.tsx` |
| 02 | Experience | `Experience.tsx` |
| 03 | Projects | `Projects.tsx` |
| 04 | Education | `Education.tsx` |
| 05 | Skills | `Skills.tsx` |
| 06 | Leadership | `Leadership.tsx` |
| 07 | Certifications | `Certifications.tsx` |
| 08 | Contact | `Contact.tsx` |

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ui/            # Radix-based primitives (Card, Badge…)
│   │   ├── figma/         # ImageWithFallback
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Leadership.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── ThemeToggle.tsx
│   ├── pages/
│   │   └── Home.tsx
│   └── routes.ts
└── styles/
    ├── index.css      # Google Fonts import
    ├── theme.css      # CSS custom properties + design tokens
    └── tailwind.css
public/
├── assets/
│   ├── experience/    # Company logos
│   ├── education/     # University logos
│   ├── photos/        # Team and project images
│   └── personal/      # Profile images
└── resume.pdf
```

## Local Development

```bash
git clone https://github.com/Kaustubha-09/Kaustubha-09.github.io.git
cd Kaustubha-09.github.io
npm install
npm run dev          # http://localhost:5173
npm run build        # production build → dist/
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the Vite app and deploys `dist/` to GitHub Pages automatically.

## Content Updates

| What | Where |
|---|---|
| Jobs / roles | `src/app/components/Experience.tsx` → `experiences` array |
| Projects | `src/app/components/Projects.tsx` → `projects` array |
| Skills | `src/app/components/Skills.tsx` → `skillCategories` array |
| Certifications | `src/app/components/Certifications.tsx` → `certifications` array |
| Leadership | `src/app/components/Leadership.tsx` → `leadership` array |
| Hero copy | `src/app/components/Hero.tsx` |
| Resume PDF | `public/resume.pdf` (replace file) |

## Author

**Kaustubha Venkata Eluri** · U.S. Citizen
[kaustubha-09.github.io](https://kaustubha-09.github.io) · [linkedin.com/in/kaustubha-ve](https://linkedin.com/in/kaustubha-ve) · kaustubha.ev@gmail.com
