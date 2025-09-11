import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section className="vc-map">
      <div className="vc-container">
        <motion.h2
          className="vc-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          تعال إلى مكتبنا
        </motion.h2>
        <motion.div
          className="vc-map__container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="vc-map__placeholder">
            <p>خريطة تفاعلية من Google Maps</p>
            <p>العنوان: مدينة نصر، القاهرة، مصر</p>
          </div>
        </motion.div>
        <motion.p
          className="vc-map__note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          يرجى تحديد موعد مسبق للتأكد من توفر الفريق.
        </motion.p>
      </div>
    </section>
  );
}
