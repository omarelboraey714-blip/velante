"use client";

import { useState } from "react";

import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("البريد الإلكتروني مطلوب");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("البريد الإلكتروني غير صحيح");
      return;
    }

    setError("");
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <motion.div
      className="vf-newsletter"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="vf-column-title">اشترك في نشرتنا البريدية</h3>
      <p className="vf-newsletter__description">
        كن أول من يعلم بآخر عروضنا وأفكارنا التسويقية.
      </p>
      <form className="vf-newsletter__form" onSubmit={handleSubmit}>
        <motion.div
          className="vf-input-group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            className={`vf-email-input ${error ? "vf-input--error" : ""}`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
          <motion.button
            type="submit"
            className="vf-subscribe-btn"
            whileHover={{ scale: 1.1, rotateX: 10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            اشترك الآن
          </motion.button>
        </motion.div>
        {error && (
          <motion.span
            className="vf-error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.span>
        )}
        {success && (
          <motion.span
            className="vf-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            تم الاشتراك بنجاح!
          </motion.span>
        )}
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
