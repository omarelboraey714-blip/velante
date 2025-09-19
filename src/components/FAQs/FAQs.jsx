"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSWR from "swr";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./FAQs.css";

// Fallback data
const fallbackFaqs = [
  {
    id: 1,
    question: "كيف أختار الباقة المناسبة لي؟",
    answer:
      "إذا كنت في البداية، ننصحك بالباقة الأساسية. إذا كان لديك عمل قائم وتريد تطويره، فالباقة المتقدمة هي الخيار الأمثل. للشركات الكبيرة، نوصي بالاتصال بنا لمناقشة احتياجاتك الخاصة.",
    category: "packages",
  },
];

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch FAQs");
  }
  return response.json();
};

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);
  const pathname = usePathname();

  const category = useMemo(() => {
    if (pathname.includes("/services/branding")) return "branding";
    if (pathname.includes("/services/web-development"))
      return "web-development";
    if (pathname.includes("/services/ads")) return "ads";
    if (pathname.includes("/packages")) return "packages";
    if (pathname.includes("/contact")) return "contact";
    return "all";
  }, [pathname]);

  const {
    data: faqs,
    error,
    isLoading,
  } = useSWR(`/api/faqs?category=${category}`, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
    initialData: fallbackFaqs.filter(
      (f) => category === "all" || f.category === category
    ),
    onError: (err) => console.error("Error fetching FAQs:", err),
  });

  const toggleFaq = useCallback((index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  }, []);

  // إغلاق عند النقر خارج السؤال
  useEffect(() => {
    const handleClickOutside = (e) => {
      const target = e.target;
      const buttons = document.querySelectorAll(".vp-faq__question");
      const isClickInsideButton = Array.from(buttons).some((btn) =>
        btn.contains(target)
      );

      if (!isClickInsideButton && openFaq !== null) {
        setOpenFaq(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openFaq]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // أنعم وأخف لو العناصر كتيرة
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.4,
      },
    },
  };

  const answerVariants = {
    hidden: { opacity: 0, scaleY: 0, transformOrigin: "top center" },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.35,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="faq-section" className="vp-faq" aria-label="الأسئلة الشائعة">
      <div className="vp-container">
        <motion.h2
          className="vp-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          أسئلة شائعة
        </motion.h2>

        {isLoading ? (
          <motion.div
            className="vp-loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            role="status"
            aria-live="polite"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="vp-spinner"
            >
              O
            </motion.div>
          </motion.div>
        ) : faqs.length === 0 ? (
          <motion.div
            className="vp-empty-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            role="alert"
            aria-live="polite"
          >
            <p className="vp-empty-message">
              لا توجد أسئلة شائعة متاحة حاليًا. تواصل معنا لمعرفة المزيد!
            </p>
            <Link
              href="/contact"
              className="vp-btn vp-btn--primary"
              aria-label="تواصل معنا لمعرفة المزيد"
            >
              تواصل معنا
            </Link>
          </motion.div>
        ) : (
          <motion.div
            className="vp-faq__list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="vp-faq__item"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                layout
              >
                <button
                  type="button"
                  className="vp-faq__question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    className={`vp-faq__toggle ${
                      openFaq === index ? "vp-faq__toggle--open" : ""
                    }`}
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      variants={answerVariants}
                      animate="visible"
                      exit="exit"
                      className="vp-faq__answer"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
