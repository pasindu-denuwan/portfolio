"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Globe, 
  Database, 
  Settings, 
  Cloud, 
  Layers
} from "lucide-react";

interface SkillItem {
  name: string;
  category: string;
  level: "Proficient" | "Advanced" | "Intermediate" | "Exploring";
  description: string;
}

const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "Python", category: "languages", level: "Advanced", description: "Data analysis, automation scripting, and Object-Oriented Architecture." },
      { name: "Java", category: "languages", level: "Intermediate", description: "OOP design patterns, enterprise application structures, and GUI." },
      { name: "C++", category: "languages", level: "Intermediate", description: "Data structures, game logic physics, and memory management." },
      { name: "C", category: "languages", level: "Intermediate", description: "Procedural programming and algorithmic fundamentals." },
      { name: "JavaScript", category: "languages", level: "Proficient", description: "Modern ES6+, DOM manipulation, and asynchronous workflows." },
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: <Globe className="w-5 h-5" />,
    skills: [
      { name: "React", category: "frontend", level: "Proficient", description: "Component-driven architecture, custom hooks, and state management." },
      { name: "Tailwind CSS", category: "frontend", level: "Proficient", description: "Modern responsive styling, customized design systems, and glassmorphism." },
      { name: "HTML5", category: "frontend", level: "Advanced", description: "Semantic web structure, accessibility, and modern SEO practices." },
      { name: "CSS3", category: "frontend", level: "Advanced", description: "Fluid grid layouts, keyframe animations, and modern UI tokens." },
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "MySQL", category: "databases", level: "Proficient", description: "Relational schema design, complex joins, indexing, and aggregations." },
      { name: "MongoDB", category: "databases", level: "Intermediate", description: "NoSQL document collections, JSON aggregation pipelines, and CRUD." },
      { name: "SQL", category: "databases", level: "Proficient", description: "Declarative query writing, data transformation, and normalization." },
    ]
  },
  {
    id: "tools",
    title: "Analytics & Tools",
    icon: <Settings className="w-5 h-5" />,
    skills: [
      { name: "Power BI", category: "tools", level: "Proficient", description: "DAX formulas, interactive data modeling, and executive KPI reports." },
      { name: "Git & GitHub", category: "tools", level: "Proficient", description: "Version control, branching workflows, pull requests, and CI/CD." },
      { name: "VS Code", category: "tools", level: "Advanced", description: "Primary IDE with custom debugger configurations and extensions." },
      { name: "Postman", category: "tools", level: "Proficient", description: "REST API testing, automated collection runs, and documentation." },
      { name: "Figma", category: "tools", level: "Intermediate", description: "UI wireframing, component design, and interactive UX prototyping." },
    ]
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: "Microsoft Azure", category: "cloud", level: "Exploring", description: "Cloud computing fundamentals, resource groups, and storage services." },
      { name: "GitHub Pages", category: "cloud", level: "Proficient", description: "Automated static site deployment via GitHub Actions." },
    ]
  }
];

