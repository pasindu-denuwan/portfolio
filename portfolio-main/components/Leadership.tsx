"use client";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const activities = [
  {
    role: "Event Organizer",
    organization: "University Tech Club",
    description: "Organized an inter-university hackathon with over 200 participants.",
    year: "2024"
  },
  {
    role: "Volunteer",
    organization: "Community Tech Outreach",
    description: "Mentored high school students in basic programming concepts.",
    year: "2023"
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-primary font-medium tracking-widest uppercase mb-2">Leadership & Volunteering</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Beyond academics</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-24 h-24 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{item.role}</h4>
              <p className="text-accent font-medium mb-4">{item.organization} • {item.year}</p>
              <p className="text-secondary/80 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
