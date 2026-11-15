"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

const resolveSrc = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const clean = path.replace(/^\/portfolio/, "");
  return `${basePath}${clean}`;
};

const roles = [
  "Project Manager",
  "UI/UX Designer",
  "QA Engineer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[roleIndex % roles.length];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 md:pt-28 pb-10 md:pb-14 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 md:gap-5 order-2 md:order-1"
        >
          <p className="text-accent tracking-widest font-semibold uppercase text-xs md:text-sm">Hello, I&apos;m</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-bold text-white tracking-tight leading-none">
            Pasindu <span className="text-white">Denuwan</span>
          </h1>

          {/* Clean, Professional UX Vertical Slide-Fade Animation */}
          <div className="h-9 md:h-11 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="flex items-center gap-2.5"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-accent tracking-wide">
                  {currentRole}
                </h2>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-xl">
            Passionate about turning data and ideas into simple, meaningful digital solutions. Pursuing B.Sc (Hons) in Computing and Information Systems at Sabaragamuwa University of Sri Lanka.
          </p>

          <div className="flex flex-wrap gap-4 mt-1 md:mt-2">
            <a href="#projects" className="glass-panel px-6 py-3 flex items-center gap-2 hover:bg-primary/40 transition-colors text-white text-sm md:text-base font-medium group rounded-xl">
              View My Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={resolveSrc("/resume.pdf")} target="_blank" className="border border-primary/40 px-6 py-3 flex items-center gap-2 hover:bg-primary/20 transition-colors text-accent text-sm md:text-base font-medium rounded-xl">
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>

          <div className="flex items-center gap-5 mt-2 md:mt-3 text-secondary">
            <a href="https://github.com/pasindu-denuwan" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub"><Github className="w-[22px] h-[22px]" /></a>
            <a href="https://linkedin.com/in/pasindu-denuwan" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn"><Linkedin className="w-[22px] h-[22px]" /></a>
            <a href="https://medium.com/@denuwan672" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Medium">
              <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </a>
            <a href="mailto:denuwan672@gmail.com" className="hover:text-accent transition-colors" aria-label="Email"><Mail className="w-[22px] h-[22px]" /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center order-1 md:order-2 mt-4 md:mt-0"
        >
          {/* Profile Cutout Image with Bottom Fade */}
          <div
            className="relative w-[26rem] sm:w-[30rem] md:w-[36rem] lg:w-[42rem] xl:w-[48rem] max-h-[78vh] md:max-h-[85vh] lg:max-h-[88vh] flex items-center justify-center animate-float"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
            }}
          >
            <img
              src={resolveSrc("/assets/1.webp")}
              alt="Pasindu Denuwan"
              className="w-full max-h-[78vh] md:max-h-[85vh] lg:max-h-[88vh] object-contain pointer-events-none select-none scale-115 md:scale-120"
              style={{
                filter:
                  "drop-shadow(1.5px 0 0 rgba(255, 255, 255, 0.9)) drop-shadow(-1.5px 0 0 rgba(255, 255, 255, 0.9)) drop-shadow(0 1.5px 0 rgba(255, 255, 255, 0.9)) drop-shadow(0 -1.5px 0 rgba(255, 255, 255, 0.9)) drop-shadow(1px 1px 0 rgba(255, 255, 255, 0.9)) drop-shadow(-1px -1px 0 rgba(255, 255, 255, 0.9)) drop-shadow(1px -1px 0 rgba(255, 255, 255, 0.9)) drop-shadow(-1px 1px 0 rgba(255, 255, 255, 0.9)) drop-shadow(0 20px 60px rgba(27, 44, 193, 0.45))",
              }}
            />
          </div>

          {/* Floating Glass Card */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -bottom-1 md:bottom-2 -left-2 md:-left-8 glass-card p-4 sm:p-5 px-5 sm:px-6 rounded-2xl shadow-2xl z-20"
          >
            <p className="text-xs sm:text-sm text-secondary font-semibold">Undergraduate</p>
            <p className="text-white font-bold text-sm sm:text-lg mt-1 whitespace-nowrap">B.Sc (Hons) in Computing and Information Systems</p>
            <p className="text-xs sm:text-sm text-accent mt-1 whitespace-nowrap">Sabaragamuwa University of Sri Lanka</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
