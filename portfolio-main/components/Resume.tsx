"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <section className="py-12 px-6 md:px-12 relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass-card p-12 text-center rounded-3xl"
      >
        <h3 className="text-3xl font-bold text-white mb-4">My Resume</h3>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Want to know more about my skills, education and projects? Download my updated CV.
        </p>
        <a href="/portfolio/resume.pdf" target="_blank" className="btn btn-gradient inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-dark font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(193,232,255,0.5)] transition-all">
          <Download className="w-5 h-5" /> Download CV
        </a>
      </motion.div>
    </section>
  );
}
