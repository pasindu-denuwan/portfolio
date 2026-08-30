"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Users2, 
  Crown, 
  Globe2, 
  ShieldCheck,
  Calendar
} from "lucide-react";

interface LeadershipRole {
  id: string;
  role: string;
  organization: string;
  period: string;
  status: string;
  tag: string;
  description: string;
  type: "Rotaract" | "IEEE" | "Leo";
}

const leadershipData: LeadershipRole[] = [
  {
    id: "lead-1",
    role: "Vice President",
    organization: "Rotaract Club of Sabaragamuwa University of Sri Lanka",
    period: "2026 – 2027",
    status: "Executive Board",
    tag: "Executive Leadership",
    description: "Driving club governance, strategic planning of district-level community initiatives, team empowerment, and international youth leadership development.",
    type: "Rotaract"
  },
  {
    id: "lead-2",
    role: "Vice President",
    organization: "Leo Club of Sabaragamuwa University of Sri Lanka",
    period: "2026 – 2027",
    status: "Executive Board",
    tag: "Executive Leadership",
    description: "Spearheading humanitarian service operations, university-wide social impact projects, operational coordination, and membership growth across university faculties.",
    type: "Leo"
  },
  {
    id: "lead-3",
    role: "Director of Public Relations and Communication",
    organization: "Rotaract Club of Sabaragamuwa University of Sri Lanka",
    period: "2025 – 2027",
    status: "Board of Directors",
    tag: "Brand & Media",
    description: "Leading digital branding, external media relations, official press communications, and promotional strategy for club milestones and flagship community projects.",
    type: "Rotaract"
  },
  {
    id: "lead-4",
    role: "Public Relations Chair",
    organization: "IEEE Computer Science Chapter of Sabaragamuwa University of Sri Lanka",
    period: "2025 – 2027",
    status: "Technical Chapter Chair",
    tag: "Tech Outreach",
    description: "Managing technical publicity, social presence, student developer engagement, and public outreach for IEEE tech talks, hackathons, and research webinars.",
    type: "IEEE"
  }
];

function OrganizationBadge({ type }: { type: "Rotaract" | "IEEE" | "Leo" }) {
  switch (type) {
    case "Rotaract":
      return (
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#D91B5C]/25 to-[#9B113E]/10 border border-[#D91B5C]/40 flex items-center justify-center text-[#FF5388] shadow-[0_0_15px_rgba(217,27,92,0.25)] flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
          <Crown className="w-5 h-5" />
        </div>
      );
    case "IEEE":
      return (
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#00629B]/30 to-[#002855]/15 border border-[#00629B]/50 flex items-center justify-center text-[#50B7FF] shadow-[0_0_15px_rgba(0,98,155,0.3)] flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
          <Globe2 className="w-5 h-5" />
        </div>
      );
    case "Leo":
      return (
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#F5A623]/25 to-[#B46A00]/15 border border-[#F5A623]/40 flex items-center justify-center text-[#FFC107] shadow-[0_0_15px_rgba(245,166,35,0.25)] flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
          <ShieldCheck className="w-5 h-5" />
        </div>
      );
  }
}

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-secondary/30 text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            <Users2 className="w-3.5 h-3.5 text-secondary" />
            <span>Leadership & Governance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Leading with <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Purpose & Impact</span>
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto mt-3">
            Key executive roles and governance responsibilities in international student organizations, technical chapters, and community initiatives.
          </p>
        </motion.div>

        {/* 2x2 Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 md:p-7 rounded-2xl border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Background ambient gradient glow on hover */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Header Row: Emblem + Role & Org + Period Badge */}
                <div className="flex items-start justify-between gap-4 pb-4 mb-4 border-b border-primary/20">
                  <div className="flex items-start gap-3.5">
                    <OrganizationBadge type={item.type} />
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/25 border border-primary/40 text-accent">
                          {item.status}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors leading-snug">
                        {item.role}
                      </h3>
                      <p className="text-xs md:text-sm text-secondary/90 font-medium mt-0.5">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  {/* Year Pill */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-dark/70 border border-primary/30 text-accent font-semibold text-xs flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-secondary" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary/90 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
