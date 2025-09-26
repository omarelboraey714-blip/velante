"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="vp-final-cta">
      <div className="vp-container">
        <motion.div
          className="vp-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="vp-cta-title">هل لديك مشروع مشابه؟ دعنا نعمل معًا!</h2>
          <div className="vp-cta-buttons">
            <motion.a
              href="/contact"
              className="vp-cta-btn vp-btn vp-btn--primary"
              whileHover={{ scale: 1.1, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              اتصل بنا لمناقشة مشروعك
            </motion.a>
            <motion.a
              href="/portfolio"
              className="vp-cta-btn vp-btn vp-btn--secondary"
              whileHover={{ scale: 1.1, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              عودة إلى معرض الأعمال
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
