"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Globe, 
  Database, 
  Settings, 
  Cloud, 
  Sparkles, 
  Terminal,
  Layers
} from "lucide-react";

interface SkillItem {
  name: string;
  category: string;
  level: "Proficient" | "Advanced" | "Intermediate" | "Exploring";
  description: string;
  iconText?: string;
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

const allSkillsList: SkillItem[] = skillCategories.flatMap(c => c.skills as SkillItem[]);

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
                className="glass-card p-6 md:p-7 rounded-2xl border border-primary/30 hover:border-secondary/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-primary/20">
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

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const isHovered = hoveredSkill?.name === skill.name;
                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill as SkillItem)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200 flex items-center gap-2 border ${
                            isHovered
                              ? "bg-primary text-accent border-accent shadow-[0_0_15px_rgba(171,210,250,0.5)] scale-105"
                              : "bg-dark/60 text-white/90 border-primary/30 hover:border-secondary hover:text-white"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Micro Level Indicator */}
                <div className="mt-6 pt-3 border-t border-primary/15 flex items-center justify-between text-[11px] text-secondary/70">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-accent" />
                    Interactive Stack
                  </span>
                  <span className="italic">Hover for details</span>
                </div>
              </motion.div>
            ))}
          </div>

        {/* Interactive Spotlight Info Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass-panel p-5 rounded-2xl border border-primary/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/30 border border-primary/40 text-accent flex items-center justify-center flex-shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="text-white text-xs font-bold">
                {hoveredSkill ? (
                  <span>
                    Focus: <span className="text-accent">{hoveredSkill.name}</span>
                  </span>
                ) : (
                  <span>Explore Technical Capabilities</span>
                )}
              </p>
              <p className="text-secondary text-[11px] mt-0.5">
                {hoveredSkill
                  ? hoveredSkill.description
                  : "Hover over any technology chip to see its practical engineering application & focus."}
              </p>
            </div>
          </div>

          {hoveredSkill && (
            <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-accent text-[10px] font-bold uppercase tracking-wider flex-shrink-0">
              {hoveredSkill.level}
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
}
