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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Contact Info & Reference */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-4 sm:space-y-5"
          >
            {/* Email Card */}
            <a 
              href="mailto:pasindudenuwan@gmail.com"
              className="glass-card p-4 sm:p-4.5 rounded-2xl border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] hover:-translate-y-0.5 transition-all duration-300 group flex items-center gap-4 min-w-0"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-accent group-hover:bg-primary/40 group-hover:border-secondary/60 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(118,146,255,0.4)] transition-all duration-300 flex-shrink-0">
                <Mail className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-secondary/80 text-xs font-semibold uppercase tracking-wider mb-0.5">Email</h4>
                <p className="text-white font-medium text-sm sm:text-base group-hover:text-accent transition-colors truncate">
                  pasindudenuwan@gmail.com
                </p>
              </div>
            </a>
            
            {/* LinkedIn Card */}
            <a 
              href="https://linkedin.com/in/pasindu-denuwan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-4 sm:p-4.5 rounded-2xl border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] hover:-translate-y-0.5 transition-all duration-300 group flex items-center gap-4 min-w-0"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-accent group-hover:bg-primary/40 group-hover:border-secondary/60 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(118,146,255,0.4)] transition-all duration-300 flex-shrink-0">
                <Linkedin className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-secondary/80 text-xs font-semibold uppercase tracking-wider mb-0.5">LinkedIn</h4>
                <p className="text-white font-medium text-sm sm:text-base group-hover:text-accent transition-colors truncate">
                  linkedin.com/in/pasindu-denuwan
                </p>
              </div>
            </a>

            {/* GitHub Card */}
            <a 
              href="https://github.com/pasindu-denuwan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-4 sm:p-4.5 rounded-2xl border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] hover:-translate-y-0.5 transition-all duration-300 group flex items-center gap-4 min-w-0"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-accent group-hover:bg-primary/40 group-hover:border-secondary/60 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(118,146,255,0.4)] transition-all duration-300 flex-shrink-0">
                <Github className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-secondary/80 text-xs font-semibold uppercase tracking-wider mb-0.5">GitHub</h4>
                <p className="text-white font-medium text-sm sm:text-base group-hover:text-accent transition-colors truncate">
                  github.com/pasindu-denuwan
                </p>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card p-4 sm:p-4.5 rounded-2xl border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] hover:-translate-y-0.5 transition-all duration-300 group flex items-center gap-4 min-w-0 cursor-default">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-accent group-hover:bg-primary/40 group-hover:border-secondary/60 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(118,146,255,0.4)] transition-all duration-300 flex-shrink-0">
                <MapPin className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-secondary/80 text-xs font-semibold uppercase tracking-wider mb-0.5">Location</h4>
                <p className="text-white font-medium text-sm sm:text-base group-hover:text-accent transition-colors">
                  Sabaragamuwa / Colombo, Sri Lanka
                </p>
              </div>
            </div>

            {/* Academic Reference Card */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-primary/30 hover:border-secondary/60 hover:shadow-[0_8px_30px_rgba(27,44,193,0.35)] hover:-translate-y-0.5 transition-all duration-300 group mt-2 cursor-default">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-secondary/30 text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                <GraduationCap className="w-3.5 h-3.5 text-secondary" />
                <span>Academic Reference</span>
              </div>
              <h4 className="text-white font-bold text-lg sm:text-xl group-hover:text-accent transition-colors leading-snug">
                Ms. Kumudu Kauwshalya
              </h4>
              <p className="text-secondary/90 text-xs sm:text-sm mt-1 mb-4 leading-relaxed">
                Senior Lecturer Grade II • Sabaragamuwa University of Sri Lanka
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm">
                <a 
                  href="mailto:Kaushalya@gmail.com" 
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark/70 border border-primary/30 hover:border-secondary hover:bg-primary/20 text-secondary hover:text-white font-medium transition-all"
                >
                  <Mail className="w-4 h-4 text-accent" /> Kaushalya@gmail.com
                </a>
                <a 
                  href="tel:+94764230976" 
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark/70 border border-primary/30 hover:border-secondary hover:bg-primary/20 text-secondary hover:text-white font-medium transition-all"
                >
                  <Phone className="w-4 h-4 text-accent" /> +94 76 423 0976
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
            className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl border border-primary/30 hover:border-secondary/50 hover:shadow-[0_8px_30px_rgba(27,44,193,0.25)] transition-all duration-300"
          >
            <form className="flex flex-col gap-5 sm:gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-secondary">Your Name *</label>
                <input 
                  type="text" 
                  className="bg-dark/60 border border-primary/30 rounded-xl p-3.5 sm:p-4 text-white placeholder:text-secondary/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/40 hover:border-primary/60 transition-all duration-200" 
                  placeholder="e.g. Kamal Perera" 
                  required 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-secondary">Your Email *</label>
                <input 
                  type="email" 
                  className="bg-dark/60 border border-primary/30 rounded-xl p-3.5 sm:p-4 text-white placeholder:text-secondary/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/40 hover:border-primary/60 transition-all duration-200" 
                  placeholder="kamal@example.com" 
                  required 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-secondary">Subject</label>
                <input 
                  type="text" 
                  className="bg-dark/60 border border-primary/30 rounded-xl p-3.5 sm:p-4 text-white placeholder:text-secondary/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/40 hover:border-primary/60 transition-all duration-200" 
                  placeholder="Internship Opportunity / Inquiry" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-secondary">Message *</label>
                <textarea 
                  rows={4} 
                  className="bg-dark/60 border border-primary/30 rounded-xl p-3.5 sm:p-4 text-white placeholder:text-secondary/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/40 hover:border-primary/60 transition-all duration-200 resize-none" 
                  placeholder="Write your message here..." 
                  required 
                />
              </div>
              <button className="bg-primary/25 hover:bg-primary/45 text-accent hover:text-white font-bold py-3.5 sm:py-4 rounded-xl mt-2 transition-all duration-300 border border-secondary/40 hover:border-secondary hover:shadow-[0_0_20px_rgba(27,44,193,0.5)] hover:scale-[1.01] active:scale-[0.99] flex justify-center items-center gap-2.5 group cursor-pointer">
                <span>Send Message</span>
                <Send className="w-4 h-4 text-accent group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
