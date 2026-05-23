# Kaustubha Eluri — Portfolio

Cinematic personal portfolio built with Next.js 15, Three.js, and GSAP.

Live at **[kaustubha.vercel.app](https://kaustubha.vercel.app)**

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules |
| Animation | GSAP + ScrollTrigger |
| 3D / Particles | Three.js |
| Contact form | Next.js Server Actions + Nodemailer |
| Deployment | Vercel |

## Sections

- **Hero** — background-blurred video loop, foreground talking-head video, Three.js bokeh particle layer, GSAP entrance animation
- **About** — portrait, bio, skills
- **Experience** — scroll-triggered timeline (SKERI, Evenness, NEU TA, Folio.Works, bimgrafX)
- **Projects** — GSAP horizontal scroll on desktop, stacked on mobile (6 projects)
- **Awards** — Laurel & Scroll 100, Silicon Valley Leadership Legacy, and more, with press links
- **Moments** — 11-photo masonry gallery with hover captions
- **Leadership** — NEURAI, AI/Data Club, APMC, Student Ambassador, Adobe Creative Campus
- **Contact** — server-side email form + social links

## Local Development

```bash
npm install
```

Create `.env.local`:

```
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password
CONTACT_TO=your@gmail.com
```

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve production build
```

## Project Structure

```
src/
  app/
    actions/contact.ts   # Server Action — sends email via nodemailer
    globals.css          # CSS vars, fonts, reset
    layout.tsx
    page.tsx
  components/
    Nav/                 # Fixed nav with mobile hamburger drawer
    VideoIntro/          # Hero with bg + fg video, CinematicLayer
    CinematicLayer/      # Three.js bokeh particles + mouse parallax
    About/
    Experience/
    Projects/            # GSAP horizontal scroll (desktop)
    Awards/
    Moments/             # Photo gallery
    Leadership/
    Contact/
    ContactForm/
public/
  hero.mp4
  portrait.jpg
  moments/               # Gallery photos
```

## Environment Variables

| Variable | Description |
|---|---|
| `SMTP_USER` | Gmail address used to send contact form emails |
| `SMTP_PASS` | Gmail App Password (not your account password) |
| `CONTACT_TO` | Email address to receive contact form submissions |

Set the same three variables in the Vercel dashboard under **Settings → Environment Variables**.
