import { motion } from "framer-motion";
import { Github, ExternalLink, Image as ImageIcon } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  contribution?: string;
  image?: string;
}

export default function ProjectLaptopCard({
  title, description, technologies, githubUrl, demoUrl, contribution, image
}: ProjectProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative flex flex-col items-center w-full max-w-2xl mx-auto"
    >
      {/* Laptop Frame Mockup */}
      <div className="relative w-full aspect-video bg-[#111] rounded-t-xl md:rounded-t-3xl border-[6px] md:border-[10px] border-[#333] shadow-2xl overflow-hidden group-hover:shadow-[0_0_30px_rgba(84,131,179,0.3)] transition-all duration-500">
        
        {/* Base Screen (Image or Placeholder) */}
        <div className="absolute inset-0 bg-dark flex flex-col items-center justify-center p-4 border-b border-[#222]">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center text-secondary/40">
              <ImageIcon className="w-12 h-12 mb-2" />
              <span className="text-sm font-medium">Project Image Placeholder</span>
            </div>
          )}
        </div>

        {/* Hover Overlay with Details */}
        <div className="absolute inset-0 bg-dark/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-4 text-center z-10 translate-y-4 group-hover:translate-y-0">
          <h4 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h4>
          
          <p className="text-secondary/90 text-[11px] md:text-xs leading-relaxed mb-4 line-clamp-3 md:line-clamp-none max-w-sm">
            {description}
          </p>

          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-4 md:mb-6 max-w-sm">
            {technologies.map(tech => (
              <span key={tech} className="px-2 py-0.5 md:py-1 bg-primary/20 text-accent text-[10px] rounded border border-primary/30">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {githubUrl && (
              <a href={githubUrl} target="_blank" className="flex items-center gap-1.5 text-[11px] md:text-xs font-medium text-white hover:text-accent transition-colors">
                <Github className="w-3.5 h-3.5 md:w-4 md:h-4" /> Source
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" className="flex items-center gap-1.5 text-[11px] md:text-xs font-medium text-white hover:text-accent transition-colors">
                <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Laptop Base */}
      <div className="w-[110%] h-3 md:h-5 bg-gradient-to-b from-[#ccc] to-[#888] rounded-b-xl md:rounded-b-3xl shadow-2xl flex justify-center z-10 relative border-t border-[#eee]/20">
        <div className="w-16 md:w-24 h-1 md:h-1.5 bg-[#666] rounded-b-md" />
      </div>
    </motion.div>
  );
}
