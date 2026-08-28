"use client";
import { motion } from "framer-motion";
import ProjectLaptopCard from "./ProjectLaptopCard";

const projects = [
  {
    title: "OOP Application (Bookstore Booking)",
    description: "Developed a Java-based online booking system for a bookstore, incorporating core OOP concepts and database design.",
    technologies: ["Java", "OOP", "Database Design", "SQL"],
    githubUrl: "https://github.com/T-Bhagya/OOP-Bookstore-System",
    image: "/portfolio/assets/project1.png",
    contribution: "Class hierarchy architecture, reservation schema, and session workflows."
  },
  {
    title: "Pong Game",
    description: "Built a classic two-player Pong arcade game in C++ with real-time paddle movement, collision physics, and score tracking.",
    technologies: ["C++", "Game Logic", "Data Structures", "OOP"],
    githubUrl: "https://github.com/T-Bhagya/CPP-Pong-Game",
    image: "/portfolio/assets/project2.png",
    contribution: "Engineered game loop, real-time keyboard event handlers, and collision algorithms."
  },
  {
    title: "Task Management System",
    description: "A full-stack task management system designed to simplify team collaboration, project organization, and task tracking.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/T-Bhagya",
    image: "/portfolio/assets/doit.png",
    contribution: "API development, state management, and UI components."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-white font-medium tracking-widest uppercase mb-2">Featured Projects</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Things I&apos;ve Built</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <ProjectLaptopCard key={idx} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/T-Bhagya" target="_blank" className="border border-primary text-accent px-8 py-3 rounded-xl hover:bg-primary/20 transition-colors inline-block font-medium shadow-[0_0_15px_rgba(84,131,179,0.3)]">
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
