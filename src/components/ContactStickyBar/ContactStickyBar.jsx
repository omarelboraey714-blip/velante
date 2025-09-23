"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import "./ContactStickyBar.css";

export default function ContactStickyBar() {
  const [isStickyBarVisible, setIsStickyBarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsStickyBarVisible(true);
      } else {
        setIsStickyBarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isStickyBarVisible && (
        <motion.div
          className="vc-sticky-bar"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="https://wa.me/201556840380"
            className="vc-sticky-bar__whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotateX: 10 }}
            transition={{ duration: 0.3 }}
          >
            <FaWhatsapp />
          </motion.a>
        </motion.div>
      )}
    </>
  );
}
