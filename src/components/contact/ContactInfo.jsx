'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

export default function ContactInfo() {
  const [copiedEmail, setCopiedEmail] = useState('');

  const contactInfo = [
    {
      id: 1,
      icon: '☎️',
      title: 'تحدث معنا',
      info: ['+20 1556840380'],
      description: 'متوفرون من الأحد إلى الخميس، من 9 صباحًا إلى 5 مساءً',
      buttonText: 'اتصل الآن',
      buttonAction: 'tel:+201556840380',
      type: 'phone',
    },
    {
      id: 2,
      icon: '✉️',
      title: 'أرسل لنا بريدًا',
      info: ['velante.Solutions@gmail.com'],
      description: 'سنجيب خلال 24 ساعة خلال أيام العمل',
      buttonText: 'أرسل بريدًا',
      buttonAction: 'mailto:velante.Solutions@gmail.com',
      type: 'email',
    },
    {
      id: 3,
      icon: '💬',
      title: 'دردش مباشرة',
      info: ['WhatsApp'],
      description: 'للرد السريع، تواصل معنا على الواتساب',
      buttonText: 'ابدأ محادثة',
      buttonAction: 'https://wa.me/201556840380',
      type: 'chat',
    },
  ];

  const copyEmail = email => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => {
      setCopiedEmail('');
    }, 2000);
  };

  return (
    <section className="vc-info">
      <div className="vc-container">
        <motion.h2
          className="vc-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          تواصل معنا
        </motion.h2>
        <div className="vc-info__grid">
          {contactInfo.map(contact => (
            <motion.div
              key={contact.id}
              className="vc-info__card"
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ rotateY: -10, translateY: -5 }}
              viewport={{ once: true }}
            >
              <div className="vc-info__icon">{contact.icon}</div>
              <h3 className="vc-info__title">{contact.title}</h3>
              <div className="vc-info__details">
                {contact.info.map((info, index) => (
                  <p
                    dir="ltr"
                    key={index}
                    className="vc-info__text"
                    onClick={() =>
                      contact.type === 'email' && copyEmail(info.split(' ')[0])
                    }
                  >
                    {info}
                    {contact.type === 'email' &&
                      copiedEmail === info.split(' ')[0] && (
                        <span className="vc-copy-confirmation">تم النسخ!</span>
                      )}
                  </p>
                ))}
              </div>
              <p className="vc-info__description">{contact.description}</p>
              <motion.a
                href={contact.buttonAction}
                className="vc-btn vc-btn--primary vc-info__button"
                target={
                  contact.buttonAction.startsWith('http') ? '_blank' : '_self'
                }
                rel={
                  contact.buttonAction.startsWith('http')
                    ? 'noopener noreferrer'
                    : ''
                }
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {contact.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
