'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      setError('');
      setSuccess('');
      setIsSubmitting(true);

      if (!email.trim()) {
        setError('البريد الإلكتروني مطلوب');
        setIsSubmitting(false);
        return;
      }

      try {
        // إرسال طلب الاشتراك إلى /api/newsletter
        const newsletterResponse = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        const newsletterResult = await newsletterResponse.json();

        if (!newsletterResponse.ok) {
          throw new Error(newsletterResult.error || 'فشل في الاشتراك');
        }

        // إرسال إيميل ترحيبي
        const emailResponse = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'newsletter', email }),
        });

        const emailResult = await emailResponse.json();

        if (!emailResponse.ok)
          throw new Error(emailResult.error || 'فشل في إرسال إيميل الترحيب');

        setSuccess('تم الاشتراك بنجاح! تحقق من بريدك الإلكتروني للتأكيد.');
        setEmail('');
        setTimeout(() => setSuccess(''), 5000);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsSubmitting(false);
      }
    },
    [email]
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 100 },
    },
  };

  const inputGroupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="vf-newsletter"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-label="الاشتراك في النشرة البريدية"
    >
      <h3 className="vf-column-title">اشترك في نشرتنا البريدية</h3>
      <p className="vf-newsletter__description">
        كن أول من يعلم بآخر عروضنا وأفكارنا التسويقية.
      </p>
      <form className="vf-newsletter__form" onSubmit={handleSubmit} role="form">
        <motion.div
          className="vf-input-group"
          variants={inputGroupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            className={`vf-email-input ${error ? 'vf-input--error' : ''}`}
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              setError('');
              setSuccess('');
            }}
            disabled={isSubmitting}
            aria-label="أدخل بريدك الإلكتروني"
          />
          <motion.button
            type="submit"
            className="vf-subscribe-btn"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            disabled={isSubmitting}
            aria-label="اشترك في النشرة البريدية"
          >
            {isSubmitting ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                جاري...
              </motion.span>
            ) : (
              'اشترك الآن'
            )}
          </motion.button>
        </motion.div>
        <AnimatePresence>
          {error && (
            <motion.span
              className="vf-error"
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              role="alert"
            >
              {error}
            </motion.span>
          )}
          {success && (
            <motion.span
              className="vf-success"
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              role="alert"
            >
              {success}
            </motion.span>
          )}
        </AnimatePresence>
      </form>
      <motion.p
        className="vf-privacy-note"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        نحن نحترم خصوصيتك. لن نشارك بريدك مع أي طرف ثالث.
      </motion.p>
    </motion.div>
  );
}
