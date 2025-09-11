import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="va-story">
      <div className="va-container">
        <div className="va-story-content">
          <motion.div
            className="va-story-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="va-section-title">كيف بدأت رحلتنا</h2>
            <p className="va-story-description">
              تأسست فيلانتي في عام 2021، من خلال شغف مشترك لسد الفجوة بين
              الإبداع البصري والوظائف الرقمية. لاحظنا أن الكثير من الشركات
              الناشئة والمنشآت الصغيرة تبحث عن حلول متكاملة ولكنها تواجه عروضًا
              مبعثرة أو مكلفة. ومن هنا، ولدت فكرة فيلانتي: أن نكون الوجهة
              الواحدة التي توفر حلولاً بصرية رقمية متكاملة، بجودة استثنائية
              وأسعار شفافة.
            </p>
          </motion.div>
          <motion.div
            className="va-story-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/founders.jpg"
              alt="مؤسسو فيلانتي"
              className="va-story-img"
              onError={(e) => (e.target.src = "/images/placeholder-avatar.png")}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
