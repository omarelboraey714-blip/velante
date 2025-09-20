"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Filters from "@/components/portfolio/Filters";

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
    initialData: fallbackProjects,
    onError: (err) => console.error("Error fetching projects:", err),
  });

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
    <section className="vw-gallery" aria-label="معرض الأعمال">
      <div className="vw-container">
        <Filters
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />

        {isLoading ? (
          <motion.div
            className="vw-loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            role="status"
            aria-live="polite"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="vw-spinner"
            ></motion.div>
          </motion.div>
        ) : filteredProjects.length === 0 ? (
          <motion.div
            className="vw-empty-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            role="alert"
            aria-live="polite"
          >
            <p className="vw-empty-message">
              لا توجد أعمال متاحة حاليًا. كن أول عميل واستمتع بخصم 40%!
            </p>
            <Link
              href="/contact"
              className="vw-btn vw-btn--primary"
              aria-label="كن أول عميل واحصل على خصم 40%"
            >
              كن أول عميل
            </Link>
          </motion.div>
        ) : (
          <motion.div
            className="vw-masonry-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredProjects.slice(0, visibleProjects).map((project) => (
                <motion.div
                  key={project.id}
                  className="vw-project-card"
                  whileHover={{ scale: 1.03, rotateY: 5, translateY: -10 }}
                  onClick={() => openLightbox(project)}
                  role="button"
                  aria-label={`عرض تفاصيل ${project.title}`}
                >
                  <div className="vw-project-image">
                    <Image
                      src={
                        project.thumbnail ||
                        project.image ||
                        "/images/placeholder.webp"
                      }
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="vw-image"
                      onError={(e) => {
                        console.warn("🖼️ صورة فاشلة:", e.target.src);
                        e.target.src = "/images/placeholder.webp";
                      }}
                    />
                    {project.badge && (
                      <div className="vw-project-badge">{project.badge}</div>
                    )}
                    <motion.div
                      className="vw-project-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="vw-project-info">
                        <h3 className="vw-project-title">{project.title}</h3>
                        <p className="vw-project-type">{project.type}</p>
                      </div>
                      <div className="vw-project-actions">
                        <button
                          className="vw-action-btn"
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
          <div className="vw-load-more">
            <motion.button
              className="vw-load-more-btn vw-btn vw-btn--primary"
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
