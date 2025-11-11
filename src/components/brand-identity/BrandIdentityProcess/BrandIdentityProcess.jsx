'use client';

import { motion } from 'framer-motion';

export default function BrandIdentityProcess() {
  const steps = [
    {
      title: 'الاستماع وتحليل المنافسين',
      description: 'جلسة اكتشاف شاملة',
    },
    {
      title: 'التصور الأولي والعصف الذهني',
      description: 'تطوير الأفكار المبدئية',
    },
    {
      title: 'التصميم والتطوير',
      description: '(3 مراجعات)',
    },
    {
      title: 'التسليم النهائي والاحتفال!',
      description: 'حزمة الهوية البصرية كاملة',
    },
  ];

  return (
    <section className="vbi-process">
      <div className="vbi-container">
        <motion.h2
          className="vbi-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          خطوات العمل
        </motion.h2>
        <div className="vbi-process__timeline">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="vbi-process__step"
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="vbi-process__content"
                transition={{ duration: 0.3 }}
              >
                <h3 className="vbi-process__title">{step.title}</h3>
                <p className="vbi-process__description">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
