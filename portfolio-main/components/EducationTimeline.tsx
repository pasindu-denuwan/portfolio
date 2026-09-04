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
    <section id="education" className="py-14 md:py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-secondary/30 text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-secondary" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            My Academic <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto mt-3">
            An overview of my academic qualifications and educational background.
          </p>
        </motion.div>

        <div className="relative border-l border-primary/30 ml-4 md:ml-8 pl-8 md:pl-12 space-y-6 md:space-y-8">
          {education.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative group w-full min-w-0 cursor-default"
            >
              {/* Timeline Icon Node with Interactive Hover Glow & Scale */}
              <div className="absolute -left-[45px] md:-left-[61px] top-6 sm:top-7 w-8 h-8 md:w-10 md:h-10 rounded-full bg-deep border-2 border-accent/70 group-hover:border-secondary group-hover:bg-primary/30 group-hover:shadow-[0_0_18px_rgba(118,146,255,0.7)] group-hover:scale-110 flex items-center justify-center text-accent group-hover:text-white transition-all duration-300 z-10">
                <GraduationCap className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:scale-105" />
              </div>
              
              {/* Content Card with Interactive Glow & Hover Elevation */}
              <div className="glass-card p-5 sm:p-6 md:p-7 rounded-2xl border border-primary/30 group-hover:border-secondary/60 group-hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] group-hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors leading-snug">
                    {item.degree}
                  </h4>
                  <span className="inline-block px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap border bg-primary/25 border-secondary/50 text-accent font-bold shadow-[0_0_12px_rgba(27,44,193,0.3)] group-hover:border-secondary group-hover:shadow-[0_0_16px_rgba(27,44,193,0.45)] transition-all duration-300 w-fit">
                    {item.period}
                  </span>
                </div>
                <p className="text-secondary/90 group-hover:text-accent/90 text-sm sm:text-base md:text-lg transition-colors">
                  {item.school}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
