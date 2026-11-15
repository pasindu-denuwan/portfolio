
"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, GraduationCap, Phone, MessageSquare } from "lucide-react";

export default function Contact() {
  
  return (
    
    <section id="contact" className="py-14 md:py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-secondary/30 text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-secondary" />
            <span>Contact & Reference</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let&apos;s <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto mt-3">
            Feel free to reach out for collaborations, project inquiries, or opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
          {/* Contact Info & Reference */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between h-full"
          >
            {/* 5 Contact Cards */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {/* Email Card */}
              <a 
                href="mailto:denuwan672@gmail.com"
                className="glass-card p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-xl border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] hover:-translate-y-0.5 transition-all duration-300 group flex items-center gap-3.5 min-w-0"
              >
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-accent group-hover:bg-primary/40 group-hover:border-secondary/60 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(118,146,255,0.4)] transition-all duration-300 flex-shrink-0">
                  <Mail className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-secondary group-hover:text-accent transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-secondary/80 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">Email</h4>
                  <p className="text-white font-medium text-xs sm:text-sm group-hover:text-accent transition-colors truncate">
                    denuwan672@gmail.com
                  </p>
                </div>
              </a>
              
              {/* LinkedIn Card */}
              <a 
                href="https://linkedin.com/in/pasindu-denuwan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-xl border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] hover:-translate-y-0.5 transition-all duration-300 group flex items-center gap-3.5 min-w-0"
              >
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-accent group-hover:bg-primary/40 group-hover:border-secondary/60 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(118,146,255,0.4)] transition-all duration-300 flex-shrink-0">
                  <Linkedin className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-secondary group-hover:text-accent transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-secondary/80 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">LinkedIn</h4>
                  <p className="text-white font-medium text-xs sm:text-sm group-hover:text-accent transition-colors truncate">
                    linkedin.com/in/pasindu-denuwan
                  </p>
                </div>
              </a>

              {/* GitHub Card */}
              <a 
                href="https://github.com/pasindu-denuwan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-xl border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] hover:-translate-y-0.5 transition-all duration-300 group flex items-center gap-3.5 min-w-0"
              >
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-accent group-hover:bg-primary/40 group-hover:border-secondary/60 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(118,146,255,0.4)] transition-all duration-300 flex-shrink-0">
                  <Github className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-secondary group-hover:text-accent transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-secondary/80 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">GitHub</h4>
                  <p className="text-white font-medium text-xs sm:text-sm group-hover:text-accent transition-colors truncate">
                    github.com/pasindu-denuwan
                  </p>
                </div>
              </a>

              {/* Medium Card */}
              <a 
                href="https://medium.com/@denuwan672" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-xl border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] hover:-translate-y-0.5 transition-all duration-300 group flex items-center gap-3.5 min-w-0"
              >
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-accent group-hover:bg-primary/40 group-hover:border-secondary/60 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(118,146,255,0.4)] transition-all duration-300 flex-shrink-0">
                  <svg 
                    className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-secondary group-hover:text-accent transition-colors fill-current" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-secondary/80 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">Medium</h4>
                  <p className="text-white font-medium text-xs sm:text-sm group-hover:text-accent transition-colors truncate">
                    medium.com/@denuwan672
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="glass-card p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-xl border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] hover:-translate-y-0.5 transition-all duration-300 group flex items-center gap-3.5 min-w-0 cursor-default">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-accent group-hover:bg-primary/40 group-hover:border-secondary/60 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(118,146,255,0.4)] transition-all duration-300 flex-shrink-0">
                  <MapPin className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-secondary group-hover:text-accent transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-secondary/80 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">Location</h4>
                  <p className="text-white font-medium text-xs sm:text-sm group-hover:text-accent transition-colors">
                    Matara / Colombo, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Reference Card */}
            <div className="glass-card p-3.5 sm:p-4 rounded-xl border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] hover:-translate-y-0.5 transition-all duration-300 group mt-2.5 sm:mt-3 cursor-default">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/20 border border-secondary/30 text-[10px] sm:text-[11px] font-semibold text-accent uppercase tracking-wider mb-2">
                <GraduationCap className="w-3 h-3 text-secondary" />
                <span>Academic Reference</span>
              </div>
              <h4 className="text-white font-bold text-base sm:text-lg group-hover:text-accent transition-colors leading-snug">
                Ms. Kumudu Kauwshalya
              </h4>
              <p className="text-secondary/90 text-xs mt-0.5 mb-2.5 leading-relaxed">
                Senior Lecturer Grade II • Sabaragamuwa University of Sri Lanka
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <a 
                  href="mailto:kaushalya@foc.sab.ac.lk" 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark/70 border border-primary/30 hover:border-secondary hover:bg-primary/20 text-secondary hover:text-white font-medium transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-accent" /> kaushalya@foc.sab.ac.lk
                </a>
                <a 
                  href="tel:+94717063574" 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark/70 border border-primary/30 hover:border-secondary hover:bg-primary/20 text-secondary hover:text-white font-medium transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-accent" /> +94 71 706 3574
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-5 sm:p-6 md:p-8 rounded-2xl border border-primary/30 hover:border-secondary/50 hover:shadow-[0_8px_30px_rgba(27,44,193,0.25)] transition-all duration-300 flex flex-col justify-between h-full"
          >
            <form className="flex flex-col justify-between h-full gap-3 sm:gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-semibold text-secondary">Your Name *</label>
                <input 
                  type="text" 
                  className="bg-dark/60 border border-primary/30 rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-white placeholder:text-secondary/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/40 hover:border-primary/60 transition-all duration-200" 
                  placeholder="e.g. Kamal Perera" 
                  required 
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-semibold text-secondary">Your Email *</label>
                <input 
                  type="email" 
                  className="bg-dark/60 border border-primary/30 rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-white placeholder:text-secondary/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/40 hover:border-primary/60 transition-all duration-200" 
                  placeholder="kamal@example.com" 
                  required 
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-semibold text-secondary">Subject</label>
                <input 
                  type="text" 
                  className="bg-dark/60 border border-primary/30 rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-white placeholder:text-secondary/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/40 hover:border-primary/60 transition-all duration-200" 
                  placeholder="Internship Opportunity / Inquiry" 
                />
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs sm:text-sm font-semibold text-secondary">Message *</label>
                <textarea 
                  rows={3} 
                  className="bg-dark/60 border border-primary/30 rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-white placeholder:text-secondary/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/40 hover:border-primary/60 transition-all duration-200 resize-none h-full min-h-[80px]" 
                  placeholder="Write your message here..." 
                  required 
                />
              </div>
              <button className="bg-primary/25 hover:bg-primary/45 text-accent hover:text-white font-bold py-3 sm:py-3.5 rounded-xl transition-all duration-300 border border-secondary/40 hover:border-secondary hover:shadow-[0_0_20px_rgba(27,44,193,0.5)] hover:scale-[1.01] active:scale-[0.99] flex justify-center items-center gap-2.5 group cursor-pointer mt-1">
                <span className="text-sm sm:text-base">Send Message</span>
                <Send className="w-4 h-4 text-accent group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
