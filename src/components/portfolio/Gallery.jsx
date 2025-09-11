"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Filters from "@/components/portfolio/Filters";
import { projects } from "@/data/portfolioData";

export default function Gallery({ setSelectedProject, setShowLightbox }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(8);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter)
      );
    }
    setVisibleProjects(8);
  }, [activeFilter]);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  const openLightbox = (project) => {
    setSelectedProject(project);
    setShowLightbox(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <section className="vp-gallery">
      <div className="vp-container">
        <Filters
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
        <div className="vp-masonry-grid">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <motion.div
              key={project.id}
              className="vp-project-card"
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ rotateY: 10, translateY: -5 }}
              viewport={{ once: true }}
              onClick={() => openLightbox(project)}
            >
              <div className="vp-project-image">
                <img
                  src={project.thumbnail || project.image}
                  alt={project.title}
                  onError={(e) => (e.target.src = "/images/placeholder.jpg")}
                />
                <div className="vp-project-badge">{project.badge}</div>
                <motion.div
                  className="vp-project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="vp-project-info">
                    <h3 className="vp-project-title">{project.title}</h3>
                    <p className="vp-project-type">{project.type}</p>
                  </div>
                  <div className="vp-project-actions">
                    <button className="vp-action-btn">👁️ عرض التفاصيل</button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="vp-action-btn"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ↗️ زيارة الموقع
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        {visibleProjects < filteredProjects.length && (
          <div className="vp-load-more">
            <motion.button
              className="vp-load-more-btn vp-btn vp-btn--primary"
              onClick={loadMore}
              whileHover={{ scale: 1.1, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              تحميل المزيد
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
