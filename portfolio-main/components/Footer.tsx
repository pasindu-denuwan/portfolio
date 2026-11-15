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
          <a href="https://github.com/pasindu-denuwan" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub"><Github className="w-5 h-5" /></a>
          <a href="https://linkedin.com/in/pasindu-denuwan" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
          <a href="https://medium.com/@denuwan672" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Medium">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </a>
          <a href="#home" className="hover:text-accent transition-colors p-2 rounded-full bg-primary/10 border border-primary/20" aria-label="Back to top"><ArrowUp className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}
