"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectLaptopCard from "./ProjectLaptopCard";

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Projects" },
  { id: "uiux", label: "UI / UX Designs" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "others", label: "Others" }
];

const projects = [
  {
    id: "proj-1",
    title: "Collaborative Task Management Platform",
    categoryType: "web",
    category: "Full-Stack Web",
    description: "A modern collaborative web application designed to manage team milestones, track project deadlines, and organize sprint tasks with an intuitive, responsive interface.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/pasindu-denuwan",
    image: "/assets/doit.png"
  },
  {
    id: "proj-2",
    title: "Bookstore Booking & Inventory System",
    categoryType: "web",
    category: "Web & Enterprise",
    description: "An online booking & inventory system built using Java and core OOP principles, featuring multi-tier class architecture, reservation management, and relational SQL database schema.",
    technologies: ["Java", "OOP Design", "MySQL", "GUI / Swing", "Database Schema"],
    githubUrl: "https://github.com/pasindu-denuwan",
    image: "/assets/project1.png"
  },
  {
    id: "proj-3",
    title: "Weather & Analytics Dashboard",
    categoryType: "web",
    category: "Web Application",
    description: "A dynamic real-time weather analytics dashboard integrating third-party REST APIs, geolocation tracking, and visual meteorological forecasts.",
    technologies: ["JavaScript", "REST APIs", "Tailwind CSS", "Data Visualization"],
    githubUrl: "https://github.com/pasindu-denuwan",
    image: "/assets/weather.jpg"
  },
  {
    id: "proj-4",
    title: "CRYPTX Designathon Award Concept",
    categoryType: "uiux",
    category: "UI / UX Design",
    description: "Awarded 1st Runner Up in the CRYPTX inter-university designathon. Features an end-to-end user research framework, wireframes, accessible design system, and high-fidelity prototype in Figma.",
    technologies: ["Figma", "User Research", "Wireframing", "Design System", "Prototyping"],
    githubUrl: "https://github.com/pasindu-denuwan",
    image: "/assets/cinnamon.jpg"
  },
  {
    id: "proj-5",
    title: "Agri-Tech & Estate Management UX Suite",
    categoryType: "uiux",
    category: "UI / UX Prototype",
    description: "A complete mobile and web interface design concept for agricultural inventory, harvest tracking, and supply chain management with user-tested mobile flows.",
    technologies: ["Figma", "Interactive UX", "Mobile Design", "Information Architecture"],
    githubUrl: "https://github.com/pasindu-denuwan",
    image: "/assets/project4.png"
  },
  {
    id: "proj-6",
    title: "Campus Companion & Student Mobile Portal",
    categoryType: "mobile",
    category: "Mobile Application",
    description: "A cross-platform mobile application concept tailored for university students to track lecture schedules, academic grades, faculty notices, and campus events in real time.",
    technologies: ["React Native", "TypeScript", "Mobile UI", "REST APIs", "Firebase"],
    githubUrl: "https://github.com/pasindu-denuwan",
    image: "/assets/project3.png"
  },
  {
    id: "proj-7",
    title: "Pong Arcade Game & 2D Physics Engine",
    categoryType: "others",
    category: "C++ Game Engine",
    description: "A two-player arcade Pong game engineered in C++ with custom 2D collision detection algorithms, paddle velocity mechanics, high-performance rendering loop, and real-time score tracking.",
    technologies: ["C++", "Game Physics", "Collision Algorithms", "Data Structures", "OOP"],
    githubUrl: "https://github.com/pasindu-denuwan",
    image: "/assets/project2.png"
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.categoryType === activeCategory);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 370;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="projects" className="py-14 md:py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-secondary/30 text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-secondary" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Things I&apos;ve <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Built</span>
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto mt-3">
            Selected software engineering, game mechanics, mobile applications, and UI/UX design projects.
          </p>

          {/* Category Filter Pills + Navigation Controls Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center items-center gap-2">
              {filterCategories.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white border border-secondary shadow-[0_0_20px_rgba(27,44,193,0.6)] scale-105"
                        : "glass-panel text-secondary hover:text-white hover:border-accent/40"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Left / Right Carousel Controls */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => handleScroll("left")}
                aria-label="Scroll projects left"
                className="w-9 h-9 rounded-xl glass-panel border border-primary/30 text-accent hover:text-white hover:border-accent hover:bg-primary/30 flex items-center justify-center transition-all shadow-md active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                aria-label="Scroll projects right"
                className="w-9 h-9 rounded-xl glass-panel border border-primary/30 text-accent hover:text-white hover:border-accent hover:bg-primary/30 flex items-center justify-center transition-all shadow-md active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Single Horizontal Row Track with Bidirectional Scrolling */}
        <div className="relative w-full overflow-hidden py-4">
          <div
            ref={scrollContainerRef}
            className="flex flex-row items-stretch gap-6 overflow-x-auto snap-x snap-mandatory py-2 px-1 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 snap-start h-auto flex"
                >
                  <ProjectLaptopCard {...project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/pasindu-denuwan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary/20 hover:bg-primary/40 border border-primary/40 hover:border-accent text-accent font-bold text-sm transition-all shadow-[0_0_20px_rgba(27,44,193,0.3)] group"
          >
            <Github className="w-4 h-4" />
            <span>Explore All Projects on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
