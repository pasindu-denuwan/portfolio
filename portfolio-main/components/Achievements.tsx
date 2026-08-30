"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import CertificateCard, { Certificate } from "./ui/CertificateCard";

const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "CRYPTX Designathon",
    issuer: "1st Runner Up",
    year: "2026",
    category: "Designathon Award",
    image: "/assets/certificates/image-1.jpeg",
  },
  {
    id: "cert-2",
    title: "Skills for Work",
    issuer: "MAS Holdings",
    year: "2026",
    category: "Professional Workshop",
    image: "/assets/certificates/image-2.jpeg",
  },
  {
    id: "cert-3",
    title: "GitHub Actions for Beginners",
    issuer: "DevOps Course",
    year: "2025",
    category: "CI/CD & Automation",
    image: "/assets/certificates/image-3.png",
  },
  {
    id: "cert-4",
    title: "API Learning 101",
    issuer: "Postman",
    year: "2026",
    category: "API Architecture",
    image: "/assets/certificates/image-4.png",
  },
  {
    id: "cert-5",
    title: "Innovate with Ballerina Coding Challenge",
    issuer: "University of Moratuwa",
    year: "2026",
    category: "Coding Challenge",
    image: "/assets/certificates/image-5.jpg",
  },
  {
    id: "cert-6",
    title: "SQL Basic",
    issuer: "HackerRank",
    year: "2026",
    category: "Database Mastery",
    image: "/assets/certificates/image-6.png",
  }
];

export default function Achievements() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const hasDraggedRef = useRef(false);

  // Smooth continuous auto-scrolling loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.75; // Pixels per frame

    const step = () => {
      if (!isPausedRef.current && !isDraggingRef.current && container) {
        container.scrollLeft += speed;

        // Loop seamlessly halfway through the duplicated list
        const halfScroll = container.scrollWidth / 2;
        if (container.scrollLeft >= halfScroll) {
          container.scrollLeft -= halfScroll;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleToggle = (id: string) => {
    // Prevent accidental toggles when dragging
    if (hasDraggedRef.current) return;
    setExpandedId(prev => (prev === id ? null : id));
  };

  // Manual Left / Right Chevron Controls
  const handleManualScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isPausedRef.current = true;
    const scrollAmount = 370;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });

    setTimeout(() => {
      isPausedRef.current = false;
    }, 2500);
  };

  // Mouse Drag-to-Scroll Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    isPausedRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftStartRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!isDraggingRef.current || !container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;

    if (Math.abs(walk) > 5) {
      hasDraggedRef.current = true;
    }

    container.scrollLeft = scrollLeftStartRef.current - walk;

    // Seamless wrapping during drag
    const halfScroll = container.scrollWidth / 2;
    if (container.scrollLeft >= halfScroll) {
      container.scrollLeft -= halfScroll;
      scrollLeftStartRef.current -= halfScroll;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += halfScroll;
      scrollLeftStartRef.current += halfScroll;
    }
  };

  const handleMouseUpOrLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setTimeout(() => {
        hasDraggedRef.current = false;
        if (!isDraggingRef.current) {
          isPausedRef.current = false;
        }
      }, 1200);
    }
  };

  return (
    <section id="achievements" className="py-20 relative z-10 overflow-hidden mt-8">
      {/* Background blend */}
      <div 
        className="absolute inset-0 pointer-events-none z-[-1]"
        style={{
          background: "radial-gradient(circle at 50% 40%, rgba(27, 44, 193, 0.15), transparent 50%)"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-secondary/30 text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-secondary" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Certificates & <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto mt-3">
            A collection of certifications, workshops, and achievements from my learning journey.
          </p>

          {/* Manual Control Row */}
          <div className="flex items-center justify-end gap-2 mt-6 max-w-7xl mx-auto">
            <button
              onClick={() => handleManualScroll("left")}
              aria-label="Scroll certificates left"
              className="w-9 h-9 rounded-xl glass-panel border border-primary/30 text-accent hover:text-white hover:border-accent hover:bg-primary/30 flex items-center justify-center transition-all shadow-md active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleManualScroll("right")}
              aria-label="Scroll certificates right"
              className="w-9 h-9 rounded-xl glass-panel border border-primary/30 text-accent hover:text-white hover:border-accent hover:bg-primary/30 flex items-center justify-center transition-all shadow-md active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Interactive Horizontal Row (Auto-moves + Supports Manual Drag, Scroll, and Navigation) */}
      <div className="relative w-full overflow-hidden py-4 mask-edge-gradient">
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onTouchStart={() => { isPausedRef.current = true; }}
          onTouchEnd={() => { setTimeout(() => { isPausedRef.current = false; }, 1500); }}
          className="flex flex-row items-center gap-6 overflow-x-auto select-none py-2 px-6 no-scrollbar cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* First set of certificate cards */}
          {certificates.map((cert) => (
            <div 
              key={`set1-${cert.id}`} 
              className="w-[300px] sm:w-[340px] md:w-[380px] flex-shrink-0"
            >
              <CertificateCard 
                certificate={cert} 
                isExpanded={expandedId === `set1-${cert.id}`}
                onToggle={() => handleToggle(`set1-${cert.id}`)}
              />
            </div>
          ))}

          {/* Duplicated set for seamless infinite loop */}
          {certificates.map((cert) => (
            <div 
              key={`set2-${cert.id}`} 
              className="w-[300px] sm:w-[340px] md:w-[380px] flex-shrink-0"
            >
              <CertificateCard 
                certificate={cert} 
                isExpanded={expandedId === `set2-${cert.id}`}
                onToggle={() => handleToggle(`set2-${cert.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
