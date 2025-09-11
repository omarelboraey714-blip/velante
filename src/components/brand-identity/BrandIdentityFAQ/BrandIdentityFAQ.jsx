"use client";

import { motion } from "framer-motion";

export default function BrandIdentityFAQ() {
  const faqs = [
    {
      question: "كم من الوقت تستغرق عملية التصميم؟",
      answer: "10-14 يوم عمل",
    },
    {
      question: "هل يمكنني استخدام الشعار على جميع المنصات؟",
      answer: "نعم، نسقنا لك جميع الصيغ",
    },
    {
      question: "ماذا لو لم يعجبني التصميم الأولي؟",
      answer: "نعمل على التعديل حتى تحقيق رضاك",
    },
  ];

  return (
    <section className="vbi-faq">
      <div className="vbi-container">
        <motion.h2
          className="vbi-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          الأسئلة الشائعة
        </motion.h2>
        <div className="vbi-faq__list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="vbi-faq__item"
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="vbi-faq__question">{faq.question}</h3>
              <p className="vbi-faq__answer">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
