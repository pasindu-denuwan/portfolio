# Prompt for Google Antigravity — Portfolio Website (with GitHub Pages Deploy)

Copy everything in the code block below and paste it as your first prompt in Antigravity (Editor view or Agent Manager). Fill in the `[bracketed]` placeholders with your real details before sending.

```
Build a complete, professional portfolio website for me and deploy it live on GitHub Pages
(free hosting). This is for a university assessment (GNCT23212a – PPD II, Profile Evaluation)
that grades the site on: Home, About Me, Skills, Projects, Education, Experience,
Certifications & Achievements, Resume/CV, Contact Info, and overall design quality
(clean/modern, responsive, fast, no broken links, no grammar mistakes).

MY DETAILS
- Full name: [Your Name]
- Target role / field: [e.g. Software Engineer / Data Analyst]
- Short bio (2-3 sentences): [about yourself, career goals, interests]
- University: [name], degree: [e.g. BSc Software Engineering], expected graduation: [year]
- School education: [school name, years]
- Skills: [languages, frameworks, databases, tools, cloud platforms, soft skills]
- Experience: [internships / part-time / freelance / volunteering / leadership roles]
- Projects (repeat for each): title, description, technologies used, GitHub link, live demo link, my contribution
- Certifications: [name, issuer, year] (repeat)
- Achievements: [competitions, hackathons, awards, scholarships, publications]
- Contact: email [x], LinkedIn [url], GitHub [url], other [url]
- Resume file: I will provide a PDF named resume.pdf to link as a downloadable CV

TECH STACK
- React, built with Vite (fast dev server + optimized production build).
- Use functional components + hooks only. Use React Router (HashRouter, so it works on
  GitHub Pages without extra server config) OR a single-page app with smooth-scroll section
  navigation — single-page with smooth scroll is simpler for this use case, use that unless
  I ask for separate routed pages.
- Component structure: Navbar, Home/Hero, About, Skills, Projects (+ ProjectCard), Education,
  Experience, Certifications (+ CertificateCard), Achievements, Contact, Footer.
- Plain CSS (CSS Modules or a single global stylesheet) — no Tailwind/UI library required,
  keep dependencies minimal so the build stays simple and fast.
- Fully responsive (mobile, tablet, desktop), fast-loading, accessible (semantic HTML, alt text).
- Modern, clean design: consistent color palette, good typography, subtle hover/scroll animations,
  dark/light mode toggle if easy to add (store preference in React state, not localStorage-first —
  fine to add localStorage since this is a real browser deployment, not an artifact).
- No broken links; all nav links, project links, and social links must work or be clearly
  marked as placeholders.

DATA-DRIVEN CONTENT (IMPORTANT — for easy future editing)
- Store ALL editable content (projects, certifications, achievements, skills, experience,
  education) in a single JSON file: /src/data/content.json
- Import this JSON into the relevant components (Projects, Certifications, Achievements,
  Skills, Experience) and render lists via .map() — no content hardcoded directly in JSX.
- This means I can add a new project or certificate later just by adding a new object to
  content.json — no component code changes required.
- Also build a small local-only admin route/page (e.g. /admin, only reachable by typing the
  URL, not linked in the navbar) that:
  - Loads content.json into React state
  - Shows a form for adding/editing/deleting a Project or a Certificate
  - Lets me click "Download updated content.json" (generate a Blob and trigger a download)
  - I will then manually replace /src/data/content.json with the downloaded file and push to GitHub.
  - Clearly label this page "For local editing only — not linked from the public site."

PROJECT STRUCTURE (Vite + React defaults)
- index.html, vite.config.js, package.json
- /src/main.jsx, /src/App.jsx
- /src/components/ (Navbar.jsx, Hero.jsx, About.jsx, Skills.jsx, Projects.jsx, ProjectCard.jsx,
  Education.jsx, Experience.jsx, Certifications.jsx, CertificateCard.jsx, Achievements.jsx,
  Contact.jsx, Footer.jsx)
- /src/pages/Admin.jsx
- /src/data/content.json
- /src/styles/ (CSS files)
- /public/assets/ (images), /public/resume.pdf placeholder
- README.md

DEPLOYMENT (React needs a build step, so use the `gh-pages` npm package — still 100% free)
- Set "homepage": "https://[my-github-username].github.io/portfolio/" in package.json.
- Set base: '/portfolio/' in vite.config.js (required or assets 404 on GitHub Pages).
- Install gh-pages as a dev dependency. Add two scripts to package.json:
  "predeploy": "npm run build"
  "deploy": "gh-pages -d dist"
- Initialize a git repository in this project.
- Give me the exact step-by-step terminal commands to:
  1. Create a new GitHub repository named "portfolio" (I will create it on github.com first
     and give you the remote URL, or you tell me the exact `git remote add` command to run).
  2. git init, add, commit, and push the source code to the `main` branch.
  3. Run `npm run deploy` — this builds the app and pushes the /dist output to a `gh-pages`
     branch automatically.
  4. Enable GitHub Pages in the repo settings using the `gh-pages` branch, `/root` folder.
- After that, tell me the final live URL format: https://[my-github-username].github.io/portfolio/
- Also create a README.md explaining the folder structure, how to update content.json, and
  how to redeploy after changes (`npm run deploy`).

QUALITY CHECK
- Before finishing, review the whole site for grammar mistakes, consistent formatting,
  and check that every internal link and navigation anchor works.
- Test that the site looks correct on both a mobile-width and a desktop-width viewport.
```

---

## About the "add new projects / edit details" feature

GitHub Pages only serves **static files** — there's no database or server to save form submissions in real time. So a fully live "edit on the website" admin panel isn't realistically free/simple. Here are your practical options, from simplest to most powerful:

### Option 1 (recommended for this assignment): JSON + local admin form
- All content (projects, certificates, skills, etc.) lives in one `data/content.json` file.
- The site reads this file and renders everything dynamically — so adding a project is just adding one object to the JSON, no HTML editing.
- The `admin.html` page (included in the prompt above) gives you a friendly form instead of hand-editing JSON: fill it in, click "Download updated content.json," replace the file, and `git push`.
- This is exactly what's in the prompt above — nothing more to add.

### Option 2: Edit content directly in the JSON file
- Skip `admin.html` entirely. Just open `data/content.json` in any text editor (or ask Antigravity to do it for you each time), add your new project/certificate object, save, commit, push. Takes under a minute once the site is live.

### Option 3: Headless CMS (if you want a real "Add Project" button that saves live, no re-deploy needed)
- Use a free service like **Decap CMS** (formerly Netlify CMS) connected to your GitHub repo, or **Airtable/Google Sheets as a data source** fetched via JS at page load.
- This is more setup (OAuth, config files) but gives you a real dashboard to add entries from your phone/browser without touching git.
- Only worth it if you want this to be a long-term, frequently-updated site beyond the assignment.

For the deadline you have (16 Aug 2026), **Option 1** is the best balance of "looks impressive to a grader" and "actually easy to maintain."

---

## Quick sanity checklist before submitting
- [ ] LinkedIn profile fully filled in (10 marks) — separate from this site
- [ ] Portfolio site covers all 10 sections in the rubric
- [ ] Resume PDF is linked and downloadable
- [ ] Site is live at `https://[username].github.io/portfolio/`
- [ ] No broken links, responsive on mobile, no typos
- [ ] Submit both links via LMS