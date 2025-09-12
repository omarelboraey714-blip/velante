"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import useSWR from "swr"; // v2.3.6
import { motion } from "framer-motion"; // v12.23.12
import Image from "next/image";
import Link from "next/link";
import { supabase } from "../../../lib/supabaseClient";
import "./Testimonials.css";

// Fallback data in case of error
const fallbackTestimonials = [
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
];

const fetcher = async () => {
  const { data, error } = await supabase
    .from("testimonials")
    .select(
      `
      id,
      rating,
      text,
      project,
      created_at,
      client:clients (
        id,
        name,
        country,
        flag,
        avatar
      )
    `
    )
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data.map((t) => ({
    id: t.id,
    rating: t.rating,
    text: t.text,
    project: t.project,
    name: t.client.name,
    country: t.client.country,
    flag: t.client.flag,
    avatar: t.client.avatar,
  }));
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const {
    data: testimonials,
    error,
    isLoading,
  } = useSWR("testimonials", fetcher, {
    revalidateOnFocus: true,
    refreshInterval: 60000,
    dedupingInterval: 2000,
    fallbackData: fallbackTestimonials,
    onError: (err) => console.error("Error fetching testimonials:", err),
  });

  const isEmpty = testimonials?.length === 0;

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  }, [testimonials.length]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const resetAutoPlay = useCallback(() => {
    stopAutoPlay();
    startAutoPlay();
  }, [stopAutoPlay, startAutoPlay]);

  useEffect(() => {
    if (!isHovered) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isHovered, startAutoPlay, stopAutoPlay]);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoPlay();
  }, [testimonials.length, resetAutoPlay]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    resetAutoPlay();
  }, [testimonials.length, resetAutoPlay]);

  const goToTestimonial = useCallback(
    (index) => {
      setCurrentIndex(index);
      resetAutoPlay();
    },
    [resetAutoPlay]
  );

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const renderStars = useCallback((rating) => {
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
  }, []);

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

        {isLoading ? (
          <div className="testimonials-loading">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="testimonials-spinner"
            >
              جاري التحميل...
            </motion.div>
          </div>
        ) : isEmpty ? (
          <motion.div
            className="testimonials-empty-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            role="alert"
          >
            <p className="testimonials-empty-message">
              لا توجد آراء حاليًا. كن أول عميل وشارك تجربتك!
            </p>
            <Link
              href="/contact"
              className="testimonials-btn"
              aria-label="شارك رأيك"
            >
              شارك رأيك
            </Link>
          </motion.div>
        ) : (
          <div
            className="testimonials-carousel"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
          >
            <button
              className="testimonials-nav-button-prev"
              onClick={prevTestimonial}
              aria-label="الرأي السابق"
              onMouseDown={(e) => e.preventDefault()}
            >
              →
            </button>

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
                      onError={(e) => {
                        e.target.src = "/images/placeholder-avatar.png";
                      }}
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
              onMouseDown={(e) => e.preventDefault()}
            >
              ←
            </button>
          </div>
        )}

        {!isEmpty && !isLoading && (
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
        )}
      </div>
    </section>
  );
}
