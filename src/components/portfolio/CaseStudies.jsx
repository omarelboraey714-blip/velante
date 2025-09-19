"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/data/portfolioData";

export default function CaseStudies() {
  return (
    <section className="vw-case-studies">
      <div className="vw-container">
        <motion.h2
          className="vw-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          نظرة أعمق على مشاريعنا المميزة
        </motion.h2>
        <div className="vw-case-studies-grid">
          {caseStudies.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              className="vw-case-study"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: caseStudy.id * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="vw-case-study-content">
                <h3 className="vw-case-study-title">{caseStudy.title}</h3>
                <div className="vw-case-study-section">
                  <h4 className="vw-case-study-subtitle">التحدي</h4>
                  <p className="vw-case-study-text">{caseStudy.challenge}</p>
                </div>
                <div className="vw-case-study-section">
                  <h4 className="vw-case-study-subtitle">الحل</h4>
                  <p className="vw-case-study-text">{caseStudy.solution}</p>
                </div>
                <div className="vw-case-study-section">
                  <h4 className="vw-case-study-subtitle">النتائج</h4>
                  <div className="vw-results-grid">
                    {caseStudy.results.map((result, index) => (
                      <motion.div
                        key={index}
                        className="vw-result-box"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {result}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="vw-testimonial"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="vw-testimonial-content">
                    <p className="vw-testimonial-quote">
                      "{caseStudy.testimonial.quote}"
                    </p>
                    <div className="vw-testimonial-author">
                      <img
                        src={caseStudy.testimonial.image}
                        alt={caseStudy.testimonial.name}
                        className="vw-testimonial-avatar"
                        onError={(e) =>
                          (e.target.src = "/images/placeholder-avatar.png")
                        }
                      />
                      <div>
                        <div className="vw-testimonial-name">
                          {caseStudy.testimonial.name}
                        </div>
                        <div className="vw-testimonial-position">
                          {caseStudy.testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.button
                  className="vw-case-study-btn vw-btn vw-btn--secondary"
                  whileHover={{ scale: 1.1, rotateX: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  اقرأ القصة الكاملة
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
