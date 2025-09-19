"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion"; // v12.23.12
import useSWR from "swr"; // v2.3.6
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Services.css";

// Fallback data (للحالات الطارئة)
const fallbackServices = [
  {
    id: 1,
    title: "تصميم شعار نصي (Wordmark)",
    description: "شعار بسيط وأنيق يعكس اسم مشروعك بلمسة عصرية...",
    price: "1,500 ج.م",
    category: "branding",
  },
  {
    id: 2,
    title: "تصميم موقع شركة (Corporate Website)",
    description: "موقع يعكس احترافية شركتك ويخلي العميل يثق فيك أكتر...",
    price: "10,000 – 15,000 ج.م",
    category: "web-development",
  },
];

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }
  return response.json();
};

export default function Services({ bg }) {
  const pathname = usePathname();

  // تحديد الفلتر بناءً على المسار
  const category = useMemo(() => {
    if (pathname.includes("/services/branding")) return "branding";
    if (pathname.includes("/services/web-development"))
      return "web-development";
    if (pathname.includes("/services/ads")) return "ads";
    if (pathname.includes("/services/social-media")) return "social-media";
    return "all";
  }, [pathname]);

  const {
    data: services,
    error,
    isLoading,
  } = useSWR(`/api/services?category=${category}`, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
    fallbackData: fallbackServices.filter(
      (s) => category === "all" || s.category === category
    ),
    onError: (err) => console.error("Error fetching services:", err),
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      className={`vs-services ${bg || "bg-gray-900"}`}
      aria-label="الخدمات"
    >
      <div className="vs-container">
        {/* العنوان */}
        <motion.h2
          className="vs-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          خدمات اخرى
        </motion.h2>

        {/* حالة التحميل */}
        {isLoading ? (
          <motion.div
            className="vs-loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            role="status"
            aria-live="polite"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="vs-spinner"
            ></motion.div>
          </motion.div>
        ) : services.length === 0 ? (
          // حالة عدم وجود خدمات
          <motion.div
            className="vs-empty-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            role="alert"
            aria-live="polite"
          >
            <p className="vs-empty-message">
              لا توجد خدمات متاحة حاليًا. تواصل معنا لمعرفة المزيد!
            </p>
            <Link
              href="/contact"
              className="vs-btn vs-btn--primary"
              aria-label="تواصل معنا لمعرفة المزيد عن الخدمات"
            >
              تواصل معنا
            </Link>
          </motion.div>
        ) : (
          // عرض الخدمات
          <motion.div
            className="vs-services-grid"
            variants={containerVariants}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className="vs-service-card"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, translateY: -5 }}
                >
                  <h3 className="vs-service-title">{service.title}</h3>
                  <p className="vs-service-description">
                    {service.description}
                  </p>
                  <p className="vs-service-price">{service.price}</p>
                  <Link
                    href="/contact"
                    className="vs-btn vs-btn--primary"
                    aria-label={`تواصل معنا للحصول على ${service.title}`}
                  >
                    اطلب الآن
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
