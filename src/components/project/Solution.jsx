"use client";

import { motion } from "framer-motion";

export default function Solution({ project }) {
  return (
    <section className="vp-solution">
      <div className="vp-container">
        <motion.h2
          className="vp-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="vp-solution-icon">💡</span>
          الحل الذي قدمناه
        </motion.h2>
        <motion.div
          className="vp-solution-content"
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="vp-solution-description">
            {project.solution.description}
          </p>
          <ul className="vp-solution-list">
            {project.solution.points.map((point, index) => (
              <motion.li
                key={index}
                className="vp-solution-item"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="vp-solution-quote"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            "{project.solution.quote}"
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
