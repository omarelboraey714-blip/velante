"use client";

import { motion } from "framer-motion";

export default function Header({ project }) {
  return (
    <header className="vp-header">
      <div className="vp-header-image">
        <div className="vp-header-overlay">
          <motion.div
            className="vp-header-content"
            initial={{ opacity: 0, rotateX: 20 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={project.clientLogo}
              alt={project.client}
              className="vp-client-logo"
              onError={(e) =>
                (e.target.src = "/images/client-logo-placeholder.webp")
              }
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
            <motion.h1
              className="vp-header-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {project.title}
            </motion.h1>
            <motion.div
              className="vp-service-tags"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {project.services.map((service, index) => (
                <span key={index} className="vp-service-tag">
                  {service}
                </span>
              ))}
            </motion.div>
            <motion.a
              href={project.liveUrl}
              className="vp-live-btn vp-btn vp-btn--primary"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              زيارة الموقع ↗
            </motion.a>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
