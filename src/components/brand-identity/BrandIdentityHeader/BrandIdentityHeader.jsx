"use client";

import { motion } from "framer-motion";

export default function BrandIdentityHeader() {
  return (
    <header className="vbi-header">
      <div className="vbi-header__image">
        <div className="vbi-header__overlay">
          <motion.div
            className="vbi-header__content"
            initial={{ opacity: 0, rotateX: 20 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="vbi-header__title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              هويتك البصرية هي انعكاس لروح علامتك التجارية
            </motion.h1>
            <motion.p
              className="vbi-header__subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              نصنع لك بصمة بصرية متكاملة تترك انطباعًا قويًا يدوم طويلاً
            </motion.p>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
