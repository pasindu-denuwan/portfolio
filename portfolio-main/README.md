# Pasindu Denuwan - Professional Portfolio & Admin CMS

A high-performance, dynamic single-page portfolio website and local content administration system built for profile evaluation and showcase. 

Designed using **Vanilla HTML5, CSS3, and JavaScript (ES6+)**, this project requires no build tools or bundlers, making it 100% compatible with free static hosting on **GitHub Pages**.

---

## 🌟 Key Features

- **10 Profile Sections**: Home, About Me, Skills, Projects, Education, Experience, Certifications, Achievements, Resume Download, and Contact (with Academic Reference).
- **Dynamic Content Engine**: All public content is dynamically fetched and rendered from `/data/content.json`.
- **Local Admin Manager (`/admin.html`)**: Interactive CMS interface to add, edit, or delete projects, certifications, skills, education, and work experience with 1-click `content.json` download.
- **Modern Design System**: High-contrast Dark/Light theme switcher with `localStorage` persistence, glassmorphic card design, floating gradient blobs, micro-animations, and responsive layout.
- **Project Search & Filtering**: Client-side instant keyword search and tag/category filter system.
- **Project Detail Modal**: Popups showing granular project descriptions, stack tags, and personal contributions.
- **Resume Integration**: Direct link & download button for `resume.pdf`.

---

## 📁 Directory Structure

```text
Portofolio/
├── index.html                   # Public single-page portfolio application
├── admin.html                   # Local content manager CMS (Form builder)
├── resume.pdf                   # Downloadable CV document (Pasindu Denuwan)
├── README.md                    # Setup, maintenance, and deployment documentation
├── css/
│   └── style.css                # CSS design system (Theme variables, glassmorphism, responsive styles)
├── js/
│   ├── main.js                  # Main site script (JSON fetch, dynamic render, theme, search, modal)
│   └── admin.js                 # Local admin script (CMS forms, JSON generator & download)
├── data/
│   └── content.json             # Central JSON content store (Pasindu Denuwan profile data)
└── public/assets/
    ├── 1.webp                   # Hero portrait asset (Pasindu Denuwan)
    ├── project1.webp             # Java OOP Bookstore System preview
    └── project2.webp             # C++ Pong Game preview
```

---

## ✏️ How to Edit & Add Portfolio Content

### Option 1: Use the Local Admin Page (`admin.html`) — Recommended

1. Open `admin.html` in your web browser (via local web server or file viewer).
2. Click through the tabs: **Projects**, **Experience**, **Education**, **Certifications**, **Achievements**, **Skills**, or **Profile & Reference**.
3. Use the **"Add New"** or **"Edit"** buttons to update your information in the friendly form fields.
4. Click the **"Download updated content.json"** button at the top right.
5. Replace the existing `data/content.json` file in your repository with the newly downloaded file.
6. Commit and push your changes to GitHub to go live!

### Option 2: Edit `data/content.json` Directly

1. Open `data/content.json` in VS Code or any text editor.
2. Edit or append new JSON objects under the corresponding keys (`projects`, `experience`, `education`, `certifications`, `skills`, `profile`, etc.).
3. Save the file, commit, and push to GitHub.

---

## 🚀 Step-by-Step GitHub Pages Deployment Guide

Follow these exact terminal commands to deploy your portfolio live on GitHub Pages:

### Step 1: Create a GitHub Repository
1. Go to [GitHub New Repository](https://github.com/new).
2. Set Repository Name: `portfolio`
3. Set Visibility: **Public**
4. Do **NOT** initialize with README or .gitignore (this project already includes them).
5. Click **Create repository**.

### Step 2: Initialize Git & Push Code
Open your terminal in this project directory and run:

```bash
# 1. Initialize Git repository
git init

# 2. Add all files to staging
git add .

# 3. Create initial commit
git commit -m "Initial commit: Dynamic portfolio site for Pasindu Denuwan"

# 4. Rename default branch to main
git branch -M main

# 5. Link your GitHub remote repository (replace with your GitHub username)
git remote add origin https://github.com/pasindu-denuwan/portfolio.git

# 6. Push code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top tab bar).
3. Select **Pages** from the left sidebar menu under *Code and automation*.
4. Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
5. Under **Branch**, select `main` and keep folder as `/ (root)`.
6. Click **Save**.

### 🌐 Live Site URL
After 1-2 minutes, your website will be live at:
`https://<your-username>.github.io/portfolio/`

---

## 📋 Sanity Checklist for Submission

- [x] Home, About Me, Skills, Projects, Education, Experience, Certifications & Achievements, Resume, and Contact info (with Academic Reference) included.
- [x] Responsive layout verified on mobile, tablet, and desktop breakpoints.
- [x] Light and Dark theme toggle working with preference saved.
- [x] Dynamic data loading from `/data/content.json`.
- [x] `admin.html` manager functional for content updates.
- [x] `resume.pdf` downloadable.
- [x] Zero console runtime errors or broken links.
