"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, GraduationCap, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-14 md:py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h3 className="text-white font-medium tracking-widest uppercase mb-2">Contact & Reference</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Let&apos;s Connect</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Contact Info & Reference */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="flex items-center gap-6 group glass-panel p-4 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-accent group-hover:bg-primary/40 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-secondary/80 text-xs font-medium mb-1">Email</h4>
                <a href="mailto:pasindudenuwan@gmail.com" className="text-white font-medium hover:text-accent transition-colors">pasindudenuwan@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group glass-panel p-4 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-accent group-hover:bg-primary/40 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-secondary/80 text-xs font-medium mb-1">LinkedIn</h4>
                <a href="https://linkedin.com/in/pasindu-denuwan" target="_blank" className="text-white font-medium hover:text-accent transition-colors">linkedin.com/in/pasindu-denuwan</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group glass-panel p-4 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-accent group-hover:bg-primary/40 transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-secondary/80 text-xs font-medium mb-1">GitHub</h4>
                <a href="https://github.com/pasindu-denuwan" target="_blank" className="text-white font-medium hover:text-accent transition-colors">github.com/pasindu-denuwan</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group glass-panel p-4 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-accent group-hover:bg-primary/40 transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-secondary/80 text-xs font-medium mb-1">Location</h4>
                <p className="text-white font-medium">Sabaragamuwa / Colombo, Sri Lanka</p>
              </div>
            </div>

            {/* Academic Reference Card */}
            <div className="glass-card p-6 border border-accent/30 rounded-xl mt-4">
              <div className="flex items-center gap-3 mb-2 text-accent">
                <GraduationCap className="w-5 h-5" />
                <span className="text-xs uppercase tracking-wider font-bold">Academic Reference</span>
              </div>
              <h4 className="text-white font-bold text-lg">Ms. Kumudu Kauwshalya</h4>
              <p className="text-secondary text-sm mb-3">Senior Lecturer Grade II • Sabaragamuwa University of Sri Lanka</p>
              <div className="flex flex-col gap-2 text-sm text-secondary">
                <a href="mailto:Kaushalya@gmail.com" className="hover:text-accent flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Kaushalya@gmail.com
                </a>
                <a href="tel:+94764230976" className="hover:text-accent flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +94 76 423 0976
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-secondary">Your Name *</label>
                <input type="text" className="bg-dark/50 border border-primary/20 rounded-xl p-4 text-white focus:outline-none focus:border-accent transition-colors" placeholder="e.g. Kamal Perera" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-secondary">Your Email *</label>
                <input type="email" className="bg-dark/50 border border-primary/20 rounded-xl p-4 text-white focus:outline-none focus:border-accent transition-colors" placeholder="kamal@example.com" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-secondary">Subject</label>
                <input type="text" className="bg-dark/50 border border-primary/20 rounded-xl p-4 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Internship Opportunity / Inquiry" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-secondary">Message *</label>
                <textarea rows={4} className="bg-dark/50 border border-primary/20 rounded-xl p-4 text-white focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Write your message here..." required />
              </div>
              <button className="bg-primary/20 hover:bg-primary/40 text-accent font-bold py-4 rounded-xl mt-2 transition-colors border border-primary/30 flex justify-center items-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
