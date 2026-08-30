"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Sc (Hons) in Computing and Information Systems",
    school: "Sabaragamuwa University of Sri Lanka",
    period: "Jan 2025 – Present"
  },
  {
    degree: "Dip. in Business Management",
    school: "Sabaragamuwa University of Sri Lanka",
    period: "2025 (Reading)"
  },
  {
    degree: "Physical Science Stream (G.C.E. Advanced Level)",
    school: "Rahula College, Matara",
    period: "2020 – 2022"
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

        <div className="relative border-l border-primary/30 ml-4 md:ml-8 pl-8 md:pl-12 space-y-10">
          {education.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative glass-card p-6 md:p-7"
            >
              <div className="absolute -left-[45px] md:-left-[61px] top-7 w-8 h-8 md:w-10 md:h-10 rounded-full bg-deep border-2 border-accent flex items-center justify-center glow text-accent">
                <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-xl md:text-2xl font-bold text-white">{item.degree}</h4>
                <span className="text-primary font-medium bg-primary/10 px-3 py-1 rounded-full text-sm w-fit mt-2 md:mt-0">{item.period}</span>
              </div>
              <p className="text-accent text-base md:text-lg">{item.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
