"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Sc (Hons) in Computing and Information Systems",
    school: "Sabaragamuwa University of Sri Lanka",
    period: "Jan 2025 – Present",
    focus: ["Faculty of Computing", "Data Analytics", "Database Management", "Software Engineering", "OOP & Data Structures"]
  },
  {
    degree: "Python Programming (Certification Track)",
    school: "University of Moratuwa",
    period: "2025 (Reading)",
    focus: ["Python Core", "Standard Libraries", "Object-Oriented Programming", "Algorithms"]
  },
  {
    degree: "Power BI for Beginners",
    school: "Microsoft - Simplilearn",
    period: "2025 (Reading)",
    focus: ["Interactive Reports", "Data Modeling", "DAX Measures", "Dashboard Visualization"]
  },
  {
    degree: "Physical Science Stream (G.C.E. Advanced Level)",
    school: "Govt. Science College Matale",
    period: "2020 – 2022",
    focus: ["Combined Mathematics", "Physics", "Chemistry", "School Prefect", "Science Club"]
  }
];

export default function EducationTimeline() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-white font-medium tracking-widest uppercase mb-2">Education</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">My Academic Journey</h2>
        </motion.div>

        <div className="relative border-l border-primary/30 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {education.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative glass-card p-8"
            >
              <div className="absolute -left-[45px] md:-left-[61px] top-8 w-8 h-8 md:w-10 md:h-10 rounded-full bg-deep border-2 border-accent flex items-center justify-center glow text-accent">
                <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-white">{item.degree}</h4>
                <span className="text-primary font-medium bg-primary/10 px-3 py-1 rounded-full text-sm w-fit mt-2 md:mt-0">{item.period}</span>
              </div>
              <p className="text-accent text-lg mb-6">{item.school}</p>
              
              <div className="flex flex-wrap gap-2">
                {item.focus.map((focusItem) => (
                  <span key={focusItem} className="text-sm text-secondary/90 bg-deep/50 px-3 py-1 rounded-md border border-primary/20">
                    {focusItem}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
