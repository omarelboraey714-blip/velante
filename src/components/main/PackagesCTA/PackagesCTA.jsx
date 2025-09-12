// src/components/PackagesCTA/PackagesCTA.jsx
"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import "./PackagesCTA.css";

export default function PackagesCTA() {
  return (
    <section className="packages-cta">
      <div className="packages-stars-background"></div>
      <div className="packages-container">
        <motion.div
          className="packages-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="packages-title">
            تبحث عن حل متكامل؟ لدينا باقات تناسب كل احتياج وميزانية
          </h2>

          <motion.div
            className="packages-preview"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="packages-package-card"
              whileHover={{ scale: 1.02, rotate: 1 }}
              style={{ perspective: "1000px" }}
            >
              <h3>الباقة الأساسية</h3>
              <p>لوجو + موقع بسيط</p>
              <Link href="/packages" className="packages-btn-brand-sm">
                التفاصيل
              </Link>
            </motion.div>
            <motion.div
              className="packages-package-card"
              whileHover={{ scale: 1.02, rotate: -1 }}
              style={{ perspective: "1000px" }}
            >
              <h3>الباقة المتقدمة</h3>
              <p>هوية كاملة + موقع + إعلانات</p>
              <Link href="/packages" className="packages-btn-brand-sm">
                التفاصيل
              </Link>
            </motion.div>
          </motion.div>

          <div className="packages-cta-button">
            <Link href="/packages" className="packages-btn-brand">
              اكتشف باقاتنا
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
