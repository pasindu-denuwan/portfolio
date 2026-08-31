"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#091540] px-6 select-none overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />

          {/* Word phrase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center max-w-full text-center"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight whitespace-nowrap flex items-center justify-center gap-3 md:gap-4 m-0">
              <span className="text-white drop-shadow-[0_0_25px_rgba(171,210,250,0.4)]">
                Pasindu
              </span>
              <span className="text-white drop-shadow-[0_0_25px_rgba(171,210,250,0.4)]">
                Denuwan
              </span>
            </h1>

            <motion.div
              initial={{ width: "0%", opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="h-[3px] md:h-[4px] max-w-[240px] md:max-w-[280px] bg-gradient-to-r from-[#1B2CC1] via-[#ABD2FA] to-[#1B2CC1] rounded-full mt-4 shadow-[0_0_20px_rgba(171,210,250,0.85),0_0_35px_rgba(27,44,193,0.5)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
