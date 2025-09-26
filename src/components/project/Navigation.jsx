"use client";

import { motion } from "framer-motion";

export default function Navigation({ project }) {
  return (
    <section className="vp-navigation">
      <div className="vp-container">
        <div className="vp-nav-buttons">
          <motion.a
            href={`/portfolio/${project.relatedProjects[0]?.slug}`}
            className="vp-nav-btn vp-nav-btn--prev"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ x: -10 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ← {project.relatedProjects[0]?.title}
          </motion.a>
          <motion.a
            href={`/portfolio/${project.relatedProjects[1]?.slug}`}
            className="vp-nav-btn vp-nav-btn--next"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ x: 10 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {project.relatedProjects[1]?.title} →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
