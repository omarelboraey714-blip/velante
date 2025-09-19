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
    default: { backgroundColor: "transparent", color: "#e5e5e5" }, // ← الحالة الافتراضية
    hover: { backgroundColor: "#2a22c220", color: "#fff" },
    tap: { scale: 0.95 },
    active: { backgroundColor: "#2a22c2", color: "#fff" },
  };

  return (
    <section className="vw-filters" aria-label="فلاتر معرض الأعمال">
      <div className="vw-filters-container">
        <motion.div
          className="vw-filters-bar"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              type="button" // ← أضف هذا
              className={`vw-filter-btn ${
                activeFilter === filter.id ? "vw-filter-btn--active" : ""
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
