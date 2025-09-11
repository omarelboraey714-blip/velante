import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="va-final-cta">
      <div className="va-container">
        <motion.div
          className="va-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="va-cta-title">
            هل أنت مستعد للبدء في مشروعك القادم معًا؟
          </h2>
          <p className="va-cta-subtitle">
            فريقنا متحمس لسماع قصة علامتك التجارية ومساعدتك على كتابة فصلها
            القادم.
          </p>
          <div className="va-cta-buttons">
            <motion.a
              href="/contact"
              className="va-cta-btn va-btn va-btn--primary"
              whileHover={{ scale: 1.1, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              لنبدأ الحديث
            </motion.a>
            <motion.a
              href="/services"
              className="va-cta-btn va-btn va-btn--secondary"
              whileHover={{ scale: 1.1, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              استعرض خدماتنا
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
