import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="vp-cta">
      <div className="vp-container">
        <motion.div
          className="vp-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="vp-cta-title">مستعد لبدء مشروعك القادم؟</h2>
          <p className="vp-cta-subtitle">
            لنتحدث عن كيف يمكننا تحويل فكرتك إلى واقع ملموس ونتائج مذهلة.
          </p>
          <div className="vp-cta-buttons">
            <motion.a
              href="/contact"
              className="vp-cta-btn vp-btn vp-btn--primary"
              whileHover={{ scale: 1.1, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              احصل على عرض سعر
            </motion.a>
            <motion.a
              href="/services"
              className="vp-cta-btn vp-btn vp-btn--secondary"
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
