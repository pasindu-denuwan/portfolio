"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

const resolveSrc = (path: string) => {
  const isProd = process.env.NODE_ENV === "production";
  const clean = path.replace(/^\/portfolio/, "");
  return isProd ? `/portfolio${clean}` : clean;
};

const roles = [
  "UI/UX Designer",
  "Project Manager",
  "QA Engineer",
  "Data Analyst"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 order-2 md:order-1"
        >
          <p className="text-accent tracking-widest font-semibold uppercase text-sm md:text-base mb-2">Hello, I&apos;m</p>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-2">
            Pasindu <span className="text-white">Denuwan</span>
          </h1>

          {/* Clean, Professional UX Vertical Slide-Fade Animation */}
          <div className="h-10 md:h-12 flex items-center overflow-hidden mb-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="flex items-center gap-3"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-accent tracking-wide">
                  {roles[roleIndex]}
                </h2>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl">
            Passionate about turning data and ideas into simple, meaningful digital solutions. Pursuing B.Sc (Hons) in Computing and Information Systems at Sabaragamuwa University of Sri Lanka.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#projects" className="glass-panel px-6 py-3 flex items-center gap-2 hover:bg-primary/40 transition-colors text-white font-medium group rounded-xl">
              View My Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={resolveSrc("/resume.pdf")} target="_blank" className="border border-primary/40 px-6 py-3 flex items-center gap-2 hover:bg-primary/20 transition-colors text-accent font-medium rounded-xl">
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>

          <div className="flex gap-4 mt-6 text-secondary">
            <a href="https://github.com/pasindu-denuwan" target="_blank" className="hover:text-accent transition-colors"><Github /></a>
            <a href="https://linkedin.com/in/pasindu-denuwan" target="_blank" className="hover:text-accent transition-colors"><Linkedin /></a>
            <a href="mailto:pasindudenuwan@gmail.com" className="hover:text-accent transition-colors"><Mail /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center order-1 md:order-2 mt-8 md:mt-0"
        >
          {/* Circular Frame with Glow */}
          <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full animate-float shadow-[0_0_60px_rgba(27,44,193,0.5)]">
            <img
              src={resolveSrc("/assets/pasinduDenuwan.png")}
              alt="Pasindu Denuwan"
              loading="eager"
              decoding="async"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Floating Glass Card */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute bottom-4 -left-8 md:-left-12 glass-card p-4 rounded-xl max-w-[220px]"
          >
            <p className="text-xs text-secondary"><b>Undergraduate</b></p>
            <p className="text-white font-bold text-sm mt-1">B.Sc (Hons) in Computing & IS</p>
            <p className="text-xs text-accent mt-1">Sabaragamuwa University of Sri Lanka</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
