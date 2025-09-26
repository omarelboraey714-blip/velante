"use client";
import { motion } from "framer-motion";

export default function Gallery({ project, onOpenLightbox }) {
  return (
    <section className="vp-gallery">
      <div className="vp-container">
        <motion.h2
          className="vp-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          لقطات من المشروع
        </motion.h2>
        <div className="vp-gallery-grid">
          {project.gallery.map((image, index) => (
            <motion.div
              key={image.id}
              className="vp-gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotateY: 10, rotateX: 5, translateY: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => onOpenLightbox(image, index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="vp-gallery-img"
                onError={(e) =>
                  (e.target.src = "/images/gallery-placeholder.webp")
                }
              />
              <motion.div
                className="vp-gallery-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="vp-gallery-icon">🔍</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
