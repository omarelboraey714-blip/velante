"use client";

import { motion } from "framer-motion";

export default function Challenge({ project }) {
  return (
    <section className="vp-challenge">
      <div className="vp-container">
        <motion.h2
          className="vp-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="vp-challenge-icon">❓</span>
          التحدي
        </motion.h2>
        <motion.div
          className="vp-challenge-content"
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="vp-challenge-description">
            {project.challenge.description}
          </p>
          <ul className="vp-challenge-list">
            {project.challenge.points.map((point, index) => (
              <motion.li
                key={index}
                className="vp-challenge-item"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
