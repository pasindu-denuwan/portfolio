"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const resolveSrc = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const clean = path.replace(/^\/portfolio/, "");
  return `${basePath}${clean}`;
};

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] w-screen h-screen select-none overflow-hidden bg-[#091540]"
        >
          <motion.img
            initial={{ scale: 1.04, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.02, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={resolveSrc("/assets/Loading.webp")}
            alt="Loading"
            className="w-full h-full object-cover object-center pointer-events-none select-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
