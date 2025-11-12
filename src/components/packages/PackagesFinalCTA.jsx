'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PackagesFinalCTA() {
  return (
    <section id="vp-final-cta" className="vp-final-cta">
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
          <Link
            href="https://wa.me/201556840380?text=مرحبا. هل يمكنني الحصول علي سعر مخصص"
            target="_blank"
          >
            <motion.button
              className="vp-btn vp-btn--primary vp-final-cta__button"
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              احصل على عرض سعر مخصص في 24 ساعة
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
