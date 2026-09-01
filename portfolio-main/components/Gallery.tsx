"use client";
import { motion } from "framer-motion";
import SpotlightCard from "./ui/SpotlightCard";

const resolveSrc = (path: string) => {
  const isProd = process.env.NODE_ENV === "production";
  const clean = path.replace(/^\/portfolio/, "");
  return isProd ? `/portfolio${clean}` : clean;
};

const galleryImages = [
  { src: resolveSrc("/assets/gallery/image1.jpg"), alt: "Volunteering", size: "large" },
  { src: resolveSrc("/assets/gallery/image2.jpeg"), alt: "OrganizingCommittee", size: "medium" },
  { src: resolveSrc("/assets/gallery/image3.jpeg"), alt: "Leadership", size: "small" },
  { src: resolveSrc("/assets/gallery/image4.jpg"), alt: "Leadership", size: "large" },
  { src: resolveSrc("/assets/gallery/image5.jpeg"), alt: "appointment", size: "medium" },
  { src: resolveSrc("/assets/gallery/image6.jpeg"), alt: "Leadership", size: "small" },
  { src: resolveSrc("/assets/gallery/image7.jpeg"), alt: "OrganizingCommittee", size: "large" },
  { src: resolveSrc("/assets/gallery/image8.jpeg"), alt: "Appreciation", size: "medium" },
  { src: resolveSrc("/assets/gallery/image9.jpeg"), alt: "Entertainment", size: "small" },
  { src: resolveSrc("/assets/gallery/image10.jpeg"), alt: "Volunteering", size: "large" },
  { src: resolveSrc("/assets/gallery/image11.jpg"), alt: "Achievement", size: "large" },
  { src: resolveSrc("/assets/gallery/image12.jpeg"), alt: "Leadership", size: "medium" },
  { src: resolveSrc("/assets/gallery/image13.jpeg"), alt: "Volunteering", size: "small" },
  { src: resolveSrc("/assets/gallery/image14.jpg"), alt: "Achievement", size: "large" },
  { src: resolveSrc("/assets/gallery/image15.jpeg"), alt: "Leadership", size: "small" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-14 md:py-16 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-12 text-center">
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

