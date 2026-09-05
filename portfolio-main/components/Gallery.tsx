"use client";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";

const resolveSrc = (path: string) => {
  const isProd = process.env.NODE_ENV === "production";
  const clean = path.replace(/^\/portfolio/, "");
  return isProd ? `/portfolio${clean}` : clean;
};

const galleryImages = [
  { src: resolveSrc("/assets/gallery/image1.webp"), alt: "Volunteering", size: "large" },
  { src: resolveSrc("/assets/gallery/image2.webp"), alt: "OrganizingCommittee", size: "medium" },
  { src: resolveSrc("/assets/gallery/image3.webp"), alt: "Leadership", size: "small" },
  { src: resolveSrc("/assets/gallery/image4.webp"), alt: "Leadership", size: "large" },
  { src: resolveSrc("/assets/gallery/image5.webp"), alt: "appointment", size: "medium" },
  { src: resolveSrc("/assets/gallery/image6.webp"), alt: "Leadership", size: "small" },
  { src: resolveSrc("/assets/gallery/image7.webp"), alt: "OrganizingCommittee", size: "large" },
  { src: resolveSrc("/assets/gallery/image8.webp"), alt: "Appreciation", size: "medium" },
  { src: resolveSrc("/assets/gallery/image9.webp"), alt: "Entertainment", size: "small" },
  { src: resolveSrc("/assets/gallery/image10.webp"), alt: "Volunteering", size: "large" },
  { src: resolveSrc("/assets/gallery/image11.webp"), alt: "Achievement", size: "large" },
  { src: resolveSrc("/assets/gallery/image12.webp"), alt: "Leadership", size: "medium" },
  { src: resolveSrc("/assets/gallery/image13.webp"), alt: "Volunteering", size: "small" },
  { src: resolveSrc("/assets/gallery/image14.webp"), alt: "Achievement", size: "large" },
  { src: resolveSrc("/assets/gallery/image15.webp"), alt: "Leadership", size: "small" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-14 md:py-16 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-secondary/30 text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-secondary" />
            <span>Moments & Highlights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Beyond <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Academics</span>
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto mt-3">
            A glimpse into the events, projects, and experiences that shaped my journey.
          </p>
        </motion.div>
      </div>

      {/* Marquee Wrapper */}
      <div className="gallery-wrapper relative w-full overflow-hidden py-4">
        <div className="marquee-track">
          {/* First set of images */}
          {galleryImages.map((image, index) => (
            <SpotlightCard
              key={`set1-${index}`}
              className={`gallery-item ${image.size}`}
              spotlightColor="rgba(171, 210, 250, 0.2)"
            >
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            </SpotlightCard>
          ))}
          {/* Duplicated set for seamless loop */}
          {galleryImages.map((image, index) => (
            <SpotlightCard
              key={`set2-${index}`}
              className={`gallery-item ${image.size}`}
              spotlightColor="rgba(171, 210, 250, 0.2)"
            >
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

