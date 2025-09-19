"use client";

import { useState } from "react";

import { motion } from "framer-motion";

export default function PackagesSelector() {
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const [recommendedPackage, setRecommendedPackage] = useState("");

  const businessTypes = [
    { id: "startup", label: "Startup", desc: "أنا في البداية" },
    { id: "sme", label: "SME", desc: "لدي عمل قائم وأريد تطويره" },
    {
      id: "corporate",
      label: "Corporate",
      desc: "شركة كبيرة وأحتاج لحلول متكاملة",
    },
  ];

  const packages = [
    { id: "basic", name: "الباقة الأساسية" },
    { id: "advanced", name: "الباقة المتقدمة" },
    { id: "enterprise", name: "الباقة المتميزة" },
  ];

  const handleBusinessTypeSelect = (type) => {
    setSelectedBusinessType(type);
    let recommended;
    switch (type) {
      case "startup":
        recommended = "basic";
        break;
      case "sme":
        recommended = "advanced";
        break;
      case "corporate":
        recommended = "enterprise";
        break;
      default:
        recommended = "";
    }
    setRecommendedPackage(recommended);
  };

  return (
    <section className="vp-selector">
      <div className="vp-container">
        <motion.h2
          className="vp-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          اختر مجال عملك للحصول على التوصية المثالية:
        </motion.h2>
        <div className="vp-business-types">
          {businessTypes.map((type) => (
            <motion.button
              key={type.id}
              className={`vp-business-type ${
                selectedBusinessType === type.id
                  ? "vp-business-type--selected"
                  : ""
              }`}
              onClick={() => handleBusinessTypeSelect(type.id)}
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              viewport={{ once: true }}
            >
              <span className="vp-business-type-label">{type.label}</span>
              <span className="vp-business-type-desc">{type.desc}</span>
            </motion.button>
          ))}
        </div>
        {recommendedPackage && (
          <motion.div
            className="vp-recommendation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="vp-recommendation-text">
              بناءً على اختيارك، نوصي بـ{" "}
              <strong>
                {packages.find((p) => p.id === recommendedPackage)?.name}
              </strong>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
