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
          className="glass-card p-6 md:p-10"
        >
          <p className="text-white/90 text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            An enthusiastic undergraduate pursuing a B.Sc (Hons) in Computing and Information Systems at the Faculty of Computing, Sabaragamuwa University of Sri Lanka, with a growing interest in data science and analytics. Passionate about learning Python and SQL and continuously improving skills to gain practical experience and create meaningful data driven insights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 flex items-start gap-4 group"
              >
                <div className="p-3 rounded-lg bg-primary/20 text-accent group-hover:bg-primary/40 transition-colors">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-secondary/80 text-sm font-medium">{card.title}</h4>
                  <p className="text-white font-medium mt-1">{card.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
