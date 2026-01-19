# Anthony Chen Portfolio - anthonyzchen.com

Personal portfolio website (3rd iteration) for Anthony Chen, a CS & Finance student at Northeastern University.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18.3.1 |
| Build Tool | Vite 5.4.0 |
| Styling | Tailwind CSS 3.4.8 |
| Animation | GSAP 3.12.5 + @gsap/react |
| Smooth Scroll | Lenis (@studio-freight/lenis) |
| Text Animation | SplitTextJS |
| Routing | React Router DOM 6.26.0 |
| Icons | FontAwesome 6.x (via CDN) |
| Font | KoHo (Google Fonts) |
| Deployment | GitHub Pages (automated via Actions) |
| Domain | anthonyzchen.com (CNAME configured) |

## Project Structure

```
src/
├── components/
│   ├── About/
│   │   ├── Projects.jsx      # Project cards with scroll-pinning animation
│   │   ├── Experience.jsx    # Work experience timeline
│   │   └── animations.jsx    # ScrollTrigger-based project animations
│   ├── Hero/
│   │   └── Hero.jsx          # Full-screen intro with staggered text animation
│   ├── Navbar/
│   │   ├── Navbar.jsx        # Fixed nav with hamburger menu
│   │   └── animations.jsx    # Menu open/close animations
│   ├── Footer/
│   │   └── Footer.jsx        # Contact info, socials, site description
│   ├── Preloader/
│   │   ├── Preloader.jsx     # Loading animation with counter
│   │   └── animations.jsx    # Counter, progress bar, exit animations
│   └── utils.jsx             # Shared text animation utilities (enterStaggerTextAnimation, exitStaggerTextAnimation)
├── pages/
│   ├── Home.jsx              # Hero + Projects
│   ├── About.jsx             # Hero + About content (incomplete)
│   └── PageLayout.jsx        # Layout wrapper with Navbar/Footer
├── assets/
│   ├── images/               # Project covers, logo, background
│   └── counterData.jsx       # Preloader counter animation data
├── App.jsx                   # React Router configuration
├── main.jsx                  # Entry point
└── index.css                 # Tailwind directives
```

## Key Design Decisions

### Color Palette (defined in tailwind.config.js)
- `beige`: #E2D7BB (primary background)
- `brown`: #564E41 (text/accent)
- `dark-beige`: #DACEAB (hover states)
- `transparent-beige`: #E2D7BB9A (overlay with transparency)

### Animation Architecture
- **Preloader**: ~3-second sequence with counter, progress bar, welcome text
- **Hero text**: Staggered character-by-character entrance (delayed 3s until preloader completes)
- **Navbar**: Entrance animation delayed 3.5s to sync with preloader exit
- **Projects**: ScrollTrigger-based pinning with snap points
- **Navbar menu**: Hamburger transforms to X, background blur, staggered link entrance
- **Smooth scroll**: Lenis integrated with GSAP ticker for scroll-triggered animations

## Development History & Key Learnings

