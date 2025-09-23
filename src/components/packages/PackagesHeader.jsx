"use client";

import { motion } from "framer-motion";

export default function PackagesHeader() {
  return (
    <header className="vp-header">
      <div className="vp-header__background">
        <div className="vp-header__geometric-shape"></div>
      </div>
      <div className="vp-header__overlay">
        <motion.div
          className="vp-header__content"
          initial={{ opacity: 0, rotateX: 20 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="vp-header__title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            باقات مصممة خصيصًا لتنمية عملك
          </motion.h1>
          <motion.p
            className="vp-header__subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            عروض شاملة توفر وقتك ومالك
          </motion.p>
          <motion.p
            className="vp-header__description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            لأن كل مشروع فريد، جمعنا أفضل الخدمات في باقات مخصصة بجودة عالية
            وأسعار واضحة بدون مفاجآت.
          </motion.p>
          <motion.button
            className="vp-btn vp-btn--primary vp-header__faq-trigger"
            onClick={() =>
              document
                .getElementById("vp-final-cta")
                .scrollIntoView({ behavior: "smooth" })
            }
            whileTap={{ scale: 0.95 }}
          >
            كيفية الاختيار؟
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}
