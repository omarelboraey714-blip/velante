'use client';

import { motion } from 'framer-motion';

export default function WebDevelopmentTypes() {
  const types = [
    {
      title: 'المواقع الترويجية',
      description: 'لعرض خدماتك',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: 'المتاجر الإلكترونية',
      description: 'للبيع أونلاين',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: 'المنصات التعليمية',
      description: 'للدورات والتدريبات',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: 'تطبيقات الويب',
      description: 'لحلول الأعمال المتقدمة',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="vwd-types">
      <div className="vwd-container">
        <motion.h2
          className="vwd-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          أنواع المواقع التي نبرمجها
        </motion.h2>
        <div className="vwd-types__grid">
          {types.map((type, index) => (
            <motion.div
              key={index}
              className="vwd-type-card"
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="vwd-type-icon">{type.icon}</div>
              <h3 className="vwd-type-title">{type.title}</h3>
              <p className="vwd-type-description">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
