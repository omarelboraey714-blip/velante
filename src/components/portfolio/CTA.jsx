"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="vw-cta">
      <div className="vw-container">
        <motion.div
          className="vw-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="vw-cta-title">مستعد لبدء مشروعك القادم؟</h2>
          <p className="vw-cta-subtitle">
            لنتحدث عن كيف يمكننا تحويل فكرتك إلى واقع ملموس ونتائج مذهلة.
          </p>
          <div className="vw-cta-buttons">
            <motion.a
              href="/contact"
              className="vw-cta-btn vw-btn vw-btn--primary"
              whileHover={{ scale: 1.1, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              احصل على عرض سعر
            </motion.a>
            <motion.a
              href="/services"
              className="vw-cta-btn vw-btn vw-btn--secondary"
              whileHover={{ scale: 1.1, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              استعرض جميع خدماتنا
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
