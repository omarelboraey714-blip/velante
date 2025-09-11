"use client";

import { motion } from "framer-motion";

export default function BrandIdentityPortfolio() {
  return (
    <section className="vbi-portfolio">
      <div className="vbi-container">
        <motion.h2
          className="vbi-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          معرض أعمال خاص بالهويات البصرية
        </motion.h2>
        <div className="vbi-portfolio__grid">
          {[
            {
              src: "/images/brand-before.jpg",
              alt: "قبل التصميم",
              label: "قبل",
            },
            {
              src: "/images/brand-after.jpg",
              alt: "بعد التصميم",
              label: "بعد",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="vbi-portfolio__item"
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ rotateY: 10, scale: 1.05 }}
              viewport={{ once: true }}
            >
              <div className="vbi-portfolio__image">
                <img src={item.src} alt={item.alt} />
                <motion.div
                  className="vbi-portfolio__overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>{item.label}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="vbi-case-study"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="vbi-case-study__title">Case Study مصغر</h3>
          <p className="vbi-case-study__text">
            "كيف ساعدنا مطعم كذا في زيادة مبيعاته بنسبة 40% عبر هويته الجديدة"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
