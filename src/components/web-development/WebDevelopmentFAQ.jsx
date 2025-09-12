"use client";

import { motion } from "framer-motion";

export default function WebDevelopmentFAQ() {
  const faqs = [
    {
      question: "كم تستغرق مدة تصميم الموقع؟",
      answer: "2-4 أسابيع حسب التعقيد",
    },
    {
      question: "هل سأتمكن من تحديث الموقع بنفسي؟",
      answer: "نعم، مع لوحة تحكم سهلة",
    },
    {
      question: "ما هي ضمانات الاستمرارية بعد التسليم؟",
      answer: "دعم فني لمدة 3 أشهر",
    },
  ];

  return (
    <section className="vwd-faq">
      <div className="vwd-container">
        <motion.h2
          className="vwd-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          الأسئلة الشائعة
        </motion.h2>
        <div className="vwd-faq__list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="vwd-faq__item"
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="vwd-faq__question">{faq.question}</h3>
              <p className="vwd-faq__answer">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
