# CLAUDE.md - AI Assistant Context

This file provides context for Claude Code when working on this project.

## Project Overview

Personal portfolio website for Anthony Chen (anthonyzchen.com). Built with React, Vite, and Tailwind CSS, featuring GSAP animations and smooth scrolling.

## Quick Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── TechBadge.jsx    # Technology pill/badge
│   │   ├── ProjectCard.jsx  # Project display card
│   │   ├── ExperienceCard.jsx # Work experience card
│   │   └── index.js         # Barrel export
│   ├── About/
│   │   ├── Projects.jsx     # Projects section with ScrollTrigger
│   │   ├── Experience.jsx   # Work experience list
│   │   └── animations.jsx   # ScrollTrigger animations
│   ├── Hero/                # Full-screen intro section
│   ├── Navbar/              # Navigation with hamburger menu
│   ├── Footer/              # Social links and contact
│   ├── Preloader/           # Loading animation
│   └── utils.jsx            # Shared animation utilities
├── data/
│   ├── projects.json        # Project data (edit here to add/update projects)
│   └── experience.json      # Work experience data
├── pages/
│   ├── Home.jsx             # Main page (Hero + Projects)
│   ├── ExperienceTimeline.jsx # Horizontal scroll experience timeline
│   └── PageLayout.jsx       # Layout wrapper
├── assets/
│   ├── images/              # Project covers, backgrounds
│   └── counterData.jsx      # Preloader animation data
└── App.jsx                  # React Router configuration
```

## Key Technologies

- **React 18** - UI framework
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Styling
- **GSAP 3** - Animations (with ScrollTrigger)
- **Lenis** - Smooth scrolling
- **React Router 6** - Routing

## Color Palette (tailwind.config.js)

| Name | Hex | Usage |
|------|-----|-------|
| beige | #E2D7BB | Primary background |
| brown | #564E41 | Text and accents |
| dark-beige | #DACEAB | Hover states |
| transparent-beige | #E2D7BB9A | Overlays |

## Animation Timing

- **Preloader duration**: ~3 seconds
- **Hero text delay**: 3s (after preloader)
- **Navbar entrance**: 3.5s delay

## Adding New Content

### New Project
1. Add image to `src/assets/images/`
2. Add entry to `src/data/projects.json`
3. Import image in `src/components/About/Projects.jsx` and add to `projectImages` map

### New Experience
1. Add entry to `src/data/experience.json` with required fields:
   - `id`, `title`, `employment`, `company`, `timeframe`, `year`
   - `description`, `shortDescription`, `link`, `technologies`
2. Components auto-render from data (Experience.jsx and ExperienceTimeline.jsx)

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home.jsx | Hero section + Projects |
| `/experience` | ExperienceTimeline.jsx | Horizontal scroll timeline |
| `/projects` | Projects.jsx | Projects with ScrollTrigger pinning |

## Common Issues

- **Animations not triggering**: Check GSAP ScrollTrigger registration in App.jsx
- **Smooth scroll issues**: Lenis integration in PageLayout.jsx
- **Menu toggle broken**: Check useState in Navbar.jsx

## Deployment

Automated via GitHub Actions on push to main. Deploys to GitHub Pages with custom domain (anthonyzchen.com).
