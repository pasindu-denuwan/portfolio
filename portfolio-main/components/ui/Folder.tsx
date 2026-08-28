"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface FolderProps {
  title: string;
  icon: ReactNode;
  technologies: string[];
  isOpen: boolean;
  onClick: () => void;
}

export default function Folder({ title, icon, technologies, isOpen, onClick }: FolderProps) {
  // Animation for the technologies arranged in a floating staggered grid
  const getFanAnimation = (index: number, total: number) => {
    // If only 1 item, go straight up
    if (total === 1) return { x: 0, y: -70, rotate: 0 };
    
    // We want a max of 3 items per row for a nice balanced look
    const cols = Math.min(3, total);
    const rows = Math.ceil(total / cols);
    
    // Calculate which row and column this item belongs to
    // Top-most row should be row 0 for layout logic (visually highest on screen)
    const row = Math.floor(index / cols);
    const col = index % cols;
    
    // Calculate how many items are actually in this specific row
    const itemsInRow = (row === rows - 1 && total % cols !== 0) ? (total % cols) : cols;
    
    // Offset from the horizontal center
    const colOffset = col - (itemsInRow - 1) / 2;
    
    // Slight random rotation based on column to give a fan/paper look
    const rotation = colOffset * 5 + (Math.random() * 2 - 1); 

    return {
      x: colOffset * 105, // Horizontal spread
      // Calculate vertical spread: Rows go upwards, so we subtract Y. 
      y: -80 - ((rows - 1 - row) * 55), 
      rotate: rotation
    };
  };

  return (
    <div 
      className="relative flex flex-col items-center justify-end w-36 h-28 md:w-44 md:h-32 cursor-pointer group outline-none" 
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      role="button"
      aria-expanded={isOpen}
    >
      {/* Container holding perspective for the 3D flap effect */}
      <motion.div 
        className="relative w-full h-full"
        style={{ perspective: 1000 }}
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow behind the folder */}
        <div className="absolute inset-0 rounded-xl bg-[#C1E8FF]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 shadow-[0_0_20px_rgba(193,232,255,0.15),_0_10px_35px_rgba(2,16,36,0.4)]" />

        {/* Folder Back */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[95%] rounded-xl border border-primary/30 z-0"
          style={{
            background: "rgba(84, 131, 179, 0.25)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0 8px 32px rgba(2, 16, 36, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
            borderTopLeftRadius: "0.25rem"
          }}
        >
          {/* Folder Tab */}
          <div className="absolute -top-3 left-0 w-2/5 h-4 border-t border-l border-r border-primary/30 rounded-t-md backdrop-blur-md" 
               style={{ background: "rgba(84, 131, 179, 0.25)" }} />
        </div>

        {/* Technology Cards (The Papers) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <AnimatePresence>
            {isOpen && technologies.map((tech, idx) => {
              const anim = getFanAnimation(idx, technologies.length);
              return (
                <motion.div
                  key={tech}
                  initial={{ x: 0, y: 20, opacity: 0, scale: 0.5, rotate: 0 }}
                  animate={{ 
                    x: anim.x, 
                    y: anim.y, 
                    opacity: 1, 
                    scale: 1, 
                    rotate: anim.rotate 
                  }}
                  exit={{ x: 0, y: 20, opacity: 0, scale: 0.5, rotate: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 250, 
                    damping: 20, 
                    delay: idx * 0.04 
                  }}
                  className="absolute px-4 py-2 bg-dark/80 border border-primary/50 rounded-lg shadow-xl backdrop-blur-md whitespace-nowrap z-10 flex items-center justify-center pointer-events-auto"
                >
                  <span className="text-white text-sm font-semibold tracking-wide">{tech}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Folder Front Flap */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-[85%] rounded-xl border border-primary/40 z-20 flex flex-col items-center justify-center gap-1 md:gap-2 p-2 group-hover:border-[#C1E8FF]/50 transition-colors"
          style={{
            background: "rgba(84, 131, 179, 0.18)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0 -4px 20px rgba(2, 16, 36, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            transformOrigin: "bottom",
          }}
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? -30 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="text-accent group-hover:text-white transition-colors">
            {icon}
          </div>
          <h4 className="text-white font-bold text-xs md:text-sm text-center">{title}</h4>
        </motion.div>
      </motion.div>

      {/* Click to explore text */}
      <p className="absolute -bottom-8 text-[10px] md:text-xs uppercase tracking-widest text-[#7DA0CA] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium">
        Click to explore
      </p>
    </div>
  );
}
