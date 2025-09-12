// src/components/main/FeaturedWork/FeaturedWork.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useSWR from "swr"; // للـ caching والجلب الديناميكي (أحدث إصدار v2.2+)
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { supabase } from "../../../lib/supabaseClient"; // استورد الـ client
import "./FeaturedWork.css";

const fetcher = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false }); // ترتيب حسب التاريخ الجديد أولاً

  if (error) throw new Error(error.message);
  return data;
};

export default function FeaturedWork() {
  const {
    data: projects,
    error,
    isLoading,
  } = useSWR("projects", fetcher, {
    revalidateOnFocus: true, // تحديث عند التركيز
    refreshInterval: 60000, // تحديث كل دقيقة (اختياري)
    dedupingInterval: 2000, // تجنب الطلبات المتكررة في 2 ثواني (ممارسة أفضل)
  });

  if (isLoading) {
    return <div className="featured-work">جاري التحميل...</div>;
  }

  if (error) {
    return (
      <div className="featured-work">خطأ في جلب البيانات: {error.message}</div>
    );
  }

  return (
    <section className="featured-work">
      <div className="featured-container">
        <motion.div
          className="featured-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="featured-title">إبداعنا يتحدث عنا</h2>
        </motion.div>

        {projects.length === 0 ? (
          <motion.div
            className="featured-empty-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            role="alert" // للوصولية
          >
            <p className="featured-empty-message">
              لا توجد لدينا اعمال سابقه كن اول عميل لدينا و احصل علي خصم 40%
            </p>
            <Link
              href="/contact"
              className="featured-btn-brand"
              aria-label="كن أول عميل واحصل على خصم 40%"
            >
              كن أول عميل
            </Link>
          </motion.div>
        ) : (
          <>
            <div className="featured-masonry-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`featured-project-card ${
                    project.featured ? "featured" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ rotateY: 5, rotateX: 2 }}
                  style={{ perspective: "1000px" }}
                >
                  <div className="featured-image-wrapper">
                    <Image
                      src={project.image || "/images/placeholder.jpg"}
                      alt={project.title}
                      fill
                      className="featured-project-image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        e.target.src = "/images/placeholder.jpg";
                      }}
                    />
                    <motion.div
                      className="featured-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="featured-overlay-content">
                        <h3 className="featured-project-title">
                          {project.title}
                        </h3>
                        <p className="featured-project-category">
                          {project.category}
                        </p>
                        <Link
                          href={`/portfolio/${project.id}`}
                          className="featured-btn-brand-sm"
                          aria-label={`عرض تفاصيل ${project.title}`}
                        >
                          عرض التفاصيل{" "}
                          <ExternalLink size={20} className="ml-1" />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="featured-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/portfolio" className="featured-btn-brand">
                اعرض كل الأعمال
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
