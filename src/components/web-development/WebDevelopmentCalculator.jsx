"use client";

import { useState } from "react";

import { motion } from "framer-motion";

export default function WebDevelopmentCalculator() {
  const [calculator, setCalculator] = useState({
    siteType: "company",
    pages: "1-5",
    needsBranding: "no",
  });

  const siteTypes = [
    { value: "company", label: "موقع شركة", price: 3000 },
    { value: "ecommerce", label: "متجر إلكتروني", price: 8000 },
    { value: "platform", label: "منصة متقدمة", price: 15000 },
  ];

  const pageRanges = [
    { value: "1-5", label: "1-5 صفحات", price: 0 },
    { value: "6-10", label: "6-10 صفحات", price: 1000 },
    { value: "11-20", label: "11-20 صفحة", price: 2000 },
    { value: "20+", label: "أكثر من 20 صفحة", price: 3000 },
  ];

  const calculatePrice = () => {
    const siteType = siteTypes.find(
      (type) => type.value === calculator.siteType
    );
    const pages = pageRanges.find((range) => range.value === calculator.pages);
    const brandingPrice = calculator.needsBranding === "yes" ? 2000 : 0;

    return siteType.price + pages.price + brandingPrice;
  };

  return (
    <section className="vwd-calculator">
      <div className="vwd-container">
        <motion.h2
          className="vwd-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          حاسبة الأسعار
        </motion.h2>
        <motion.div
          className="vwd-calculator__card"
          initial={{ opacity: 0, y: 50, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="vwd-calculator__form">
            <div className="vwd-form__group">
              <label className="vwd-form__label">
                ما نوع الموقع الذي تريده؟
              </label>
              <motion.select
                className="vwd-form__select"
                value={calculator.siteType}
                onChange={(e) =>
                  setCalculator({ ...calculator, siteType: e.target.value })
                }
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {siteTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </motion.select>
            </div>
            <div className="vwd-form__group">
              <label className="vwd-form__label">كم عدد الصفحات؟</label>
              <motion.select
                className="vwd-form__select"
                value={calculator.pages}
                onChange={(e) =>
                  setCalculator({ ...calculator, pages: e.target.value })
                }
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {pageRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </motion.select>
            </div>
            <div className="vwd-form__group">
              <label className="vwd-form__label">
                هل تحتاج تصميم هوية بصرية أيضًا؟
              </label>
              <div className="vwd-form__radio-group">
                {["yes", "no"].map((value, index) => (
                  <motion.label
                    key={value}
                    className="vwd-form__radio-label"
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="radio"
                      name="needsBranding"
                      value={value}
                      checked={calculator.needsBranding === value}
                      onChange={(e) =>
                        setCalculator({
                          ...calculator,
                          needsBranding: e.target.value,
                        })
                      }
                      className="vwd-form__radio"
                    />
                    {value === "yes" ? "نعم" : "لا"}
                  </motion.label>
                ))}
              </div>
            </div>
            <motion.div
              className="vwd-calculator__result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="vwd-calculator__text">
                السعر التقريبي:{" "}
                <span className="vwd-calculator__price">
                  {calculatePrice()} جنيه مصري
                </span>
              </p>
              <p className="vwd-calculator__note">
                * السعر يبدأ من 3000 جنيه مصري
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
