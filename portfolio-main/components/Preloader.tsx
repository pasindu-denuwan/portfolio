"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(14px)" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#021024]/85 backdrop-blur-2xl px-6 select-none overflow-hidden"
        >
          {/* Fluid Floating Oceanic Blobs (matching site) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                x: [0, 40, -30, 0],
                y: [0, 50, 30, 0],
                scale: [1, 1.12, 0.95, 1],
              }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[15%] left-[15%] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#5483B3]/40 to-[#052659]/10 blur-[60px]"
            />
            <motion.div
              animate={{
                x: [0, -50, 30, 0],
                y: [0, -40, -30, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-[15%] right-[15%] w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#7DA0CA]/35 to-[#021024]/10 blur-[55px]"
            />
            <motion.div
              animate={{
                scale: [0.9, 1.25, 0.9],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#C1E8FF]/25 blur-[50px]"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center max-w-full text-center">
            <motion.h1
              initial={{ opacity: 0, y: 14, scale: 0.92, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight whitespace-nowrap flex items-center justify-center gap-3 md:gap-4 m-0"
            >
              <span className="text-white drop-shadow-[0_0_25px_rgba(193,232,255,0.4)]">
                Pasindu
              </span>
              <span className="bg-gradient-to-r from-[#C1E8FF] via-[#7DA0CA] to-[#5483B3] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(84,131,179,0.6)]">
                Denuwan
              </span>
            </motion.h1>

            <motion.div
              initial={{ width: "0%", opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="h-[3px] md:h-[4px] max-w-[240px] md:max-w-[280px] bg-gradient-to-r from-[#5483B3] via-[#C1E8FF] to-[#5483B3] rounded-full mt-4 shadow-[0_0_20px_rgba(193,232,255,0.85),0_0_35px_rgba(84,131,179,0.5)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
