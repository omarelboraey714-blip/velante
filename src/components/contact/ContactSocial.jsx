"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaBehance, FaFacebook } from "react-icons/fa";

export default function ContactSocial() {
  const socialMedia = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "#" },
    { name: "Instagram", icon: <FaInstagram />, url: "#" },
    { name: "Behance", icon: <FaBehance />, url: "#" },
    { name: "Facebook", icon: <FaFacebook />, url: "#" },
  ];

  return (
    <section className="vc-social">
      <div className="vc-container">
        <motion.h2
          className="vc-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          تابعنا على منصات التواصل
        </motion.h2>
        <motion.p
          className="vc-social__description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          تابع أعمالنا وأحدث تصاميمنا على منصاتنا الاجتماعية!
        </motion.p>
        <div className="vc-social__grid">
          {socialMedia.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              className="vc-social__card"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.2,
              }}
              whileHover={{ scale: 1.1, rotateY: 10 }}
              viewport={{ once: true }}
            >
              <div className="vc-social__icon">{social.icon}</div>
              <span className="vc-social__name">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
