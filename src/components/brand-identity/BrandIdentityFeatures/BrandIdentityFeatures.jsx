"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function BrandIdentityFeatures() {
  const features = [
    {
      title: "تصميم لوجو احترافي",
      description: "(3 مفاهيم أولية)",
    },
    {
      title: "دليل الهوية البصرية الشامل",
      description: "الألوان، الخطوط، الاستخدامات",
    },
    {
      title: "تصميم بطاقات العمل",
      description: "والورق الرسمي",
    },
    {
      title: "Social Media Kit",
      description: "غلاف، منشورات، ستوريات",
    },
    {
      title: "مجموعة أيقونات مخصصة",
      description: "مصممة خصيصًا لعلامتك",
    },
    {
      title: "ملفات متنوعة",
      description: "(PDF, AI, PNG, SVG)",
    },
  ];

  return (
    <section className="vbi-features">
      <div className="vbi-container">
        <motion.h2
          className="vbi-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ما الذي تحصل عليه بالضبط
        </motion.h2>
        <div className="vbi-features__grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="vbi-feature-item"
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="vbi-feature-icon">
                <FiCheck />
              </div>
              <div className="vbi-feature-content">
                <h3 className="vbi-feature-title">{feature.title}</h3>
                <p className="vbi-feature-description">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
