"use client";

import { motion } from "framer-motion";
import Social from "./Social";

export default function ContactInfo() {
  const contactItems = [
    {
      icon: "📍",
      text: "القاهرة، مصر",
    },
    {
      icon: "📞",
      text: (
        <>
          <a href="tel:+201000000000" className="vf-contact-link">
            +20 100 000 0000 (مصر)
          </a>
          <br />
          <a href="tel:+966500000000" className="vf-contact-link">
            +966 50 000 0000 (السعودية)
          </a>
        </>
      ),
    },
    {
      icon: "✉️",
      text: (
        <a href="mailto:info@velante.com" className="vf-contact-link">
          info@velante.com
        </a>
      ),
    },
    {
      icon: "⏰",
      text: "الأحد - الخميس: 9 ص - 5 م",
    },
  ];

  return (
    <motion.div
      className="vf-column"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="vf-column-title">تواصل معنا</h3>
      <div className="vf-contact-info">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="vf-contact-item"
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="vf-contact-icon">{item.icon}</span>
            <span>{item.text}</span>
          </motion.div>
        ))}
      </div>
      <Social />
    </motion.div>
  );
}
