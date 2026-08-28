"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Database, Settings, Cloud } from "lucide-react";
import Folder from "./ui/Folder";

const technologyGroups = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 md:w-8 md:h-8 mb-1" />,
    technologies: ["Python", "Java", "C", "C++", "JavaScript"]
  },
  {
    title: "Frontend",
    icon: <Globe className="w-6 h-6 md:w-8 md:h-8 mb-1" />,
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 md:w-8 md:h-8 mb-1" />,
    technologies: ["MySQL", "MongoDB"]
  },
  {
    title: "Tools",
    icon: <Settings className="w-6 h-6 md:w-8 md:h-8 mb-1" />,
    technologies: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Power BI"]
  },
  {
    title: "Cloud",
    icon: <Cloud className="w-6 h-6 md:w-8 md:h-8 mb-1" />,
    technologies: ["Microsoft Azure"]
  }
];

export default function Skills() {
  const [activeFolder, setActiveFolder] = useState<number | null>(null);

  const toggleFolder = (index: number) => {
    setActiveFolder(activeFolder === index ? null : index);
  };

  return (
    <section 
      id="skills" 
      className="pt-0 pb-16 px-6 md:px-12 relative z-10 flex flex-col justify-center mt-0"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 md:mb-32"
        >
          <h3 className="text-white font-medium tracking-widest uppercase mb-4">Technologies I Work With</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technologies & Tools</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            The technologies and tools I use to build, analyze and bring ideas to life.
          </p>
        </motion.div>

        {/* Folders Container */}
        <div className="flex flex-wrap justify-center items-end gap-x-6 gap-y-36 md:gap-x-12 lg:gap-x-16 max-w-6xl mx-auto relative mt-24 pb-20">
          {technologyGroups.map((category, idx) => (
            <div key={category.title} className="z-10 relative">
              <Folder 
                title={category.title}
                icon={category.icon}
                technologies={category.technologies}
                isOpen={activeFolder === idx}
                onClick={() => toggleFolder(idx)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
