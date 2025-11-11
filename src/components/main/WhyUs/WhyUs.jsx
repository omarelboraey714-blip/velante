// src/components/WhyUs/WhyUs.jsx

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Zap, Shield, Clock, Headphones } from 'lucide-react';
import Link from 'next/link';
import './WhyUs.css';

export default function WhyUs() {
  const reasons = [
    {
      id: 1,
      icon: <Zap size={32} />,
      title: 'إبداع بلا حدود',
      description: 'نقدم حلولاً مبتكرة تتجاوز التوقعات العادية',
    },
    {
      id: 2,
      icon: <Shield size={32} />,
      title: 'جودة لا تُقبل بالتسوية',
      description: 'نلتزم بأعلى معايير الجودة في كل تفاصيل العمل',
    },
    {
      id: 3,
      icon: <Clock size={32} />,
      title: 'تسليم في الوقت المتفق عليه',
      description: 'نحترم المواعيد ونلتزم بالجدول الزمني المتفق عليه',
    },
    {
      id: 4,
      icon: <Headphones size={32} />,
      title: 'دعم فني بعد التسليم',
      description: 'نقدم دعماً فنياً مستمراً بعد تسليم المشروع',
    },
  ];

  return (
    <section className="why-us">
      <div className="whyus-container">
        <motion.div
          className="whyus-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="whyus-title">لماذا تختار VELANTE ؟</h2>
        </motion.div>

        <div className="whyus-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              className="whyus-reason"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{ perspective: '1000px' }}
            >
              <div className="whyus-reason-content">
                <motion.div
                  className="whyus-icon"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {reason.icon}
                </motion.div>
                <h3 className="whyus-reason-title">{reason.title}</h3>
                <p className="whyus-reason-description">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="whyus-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/contact" className="whyus-btn-brand">
            ابدأ مشروعك معنا
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
