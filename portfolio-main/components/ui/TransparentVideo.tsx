"use client";
import React, { useRef, useEffect } from "react";

interface TransparentVideoProps {
  src: string;
  poster: string;
  className?: string;
}

export default function TransparentVideo({ src, poster, className = "" }: TransparentVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animId: number;
    let isMounted = true;
    const w = 540;
    const h = 540;
    canvas.width = w;
    canvas.height = h;

    // Draw initial transparent poster while video loads
    const img = new Image();
    img.src = poster;
    img.onload = () => {
      if (isMounted && (!video || video.paused || video.readyState < 2)) {
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
      }
    };

    const visited = new Uint8Array(w * h);
    const queue = new Int32Array(w * h);

    const render = () => {
      if (!isMounted) return;

      if (video && video.readyState >= 2 && !video.paused) {
        const vw = video.videoWidth || 1920;
        const vh = video.videoHeight || 1080;
        const size = Math.min(vw, vh);
        const sx = (vw - size) / 2;
        const sy = (vh - size) / 2;

        ctx.drawImage(video, sx, sy, size, size, 0, 0, w, h);
        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;

        // Flood fill from outer boundaries to remove white studio background
        visited.fill(0);
        let head = 0;
        let tail = 0;

        for (let x = 0; x < w; x++) {
          visited[x] = 1;
          queue[tail++] = x;
          const b = (h - 1) * w + x;
          visited[b] = 1;
          queue[tail++] = b;
        }
        for (let y = 1; y < h - 1; y++) {
          const l = y * w;
          visited[l] = 1;
          queue[tail++] = l;
          const r = y * w + w - 1;
          visited[r] = 1;
          queue[tail++] = r;
        }

        while (head < tail) {
          const idx = queue[head++];
          const x = idx % w;
          const y = (idx / w) | 0;

          data[idx * 4 + 3] = 0;

          if (x > 0) {
            const n = idx - 1;
            if (!visited[n]) {
              const ni = n * 4;
              if (data[ni] >= 236 && data[ni + 1] >= 236 && data[ni + 2] >= 236) {
                visited[n] = 1;
                queue[tail++] = n;
              }
            }
          }
          if (x < w - 1) {
            const n = idx + 1;
            if (!visited[n]) {
              const ni = n * 4;
              if (data[ni] >= 236 && data[ni + 1] >= 236 && data[ni + 2] >= 236) {
                visited[n] = 1;
                queue[tail++] = n;
              }
            }
          }
          if (y > 0) {
            const n = idx - w;
            if (!visited[n]) {
              const ni = n * 4;
              if (data[ni] >= 236 && data[ni + 1] >= 236 && data[ni + 2] >= 236) {
                visited[n] = 1;
                queue[tail++] = n;
              }
            }
          }
          if (y < h - 1) {
            const n = idx + w;
            if (!visited[n]) {
              const ni = n * 4;
              if (data[ni] >= 236 && data[ni + 1] >= 236 && data[ni + 2] >= 236) {
                visited[n] = 1;
                queue[tail++] = n;
              }
            }
          }
        }

        // Apply smooth bottom fade so torso fades naturally into background
        const fadeStartY = Math.floor(h * 0.75);
        const fadeLen = h - fadeStartY;
        for (let y = fadeStartY; y < h; y++) {
          const factor = 1.0 - (y - fadeStartY) / fadeLen;
          for (let x = 0; x < w; x++) {
            const idx = (y * w + x) * 4;
            if (data[idx + 3] > 0) {
              data[idx + 3] = Math.round(data[idx + 3] * factor);
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
      }

      animId = requestAnimationFrame(render);
    };

    video.play().catch(() => {});
    animId = requestAnimationFrame(render);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animId);
    };
  }, [poster]);

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hidden"
      />
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_50px_rgba(27,44,193,0.35)]"
      />
    </div>
  );
}

