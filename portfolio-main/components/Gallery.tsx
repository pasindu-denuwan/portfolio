"use client";
import { motion } from "framer-motion";
import SpotlightCard from "./ui/SpotlightCard";

const galleryImages = [
  { src: "/portfolio/assets/gallery/image1.jpg", alt: "Event moment", size: "large" },
  { src: "/portfolio/assets/gallery/image2.jpg", alt: "Team collaboration", size: "medium" },
  { src: "/portfolio/assets/gallery/image3.jpg", alt: "Hackathon setup", size: "small" },
  { src: "/portfolio/assets/gallery/image4.jpg", alt: "Group photo", size: "large" },
  { src: "/portfolio/assets/gallery/image5.jpg", alt: "Project presentation", size: "medium" },
  { src: "/portfolio/assets/gallery/image6.jpg", alt: "Experience 6", size: "small" },
  { src: "/portfolio/assets/gallery/image7.png", alt: "Experience 7", size: "large" },
  { src: "/portfolio/assets/gallery/image8.png", alt: "Experience 8", size: "medium" },
  { src: "/portfolio/assets/gallery/image9.png", alt: "Experience 9", size: "small" },
  { src: "/portfolio/assets/gallery/image10.png", alt: "Experience 10", size: "large" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative z-10 overflow-hidden mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Beyond Academics</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
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
              spotlightColor="rgba(193, 232, 255, 0.16)"
            >
              <img src={image.src} alt={image.alt} />
            </SpotlightCard>
          ))}
          {/* Duplicated set for seamless loop */}
          {galleryImages.map((image, index) => (
            <SpotlightCard
              key={`set2-${index}`}
              className={`gallery-item ${image.size}`}
              spotlightColor="rgba(193, 232, 255, 0.16)"
            >
              <img src={image.src} alt={image.alt} />
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
