"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CertificateCard, { Certificate } from "./ui/CertificateCard";

const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "CRYPTX Designathon",
    issuer: "1st Runner Up",
    year: "2026",
    image: "/portfolio/assets/certificates/image-1.jpeg",
  },
  {
    id: "cert-2",
    title: "Skills for Work",
    issuer: "MAS Holdings",
    year: "2026",
    image: "/portfolio/assets/certificates/image-2.jpeg",
  },
  {
    id: "cert-3",
    title: "GitHub Actions for Beginners",
    issuer: "",
    year: "2025",
    image: "/portfolio/assets/certificates/image-3.png",
  },
  {
    id: "cert-4",
    title: "API Learning 101",
    issuer: "",
    year: "2026",
    image: "/portfolio/assets/certificates/image-4.png",
  },
  {
    id: "cert-5",
    title: "Innovate with Ballerina Coding Challenge",
    issuer: "University of Moratuwa",
    year: "2026",
    image: "/portfolio/assets/certificates/image-5.jpg",
  },
  {
    id: "cert-6",
    title: "SQL Basic",
    issuer: "HackerRank",
    year: "2026",
    image: "/portfolio/assets/certificates/image-6.png",
  }
];

export default function Achievements() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="achievements" className="py-16 relative z-10 overflow-hidden mt-8">
      {/* Background blend */}
      <div 
        className="absolute inset-0 pointer-events-none z-[-1]"
        style={{
          background: "radial-gradient(circle at 50% 40%, rgba(84, 131, 179, 0.12), transparent 50%)"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-white font-medium tracking-widest uppercase mb-2">CERTIFICATES & ACHIEVEMENTS</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Milestones & Recognitions</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            A collection of certifications, workshops, and achievements from my learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <CertificateCard 
                certificate={cert} 
                isExpanded={expandedId === cert.id}
                onToggle={() => handleToggle(cert.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
