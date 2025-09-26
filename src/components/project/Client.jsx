"use client";

import { motion } from "framer-motion";

export default function Client({ project }) {
  return (
    <section className="vp-client">
      <div className="vp-container">
        <motion.h2
          className="vp-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          عن العميل
        </motion.h2>
        <div className="vp-client-content">
          <motion.div
            className="vp-client-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="vp-client-name">{project.clientInfo.name}</h3>
            <p className="vp-client-field">{project.clientInfo.field}</p>
            <p className="vp-client-vision">{project.clientInfo.vision}</p>
            <p className="vp-client-audience">
              {project.clientInfo.targetAudience}
            </p>
          </motion.div>
          <motion.div
            className="vp-client-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/client-image.jpg"
              alt={project.clientInfo.name}
              className="vp-client-img"
              onError={(e) =>
                (e.target.src = "/images/client-placeholder.webp")
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
