"use client";

import { motion } from "framer-motion";

export default function Results({ project }) {
  return (
    <section className="vp-results">
      <div className="vp-container">
        <motion.h2
          className="vp-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          النتائج
        </motion.h2>
        <div className="vp-results-grid">
          {project.results.map((result, index) => (
            <motion.div
              key={index}
              className="vp-result-card"
              initial={{ opacity: 0, y: 50, rotateX: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="vp-result-icon">{result.icon}</div>
              <div className="vp-result-number">{result.number}</div>
              <div className="vp-result-label">{result.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