### Phase 1: Project Setup
- Created with `npm create vite@latest` using React template
- Added Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer`
- Added Prettier with Tailwind plugin: `npm install -D prettier prettier-plugin-tailwindcss`

### Phase 2: Animation Foundation
- Installed GSAP: `npm install gsap`
- Added GSAP React hooks: `npm install @gsap/react`
- Key tutorial: https://www.youtube.com/watch?v=UjuLDdnp_VM

### Phase 3: Preloader Development
- Built progress bar and counter animation
- Key tutorial: https://www.youtube.com/watch?v=i_DFpKZebi8
- Learned useState for animation state management
- Added no-scroll during preloader via body ref

### Phase 4: Navigation & Routing
- Added React Router: `npm i react-router-dom`
- Key fix: Use `<Link>` instead of `<a>` to prevent page refresh on navigation
- Navbar animation tutorials:
  - https://www.youtube.com/watch?v=R_PKABXn4vk
  - https://www.youtube.com/watch?v=l0aI8Ecumy8

### Phase 5: Projects Section & Smooth Scroll
- Added Lenis: `npm i @studio-freight/lenis`
- Implemented ScrollTrigger-based pinning for each project
- Key tutorial: https://www.youtube.com/watch?v=RkmF-9WtgaM

### Phase 6: Text Animations
- Added SplitTextJS: `npm i split-text-js`
- Created reusable stagger text animation utilities
- Key tutorial: https://www.youtube.com/watch?v=sOschfDqXH8

### Phase 7: Experience Section (Experimental)
- Attempted horizontal scroll with SVG path animation
- Explored gsap-trial for DrawSVGPlugin, MotionPathPlugin, GSDevTools
- Note: Full GSAP plugins require $100/year license
- Eventually reverted to simpler approach, moved experience blocks from SVG to div

### Phase 8: Simplification
- Reduced scope to focus on single polished page
- Removed unfinished pages and complex animations
- Current focus: fully functional one-page portfolio

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Deployment

Automated via GitHub Actions (`.github/workflows/static.yml`):
1. Triggers on push to main branch
2. Builds with Node 20
3. Deploys `dist/` folder to GitHub Pages
4. Custom domain configured via CNAME file

## Known Issues & TODOs

### Incomplete Features
- About page (`src/pages/About.jsx`) - only shows placeholder text
- Project detail pages (`/projects/project1`, etc.) not implemented

### Potential Improvements
- Consider adding a contact form
- Add page transition animations between routes
- Lazy load project images for better performance

## Project Data

### Featured Projects (in Projects.jsx)
1. **Fishing Game Addition in Covey.Town** - TypeScript, React, ChakraUI, MongoDB
2. **Determining Bias in the Michelin Guide** - Python, Pandas, ML algorithms
3. **NUFind** - MySQL, Flask, Docker, AppSmith
4. **NURecs** - React, JavaScript, Supabase

### Work Experience (in Experience.jsx)
1. **UKG** (Sept-Dec 2024) - Generative AI Software Developer
2. **BPSI** (June-Dec 2023) - IT Data Integration & Web Developer
3. **Mobileware** (July-Aug 2019) - UI/UX Developer

## Reference Tutorials

| Feature | Tutorial |
|---------|----------|
| Vite + Tailwind Setup | https://www.youtube.com/watch?v=UjuLDdnp_VM |
| Preloader & Progress Bar | https://www.youtube.com/watch?v=i_DFpKZebi8 |
| GSAP + React Integration | https://www.youtube.com/watch?v=R_PKABXn4vk |
| Navbar Animations | https://www.youtube.com/watch?v=l0aI8Ecumy8 |
| ScrollTrigger + Lenis | https://www.youtube.com/watch?v=RkmF-9WtgaM |
| Stagger Text Animation | https://www.youtube.com/watch?v=sOschfDqXH8 |

---

## Commit Log

Detailed changelog documenting every commit to the codebase.

### Initial Setup

#### `89fe14c` - Initial commit
- Repository initialization

#### `d9e2f16` - Create README.md
- Added initial README file

#### `69a2637` - Beginning new website for compatibility
- Started fresh with Vite + React template
- Command: `npm create vite@latest my-project -- --template react`
- Tutorial: https://www.youtube.com/watch?v=UjuLDdnp_VM

#### `3c6ed7f` - Tailwind
- Installed Tailwind CSS with PostCSS and Autoprefixer
- Commands:
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```

#### `70ce7ad` - Create CNAME
- Added CNAME file for custom domain (anthonyzchen.com)

#### `b0f352f` - Tailwind + Prettier
- Added Prettier with Tailwind plugin for automatic class sorting
- Command: `npm install -D prettier prettier-plugin-tailwindcss`

#### `979c5bc` - Merge branch 'main'
- Merged remote main branch

#### `020e730` - Fixed Tailwind + Prettier Extension
- Fixed configuration issues with Prettier Tailwind extension

### GSAP Animation Setup

#### `5bf725b` - Setup for GSAP implementation
- Prepared codebase structure for GSAP animations

#### `2b4106a` - Installing GSAP
- Added GSAP animation library
- Command: `npm install gsap`

#### `586b3d0` - Video finished! Bringing in assets
- Completed Vite + Tailwind tutorial
- Imported initial assets (images, etc.)
- Tutorial: https://www.youtube.com/watch?v=UjuLDdnp_VM

### Component Development

#### `00ccc51` - Bringing in the Footer & FontAwesome
- Created Footer component with contact info and social links
- Integrated FontAwesome icons via CDN
- Restructured to atom/molecule/organism/page pattern
- Broke down HTML into reusable React components

