"use client";

import { motion } from "framer-motion";

export default function BrandIdentityPricing() {
  return (
    <section className="vbi-pricing">
      <div className="vbi-container">
        <motion.div
          className="vbi-pricing__content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="vbi-pricing__title">الاستثمار</h2>
          <p className="vbi-pricing__amount">
            يبدأ من 5,000 جنيه مصري / 2,500 ريال سعودي
          </p>
          <motion.button
            className="vbi-pricing__btn"
            whileHover={{ scale: 1.1, rotateX: 10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            اطلب خدمة الهوية البصرية
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
