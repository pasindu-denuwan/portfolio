"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectLaptopCard from "./ProjectLaptopCard";

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Projects" },
  { id: "uiux", label: "UI / UX Designs" },
  { id: "software", label: "Software" }
];

const projects = [
  {
    id: "proj-1",
    title: "rotaractsusl.org",
    categoryType: "web",
    category: "Web Project",
    description: "The official website and digital platform for the Rotaract Club of Sabaragamuwa University of Sri Lanka. The project brings the club's public information, projects, events, gallery, membership-related pages, and administrative tools together in one place.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Storage"
    ],
    githubUrl: "https://github.com/pasindu-denuwan",
    demoUrl: "https://rotaractsusl.org",
    image: "/assets/web1.webp"
  },
  {
    id: "proj-2",
    title: "cschaptersusl.org",
    categoryType: "web",
    category: "Web Project",
    description: "The official website of IEEE Computer Society Chapter at Sabaragamuwa University of Sri Lanka.",
    technologies: ["Next.js", "React 18", "TypeScript 5", "Cloudinary", "Three.js", "Firebase"],
    githubUrl: "https://github.com/pasindu-denuwan",
    demoUrl: "https://www.cschaptersusl.org",
    image: "/assets/web2.webp"
  },
  {
    id: "proj-3",
    title: "Pasindu Denuwan",
    categoryType: "web",
    category: "Web Project",
    description: "The Official portfolio web site of my self, using Vanilla HTML5, CSS3, and JavaScript.",
    technologies: ["Next.js 14", "React 18", "TypeScript 5", "Tailwind CSS 3", "Node.js"],
    githubUrl: "https://github.com/pasindu-denuwan",
    image: "/assets/web3.webp"
  },
  {
    id: "proj-4",
    title: "Rotary Club of Uva Hills",
    categoryType: "web",
    category: "Web Project",
    description: "The official website and community platform for the Rotary Club of Uva Hills, Badulla, Sri Lanka.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase JS", "PostgreSQL"],
    githubUrl: "https://github.com/pasindu-denuwan",
    image: "/assets/web4.webp"
  },
  {
    id: "proj-5",
    title: "TapMark",
    categoryType: "uiux",
    category: "UI / UX Design",
    description: "UI design created for the mobile application with 12 interfaces and prototype.",
    technologies: ["Figma", "Wireframing", "Prototyping"],
    figmaUrl: "https://www.figma.com/design/FMwugIoj7XZDyUsd0cVchu/TapMark?node-id=0-1&t=AjLXskXIkUI1h9iE-1",
    image: "/assets/figma1.webp"
  },
  {
    id: "proj-6",
    title: "CraftLanka",
    categoryType: "uiux",
    category: "UI / UX Design",
    description: "UI / UX designed for the website with prototype. CraftLanka is a website for Sri Lankan wood artists. They can sell their products directly to the foreign market.",
    technologies: ["Figma", "Interactive UX", "Mobile Design"],
    figmaUrl: "https://www.figma.com/design/VZNjkuWuPOiz9eqtDAyLXG/Team-nevora?node-id=2-1289&t=GyoXXR3ZLQOmKx6V-1",
    image: "/assets/figma2.webp"
  },
  {
    id: "proj-7",
    title: "AgroLink",
    categoryType: "uiux",
    category: "UI / UX Design",
    description: "Web platform for farmers and buyers. This provides a platform to reduce food wastage and enhance the effectiveness of both parties.",
    technologies: ["Figma", "Interactive UX", "UI / UX Design", "Prototyping"],
    figmaUrl: "https://www.figma.com/design/LkFBRX9S5aG85LP4o6gGHx/Team-SSD--Devthon2.0?node-id=0-1&t=zFvnQZNGoH1dKUTZ-1",
    image: "/assets/figma3.webp"
  },
  {
    id: "proj-8",
    title: "Smart Presence",
    categoryType: "uiux",
    category: "UI / UX Design",
    description: "A Simple UI / UX design for the mobile application with 7 interfaces and prototype.",
    technologies: ["Figma", "UI / UX Design", "Wireframing", "Prototyping"],
    figmaUrl: "https://www.figma.com/design/BwrZMrESLKdpcVXfRXL3b8/SmartPresence--Capstone-Project?node-id=0-1&t=E8gfCs5BVhilpK11-1",
    image: "/assets/figma4.webp"
  },
  {
    id: "proj-9",
    title: "Campus One Digital Academy",
    categoryType: "software",
    category: "Software",
    description: "A desktop software application built with C# Windows Forms and Microsoft SQL Server.",
    technologies: ["C#", "SQL", ".NET Framework 4.8"],
    githubUrl: "https://github.com/pasindu-denuwan/Campus-One-Digital-Academy",
    image: "/assets/soft1.webp"
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
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 ${isActive
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
