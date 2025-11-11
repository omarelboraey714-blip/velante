'use client';

import { motion } from 'framer-motion';

export default function PaidAdsSuccessSteps() {
  const steps = [
    {
      title: 'التحليل والاستهداف',
      description: 'دراسة جمهورك بدقة',
    },
    {
      title: 'تصميم إبداعي',
      description: 'صنع إعلانات تجذب الانتباه',
    },
    {
      title: 'الاختبار والتحسين',
      description: 'A/B Testing مستمر',
    },
    {
      title: 'التقارير الشفافة',
      description: 'تقارير أسبوعية عن الأداء',
    },
  ];

  return (
    <section className="vpa-success-steps">
      <div className="vpa-container">
        <motion.h2
          className="vpa-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          كيف نضمن نجاح حملتك
        </motion.h2>
        <div className="vpa-steps__grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="vpa-step"
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="vpa-step-title">{step.title}</h3>
              <p className="vpa-step-description">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
