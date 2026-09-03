"use client";
import React from "react";
import { motion } from "framer-motion";

import { Users } from "lucide-react";

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
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center p-1 sm:p-1.5 flex-shrink-0 shadow-md border border-white/20 overflow-hidden">
          <img
            src={resolveSrc("/assets/rotaract.png")}
            alt="Rotaract Club of Sabaragamuwa University of Sri Lanka"
            className="w-full h-full object-contain"
          />
        </div>
      );
    case "leo":
      return (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center p-1 sm:p-1.5 flex-shrink-0 shadow-md border border-white/20 overflow-hidden">
          <img
            src={resolveSrc("/assets/leo.jpg")}
            alt="Leo Club of Sabaragamuwa University of Sri Lanka"
            className="w-full h-full object-contain"
          />
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-secondary/30 text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-secondary" />
            <span>Leadership Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Positions & <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto mt-3">
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
