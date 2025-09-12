"use client";

import { motion } from "framer-motion";

export default function WebDevelopmentIntro() {
  return (
    <section className="vwd-intro">
      <div className="vwd-container">
        <motion.div
          className="vwd-intro__content"
          initial={{ opacity: 0, y: 50, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="vwd-intro__text">
            في عصر الرقمنة، موقعك الإلكتروني هو موظفك الذي يعمل 24/7. نحن في
            VELANTE نبني مواقع ليست جميلة فحسب، بل ذكية وسريعة وتحقق أهدافك
            التجارية.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
