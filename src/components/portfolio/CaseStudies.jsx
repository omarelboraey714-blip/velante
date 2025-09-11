import { motion } from "framer-motion";
import { caseStudies } from "@/data/portfolioData";

export default function CaseStudies() {
  return (
    <section className="vp-case-studies">
      <div className="vp-container">
        <motion.h2
          className="vp-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          نظرة أعمق على مشاريعنا المميزة
        </motion.h2>
        <div className="vp-case-studies-grid">
          {caseStudies.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              className="vp-case-study"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: caseStudy.id * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="vp-case-study-content">
                <h3 className="vp-case-study-title">{caseStudy.title}</h3>
                <div className="vp-case-study-section">
                  <h4 className="vp-case-study-subtitle">التحدي</h4>
                  <p className="vp-case-study-text">{caseStudy.challenge}</p>
                </div>
                <div className="vp-case-study-section">
                  <h4 className="vp-case-study-subtitle">الحل</h4>
                  <p className="vp-case-study-text">{caseStudy.solution}</p>
                </div>
                <div className="vp-case-study-section">
                  <h4 className="vp-case-study-subtitle">النتائج</h4>
                  <div className="vp-results-grid">
                    {caseStudy.results.map((result, index) => (
                      <motion.div
                        key={index}
                        className="vp-result-box"
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
                  className="vp-testimonial"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="vp-testimonial-content">
                    <p className="vp-testimonial-quote">
                      "{caseStudy.testimonial.quote}"
                    </p>
                    <div className="vp-testimonial-author">
                      <img
                        src={caseStudy.testimonial.image}
                        alt={caseStudy.testimonial.name}
                        className="vp-testimonial-avatar"
                        onError={(e) =>
                          (e.target.src = "/images/placeholder-avatar.png")
                        }
                      />
                      <div>
                        <div className="vp-testimonial-name">
                          {caseStudy.testimonial.name}
                        </div>
                        <div className="vp-testimonial-position">
                          {caseStudy.testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.button
                  className="vp-case-study-btn vp-btn vp-btn--secondary"
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
