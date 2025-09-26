"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Share({ project }) {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const shareProject = (platform) => {
    const url = window.location.href;
    const title = project.title;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
          "_blank"
        );
        break;
    }
    setShowShareOptions(false);
  };

  return (
    <div className="vp-share-container">
      <motion.button
        className="vp-share-btn"
        onClick={() => setShowShareOptions(!showShareOptions)}
        whileHover={{ scale: 1.2, rotateY: 10 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        📤
      </motion.button>
      {showShareOptions && (
        <motion.div
          className="vp-share-options"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={() => shareProject("facebook")}
            className="vp-share-option"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <span>📘</span> فيسبوك
          </motion.button>
          <motion.button
            onClick={() => shareProject("twitter")}
            className="vp-share-option"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <span>🐦</span> تويتر
          </motion.button>
          <motion.button
            onClick={() => shareProject("linkedin")}
            className="vp-share-option"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <span>💼</span> لينكدإن
          </motion.button>
          <motion.button
            onClick={() => shareProject("whatsapp")}
            className="vp-share-option"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <span>💬</span> واتساب
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
