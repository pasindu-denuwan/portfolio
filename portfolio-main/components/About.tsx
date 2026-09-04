"use client";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, Target, Lightbulb, Rocket, User } from "lucide-react";

export default function About() {
  const cards = [
    { icon: <MapPin className="w-5 h-5" />, title: "Location", value: "Sabaragamuwa / Colombo, Sri Lanka" },
    { icon: <GraduationCap className="w-5 h-5" />, title: "Degree", value: "B.Sc (Hons) in Computing and Information Systems" },
    { icon: <Code2 className="w-5 h-5" />, title: "Focus", value: "Data Science & Software Engineering" },
    { icon: <Lightbulb className="w-5 h-5" />, title: "Interests", value: "Python, SQL, Analytics & Web Development" },
    { icon: <Target className="w-5 h-5" />, title: "Passion", value: "Data Insights & Problem Solving" },
    { icon: <Rocket className="w-5 h-5" />, title: "Institution", value: "Sabaragamuwa University of Sri Lanka" },
  ];

  return (
    <section id="about" className="py-14 md:py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-secondary/30 text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5 text-secondary" />
            <span>About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Driven by Technology, Inspired by <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Data</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl border border-primary/30 hover:border-secondary/40 transition-all duration-300 shadow-2xl"
        >
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
            An enthusiastic undergraduate pursuing a B.Sc (Hons) in Computing and Information Systems at the Faculty of Computing, Sabaragamuwa University of Sri Lanka, with a growing interest in data science and analytics. Passionate about learning Python and SQL and continuously improving skills to gain practical experience and create meaningful data driven insights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="glass-card p-5 sm:p-6 rounded-2xl border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/20 border border-primary/30 text-accent group-hover:bg-primary/40 group-hover:border-secondary/60 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(118,146,255,0.4)] flex items-center justify-center transition-all duration-300 flex-shrink-0">
                  {card.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-secondary/80 text-xs font-semibold uppercase tracking-wider mb-1">
                    {card.title}
                  </h4>
                  <p className="text-white font-bold text-sm sm:text-base group-hover:text-accent transition-colors leading-snug">
                    {card.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
