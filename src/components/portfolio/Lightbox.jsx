"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";

export default function Lightbox({
  selectedProject,
  setSelectedProject,
  showLightbox,
  setShowLightbox,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const closeLightbox = () => {
    setShowLightbox(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (showLightbox) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [showLightbox]);

  if (!showLightbox || !selectedProject) return null;

  return (
    <motion.div
      className="vw-lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={closeLightbox}
    >
      <motion.div
        className="vw-lightbox-content"
        initial={{ scale: 0.9, rotateY: 20 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="vw-lightbox-close" onClick={closeLightbox}>
          ×
        </button>
        <div className="vw-lightbox-gallery">
          <motion.img
            src={selectedProject.images[currentImageIndex]}
            alt={selectedProject.title}
            className="vw-lightbox-image"
            onError={(e) => (e.target.src = "/images/placeholder.jpg")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <button
            className="vw-lightbox-nav vw-lightbox-nav--prev"
            onClick={prevImage}
          >
            ←
          </button>
          <button
            className="vw-lightbox-nav vw-lightbox-nav--next"
            onClick={nextImage}
          >
            →
          </button>
        </div>
        <div className="vw-lightbox-thumbnails">
          {selectedProject.images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`${selectedProject.title} ${index + 1}`}
              className={`vw-lightbox-thumbnail ${
                currentImageIndex === index
                  ? "vw-lightbox-thumbnail--active"
                  : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
        <div className="vw-lightbox-info">
          <h3 className="vw-lightbox-title">{selectedProject.title}</h3>
          <p className="vw-lightbox-description">
            {selectedProject.description}
          </p>
          <div className="vw-lightbox-actions">
            {selectedProject.liveUrl && (
              <a
                href={selectedProject.liveUrl}
                className="vw-lightbox-visit-btn vw-btn vw-btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                زيارة الموقع الحي
              </a>
            )}
            <button
              className="vw-lightbox-close-btn vw-btn vw-btn--secondary"
              onClick={closeLightbox}
            >
              إغلاق
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