#### `8de267a` - CSS edits & React-router-dom
- Styling improvements
- Added client-side routing
- Command: `npm i react-router-dom`

### Preloader Development

#### `aa6e6b2` - Began isolating animations, working on loader
- Started separating animation logic into dedicated files
- Began preloader component development

#### `67f576b` - Used tutorial to help build progress bar & hero
- Implemented progress bar animation
- Started hero section
- Learned about React/GSAP structure and best practices
- Tutorial: https://www.youtube.com/watch?v=i_DFpKZebi8

#### `82d261e` - useState & organizing animation order
- Implemented useState for animation state management
- Finished counter animation
- Organized animation sequencing in preloader

#### `213af3d` - Finally finished the loader!
- Completed preloader with counter, progress bar, and exit animation
- Tutorial: https://www.youtube.com/watch?v=i_DFpKZebi8

### Deployment & Navigation

#### `6497452` - Workflow to deploy Vite
- Added GitHub Actions workflow for automated deployment
- Reference: https://vitejs.dev/guide/static-deploy.html

#### `0e0c232` - Working on the navbar & hero
- Developed navigation bar component
- Continued hero section work

#### `a4e1ca5` - useGSAP!!, Navbar animation, tons of restructuring
- Installed @gsap/react for React hooks integration
- Implemented navbar animations (hamburger to X, menu slide)
- Major code restructuring
- Command: `npm install @gsap/react`
- Tutorials:
  - https://www.youtube.com/watch?v=R_PKABXn4vk
  - https://www.youtube.com/watch?v=l0aI8Ecumy8

#### `9e14d1a` - Still more restructuring...
- Finished restructuring Navbar and Preloader
- Added code annotations/comments

#### `390df41` - Reorganizing & annotating
- Further code organization and documentation

#### `7da4943` - Fixed re-rendering on Nav Click
- **Key Learning**: `<a>` tags cause page refresh; `<Link>` from react-router-dom does not
- Fixed navigation to use `<Link>` for SPA behavior

### Responsive Design

#### `e32bc76` - Making Footer responsive!
- Added responsive breakpoints to Footer component

#### `c10d9a3` - Making Preloader & Navbar responsive
- Added responsive design to Preloader and Navbar

#### `d0336f8` - Update static.yml
- Updated GitHub Actions deployment workflow

#### `44f7fee` - Making Preloader & Navbar responsive
- Continued responsive improvements

#### `cd0379b` - Merge branch 'main'
- Merged remote changes

#### `3ae3983` - Revert merge
- Reverted merge commit cd0379b

#### `1410f62` - Getting static assets to work
- Fixed static asset loading issues in production build

#### `43141c5` - Added no-scroll during preloader
- Disabled page scrolling while preloader is active
- Implementation: Access body and preloader style through refs
- Note: Uncertain if this is the optimal approach

### Projects Section & Smooth Scroll

#### `c6f5fad` - Creating Projects Section
- Added Lenis for smooth scrolling
- Created projects section with ScrollTrigger
- Command: `npm i @studio-freight/lenis`
- Tutorial: https://www.youtube.com/watch?v=RkmF-9WtgaM
- TODO: Refactor and understand ScrollTrigger + Lenis integration

#### `8f35ce7` - Lenis Smooth scrolling
- Integrated Lenis with GSAP ticker for smooth scroll animations

#### `fc5c485` - Refactored javascript, fixed openedMenu
- Code cleanup
- Fixed menu open/close state bug

#### `78a4ded` - Separating Projects Animations & Making Projects Responsive
- Moved project animations to dedicated animations.jsx file
- Added responsive design to projects section

#### `6b564bf` - New Cover Images!
- Added/updated project cover images

#### `092165e` - Revamping Project Section and Responsiveness
- Major improvements to project section layout and responsiveness

#### `857a8b4` - Quick iPhone fixes
- Fixed mobile-specific display issues on iPhone

### Content & Experience Section

#### `18d3126` - Adding in information, Beginning experience section
- Added project descriptions and tech stacks
- Started work experience timeline section

#### `bf94b47` - Syntax changes to grid, and z-index
- Fixed grid layout syntax
- Resolved z-index stacking issues

