"use client";

import { motion } from "framer-motion";

export default function PackagesFinalCTA() {
  return (
    <section className="vp-final-cta">
      <div className="vp-container">
        <motion.div
          className="vp-final-cta__content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="vp-final-cta__title">لا تجد ما تبحث عنه؟</h2>
          <p className="vp-final-cta__subtitle">
            لا توجد مشكلة. تحدث معنا اليوم واحصل على عرض سعر مخصص يناسب فكرة
            مشروعك بالضبط.
          </p>
          <motion.button
            className="vp-btn vp-btn--primary vp-final-cta__button"
            whileHover={{ scale: 1.1, rotateX: 10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            احصل على عرض سعر مخصص في 24 ساعة
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