// Official vector logos for all technologies
function TechLogo({ name }: { name: string }) {
  switch (name) {
    case "Python":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M11.91 2C6.44 2 6.78 4.38 6.78 4.38L6.79 6.85H12V7.61H4.22S2 7.35 2 12.82C2 18.29 3.94 18.04 3.94 18.04H5.66V15.54C5.66 12.44 8.24 12.44 8.24 12.44H13.43S15.93 12.54 15.93 10.08V4.46S16.29 2 11.91 2ZM9.03 3.52C9.64 3.52 10.13 4.01 10.13 4.62C10.13 5.23 9.64 5.72 9.03 5.72C8.42 5.72 7.93 5.23 7.93 4.62C7.93 4.01 8.42 3.52 9.03 3.52Z" fill="#3776AB"/>
          <path d="M12.09 22C17.56 22 17.22 19.62 17.22 19.62L17.21 17.15H12V16.39H19.78S22 16.65 22 11.18C22 5.71 20.06 5.96 20.06 5.96H18.34V8.46C18.34 11.56 15.76 11.56 15.76 11.56H10.57S8.07 11.46 8.07 13.92V19.54S7.71 22 12.09 22ZM14.97 20.48C14.36 20.48 13.87 19.99 13.87 19.38C13.87 18.77 14.36 18.28 14.97 18.28C15.58 18.28 16.07 18.77 16.07 19.38C16.07 19.99 15.58 20.48 14.97 20.48Z" fill="#FFD43B"/>
        </svg>
      );
    case "Java":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M8.85 17.28c0 0-.82.49 1.17.66 2.41.21 3.73.18 6.43-.27 0 0 .93.58 1.93.8-5.32 2.1-12.02.26-9.53-1.19zm-.62-2.73c0 0-.91.73 1.25.9 2.68.22 4.67.24 8.07-.36 0 0 .66.45 1.44.66-6.42 2.05-13.62.62-10.76-1.2zm6.26-6.45c.82.94-.13 1.98-.13 1.98s2.17-1.12 1.22-2.52c-.99-1.46-2.88-2.18-4.66-3.56-1.37-1.07-.75-2.02-.75-2.02s-.36.9.77 1.98c1.37 1.3 3.01 2.37 3.55 4.14zm-4.71 7.15c2.47.26 4.31.25 7.64-.26 0 0-.58.74-1.63 1.05-4.54 1.32-9.61.9-8.4-1.06 0 0 .65.18 2.39.27zm9.64 4.54c-1.37.1-2.92.14-4.58.12-4.09-.07-7.98-.82-7.98-.82s-.22.4.52.73c3.56 1.55 12.87 1.03 13.91-.71 0 0-.75.46-1.87.68zm2.46-11.45c-.47-.54-1.2-.84-2.14-.9-.95-.06-1.95.12-2.76.54 0 0 1.26.15 1.96.48.65.3 1.22.84 1.15 1.55-.09.91-1.01 1.49-1.86 1.83-1.27.52-2.65.65-4.01.76-1.64.13-3.32.22-4.83.89-.98.44-1.87 1.16-2.18 2.21-.36 1.24.12 2.55 1.08 3.36-1.86-1.3-1.89-3.23-.46-4.55 1.32-1.22 3.19-1.6 4.88-1.91 1.44-.27 2.92-.48 4.22-1.13.78-.39 1.48-.96 1.77-1.81.33-.96.06-2.08-.82-2.77z" fill="#E76F00"/>
          <path d="M14.61 5.37c1.32 1.49-.3 2.93-.3 2.93s2.4-1.44 1.05-3.25c-1.09-1.47-1.82-2.45-3.87-4.05 0 0 .28 1.43 3.12 4.37z" fill="#5382A1"/>
        </svg>
      );
    case "C++":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <path d="M22.38 12.78l-4.52 7.84a1.56 1.56 0 01-1.35.78H7.49a1.56 1.56 0 01-1.35-.78L1.62 12.78a1.56 1.56 0 010-1.56L6.14 3.38A1.56 1.56 0 017.49 2.6h9.02c.56 0 1.07.3 1.35.78l4.52 7.84a1.56 1.56 0 010 1.56z" fill="#00599C"/>
          <path d="M10.87 14.88a3.7 3.7 0 01-2.9 1.34c-2.15 0-3.72-1.74-3.72-4.22s1.57-4.22 3.72-4.22c1.23 0 2.27.53 2.9 1.34l1.62-1.62A5.94 5.94 0 007.97 5.6C4.42 5.6 1.78 8.42 1.78 12s2.64 6.4 6.19 6.4c1.86 0 3.35-.68 4.52-1.9l-1.62-1.62zm4.33-4.08h1.2v1.2h-1.2v-1.2zm0 2.4h1.2v1.2h-1.2v-1.2zm4.2-2.4h1.2v1.2h-1.2v-1.2zm0 2.4h1.2v1.2h-1.2v-1.2zm-5.4.6h3.6v-1.2h-3.6v1.2zm4.2 0h3.6v-1.2h-3.6v1.2zm-2.1-2.1v3.6h1.2v-3.6h-1.2zm4.2 0v3.6h1.2v-3.6h-1.2z" fill="#FFFFFF"/>
        </svg>
      );
    case "C":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <path d="M22.38 12.78l-4.52 7.84a1.56 1.56 0 01-1.35.78H7.49a1.56 1.56 0 01-1.35-.78L1.62 12.78a1.56 1.56 0 010-1.56L6.14 3.38A1.56 1.56 0 017.49 2.6h9.02c.56 0 1.07.3 1.35.78l4.52 7.84a1.56 1.56 0 010 1.56z" fill="#659AD2"/>
          <path d="M14.5 15.6a5.1 5.1 0 01-3.5 1.4c-3.1 0-5.5-2.2-5.5-5s2.4-5 5.5-5c1.4 0 2.6.5 3.5 1.4l1.6-1.8C15 5.2 13.3 4.5 11 4.5 6.6 4.5 3 7.9 3 12s3.6 7.5 8 7.5c2.3 0 4-.7 5.1-2.1l-1.6-1.8z" fill="#FFFFFF"/>
        </svg>
      );
    case "JavaScript":
      return (
        <svg className="w-4 h-4 flex-shrink-0 rounded-sm" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
          <path d="M7.7 18.2c.7.4 1.6.7 2.5.7 1.4 0 2.2-.7 2.2-1.8v-6.9h-2.1v6.8c0 .5-.3.8-.8.8-.4 0-.7-.2-.9-.4l-.9.8zm7.3-.1c1 .6 2.3.9 3.5.9 2.5 0 4-1.3 4-3.3 0-1.8-1.2-2.7-3-3.4-1.3-.5-1.8-.8-1.8-1.5 0-.6.5-1.1 1.4-1.1.9 0 1.7.3 2.3.7l.8-1.6c-.7-.4-1.7-.7-2.8-.7-2.3 0-3.8 1.4-3.8 3.2 0 1.7 1.1 2.6 2.9 3.3 1.3.5 1.9.9 1.9 1.6 0 .7-.6 1.2-1.7 1.2-1.1 0-2.1-.4-2.8-.9l-.7 1.5z" fill="#000000"/>
        </svg>
      );
    case "React":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      );
    case "HTML5":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <path d="M2.5 1.5L4.5 21.5L12 23.5L19.5 21.5L21.5 1.5H2.5Z" fill="#E34F26"/>
          <path d="M12 3.3V21.6L17.8 20L19.4 3.3H12Z" fill="#EF652A"/>
          <path d="M12 7.7H7.4L7.7 10.7H12V13.8H8L8.3 17.2L12 18.2V15.4L10.3 14.9L10.1 13.3H12V7.7ZM12 7.7V10.7H16.2L15.9 13.8L12 14.9V18.2L15.7 17.2L16.6 7.7H12Z" fill="#FFFFFF"/>
        </svg>
      );
    case "CSS3":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <path d="M2.5 1.5L4.5 21.5L12 23.5L19.5 21.5L21.5 1.5H2.5Z" fill="#1572B6"/>
          <path d="M12 3.3V21.6L17.8 20L19.4 3.3H12Z" fill="#33A9DC"/>
          <path d="M12 7.7H7.4L7.6 9.8H12V7.7ZM12 12.1H7.8L8.1 15.3L12 16.4V14.1L9.9 13.5L9.8 12.1H12V12.1ZM12 7.7V9.8H16.4L16.6 7.7H12ZM12 12.1V14.1L14.1 13.5L14.3 11.2H12V12.1ZM12 16.4L15.9 15.3L16.2 12.1H14.1L13.9 14.3L12 14.8V16.4Z" fill="#FFFFFF"/>
        </svg>
      );
    case "MySQL":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <path d="M12.14 2C8.36 2 5.17 4.19 3.66 7.42c-.87-.29-1.82-.26-2.69.1C-.11 8.01-.3 9.4.29 10.8c.47 1.13 1.35 1.98 2.45 2.38-.14.61-.19 1.25-.13 1.88.24 2.5 1.87 4.67 4.16 5.56 2.17.84 4.66.52 6.55-.83 1.64 1.48 3.94 2.13 6.16 1.7 2.32-.45 4.26-2.07 5.06-4.22.42-1.12.44-2.35.08-3.48-.38-1.21-1.19-2.22-2.27-2.84.14-.94-.04-1.91-.52-2.73C20.67 6.36 18.59 4.7 16.2 4.1 14.88 2.74 13.56 2 12.14 2zm.06 2.4c1.22 0 2.27.84 3.06 2.12-1.04.38-1.96 1.05-2.66 1.94-.7-.89-1.62-1.56-2.66-1.94.79-1.28 1.84-2.12 3.06-2.12zm-3.8 3.55c.78.36 1.46.91 1.98 1.6-.94.7-1.58 1.74-1.78 2.91-.84-.13-1.63-.48-2.31-1.02.39-1.46 1.15-2.73 2.11-3.49zm7.6 0c.96.76 1.72 2.03 2.11 3.49-.68.54-1.47.89-2.31 1.02-.2-1.17-.84-2.21-1.78-2.91.52-.69 1.2-1.24 1.98-1.6z" fill="#00758F"/>
          <path d="M12.2 13.5c1.4 0 2.6.7 3.3 1.7-.7.9-1.8 1.4-3.3 1.4s-2.6-.5-3.3-1.4c.7-1 1.9-1.7 3.3-1.7z" fill="#F29111"/>
        </svg>
      );
    case "MongoDB":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <path d="M12.003 1.5s-.24.27-.54.67c-1.27 1.7-5.16 7.4-5.16 11.53 0 4.54 3.34 7.55 5.67 8.78.11.06.18.02.21-.06.45-1.29.62-2.73.62-4.04 0-3.85-2.22-6.52-2.22-6.52s2.02 2.22 2.25 5.37c.01.12.08.15.17.1.58-.33 1.34-.84 1.94-1.54 1.81-2.1 2.76-4.66 2.76-7.39 0-4.65-4.22-8.31-5.7-8.9z" fill="#47A248"/>
          <path d="M12.003 1.5v20.98c.11-.06.22-.12.33-.18 2.33-1.23 5.67-4.24 5.67-8.78 0-4.13-3.89-9.83-5.16-11.53-.3-.4-.54-.67-.54-.67z" fill="#499D4A"/>
          <path d="M11.97 22.48c-.08 0-.15-.05-.18-.12-.45-1.29-.62-2.73-.62-4.04 0-3.85 2.22-6.52 2.22-6.52s-.65 2.12-.4 4.52c.2 1.93.84 3.49 1.15 4.18.04.1 0 .2-.1.25-.49.27-1.39.73-2.07 1.73z" fill="#E8E7D5"/>
        </svg>
      );
    case "SQL":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6" rx="9" ry="3.5" fill="#336791" />
          <path d="M3 6v6c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5V6" stroke="#4285F4" strokeWidth="1.5" fill="none"/>
          <path d="M3 12v6c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5v-6" stroke="#336791" strokeWidth="1.5" fill="none"/>
          <ellipse cx="12" cy="6" rx="9" ry="3.5" stroke="#7692FF" strokeWidth="1.2"/>
        </svg>
      );
    case "Power BI":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <rect x="15.5" y="3" width="5" height="18" rx="1.5" fill="#E6AD10"/>
          <rect x="9.5" y="8" width="5" height="13" rx="1.5" fill="#F2C811"/>
          <rect x="3.5" y="13" width="5" height="8" rx="1.5" fill="#FBE365"/>
        </svg>
      );
    case "Git & GitHub":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <path d="M21.7 10.9L13.1 2.3c-.6-.6-1.6-.6-2.2 0L8.7 4.5l2.8 2.8c.6-.2 1.3-.1 1.8.4.5.5.7 1.3.4 1.9l2.7 2.7c.6-.2 1.4-.1 1.9.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.5-.3-2.2l-2.5-2.5v5.8c.2.2.4.4.5.7.5.9.2 2-.7 2.5-.9.5-2 .2-2.5-.7-.5-.9-.2-2 .7-2.5.3-.2.7-.2 1-.2V9.3L5.4 6.8l-3.1 3.1c-.6.6-.6 1.6 0 2.2l8.6 8.6c.6.6 1.6.6 2.2 0l8.6-8.6c.6-.6.6-1.6 0-2.2z" fill="#F05032"/>
        </svg>
      );
    case "VS Code":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <path d="M17.6 2.2L12.5 7 5.7 1.5c-.5-.4-1.2-.4-1.6.1L2.2 3.4c-.3.4-.3 1 0 1.4L6.9 9 2.2 13.2c-.3.4-.3 1 0 1.4l1.9 1.8c.4.4 1.1.4 1.6.1l6.8-5.5 5.1 4.8c.5.4 1.2.4 1.7-.1l2.4-2.1c.4-.3.6-.8.6-1.3V4.7c0-.5-.2-1-.6-1.3l-2.4-2.1c-.5-.5-1.2-.5-1.7-.1z" fill="#007ACC"/>
          <path d="M17.6 2.2L12.5 7l5.1 4.8 4.1-3.6c.4-.3.6-.8.6-1.3V4.7c0-.5-.2-1-.6-1.3l-2.4-2.1c-.5-.5-1.2-.5-1.7-.1z" fill="#1F9CF0"/>
          <path d="M2.2 3.4c-.3.4-.3 1 0 1.4L6.9 9l-4.7 4.2c-.3.4-.3 1 0 1.4l1.9 1.8c.4.4 1.1.4 1.6.1l6.8-5.5L6.9 9 4.1 6.7 2.2 3.4z" fill="#0065A9"/>
        </svg>
      );
    case "Postman":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="#FF6C37"/>
          <path d="M14.5 7.5c-1.4 0-2.5 1.1-2.5 2.5 0 .2 0 .4.1.6l-3.2 1.6c-.4-.4-1-.7-1.6-.7-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5c.8 0 1.5-.4 2-1l3.1 1.5v.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5c-.7 0-1.4.3-1.8.8l-3.2-1.6c.1-.2.1-.5.1-.7s0-.5-.1-.7l3.2-1.6c.4.5 1.1.8 1.8.8 1.4 0 2.5-1.1 2.5-2.5s-1.2-2.5-2.5-2.5z" fill="#FFFFFF"/>
        </svg>
      );
    case "Figma":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <path d="M8 2a3 3 0 000 6h3V2H8z" fill="#F24E1E"/>
          <path d="M11 2h3a3 3 0 110 6h-3V2z" fill="#FF7262"/>
          <path d="M11 8H8a3 3 0 100 6h3V8z" fill="#A259FF"/>
          <path d="M8 14a3 3 0 103 3v-3H8z" fill="#0ACF83"/>
          <path d="M14 11a3 3 0 11-3-3 3 3 0 013 3z" fill="#1ABCFE"/>
        </svg>
      );
    case "Microsoft Azure":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <path d="M4.8 19.5h8.9L8.3 4.5H3.5l1.3 15z" fill="#0078D4"/>
          <path d="M13.2 4.5l-4.1 6.9 4.6 8.1H20.5L13.2 4.5z" fill="#50E6FF"/>
        </svg>
      );
    case "GitHub Pages":
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="#FFFFFF">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );
    default:
      return <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />;
  }
}

export default function Skills() {
  return (
    <section id="skills" className="py-14 md:py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-secondary/30 text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-secondary" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technologies & <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Tools</span>
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto mt-3">
            A comprehensive overview of programming languages, frameworks, analytical tools, and cloud platforms I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="glass-card p-5 md:p-6 rounded-2xl border border-primary/30 hover:border-secondary/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 text-accent group-hover:bg-primary/40 group-hover:border-secondary flex items-center justify-center transition-all">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base md:text-lg group-hover:text-accent transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-secondary/80">
                        {category.skills.length} competencies
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Badges Grid with Original Tech Logos */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold cursor-default transition-all duration-200 flex items-center gap-2 border bg-dark/60 text-white/90 border-primary/30 hover:border-secondary hover:bg-primary/20 hover:text-white shadow-sm select-none"
                    >
                      <TechLogo name={skill.name} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
