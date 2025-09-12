"use client";

import { motion } from "framer-motion";

export default function WebDevelopmentTechnologies() {
  const techs = [
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
  ];

  return (
    <section className="vwd-technologies">
      <div className="vwd-container">
        <motion.h2
          className="vwd-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          تقنيات العمل
        </motion.h2>
        <div className="vwd-tech__logos">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              className="vwd-tech__logo"
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotateY: 360, scale: 1.1 }}
              viewport={{ once: true }}
            >
              <span>{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
