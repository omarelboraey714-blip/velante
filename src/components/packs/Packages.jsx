"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import useSWR from "swr";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import "./packages.css";

// مكون بطاقة الباقة
function PackageCard({ pkg }) {
  return (
    <motion.div
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
      <h3 className="vpa-package-name">{pkg.title}</h3>
      <div className="vpa-package-price">
        من {pkg.price_min?.toLocaleString()} - {pkg.price_max?.toLocaleString()}{" "}
        {pkg.currency}
      </div>
      <div className="vpa-package-description">{pkg.description}</div>

      <ul className="vpa-package-features">
        {pkg.features?.map((feature, index) => (
          <li key={index} className="vpa-package-feature">
            <span className="vpa-package-feature-check">
              <FiCheck />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <Link href="#" aria-label={`اختر ${pkg.title}`}>
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
      </Link>
    </motion.div>
  );
}

// مكون القسم الرئيسي
export default function PackagesSection({ bg }) {
  const pathname = usePathname();

  // تحديد الكاتيجوري من المسار
  const category = (() => {
    if (pathname.includes("/services/branding")) return "branding";
    if (pathname.includes("/services/web-development")) return "web";
    if (pathname.includes("/services/ads")) return "ads";
    if (pathname.includes("/services/social-media")) return "social";
    return "all";
  })();

  // جلب البيانات من الـ API
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/packages?category=${category}`,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 10000,
    }
  );

  return (
    <section
      className={`vpa-packages ${
        bg || "bg-gradient-to-b from-primary to-gray-900"
      }`}
    >
      <div className="vpa-container">
        <motion.h2
          className="vpa-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          باقات {category === "all" ? "الخدمات" : ""}
        </motion.h2>

        {isLoading && <p>جاري التحميل...</p>}
        {error && <p>حدث خطأ أثناء جلب البيانات</p>}

        <div className="vpa-packages__grid">
          {data?.data?.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
