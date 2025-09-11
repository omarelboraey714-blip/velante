// src/components/Testimonials/Testimonials.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./Testimonials.css";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "أحمد محمد",
      country: "مصر",
      flag: "🇪🇬",
      rating: 5,
      text: "“شركة محترفة جدًا. كانت رحلة تصميم الهوية البصرية سلسة من البداية حتى النهاية وأنصح الجميع بالتعامل معهم.”",
      project: "هوية بصرية لشركة تقنية",
      avatar: "/images/avatar1.png",
    },
    {
      id: 2,
      name: "فاطمة العلي",
      country: "السعودية",
      flag: "🇸🇦",
      rating: 5,
      text: "“التصميم كان أكثر من رائع. فريق العمل مبدع ومتعاون وحققوا كل ما تمنيته لشركتي.”",
      project: "تصميم موقع إلكتروني",
      avatar: "/images/avatar2.png",
    },
    {
      id: 3,
      name: "محمد عبدالله",
      country: "الإمارات",
      flag: "🇦🇪",
      rating: 5,
      text: "“السرعة في التسليم وجودة العمل كانتا مذهلين. أنصح بشدة بخدماتهم.”",
      project: "حملة إعلانية",
      avatar: "/images/avatar3.png",
    },
    {
      id: 4,
      name: "سارة حسن",
      country: "مصر",
      flag: "🇪🇬",
      rating: 5,
      text: "“أفضل تجربة تعامل مع شركة تصميم. الاهتمام بالتفاصيل والدقة في العمل ممتازة.”",
      project: "هوية بصرية لمطعم",
      avatar: "/images/avatar4.png",
    },
  ];

  // دالة لإعادة تشغيل العداد
  const resetAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // نبدأ العداد من جديد بعد 5 ثوانٍ
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }, 5000);
  };

  // تأثير للتحكم في التشغيل التلقائي
  useEffect(() => {
    // تشغيل أولي
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isHovered, testimonials.length]);

  // تأثير لتحديث العداد عند تغيير currentIndex
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // إعادة تشغيل العداد بعد تغيير الـ index
    timeoutRef.current = setTimeout(() => {
      if (!isHovered) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000);
      }
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isHovered, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    // إعادة تشغيل العداد بعد الضغط
    resetAutoPlay();
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    // إعادة تشغيل العداد بعد الضغط
    resetAutoPlay();
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    // إعادة تشغيل العداد بعد الضغط
    resetAutoPlay();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.svg
        key={i}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={i < rating ? "#FFD700" : "none"}
        stroke="#FFD700"
        strokeWidth="2"
        className="testimonials-star"
        whileHover={{ scale: 1.2, rotate: 180 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </motion.svg>
    ));
  };

  return (
    <section className="testimonials" dir="rtl">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="testimonials-title">ثقة عملائنا هي وسامنا</h2>
          <div className="testimonials-subtitle-underline"></div>
        </motion.div>

        <div
          className="testimonials-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="testimonials-nav-button-prev"
            onClick={prevTestimonial}
            aria-label="الرأي السابق"
          >
            →
          </button>

          {/* طريقة جديدة: عرض كارت واحد في كل مرة */}
          <div className="testimonials-single-view">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="testimonials-single-card-wrapper"
            >
              <div className="testimonials-card">
                <div className="testimonials-header-content">
                  <Image
                    src={
                      testimonials[currentIndex].avatar ||
                      "/images/placeholder-avatar.png"
                    }
                    alt={`صورة ${testimonials[currentIndex].name}`}
                    width={48}
                    height={48}
                    className="testimonials-avatar"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="testimonials-info">
                    <h3 className="testimonials-name">
                      {testimonials[currentIndex].name}
                    </h3>
                    <div className="testimonials-location">
                      <span className="testimonials-flag">
                        {testimonials[currentIndex].flag}
                      </span>
                      <span>{testimonials[currentIndex].country}</span>
                    </div>
                    <p className="testimonials-project">
                      {testimonials[currentIndex].project}
                    </p>
                  </div>
                </div>

                <div
                  className="testimonials-stars"
                  aria-label={`تقييم ${testimonials[currentIndex].rating} من 5 نجوم`}
                >
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                <p className="testimonials-text">
                  {testimonials[currentIndex].text}
                </p>
              </div>
            </motion.div>
          </div>

          <button
            className="testimonials-nav-button-next"
            onClick={nextTestimonial}
            aria-label="الرأي التالي"
          >
            ←
          </button>
        </div>

        <div className="testimonials-indicators">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`testimonials-indicator ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToTestimonial(index)}
              aria-label={`الذهاب إلى الرأي ${index + 1}`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
