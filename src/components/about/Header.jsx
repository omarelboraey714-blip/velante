"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="va-header">
      <div className="va-header-image">
        <div className="va-header-overlay">
          <motion.div
            className="va-header-content"
            initial={{ opacity: 0, rotateX: 20 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="va-header-title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              velante: أكثر من مجرد شريك تصميم
            </motion.h1>
            <motion.p
              className="va-header-subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              شغفنا بالإبداع هو ما يجمعنا
            </motion.p>
            <motion.p
              className="va-header-description"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              من فكرة صغيرة إلى مشروع ناجح، نسير بجانبك في كل خطوة لبناء عالمك
              الرقمي الذي تحلم به.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
