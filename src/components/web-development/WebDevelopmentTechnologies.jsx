"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function WebDevelopmentTechnologies() {
  const techs = useMemo(
    () => [
      "HTML5",
      "CSS3",
      "SASS",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Next.js",
      "PHP",
      "Python",
      "Django",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "GitHub",
      "Netlify",
      "Vercel",
      "Heroku",
      "Firebase",
      "Shopify",
      "WooCommerce",
      "WordPress",
    ],
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    show: { opacity: 1, rotateY: 0 },
    hover: { rotateY: 360, scale: 1.1 },
  };

  return (
    <section className="vwd-technologies" aria-labelledby="tech-title">
      <div className="vwd-container">
        <motion.h2
          id="tech-title"
          className="vwd-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          تقنيات العمل
        </motion.h2>

        <motion.div
          className="vwd-tech__logos"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {techs.map((tech) => (
            <motion.div
              key={tech}
              className="vwd-tech__logo"
              variants={itemVariants}
              whileHover="hover"
              transition={{ duration: 0.3 }}
              aria-label={`Technology: ${tech}`}
              title={tech}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <span>{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
