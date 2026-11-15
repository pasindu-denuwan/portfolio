"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code, Sparkles, X } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  category?: string;
  image?: string;
}

export default function ProjectLaptopCard({
  title, description, technologies, githubUrl, demoUrl, category, image
}: ProjectProps) {
  const [imgError, setImgError] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  // Normalize image path for both local dev and GitHub Pages production
  const resolveSrc = (path?: string) => {
    if (!path) return "";
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const clean = path.replace(/^\/portfolio/, "");
    return `${basePath}${clean}`;
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="glass-card rounded-2xl overflow-hidden border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.4)] transition-all duration-150 flex flex-col justify-between h-full w-[300px] sm:w-[340px] md:w-[370px] flex-shrink-0 snap-start group select-none"
    >
      {/* Top Preview Frame - Compact Aspect Ratio */}
      <div className="relative w-full aspect-[16/9] bg-dark/80 border-b border-primary/20 overflow-hidden flex flex-col">
        {/* Browser / Window Header Bar */}
        <div className="px-3.5 py-1.5 bg-dark/90 border-b border-primary/20 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent/70" />
            <span className="w-2 h-2 rounded-full bg-secondary/70" />
            <span className="w-2 h-2 rounded-full bg-primary/70" />
          </div>
          <span className="text-[10px] text-secondary/70 font-mono tracking-wider truncate max-w-[140px]">
            {category || "Project Preview"}
          </span>
        </div>

        {/* Screenshot Image or Fallback */}
        <div className="relative flex-1 w-full h-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/15 via-dark to-dark">
          {image && !imgError ? (
            <img 
              src={resolveSrc(image)} 
              alt={title} 
              loading="lazy"
              decoding="async"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-4 text-center gap-1.5">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-accent">
                <Code className="w-5 h-5" />
              </div>
              <p className="text-[11px] font-semibold text-secondary/80">{title}</p>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
        </div>
      </div>

      {/* Card Content Details - Compact & Aligned */}
      <div className="relative p-4 sm:p-5 flex flex-col justify-between flex-1 gap-3">
        <div className="space-y-1.5">
          {/* Category Tag */}
          {category && (
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-accent text-[10px] font-bold uppercase tracking-wider">
              {category}
            </span>
          )}

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-accent transition-colors truncate">
            {title}
          </h3>

          {/* Description Container: Fixed height, scrollable in-place with Read full toggle */}
          <div className="relative">
            <div
              className="h-11 overflow-y-auto pr-1 text-secondary/90 text-xs leading-relaxed select-text"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(118, 146, 255, 0.4) transparent",
              }}
            >
              {description}
            </div>
            {description.length > 90 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFullDesc(true);
                }}
                className="text-[10px] text-accent hover:text-white font-medium hover:underline inline-flex items-center mt-0.5 transition-colors cursor-pointer"
              >
                Read full
              </button>
            )}
          </div>
        </div>

        <div className="space-y-3 pt-1">
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1">
            {technologies.slice(0, 4).map(tech => (
              <span 
                key={tech} 
                className="px-2 py-0.5 bg-dark/60 border border-primary/25 text-white/90 text-[10px] font-medium rounded-md"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-1.5 py-0.5 bg-primary/20 text-accent text-[10px] font-medium rounded-md">
                +{technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2.5 pt-2.5 border-t border-primary/15">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/20 hover:bg-primary/40 border border-primary/40 text-accent hover:text-white text-[11px] font-bold transition-all"
              >
                <Github className="w-3 h-3" />
                <span>Source Code</span>
              </a>
            )}
            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/20 hover:bg-primary/40 border border-primary/40 text-accent hover:text-white text-[11px] font-bold transition-all"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Full Description Overlay inside card - Zero card size change */}
        <AnimatePresence>
          {showFullDesc && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-dark/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl z-30 flex flex-col justify-between border border-secondary/40 shadow-2xl"
            >
              <div
                className="space-y-2 overflow-y-auto pr-1"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(118, 146, 255, 0.4) transparent",
                }}
              >
                <div className="flex items-center justify-between pb-1 border-b border-primary/20">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider truncate max-w-[200px]">
                    {title}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowFullDesc(false);
                    }}
                    className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-white/90 text-xs leading-relaxed pt-1">
                  {description}
                </p>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFullDesc(false);
                }}
                className="text-[11px] font-semibold text-secondary hover:text-accent text-center pt-2 border-t border-primary/20 transition-colors cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
