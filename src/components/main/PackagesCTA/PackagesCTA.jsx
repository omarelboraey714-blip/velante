// src/components/PackagesCTA/PackagesCTA.jsx
"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import "./PackagesCTA.css";

export default function PackagesCTA() {
  const packages = [
    {
      id: "basic",
      name: "الباقة الأساسية",
      subtitle: "The Launchpad",
      description:
        "للمشاريع الناشئة والأفراد اللي عايزين يبدأوا أونلاين بشكل احترافي وبأقل تكلفة. توفرلك أساسيات الهوية والموقع والمحتوى لتظهر بمظهر قوي من أول يوم.",
      price: "6,500 ج.م / 850 ر.س",
      priceNote: "سعر ثابت",
      color: "blue",
      features: {
        branding: {
          "تصميم لوجو (مفهوم واحد)": true,
          "دليل ألوان وخطوط بسيط": true,
          "تصميم بطاقة عمل": true,
        },
        web: {
          "عدد الصفحات": "3 صفحات",
          "متجر إلكتروني (E-commerce)": false,
          "لوحة تحكم عربية": true,
          "استضافة مجانية (لمدة 3 أشهر)": true,
        },
        marketing: {
          "تصميم 3 منشورات ثابتة": true,
          "إعداد صفحة فيسبوك/إنستجرام": true,
          "إدارة حملة إعلانية تجريبية (5 أيام)": false,
        },
        support: {
          "فترة الدعم": "شهر واحد",
          "عدد المراجعات": "2 مراجعة",
          "تسليم خلال": "12 يوم",
        },
      },
      cta: "ابدأ مشروعك",
      ctaStyle: "primary",
    },
    {
      id: "advanced",
      name: "الباقة المتقدمة",
      subtitle: "The Growth",
      description:
        "للشركات الصغيرة والمتوسطة اللي عايزة تكبر بسرعة. بتجمع بين هوية متكاملة، موقع احترافي، وتسويق مدروس يوصلك لجمهورك المستهدف.",
      price: "14,500 ج.م / 1,650 ر.س",
      priceNote: "أو حسب متطلباتك",
      color: "orange",
      popular: true,
      features: {
        branding: {
          "تصميم لوجو (مفهومين)": true,
          "دليل الهوية البصرية (PDF)": true,
          "تصميم بطاقات العمل": true,
        },
        web: {
          "عدد الصفحات": "7 صفحات",
          "متجر إلكتروني (E-commerce)": "حتى 25 منتج",
          "لوحة تحكم عربية": true,
          "استضافة مجانية (6 اشهر)": true,
        },
        marketing: {
          "تصميم 7 منشورات (ثابت + متحرك)": true,
          "إدارة حملة إعلانية (أسبوعين)": true,
          "تحليل المنافسين": true,
        },
        support: {
          "فترة الدعم": "3 أشهر",
          "عدد المراجعات": "5 مراجعات",
          "تسليم خلال": "20 يوم",
        },
      },
      cta: "اختر الباقة",
      ctaStyle: "primary",
    },
    {
      id: "enterprise",
      name: "الباقة المتميزة",
      subtitle: "The Enterprise",
      description:
        "للشركات الكبيرة والعلامات التجارية اللي محتاجة حلول متكاملة وقابلة للتوسع. من براند محترف لموقع ومتجر ضخم وحملات تسويقية قوية بدعم طويل المدى.",
      price: "ابتداءً من 28,000 ج.م / 3,200 ر.س",
      priceNote: "سعر مخصص حسب المشروع",
      color: "purple",
      features: {
        branding: {
          "تصميم لوجو (3 مفاهيم)": true,
          "دليل هوية بصرية (مطبوعة + تفاعلية)": true,
          "تصميم بطاقات عمل وكتيب تعريفي": true,
        },
        web: {
          "عدد الصفحات": "صفحات غير محدودة",
          "متجر إلكتروني (E-commerce)": "منتجات غير محدودة",
          "لوحة تحكم عربية + مميزات متقدمة": true,
          "استضافة مجانية (عام كامل)": true,
        },
        marketing: {
          "تصميم 12 منشور (ثابت + متحرك)": true,
          "إدارة حملة إعلانية (شهر)": true,
          "تحليل المنافسين وخطة محتوى": true,
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

  // رقم واتساب (استبدله برقمك الحقيقي)
  const whatsappNumber = "201556840380";
  const getWhatsAppLink = (packageName) => {
    const message = encodeURIComponent(
      `أهلاً، أنا مهتم ب${packageName} وأرغب في طلبها و معرفة المزيد من التفاصيل.`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

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
                <a
                  href={getWhatsAppLink(pkg.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className={`vp-btn vp-btn--${pkg.ctaStyle} vp-package-cta`}
                    whileHover={{ scale: 1.1, rotateX: 10 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    {pkg.cta}
                  </motion.button>
                </a>
              </motion.div>
            ))}
          </div>

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
