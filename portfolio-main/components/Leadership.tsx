"use client";
import React from "react";
import { motion } from "framer-motion";

const resolveSrc = (path: string) => {
  const isProd = process.env.NODE_ENV === "production";
  const clean = path.replace(/^\/portfolio/, "");
  return isProd ? `/portfolio${clean}` : clean;
};

interface LeadershipTimelineItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  badge: string;
  type: "rotaract" | "leo" | "ieee";
}

const leadershipTimeline: LeadershipTimelineItem[] = [
  {
    id: "lead-1",
    role: "Vice President",
    organization: "Rotaract Club of Sabaragamuwa University of Sri Lanka",
    period: "2026 – 2027",
    badge: "Current",
    type: "rotaract"
  },
  {
    id: "lead-2",
    role: "Vice President",
    organization: "Leo Club of Sabaragamuwa University of Sri Lanka",
    period: "2026 – 2027",
    badge: "Current",
    type: "leo"
  },
  {
    id: "lead-3",
    role: "Vice President",
    organization: "IEEE Computer Society Chapter, SUSL",
    period: "2026 – 2027",
    badge: "Current",
    type: "ieee"
  },
  {
    id: "lead-4",
    role: "Director of Communications & Public Relations",
    organization: "Rotaract Club of Sabaragamuwa University of Sri Lanka",
    period: "2025 – 2026",
    badge: "Former",
    type: "rotaract"
  },
  {
    id: "lead-5",
    role: "Public Relations Chair",
    organization: "IEEE Computer Society Chapter, SUSL",
    period: "2025 – 2026",
    badge: "Former",
    type: "ieee"
  }
];

function OrganizationLogoBadge({ type }: { type: "rotaract" | "leo" | "ieee" }) {
  switch (type) {
    case "rotaract":
      return (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex flex-col items-center justify-center p-1 sm:p-1.5 flex-shrink-0 shadow-md border border-white/20">
          <div className="flex items-center gap-0.5">
            <span className="text-[#D91B5C] font-black text-[11px] sm:text-xs tracking-tight">Rotaract</span>
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D91B5C]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 3.1a1 1 0 011 .9v1.1a5.9 5.9 0 012.3 1.3l.8-.8a1 1 0 011.4 1.4l-.8.8a5.9 5.9 0 011.3 2.3h1.1a1 1 0 010 2h-1.1a5.9 5.9 0 01-1.3 2.3l.8.8a1 1 0 01-1.4 1.4l-.8-.8a5.9 5.9 0 01-2.3 1.3v1.1a1 1 0 01-2 0v-1.1a5.9 5.9 0 01-2.3-1.3l-.8.8a1 1 0 01-1.4-1.4l.8-.8A5.9 5.9 0 016.1 14H5a1 1 0 010-2h1.1a5.9 5.9 0 011.3-2.3l-.8-.8a1 1 0 011.4-1.4l.8.8a5.9 5.9 0 012.3-1.3V6a1 1 0 011-.9zm-1 4.9a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
          </div>
          <span className="text-[5.5px] sm:text-[6px] text-[#D91B5C] font-bold tracking-tighter">Rotary Club Partner</span>
        </div>
      );
    case "leo":
      return (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center p-1 sm:p-1.5 flex-shrink-0 shadow-md border border-white/20">
          <div className="flex flex-col items-center justify-center">
            <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="#1A1A1A" strokeWidth="2.5" fill="#fff" />
              <text x="24" y="21" textAnchor="middle" fill="#9B6B1F" fontSize="11" fontWeight="900" fontFamily="sans-serif">LEO</text>
              <path d="M12 28c3 5 8 7 12 7s9-2 12-7c-2 2-6 3-12 3s-10-1-12-3z" fill="#D4AF37" />
              <path d="M15 22c-2-3 0-6 2-7s3 2 2 4c2-2 5-2 6 0-1-2 0-5 2-4s4 4 2 7" stroke="#1A1A1A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>
      );
    case "ieee":
      return (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center p-1 sm:p-1.5 flex-shrink-0 shadow-md border border-white/20 overflow-hidden">
          <img
            src={resolveSrc("/assets/ieee-cs.png")}
            alt="IEEE Computer Society Chapter, SUSL"
            className="w-full h-full object-contain"
          />
        </div>
      );
  }
}

export default function Leadership() {
  return (
    <section id="leadership" className="py-14 md:py-16 px-4 sm:px-6 md:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dark/90 border border-primary/40 text-xs font-semibold text-accent uppercase tracking-widest mb-4 shadow-sm">
            <span>LEADERSHIP JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Positions & Leadership
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-3.5 mb-4 rounded-full" />
          <p className="text-secondary/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A journey of growth, responsibility, and impact through leadership roles across clubs and societies.
          </p>
        </motion.div>

        {/* Leadership List */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {leadershipTimeline.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex items-center gap-4 sm:gap-6 group relative w-full min-w-0"
            >
              {/* Desktop Left Pure White Date Numbers */}
              <div className="hidden md:block w-28 text-right text-xs sm:text-sm font-bold text-white tracking-wider flex-shrink-0">
                {item.period}
              </div>

              {/* Content Card - Fully Fluid & Responsive */}
              <div
                className="flex-1 glass-card p-3.5 sm:p-4.5 rounded-2xl border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] transition-all duration-300 flex items-center justify-between gap-3 sm:gap-4 min-w-0"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <OrganizationLogoBadge type={item.type} />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-accent transition-colors leading-snug break-words">
                      {item.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary/80 font-normal mt-0.5 leading-tight break-words">
                      {item.organization}
                    </p>
                  </div>
                </div>

                {/* Right Year / Current / Former Badge */}
                <div className="flex-shrink-0">
                  <span
                    className={`inline-block px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap border transition-all ${item.badge === "Current"
                        ? "bg-primary/25 border-secondary/50 text-accent font-bold shadow-[0_0_12px_rgba(27,44,193,0.3)]"
                        : "bg-dark/80 border-primary/40 text-secondary"
                      }`}
                  >
                    {item.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
