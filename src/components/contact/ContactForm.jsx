"use client";

import { useState } from "react";

import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+20",
    service: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    "تصميم هوية بصرية",
    "تصميم وتطوير موقع ويب",
    "متجر إلكتروني",
    "إعلانات ممولة",
    "باقة متكاملة",
    "استشارة مجانية",
    "أخرى",
  ];

  const budgets = [
    "أقل من 5,000 ج.م",
    "5,000 إلى 10,000 ج.م",
    "أكثر من 10,000 ج.م",
    "أريد مناقشة السعر",
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "الاسم مطلوب";
    }

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "رقم الهاتف غير صحيح";
    }

    if (!formData.service) {
      newErrors.service = "الخدمة مطلوبة";
    }

    if (!formData.budget) {
      newErrors.budget = "الميزانية مطلوبة";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          countryCode: "+20",
          service: "",
          budget: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 2000);
    }
  };

  return (
    <section className="vc-form-section">
      <div className="vc-container">
        <motion.div
          className="vc-form-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="vc-section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            أرسل رسالتك مباشرة
          </motion.h2>
          <form className="vc-form" onSubmit={handleSubmit}>
            <div className="vc-form__row">
              <motion.div
                className="vc-form__group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="fullName" className="vc-form__label">
                  <span className="vc-form__icon">👤</span>
                  الاسم بالكامل
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`vc-form__input ${
                    errors.fullName ? "vc-form__input--error" : ""
                  }`}
                  placeholder="أدخل اسمك الكامل"
                />
                {errors.fullName && (
                  <span className="vc-form__error">{errors.fullName}</span>
                )}
              </motion.div>
              <motion.div
                className="vc-form__group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="vc-form__label">
                  <span className="vc-form__icon">✉️</span>
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`vc-form__input ${
                    errors.email ? "vc-form__input--error" : ""
                  }`}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <span className="vc-form__error">{errors.email}</span>
                )}
              </motion.div>
            </div>
            <div className="vc-form__row">
              <motion.div
                className="vc-form__group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="phone" className="vc-form__label">
                  <span className="vc-form__icon">☎️</span>
                  رقم الهاتف
                </label>
                <div className="vc-form__phone-group">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="vc-form__country-code"
                  >
                    <option value="+20">🇪🇬 +20</option>
                    <option value="+966">🇸🇦 +966</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`vc-form__input ${
                      errors.phone ? "vc-form__input--error" : ""
                    }`}
                    placeholder="100 000 0000"
                  />
                </div>
                {errors.phone && (
                  <span className="vc-form__error">{errors.phone}</span>
                )}
              </motion.div>
              <motion.div
                className="vc-form__group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="service" className="vc-form__label">
                  <span className="vc-form__icon">🛠️</span>
                  الخدمة المطلوبة
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`vc-form__select ${
                    errors.service ? "vc-form__select--error" : ""
                  }`}
                >
                  <option value="">اختر الخدمة</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span className="vc-form__error">{errors.service}</span>
                )}
              </motion.div>
            </div>
            <div className="vc-form__row">
              <motion.div
                className="vc-form__group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="budget" className="vc-form__label">
                  <span className="vc-form__icon">💼</span>
                  ميزانيتك التقريبية
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className={`vc-form__select ${
                    errors.budget ? "vc-form__select--error" : ""
                  }`}
                >
                  <option value="">اختر الميزانية</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <span className="vc-form__error">{errors.budget}</span>
                )}
              </motion.div>
            </div>
            <motion.div
              className="vc-form__group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="vc-form__label">
                <span className="vc-form__icon">📝</span>
                رسالتك
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="vc-form__textarea"
                rows="6"
                placeholder="أخبرنا المزيد عن مشروعك، أهدافك، الموعد النهائي المتوقع، أو أي استفسارات لديك..."
              />
            </motion.div>
            <motion.button
              type="submit"
              className="vc-btn vc-btn--primary vc-form__submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.1, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {isSubmitting ? (
                <>
                  <span className="vc-form__loading-spinner"></span>
                  جاري الإرسال...
                </>
              ) : (
                "أرسل رسالتك"
              )}
            </motion.button>
            {submitSuccess && (
              <motion.div
                className="vc-form__success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                تم استلام رسالتك بنجاح! سيتواصل معك أحد فريقنا خلال 24 ساعة.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
