"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import useSWR from "swr"; // v2.3.6
import { motion, AnimatePresence } from "framer-motion"; // v12.23.12
import Image from "next/image";
import Link from "next/link";
import Filters from "@/components/portfolio/Filters";

// Fallback data — ملاحظة: liveUrl بحرف كبير U
const fallbackProjects = [
  {
    id: 1,
    title: "هوية علامة تجارية لشركة تقنية",
    category: "هوية بصرية",
    image: "/images/project1.jpg",
    thumbnail: "/images/project1_thumb.jpg",
    badge: "مميز",
    type: "هوية بصرية",
    tag: "branding",
    liveUrl: null, // ← هنا صح! (liveUrl بحرف كبير)
  },
];

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export default function Gallery({ setSelectedProject, setShowLightbox }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(8);

  const {
    data: apiData,
    error,
    isLoading,
  } = useSWR("/api/projects?tag=all", fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
    initialData: fallbackProjects, // ✅ استخدم initialData بدل fallbackData
    onError: (err) => console.error("Error fetching projects:", err),
  });

  // ✅ دائمًا لدينا بيانات — من API أو من fallback
  const projects = apiData || fallbackProjects;

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.tag === activeFilter);
  }, [projects, activeFilter]);

  const loadMore = useCallback(() => {
    setVisibleProjects((prev) => prev + 4);
  }, []);

  const openLightbox = useCallback(
    (project) => {
      setSelectedProject(project);
      setShowLightbox(true);
      document.body.style.overflow = "hidden";
    },
    [setSelectedProject, setShowLightbox]
  );

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.4,
      },
    },
  };

  return (
    <section className="vp-gallery" aria-label="معرض الأعمال">
      <div className="vp-container">
        <Filters
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />

        {isLoading ? (
          <motion.div
            className="vp-loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            role="status"
            aria-live="polite"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="vp-spinner"
            >
              جاري التحميل...
            </motion.div>
          </motion.div>
        ) : filteredProjects.length === 0 ? (
          <motion.div
            className="vp-empty-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            role="alert"
            aria-live="polite"
          >
            <p className="vp-empty-message">
              لا توجد أعمال متاحة حاليًا. كن أول عميل واستمتع بخصم 40%!
            </p>
            <Link
              href="/contact"
              className="vp-btn vp-btn--primary"
              aria-label="كن أول عميل واحصل على خصم 40%"
            >
              كن أول عميل
            </Link>
          </motion.div>
        ) : (
          <motion.div
            className="vp-masonry-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredProjects.slice(0, visibleProjects).map((project) => (
                <motion.div
                  key={project.id}
                  className="vp-project-card"
                  // variants={cardVariants}
                  whileHover={{ scale: 1.03, rotateY: 5, translateY: -10 }}
                  onClick={() => openLightbox(project)}
                  role="button"
                  aria-label={`عرض تفاصيل ${project.title}`}
                >
                  <div className="vp-project-image">
                    {/* ✅ صورة آمنة مع تصحيح الأخطاء */}
                    <Image
                      src={
                        project.thumbnail ||
                        project.image ||
                        "/images/placeholder.jpg"
                      }
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="vp-image"
                      onError={(e) => {
                        console.warn("🖼️ صورة فاشلة:", e.target.src);
                        e.target.src = "/images/placeholder.jpg"; // ← تأكد أن هذه الصورة موجودة!
                      }}
                    />
                    {project.badge && (
                      <div className="vp-project-badge">{project.badge}</div>
                    )}
                    <motion.div
                      className="vp-project-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="vp-project-info">
                        <h3 className="vp-project-title">{project.title}</h3>
                        <p className="vp-project-type">{project.type}</p>
                      </div>
                      <div className="vp-project-actions">
                        <button
                          className="vp-action-btn"
                          aria-label={`عرض تفاصيل ${project.title}`}
                        >
                          👁️ عرض التفاصيل
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {visibleProjects < filteredProjects.length && !isLoading && (
          <div className="vp-load-more">
            <motion.button
              className="vp-load-more-btn vp-btn vp-btn--primary"
              onClick={loadMore}
              whileHover={{ scale: 1.1, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              aria-label="تحميل المزيد من الأعمال"
            >
              تحميل المزيد
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
