"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { name: "تصميم الهوية البصرية", href: "/services/branding" },
    { name: "تصميم وبرمجة المواقع", href: "/services/web-development" },
    { name: "إعلانات مُمولة ", href: "/services/ads" },
  ];

  return (
    <motion.div
      className="vf-column"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="vf-column-title">خدماتنا</h3>
      <ul className="vf-links">
        {services.map((service, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <a href={service.href} className="vf-link">
              {service.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
