import { motion } from "framer-motion";

export default function PaidAdsFAQ() {
  const faqs = [
    {
      question: "كم الميزانية المناسبة للبدء؟",
      answer: "ننصح بـ 3,000 جنيه للبدء بشكل فعال",
    },
    {
      question: "هل تتحملون الإدارة بميزانية محدودة؟",
      answer: "نعم، لدينا باقات تناسب الجميع",
    },
    {
      question: "كيف تقيسون نجاح الحملة؟",
      answer: "بمؤشرات مثل ROAS، تكلفة التحويل، معدل النقر",
    },
  ];

  return (
    <section className="vpa-faq">
      <div className="vpa-container">
        <motion.h2
          className="vpa-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          الأسئلة الشائعة
        </motion.h2>
        <div className="vpa-faq__list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="vpa-faq__item"
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="vpa-faq__question">{faq.question}</h3>
              <p className="vpa-faq__answer">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
