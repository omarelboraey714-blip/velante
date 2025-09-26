"use client";

import { motion } from "framer-motion";

export default function Tools({ project }) {
  return (
    <section className="vp-tools">
      <div className="vp-container">
        <motion.h2
          className="vp-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          الأدوات والتقنيات المستخدمة
        </motion.h2>
        <div className="vp-tools-grid">
          {project.tools.map((tool, index) => (
            <motion.div
              key={index}
              className="vp-tool-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotateY: 10, translateY: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="vp-tool-icon">{tool.icon}</div>
              <div className="vp-tool-name">{tool.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
