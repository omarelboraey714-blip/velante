"use client";

import { motion } from "framer-motion";

export default function WebDevelopmentFeatures() {
  const features = [
    {
      feature: "متجاوبة مع جميع الشاشات",
      regular: "✓",
      velante: "✓",
    },
    {
      feature: "سريعة التحميل (أقل من 3 ثواني)",
      regular: "✗",
      velante: "✓",
    },
    {
      feature: "مُحسنة لمحركات البحث (SEO Ready)",
      regular: "✗",
      velante: "✓",
    },
    {
      feature: "سهلة الإدارة (لوحة تحكم عربية)",
      regular: "✗",
      velante: "✓",
    },
    {
      feature: "آمنة ضد الاختراقات",
      regular: "✗",
      velante: "✓",
    },
    {
      feature: "دعم فني لمدة 3 أشهر مجانًا",
      regular: "✗",
      velante: "✓",
    },
  ];

  return (
    <section className="vwd-features">
      <div className="vwd-container">
        <motion.h2
          className="vwd-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          مميزات مواقعنا
        </motion.h2>
        <div className="vwd-features__table">
          <div className="vwd-features__header">
            <div className="vwd-features__header-cell"></div>
            <div className="vwd-features__header-cell">المواقع العادية</div>
            <div className="vwd-features__header-cell">مواقع VELANTE</div>
          </div>
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="vwd-features__row"
              initial={{ opacity: 0, y: 20, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="vwd-features__cell vwd-features__feature">
                {item.feature}
              </div>
              <div className="vwd-features__cell">{item.regular}</div>
              <div className="vwd-features__cell vwd-features__velante">
                {item.velante}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
