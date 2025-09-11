import { motion } from "framer-motion";

export default function PaidAdsIntro() {
  return (
    <section className="vpa-intro">
      <div className="vpa-container">
        <motion.div
          className="vpa-intro__content"
          initial={{ opacity: 0, y: 50, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="vpa-intro__text">
            الإعلان بدون استراتيجية مثل الصيد في الظلام. نحن في{" "}
            <span>VELANTE</span> نضع إعلاناتك أمام العيون المهتمة حقًا، باستهداف
            دقيق وتحليل مستمر لضمان تحقيقك لأعلى عائد ممكن على استثمارك.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
