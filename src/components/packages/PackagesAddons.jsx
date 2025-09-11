import { motion } from "framer-motion";

export default function PackagesAddons() {
  const addons = [
    {
      id: 1,
      title: "تصميم هوية لوسائل التواصل الاجتماعي",
      price: "500 ج.م / 250 ر.س",
    },
    {
      id: 2,
      title: "تسجيل صوتي احترافي للإعلانات",
      price: "800 ج.م / 400 ر.س",
    },
    {
      id: 3,
      title: "جلسة تصوير احترافية للمنتجات",
      price: "1,500 ج.م / 750 ر.س",
    },
    {
      id: 4,
      title: "تدريب على استخدام الموقع",
      price: "1,000 ج.م / 500 ر.س",
    },
  ];

  return (
    <section className="vp-addons">
      <div className="vp-container">
        <motion.h2
          className="vp-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          هل تحتاج المزيد؟ تخصيص باقاتك مع هذه الإضافات
        </motion.h2>
        <div className="vp-addons__grid">
          {addons.map((addon) => (
            <motion.div
              key={addon.id}
              className="vp-addon-card"
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ translateY: -5 }}
              viewport={{ once: true }}
            >
              <h3 className="vp-addon-title">{addon.title}</h3>
              <div className="vp-addon-price">{addon.price}</div>
              <motion.button
                className="vp-btn vp-btn--secondary vp-addon-add"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                أضف إلى الباقة
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
