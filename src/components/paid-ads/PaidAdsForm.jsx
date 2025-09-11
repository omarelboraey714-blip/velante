"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PaidAdsForm() {
  const [formData, setFormData] = useState({
    projectDetails: "",
    budget: "less-5k",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("تم إرسال طلبك بنجاح! سنقوم بالتواصل معك قريباً.");
  };

  return (
    <section className="vpa-form">
      <div className="vpa-container">
        <motion.h2
          className="vpa-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          أخبرنا عن مشروعك
        </motion.h2>
        <motion.form
          className="vpa-form__content"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="vpa-form__group">
            <label htmlFor="projectDetails" className="vpa-form__label">
              تفاصيل المشروع
            </label>
            <motion.textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleInputChange}
              className="vpa-form__textarea"
              rows="6"
              placeholder="أخبرنا عن مشروعك وأهدافك الإعلانية..."
              required
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="vpa-form__group">
            <label htmlFor="budget" className="vpa-form__label">
              ميزانيتك الشهرية للإعلان؟
            </label>
            <motion.select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="vpa-form__select"
              required
              transition={{ duration: 0.3 }}
            >
              <option value="less-5k">أقل من 5,000 جنيه</option>
              <option value="5k-10k">5,000 - 10,000 جنيه</option>
              <option value="10k+">أكثر من 10,000 جنيه</option>
            </motion.select>
          </div>
          <motion.button
            type="submit"
            className="vpa-btn vpa-btn--primary vpa-form__submit"
            whileHover={{ scale: 1.1, rotateX: 10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            إرسال الطلب
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
