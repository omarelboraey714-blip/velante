"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { filters } from "@/data/portfolioData";

export default function Filters({ setActiveFilter, activeFilter }) {
  return (
    <section className="vp-filters">
      <div className="vp-container">
        <div className="vp-filters-bar">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`vp-filter-btn ${
                activeFilter === filter.id ? "vp-filter-btn--active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
