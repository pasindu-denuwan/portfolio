"use client";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, Target, Lightbulb, Rocket } from "lucide-react";

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
    <section id="about" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-white font-medium tracking-widest uppercase mb-2">About Me</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Driven by Technology, Inspired by Data</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <p className="text-white/90 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
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
