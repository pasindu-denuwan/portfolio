"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const resolveSrc = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const clean = path.replace(/^\/portfolio/, "");
  return `${basePath}${clean}`;
};

function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const count = Math.min(Math.floor((width * height) / 25000) + 16, 48);
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1.2,
      isGlow: Math.random() > 0.65,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 162, 255, ${0.28 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isGlow ? "#00e5ff" : "#abd2fa";
        ctx.shadowColor = p.isGlow ? "#00e5ff" : "#1B2CC1";
        ctx.shadowBlur = p.isGlow ? 12 : 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-75"
    />
  );
}

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_50%_45%,_#002d8e_0%,_#00164c_50%,_#000618_100%)] select-none overflow-hidden"
        >
          {/* Animated Constellation Mesh */}
          <ConstellationCanvas />

          {/* Central Blue Aura Glow */}
          <div className="absolute w-[650px] h-[650px] bg-[#0055ff]/20 rounded-full blur-[140px] pointer-events-none" />

          {/* 16:9 Composition Stage matching reference ratio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative w-full max-w-[1240px] aspect-[16/9] max-h-[88vh] flex items-center justify-center px-2 sm:px-4"
          >
            {/* Layer 1: Outlined PASINDU (Upper Background) */}
            <div
              className="absolute left-[8%] right-[8%] sm:left-[10%] sm:right-[10%] md:left-[12%] md:right-[12%] top-[27%] z-10 font-black text-transparent text-[clamp(2.5rem,11.5vw,10.5rem)] leading-none uppercase select-none text-center flex justify-center items-center"
              style={{
                fontFamily: "system-ui, -apple-system, Montserrat, Arial, sans-serif",
                WebkitTextStroke: "clamp(2px, 0.28vw, 4.5px) #ffffff",
                filter: "drop-shadow(0 0 10px rgba(0, 220, 255, 0.7)) drop-shadow(0 0 25px rgba(27, 44, 193, 0.5))",
                letterSpacing: "0.03em",
              }}
            >
              <span className="w-full text-center">PASINDU</span>
            </div>

            {/* Layer 2: Pasindu Portrait Cutout (Center Midground) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[16.5%] bottom-[11.5%] z-20 flex items-center justify-center pointer-events-none select-none">
              <div className="absolute inset-0 bg-[#00a2ff]/25 blur-3xl rounded-full scale-110 pointer-events-none" />
              <img
                src={resolveSrc("/assets/loading-portrait.webp")}
                alt="Pasindu Denuwan"
                className="relative z-20 h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
              />
              {/* Soft radial shadow under figure fading seamlessly without boundaries */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[140%] h-32 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.95)_0%,_rgba(0,0,0,0.7)_40%,_transparent_75%)] blur-2xl pointer-events-none -z-10" />
            </div>

            {/* Layer 3: Solid White DENUWAN (Lower Foreground - Matched in Font Size to PASINDU) */}
            <div
              className="absolute left-[6%] right-[6%] sm:left-[8%] sm:right-[8%] md:left-[10%] md:right-[10%] top-[64%] z-30 font-black text-white text-[clamp(2.5rem,11.5vw,10.5rem)] leading-none uppercase select-none text-center flex justify-center items-center"
              style={{
                fontFamily: "system-ui, -apple-system, Montserrat, Arial, sans-serif",
                filter: "drop-shadow(0 15px 30px rgba(0, 0, 0, 0.95)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.8))",
                letterSpacing: "0.01em",
              }}
            >
              <span className="w-full text-center">DENUWAN</span>
            </div>
          </motion.div>

          {/* Full-width seamless black shadow spread across 100% of viewport width */}
          <div className="absolute bottom-0 left-0 right-0 w-full h-[40vh] bg-gradient-to-t from-black via-black/85 via-black/40 to-transparent pointer-events-none z-25" />

          {/* Loading Progress Bar */}
          <motion.div
            initial={{ width: "0%", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.2, ease: "easeInOut" }}
            className="h-[3px] md:h-[4px] max-w-[200px] md:max-w-[280px] bg-gradient-to-r from-[#1B2CC1] via-[#00e5ff] to-[#1B2CC1] rounded-full mt-3 shadow-[0_0_20px_rgba(0,229,255,0.85)] z-40"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
