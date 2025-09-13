"use client";

import { useMemo } from "react";
import { motion } from "framer-motion"; // v12.23.12

const filters = [
  { id: "all", name: "الكل" },
  { id: "branding", name: "هوية بصرية" },
  { id: "web-development", name: "تطوير المواقع" },
  { id: "ads", name: "إعلانات ممولة" },
];

export default function Filters({ setActiveFilter, activeFilter }) {
  const buttonVariants = {
    default: { backgroundColor: "transparent", color: "#333" }, // ← الحالة الافتراضية
    hover: { backgroundColor: "#6dff00", color: "#fff" },
    tap: { scale: 0.95 },
    active: { backgroundColor: "#6dff00", color: "#fff" },
  };

  return (
    <section className="vp-filters" aria-label="فلاتر معرض الأعمال">
      <div className="vp-container">
        <motion.div
          className="vp-filters-bar"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              type="button" // ← أضف هذا
              className={`vp-filter-btn ${
                activeFilter === filter.id ? "vp-filter-btn--active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              animate={activeFilter === filter.id ? "active" : "default"} // ← الآن موثوق 100%
              transition={{ duration: 0.2 }}
              aria-label={`تصفية حسب ${filter.name}`}
              aria-pressed={activeFilter === filter.id}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
