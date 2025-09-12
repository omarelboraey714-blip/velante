"use client";

import { motion } from "framer-motion"; // v12.23.12
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr"; // v2.3.6
import { supabase } from "../../../lib/supabaseClient";

// Fallback data in case of error
const fallbackProjects = [
  {
    id: 1,
    before_image: "/images/brand-before.jpg",
    after_image: "/images/brand-after.jpg",
    case_study_title: "Case Study مصغر",
    case_study_text:
      "كيف ساعدنا مطعم كذا في زيادة مبيعاته بنسبة 40% عبر هويته الجديدة",
  },
];

const fetcher = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("id, before_image, after_image, case_study_title, case_study_text")
    .eq("category", "هوية بصرية")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
};

export default function BrandIdentityPortfolio() {
  const {
    data: projects,
    error,
    isLoading,
  } = useSWR("brand-identity-projects", fetcher, {
    revalidateOnFocus: true,
    refreshInterval: 60000,
    dedupingInterval: 2000,
    fallbackData: fallbackProjects,
    onError: (err) =>
      console.error("Error fetching brand identity projects:", err),
  });

  const isEmpty = projects?.length === 0;

  return (
    <section className="vbi-portfolio" dir="rtl">
      <div className="vbi-container">
        <motion.h2
          className="vbi-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          معرض الأعمال
        </motion.h2>

        {isLoading ? (
          <motion.div
            className="vbi-loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="vbi-spinner"
            >
              جاري التحميل...
            </motion.div>
          </motion.div>
        ) : error ? (
          <motion.div
            className="vbi-error"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            role="alert"
          >
            <p className="vbi-error-message">عذرًا حدث خطأ في جلب الأعمال</p>
          </motion.div>
        ) : isEmpty ? (
          <motion.div
            className="vbi-empty-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            role="alert"
          >
            <p className="vbi-empty-message">
              لا توجد لدينا أعمال سابقة كن أول عميل لدينا واحصل على خصم 40%
            </p>
            <Link
              href="/contact"
              className="vbi-btn"
              aria-label="كن أول عميل واحصل على خصم 40%"
            >
              كن أول عميل
            </Link>
          </motion.div>
        ) : (
          <>
            <div className="vbi-portfolio__grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="vbi-portfolio__item"
                  initial={{ opacity: 0, rotateY: 90 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ rotateY: 10, scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <div className="vbi-portfolio__image">
                    <Image
                      src={project.before_image || "/images/placeholder.jpg"}
                      alt="قبل التصميم"
                      fill
                      className="vbi-project-image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        e.target.src = "/images/placeholder.jpg";
                      }}
                    />
                    <motion.div
                      className="vbi-portfolio__overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>قبل</span>
                    </motion.div>
                  </div>
                  <div className="vbi-portfolio__image">
                    <Image
                      src={project.after_image || "/images/placeholder.jpg"}
                      alt="بعد التصميم"
                      fill
                      className="vbi-project-image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        e.target.src = "/images/placeholder.jpg";
                      }}
                    />
                    <motion.div
                      className="vbi-portfolio__overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>بعد</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="vbi-case-study"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="vbi-case-study__title">
                  {project.case_study_title}
                </h3>
                <p className="vbi-case-study__text">
                  {project.case_study_text}
                </p>
              </motion.div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
