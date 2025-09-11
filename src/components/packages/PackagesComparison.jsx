import { motion } from "framer-motion";

export default function PackagesComparison() {
  const packages = [
    {
      id: "basic",
      name: "الباقة الأساسية",
      subtitle: "The Launchpad",
      description: "مخصصة ل: المشاريع الناشئة والأفراد",
      price: "2,499 ج.م / 1,299 ر.س",
      priceNote: 'أو سعر "يبدأ من"',
      color: "blue",
      features: {
        branding: {
          "تصميم لوجو (3 مفاهيم)": true,
          "دليل الهوية البصرية": false,
          "تصميم بطاقات العمل": true,
        },
        web: {
          "عدد الصفحات": "5 صفحات",
          "متجر إلكتروني (E-commerce)": false,
          "لوحة تحكم عربية": true,
          "استضافة مجانية (لمدة عام)": false,
        },
        marketing: {
          "تصميم 5 منشورات": true,
          "إدارة حملة إعلانية (لمدة أسبوع)": false,
          "تحليل المنافسين": false,
        },
        support: {
          "فترة الدعم": "شهر واحد",
          "عدد المراجعات": "2 مراجعة",
          "تسليم خلال": "10 أيام",
        },
      },
      cta: "ابدأ مشروعك",
      ctaStyle: "primary",
    },
    {
      id: "advanced",
      name: "الباقة المتقدمة",
      subtitle: "The Growth",
      description: "مخصصة ل: الشركات الصغيرة والمتوسطة الراغبة في النمو",
      price: "5,999 ج.م / 3,199 ر.س",
      color: "orange",
      popular: true,
      features: {
        branding: {
          "تصميم لوجو (3 مفاهيم)": true,
          "دليل الهوية البصرية": "PDF",
          "تصميم بطاقات العمل": true,
        },
        web: {
          "عدد الصفحات": "10 صفحات",
          "متجر إلكتروني (E-commerce)": "ماكس 20 منتج",
          "لوحة تحكم عربية": true,
          "استضافة مجانية (لمدة عام)": true,
        },
        marketing: {
          "تصميم 5 منشورات": true,
          "إدارة حملة إعلانية (لمدة أسبوع)": true,
          "تحليل المنافسين": true,
        },
        support: {
          "فترة الدعم": "3 أشهر",
          "عدد المراجعات": "5 مراجعات",
          "تسليم خلال": "15 يوم",
        },
      },
      cta: "اختر الباقة",
      ctaStyle: "secondary",
    },
    {
      id: "enterprise",
      name: "الباقة المتميزة",
      subtitle: "The Enterprise",
      description: "مخصصة ل: العلامات التجارية الكبيرة والشركات",
      price: "سعر مخصص",
      color: "purple",
      features: {
        branding: {
          "تصميم لوجو (3 مفاهيم)": true,
          "دليل الهوية البصرية": "مطبوعة + تفاعلية",
          "تصميم بطاقات العمل": true,
        },
        web: {
          "عدد الصفحات": "صفحات غير محدودة",
          "متجر إلكتروني (E-commerce)": "منتجات غير محدودة",
          "لوحة تحكم عربية": true,
          "استضافة مجانية (لمدة عام)": true,
        },
        marketing: {
          "تصميم 5 منشورات": true,
          "إدارة حملة إعلانية (لمدة أسبوع)": true,
          "تحليل المنافسين": true,
        },
        support: {
          "فترة الدعم": "6 أشهر",
          "عدد المراجعات": "مراجعات غير محدودة",
          "تسليم خلال": "حسب المشروع",
        },
      },
      cta: "اطلب عرضًا مخصصًا",
      ctaStyle: "primary",
    },
  ];

  return (
    <section className="vp-comparison">
      <div className="vp-container">
        <motion.h2
          className="vp-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          مقارنة الباقات
        </motion.h2>
        <div className="vp-packages__grid">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={`vp-package-card vp-package-card--${pkg.color} ${
                pkg.popular ? "vp-package-card--popular" : ""
              }`}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{
                duration: 0.2,
              }}
              whileHover={{ rotateY: 10, scale: 1.05 }}
              viewport={{ once: true }}
            >
              {pkg.popular && (
                <div className="vp-popular-badge">الأكثر رواجًا</div>
              )}
              <div className="vp-package-header">
                <h3 className="vp-package-name">{pkg.name}</h3>
                <p className="vp-package-subtitle">{pkg.subtitle}</p>
                <p className="vp-package-description">{pkg.description}</p>
                <div className="vp-package-price">
                  {pkg.price}
                  {pkg.priceNote && (
                    <span className="vp-price-note">{pkg.priceNote}</span>
                  )}
                </div>
              </div>
              <div className="vp-package-features">
                {Object.entries(pkg.features).map(([category, features]) => (
                  <div key={category} className="vp-feature-category">
                    <h4 className="vp-feature-category-title">
                      {category === "branding"
                        ? "تصميم الهوية البصرية"
                        : category === "web"
                        ? "تصميم وبرمجة الموقع"
                        : category === "marketing"
                        ? "التسويق والإعلان"
                        : "ما بعد التسليم"}
                    </h4>
                    {Object.entries(features).map(([feature, value]) => (
                      <div key={feature} className="vp-feature-item">
                        <span className="vp-feature-name">{feature}</span>
                        {value === true ? (
                          <span className="vp-feature-check">✓</span>
                        ) : value === false ? (
                          <span className="vp-feature-cross">✗</span>
                        ) : (
                          <span className="vp-feature-value">{value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <motion.button
                className={`vp-btn vp-btn--${pkg.ctaStyle} vp-package-cta`}
                whileHover={{ scale: 1.1, rotateX: 10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {pkg.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
