"use client";

import { useState, useEffect } from "react";
import Gallery from "@/components/project/Gallery";
import { motion } from "framer-motion";

export default function Lightbox({ project }) {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setShowLightbox(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % project.gallery.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(project.gallery[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? project.gallery.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(project.gallery[prevIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (showLightbox) {
        if (e.key === "Escape") {
          closeLightbox();
        } else if (e.key === "ArrowRight") {
          nextImage();
        } else if (e.key === "ArrowLeft") {
          prevImage();
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [showLightbox, currentImageIndex]);

  return (
    <>
      <Gallery project={project} onOpenLightbox={openLightbox} />
      {showLightbox && selectedImage && (
        <motion.div
          className="vp-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeLightbox}
        >
          <motion.div
            className="vp-lightbox-content"
            initial={{ scale: 0.8, rotateY: 20 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              className="vp-lightbox-close"
              onClick={closeLightbox}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              ×
            </motion.button>
            <motion.button
              className="vp-lightbox-nav vp-lightbox-nav--prev"
              onClick={prevImage}
              whileHover={{ scale: 1.2, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              ❮
            </motion.button>
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="vp-lightbox-image"
              onError={(e) =>
                (e.target.src = "/images/gallery-placeholder.webp")
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.button
              className="vp-lightbox-nav vp-lightbox-nav--next"
              onClick={nextImage}
              whileHover={{ scale: 1.2, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              ❯
            </motion.button>
            <motion.div
              className="vp-lightbox-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="vp-lightbox-counter">
                {currentImageIndex + 1} / {project.gallery.length}
              </span>
              <span className="vp-lightbox-caption">{selectedImage.alt}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
