"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactFAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "ما هي مدة الرد على استفساري؟",
      answer:
        "نرد على جميع الاستفسارات عبر البريد والهاتف خلال 24 ساعة خلال أيام العمل (من الأحد إلى الخميس).",
    },
    {
      question: "هل تقدمون استشارة مجانية؟",
      answer:
        "نعم! نحن نقدم استشارة مجانية أولية لتفهم مشروعك وتقديم الحلول والاقتراحات المناسبة له.",
    },
    {
      question: "ما المعلومات التي يجب أن أقدمها عند التواصل؟",
      answer:
        "يُفضل أن تخبرنا بنبذة عن مشروعك، أهدافك، الجمهور المستهدف، والموعد النهائي الذي تطمح إليه. كلما زادت التفاصيل، استطعنا مساعدتك بشكل أفضل.",
    },
    {
      question: "كيف أتابع حالة مشروعي بعد البدء؟",
      answer:
        "سيتم تعيين مدير مشروع خاص بك سيكون نقطة التواصل الأساسية وسيقدم لك تقارير أسبوعية عن سير العمل.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq-section" className="vc-faq">
      <div className="vc-container">
        <motion.h2
          className="vc-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          أسئلة شائعة قبل التواصل
        </motion.h2>
        <div className="vc-faq__list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="vc-faq__item"
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              layout
            >
              <button
                className="vc-faq__question"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <motion.span
                  className={`vc-faq__toggle ${
                    openFaq === index ? "vc-faq__toggle--open" : ""
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
                    className="vc-faq__answer overflow-hidden"
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
