# CLAUDE.md — salehbiz

## What This Project Is
Personal freelance portfolio & services website for **SALEHBIZ** — a solo founder offering websites, AI agents, e-commerce, voice agents, CRM systems, and automations. The site is client-facing and professional.

## Tech Stack
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Routing:** React Router DOM v7
- **3D:** Three.js
- **Styling:** Plain CSS files per component (no Tailwind, no CSS-in-JS)
- **Fonts:** Inter (Google Fonts, loaded in index.html)

## Project Structure
```
salehbiz/
├── src/
│   ├── App.tsx                  # Router — defines all routes
│   ├── main.tsx                 # React entry point
│   ├── ElevonLanding.tsx        # Main homepage (largest file ~42KB)
│   ├── ElevonHero.tsx           # Hero section with video background
│   ├── ProjectsPage.tsx         # Portfolio grid page (/project)
│   ├── ProjectDetailPage.tsx    # Individual project detail (/project/:slug)
│   ├── ContactPage.tsx          # Contact form page (/contact)
│   ├── AriaPage.tsx             # AI avatar page (/aria)
│   ├── data/
│   │   └── projects.ts          # All project data (typed, single source of truth)
│   ├── components/
│   │   ├── RevealText.tsx       # Animated text reveal component
│   │   ├── ElevenLabsWidget.tsx # ElevenLabs voice widget wrapper
│   │   └── TalkingHeadAvatar.tsx # 3D talking avatar (Three.js + TalkingHead lib)
│   ├── lib/
│   │   └── TalkingHead/         # Third-party TalkingHead library (DO NOT EDIT)
│   └── [ComponentName].css      # Each component has a matching CSS file
├── public/
│   ├── hero-background.mp4      # Hero video (large file)
│   ├── portfolio-*.png          # Portfolio images
│   └── images/                  # General images
└── index.html                   # Loads Inter font, mounts React app
```

## Routes
| Path | Component |
|------|-----------|
| `/` | `ElevonLanding` (homepage) |
| `/project` | `ProjectsPage` |
| `/project/:slug` | `ProjectDetailPage` |
| `/contact` | `ContactPage` |
| `/aria` | `AriaPage` |

## Key Conventions
- **CSS:** One `.css` file per component, named identically (e.g. `ElevonLanding.tsx` → `ElevonLanding.css`). No shared utility classes.
- **Project data:** All portfolio projects are defined in `src/data/projects.ts` as a typed `Project[]` array. Add new projects there only.
- **Navbar:** Appears in multiple components individually (not a shared component yet). Links: About (`/#about`), Projects (`/project`), Contact (`/contact`).
- **Animations:** Scroll-based reveals use `IntersectionObserver`. Text reveals use the `RevealText` component.

## Do NOT Touch
- `src/lib/TalkingHead/` — third-party library, do not modify
- `public/hero-background.mp4` — large asset, do not move or rename

## Running the Project
```bash
# Frontend dev server
npm run dev          # runs on http://localhost:5173
```

## Common Tasks — Where to Work
| Task | File(s) to edit |
|------|----------------|
| Edit homepage sections | `src/ElevonLanding.tsx` + `src/ElevonLanding.css` |
| Edit hero text/video | `src/ElevonHero.tsx` + `src/ElevonHero.css` |
| Add/edit a portfolio project | `src/data/projects.ts` |
| Edit project detail layout | `src/ProjectDetailPage.tsx` + `src/ProjectDetailPage.css` |
| Edit contact form | `src/ContactPage.tsx` + `src/ContactPage.css` |
| Edit Aria AI avatar | `src/AriaPage.tsx` + `src/AriaPage.css` |
| Add a new route | `src/App.tsx` |
