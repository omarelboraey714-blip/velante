import { motion } from "framer-motion";

export default function PaidAdsPackages() {
  const packages = [
    {
      id: 1,
      name: "الباقة المبدئية",
      price: "من 3,000 جنيه",
      features: [
        "إدارة حملة واحدة",
        "تقرير أسبوعي",
        "استهداف أساسي",
        "دعم عبر البريد",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "الباقة المتوسطة",
      price: "من 7,000 جنيه",
      features: [
        "إدارة حملتين",
        "تحسين مستمر",
        "تقرير مفصل شهري",
        "A/B Testing محدود",
        "دعم عبر الهاتف",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "الباقة المتقدمة",
      price: "من 15,000 جنيه",
      features: [
        "إدارة متكاملة",
        "استراتيجية محتوى",
        "A/B Testing مستمر",
        "تقرير يومي",
        "دعم 24/7",
        "تحليلات متقدمة",
      ],
      popular: false,
    },
  ];

  return (
    <section className="vpa-packages">
      <div className="vpa-container">
        <motion.h2
          className="vpa-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          باقات الإعلان
        </motion.h2>
        <div className="vpa-packages__grid">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={`vpa-package-card ${
                pkg.popular ? "vpa-package-card--popular" : ""
              }`}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ rotateY: 10, scale: 1.05 }}
              viewport={{ once: true }}
            >
              {pkg.popular && (
                <div className="vpa-package-popular-badge">الأكثر شيوعاً</div>
              )}
              <h3 className="vpa-package-name">{pkg.name}</h3>
              <div className="vpa-package-price">{pkg.price}</div>
              <ul className="vpa-package-features">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="vpa-package-feature">
                    <span className="vpa-package-feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                className={`vpa-btn ${
                  pkg.popular ? "vpa-btn--primary" : "vpa-btn--secondary"
                } vpa-package-btn`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                اختر الباقة
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
