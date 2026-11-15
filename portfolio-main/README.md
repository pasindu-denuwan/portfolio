# Pasindu Denuwan - Professional Portfolio

A modern, responsive, high-performance personal portfolio website built with **Next.js 14**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** to showcase projects, skills, education, leadership experience, certifications, and academic background.

---

## Technologies Used

### Frontend & Core
- **[Next.js 14](https://nextjs.org/)** (App Router) — Modern React framework powering server/client component rendering, asset optimization, and SEO metadata.
- **[React 18](https://react.dev/)** — Declarative component-based UI architecture with hooks and reactive state management.
- **[TypeScript 5](https://www.typescriptlang.org/)** — End-to-end type safety, robust code quality, and maintainable data structures.

### Styling & Design System
- **[Tailwind CSS 3](https://tailwindcss.com/)** — Utility-first CSS framework for custom responsive design, fluid typography, and dark mode theming.
- **Glassmorphic UI Design** — Translucent frosted-glass panels (`glass-panel`, `glass-card`), backdrop blur filters, glowing border accents, and radial ambient lighting.
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge) & [clsx](https://github.com/lukeed/clsx)** — Clean, conflict-free conditional class name composition.
- **PostCSS & Autoprefixer** — Automated CSS post-processing and cross-browser vendor prefixing.

### Animations & Interactivity
- **[Framer Motion 11](https://www.framer.com/motion/)** — Production-ready animation library providing:
  - Smooth scroll-triggered viewport animations (`whileInView`)
  - Rotating role typewriter/slide-fade transitions in the Hero section
  - Infinite auto-scrolling certificate carousel with drag-to-scroll and manual navigation controls
  - Interactive micro-interactions and hover animations on cards and buttons

### Iconography & Media
- **[Lucide React](https://lucide.dev/)** — Clean, lightweight, consistent SVG icon system across all sections.
- **WebP & PNG Image Optimization** — Next-gen compressed image formats with custom drop-shadow silhouette outlines and bottom-fade masks.
- **Sharp** — High-performance image processing engine for production builds.

### Development & Tooling
- **Node.js & npm** — Package management and JavaScript runtime environment.
- **ESLint & Next.js ESLint Config** — Strict code linting and code quality standards.

---

## Project Structure

```text
portfolio-main/
├── app/
│   ├── globals.css              # Global styles, Tailwind directives, glassmorphic utilities
│   ├── layout.tsx               # Root layout with HTML metadata & SEO title configuration
│   └── page.tsx                 # Main single-page application orchestrating all sections
├── components/
│   ├── About.tsx                # About Me section with key focus cards & biography
│   ├── Achievements.tsx         # Infinite auto-scroll certificate carousel with drag & controls
│   ├── Contact.tsx              # Get in Touch cards, academic reference & contact form
│   ├── EducationTimeline.tsx    # Academic journey & degree timeline
│   ├── Footer.tsx               # Footer with social links & copyright
│   ├── Gallery.tsx              # Interactive image gallery
│   ├── Hero.tsx                 # Hero section with animated rotating roles & cutout portrait
│   ├── Leadership.tsx           # Extracurricular & volunteering leadership cards
│   ├── Navbar.tsx               # Floating responsive navigation bar
│   ├── ProjectLaptopCard.tsx    # Interactive laptop mockup card for project showcases
│   ├── Projects.tsx             # Filterable project showcase (Web, UI/UX, Mobile, Others)
│   ├── Skills.tsx               # Technical & professional skills grid
│   └── ui/
│       ├── CertificateCard.tsx  # Expandable certificate card with badge & issuer details
│       └── ScrollProgress.tsx   # Top scroll progress indicator
├── public/
│   ├── assets/
│   │   ├── 1.webp               # Hero portrait cutout asset
│   │   ├── web1.png             # rotaractsusl.org preview
│   │   ├── web2.png             # cschaptersusl.org preview
│   │   ├── web3.png             # Personal portfolio preview
│   │   ├── web4.png             # Rotary Club of Uva Hills preview
│   │   ├── certificates/        # Certificate preview assets
│   │   └── gallery/             # Photo gallery assets
│   └── resume.pdf               # Downloadable CV document
├── package.json                 # Dependencies and npm scripts
├── tailwind.config.ts           # Tailwind configuration (custom colors, fonts, animations)
└── tsconfig.json                # TypeScript compiler configuration
```

---

##  Getting Started

### Prerequisites
- **Node.js**: v18.17+ or v20+
- **npm**: v9+ (or **pnpm** / **yarn**)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pasindu-denuwan/portfolio.git
   cd portfolio/portfolio-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### Building for Production

To create an optimized production build:
```bash
npm run build
npm start
```

---

##  License
This project is personal and proprietary to **Pasindu Denuwan**. All rights reserved.
