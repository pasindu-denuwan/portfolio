import { Github, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-primary/20 relative z-10 bg-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-bold tracking-widest text-accent">PD</div>
        
        <p className="text-secondary/80 text-sm font-medium">
          © 2026 Pasindu Denuwan. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-secondary">
          <a href="https://github.com/pasindu-denuwan" target="_blank" className="hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://linkedin.com/in/pasindu-denuwan" target="_blank" className="hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="#home" className="hover:text-accent transition-colors p-2 rounded-full bg-primary/10 border border-primary/20"><ArrowUp className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}
