"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category?: string;
  image: string;
  credentialUrl?: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function CertificateCard({ certificate, isExpanded, onToggle }: CertificateCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position tracking for 3D tilt and spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const spotlightX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const spotlightY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  
  // Transform mouse pos to degrees for subtle 3D tilt (+/- 6deg)
  const rotateX = useTransform(mouseY, [0, 300], [6, -6]);
  const rotateY = useTransform(mouseX, [0, 400], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Check if touch device for mobile toggle
  const isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;

  const handleMouseEnter = () => {
    if (!isTouchDevice && !isExpanded) onToggle();
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice && isExpanded) onToggle();
    // Reset tilt gracefully
    mouseX.set(200); 
    mouseY.set(150);
  };

  const handleClick = () => {
    if (isTouchDevice) onToggle();
  };

  // We use Framer Motion's useMotionTemplate to construct the radial gradient string dynamically
  const spotlightBackground = useMotionTemplate`radial-gradient(circle at ${spotlightX}px ${spotlightY}px, rgba(171, 210, 250, 0.15), transparent 55%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        rotateX: isExpanded ? rotateX : 0,
        rotateY: isExpanded ? rotateY : 0,
        transformPerspective: 1000,
        border: "1px solid rgba(171, 210, 250, 0.16)",
        boxShadow: "0 12px 35px rgba(9, 21, 64, 0.35)",
      }}
      className="relative w-full aspect-video rounded-[20px] overflow-hidden cursor-pointer bg-dark"
    >
      {/* Image Layer */}
      <motion.img
        src={certificate.image}
        alt={certificate.title}
        initial={{ scale: 1, filter: "blur(0px) brightness(1)" }}
        animate={{
          scale: isExpanded ? 1.06 : 1,
          filter: isExpanded ? "blur(4px) brightness(0.45)" : "blur(0px) brightness(1)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Dynamic Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20"
        style={{ background: spotlightBackground }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Overlay Information Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          y: isExpanded ? 0 : 20,
          scale: isExpanded ? 1 : 0.95
        }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
      >
        <div 
          className="w-[92%] p-4 rounded-[16px] text-center"
          style={{
             background: "rgba(9, 21, 64, 0.65)",
             backdropFilter: "blur(14px)",
             WebkitBackdropFilter: "blur(14px)",
             border: "1px solid rgba(171, 210, 250, 0.25)",
             boxShadow: "0 10px 35px rgba(9, 21, 64, 0.45)"
          }}
        >
          {certificate.category && (
            <span className="inline-block px-3 py-1 bg-primary/20 text-accent text-xs font-semibold rounded-full mb-3">
              {certificate.category}
            </span>
          )}
          <h3 className="text-lg font-bold text-white mb-2 leading-tight">
            {certificate.title}
          </h3>
          <p className="text-secondary text-xs mb-3">
            {certificate.issuer}
            {certificate.issuer && certificate.year && " • "}
            {certificate.year}
          </p>
          {certificate.credentialUrl && (
            <a 
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto inline-flex items-center justify-center text-accent font-medium text-sm hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View Certificate <span className="ml-1">→</span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
