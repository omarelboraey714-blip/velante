"use client";

import { motion } from "framer-motion";

export default function WebDevelopmentHeader() {
  return (
    <header className="vwd-header">
      <motion.div
        className="vwd-header__background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="vwd-header__geometric-animation"></div>
      </motion.div>
      <div className="vwd-header__overlay">
        <motion.div
          className="vwd-header__content"
          initial={{ opacity: 0, rotateX: 20 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="vwd-header__title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            موقعك الإلكتروني هو وجهتك الرقمية التي لا تغلق أبوابها أبدًا
          </motion.h1>
        </motion.div>
      </div>
    </header>
  );
}
