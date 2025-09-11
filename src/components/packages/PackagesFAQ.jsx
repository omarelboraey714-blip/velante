"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PackagesFAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "كيف أختار الباقة المناسبة لي؟",
      answer:
        "إذا كنت في البداية، ننصحك بالباقة الأساسية. إذا كان لديك عمل قائم وتريد تطويره، فالباقة المتقدمة هي الخيار الأمثل. للشركات الكبيرة، نوصي بالاتصال بنا لمناقشة احتياجاتك الخاصة.",
    },
    {
      question: "هل يمكنني تخصيص الباقة؟",
      answer:
        "بالتأكيد! جميع الباقات قابلة للتخصيص. اختر الباقة الأقرب لاحتياجك وأخبرنا بما تريد إضافته أو إزالته وسنعدل السعر بناءً عليه.",
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer:
        "الدفع نقدًا، تحويل بنكي، أو عبر Paymob (بطاقات ائتمان/خصم) في مصر. وفي السعودية تحويل بنكي أو عبر PayPal.",
    },
    {
      question: "ما هي مدة التنفيذ؟",
      answer:
        "المدة موضحة في كل باقة. نحرص دائمًا على التسليم في الوقت المتفق عليه.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq-section" className="vp-faq">
      <div className="vp-container">
        <motion.h2
          className="vp-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          أسئلة شائعة حول الباقات
        </motion.h2>
        <div className="vp-faq__list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="vp-faq__item"
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              layout
            >
              <button
                className="vp-faq__question"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <motion.span
                  className={`vp-faq__toggle ${
                    openFaq === index ? "vp-faq__toggle--open" : ""
                  }`}
                  animate={{ rotate: openFaq === index ? 0 : 0 }}
                  transition={{ duration: 0.4 }}
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
                    key="content"
                    layout
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="vp-faq__answer "
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
