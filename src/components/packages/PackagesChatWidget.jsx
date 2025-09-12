"use client";

import { motion } from "framer-motion";

export default function PackagesChatWidget() {
  return (
    <motion.div
      className="vp-chat-widget"
      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.button
        className="vp-chat-button"
        whileHover={{ scale: 1.1, rotateY: 10 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}