#### `32060ff` - Small CSS changes
- Minor styling adjustments

#### `5deb51c` - Adding animations for Navbar, updating animations for Preloader
- Enhanced navbar entrance animations
- Improved preloader animations
- **Issue encountered**: Masking with two linear gradients caused errors

#### `1a4caa0` - Mobile responsive fix
- Fixed mobile responsiveness issues

### Text Animations

#### `3c4172d` - Stagger text animation
- Added SplitTextJS for character-level text animations
- Created reusable stagger animation utilities
- Command: `npm i split-text-js`
- Tutorial: https://www.youtube.com/watch?v=sOschfDqXH8
- TODO: Needs annotation and optimization

#### `1f678ce` - Timing Changes, Safari Compatibility, Software Annotation
- Adjusted animation timings
- Fixed Safari browser compatibility issues
- Added code documentation

### Hero & About Section Updates

#### `238aad3` - Hero animation updates, Decluttering About section
- Removed reveal animation for each project
- Added project section pinning on scroll
- Working on smooth transitions between pinned sections
- **Next steps**:
  - Fix overlapping and aesthetics of about section
  - Architectural timeline streaming animations

### Experience Section (Experimental)

#### `7d42d6b` - Redoing experience section
- Installed gsap-trial for premium plugins
- Command: `npm install gsap-trial`
- Added horizontal scroll animation
- Created custom SVG for timeline
- Explored DrawSVGPlugin, MotionPathPlugin, GSDevTools
- **Note**: Full GSAP plugin access costs $100/year

#### `f2d38f1` - Revert "Redoing experience section"
- Reverted commit 7d42d6b due to issues

#### `7c276f3` - Tons of Experience Section work
- Re-implemented experience section animation
- Added experience info blocks (not perfectly aligned)
- Struggled with SVG text positioning
- **TODO**:
  - Mobile compatibility (use simpler old experience section)
  - Refactor code with comments
  - Review text wrapping utility for SVG

#### `0a2b70d` - Switching experience blocks from SVG to div
- Moved experience content from SVG elements to regular div elements
- Improved styling flexibility

#### `af61e40` - Update Experience2.jsx
- Experience section updates

#### `2d650f7` - Update Experience2.jsx
- Further experience section refinements

#### `32914aa` - Update package-lock.json
- Dependency lock file update

#### `3b66b1a` - Update package-lock.json
- Dependency lock file update

### Simplification

#### `4acce6c` - Reducing personal website to be simpler
- Removed unfinished pages
- Reduced animation complexity
- **Focus**: Getting a fully functional single-page portfolio that works well

### Code Quality & Polish

#### `pending` - Code improvements and bug fixes
- **Fixed**: Hero typo "im" → "I'm" (`src/components/Hero/Hero.jsx`)
- **Fixed**: Dynamic copyright year in Footer (was hardcoded to 2024)
- **Added**: Alt text to project images for accessibility
- **Added**: SEO meta tags (description, keywords, Open Graph, Twitter Card) in `index.html`
- **Added**: Improved page title: "Anthony Chen | Software Engineer & Finance"
- **Improved**: Reduced preloader duration from ~11s to ~3s
  - Counter animation: 3.5s → 1.2s
  - Progress bar: 5s → 1.8s
  - Initial delay: 2s → 0.5s
  - Hero delay: 11s → 3s
  - Navbar delay: 11.5s → 3.5s
- **Removed**: Unused nav links (Blog, Contact) - aligns with Phase 8 simplification goal
- **Added**: Aria-labels to social media buttons for screen reader accessibility
- **Files modified**:
  - `src/components/Hero/Hero.jsx`
  - `src/components/Footer/Footer.jsx`
  - `src/components/About/Projects.jsx`
  - `src/components/Navbar/Navbar.jsx`
  - `src/components/Preloader/Preloader.jsx`
  - `src/components/Preloader/animations.jsx`
  - `index.html`

---

## How to Add New Commits to This Log

When making commits, add an entry to this log following this format:

```markdown
#### `<short-hash>` - <commit-title>
- What was changed
- Why it was changed
- Any commands run (npm install, etc.)
- Tutorials/references used
- Issues encountered
- TODOs or next steps
```

Get the short hash with: `git log -1 --format="%h"`
