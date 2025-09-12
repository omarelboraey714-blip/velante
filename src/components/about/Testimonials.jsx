"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/aboutData";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  // دالة لبدء الـ interval
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
  };

  // دالة لإيقاف الـ interval
  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // إدارة الـ interval بناءً على hovering
  useEffect(() => {
    if (!isHovering) {
      startInterval();
    } else {
      stopInterval();
    }

    return () => stopInterval(); // تنظيف عند unmount
  }, [isHovering]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    // إعادة تشغيل العداد
    stopInterval();
    startInterval();
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    // إعادة تشغيل العداد
    stopInterval();
    startInterval();
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    // إعادة تشغيل العداد
    stopInterval();
    startInterval();
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="va-star">
        {i < rating ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <section className="va-testimonials" dir="rtl">
      <div className="va-container">
        <motion.h2
          className="va-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
        >
          ثقة عملائنا هي دافعنا الدائم
        </motion.h2>

        <div
          className="va-testimonials-carousel"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
        >
          <motion.button
            className="va-carousel-nav va-carousel-nav--prev"
            onClick={prevTestimonial}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            aria-label="الشهادة السابقة"
          >
            ❮
          </motion.button>

          <div className="va-testimonials-single-view">
            <motion.div
              key={currentTestimonial}
              className="va-testimonial-slide-wrapper"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <div className="va-testimonial-card">
                <div className="va-testimonial-header">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="va-testimonial-avatar"
                    onError={(e) =>
                      (e.target.src = "/images/placeholder-avatar.png")
                    }
                  />
                  <div className="va-testimonial-info">
                    <h3 className="va-testimonial-name">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <div className="va-testimonial-location">
                      <span className="va-testimonial-flag">
                        {testimonials[currentTestimonial].flag}
                      </span>
                      <span>{testimonials[currentTestimonial].country}</span>
                    </div>
                    <div className="va-testimonial-stars">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                  </div>
                </div>
                <p className="va-testimonial-text">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>
            </motion.div>
          </div>

          <motion.button
            className="va-carousel-nav va-carousel-nav--next"
            onClick={nextTestimonial}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            aria-label="الشهادة التالية"
          >
            ❯
          </motion.button>
        </div>

        <div className="va-testimonials-indicators">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`va-indicator ${
                index === currentTestimonial ? "va-indicator--active" : ""
              }`}
              onClick={() => goToTestimonial(index)}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
              aria-label={`الذهاب إلى الشهادة ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
