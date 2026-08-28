"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Velaris from "@/components/ui/velaris";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#091540] px-6 select-none overflow-hidden"
        >
          {/* Velaris background motion for page load */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden animate-[starFloat_8s_ease-in-out_infinite] [perspective:1200px]">
            <Velaris
              bg="#091540"
              colors={["#091540", "#1B2CC1", "#7692FF", "#ABD2FA"]}
              speed={2.5}
              grain={0.15}
              height="100vh"
            />
          </div>

          {/* Word phrase - slowly comes and goes */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 2, y: 0, scale: 1.3 }}
            exit={{ opacity: 0, y: -20, scale: 1.03 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 flex flex-col items-center max-w-full text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight whitespace-nowrap flex items-center justify-center gap-3 md:gap-4 m-0"
            >
              <span className="text-white drop-shadow-[0_0_25px_rgba(171,210,250,0.4)]">
                Pasindu
              </span>
              <span className="text-white drop-shadow-[0_0_25px_rgba(171,210,250,0.4)]">
                Denuwan
              </span>
            </motion.h1>

            <motion.div
              initial={{ width: "0%", opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 1.3, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-[3px] md:h-[4px] max-w-[240px] md:max-w-[280px] bg-gradient-to-r from-[#1B2CC1] via-[#ABD2FA] to-[#1B2CC1] rounded-full mt-4 shadow-[0_0_20px_rgba(171,210,250,0.85),0_0_35px_rgba(27,44,193,0.5)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
