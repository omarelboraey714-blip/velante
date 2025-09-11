// src/components/FeaturedWork/FeaturedWork.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import "./FeaturedWork.css";

export default function FeaturedWork() {
  const projects = [
    {
      id: 1,
      title: "هوية علامة تجارية لشركة تقنية",
      category: "هوية بصرية",
      image: "/images/project1.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "موقع إلكتروني لشركة استشارات",
      category: "تطوير المواقع",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "حملة إعلانية لمنتج جديد",
      category: "إعلانات ممولة",
      image: "/images/project3.jpg",
    },
    {
      id: 4,
      title: "هوية علامة تجارية لمطعم",
      category: "هوية بصرية",
      image: "/images/project4.jpg",
      featured: true,
    },
    {
      id: 5,
      title: "تطبيق لشركة توصيل",
      category: "تطوير المواقع",
      image: "/images/project5.jpg",
    },
    {
      id: 6,
      title: "حملة تسويقية لمنتج تجميلي",
      category: "إعلانات ممولة",
      image: "/images/project6.jpg",
    },
  ];

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
                    <h3 className="featured-project-title">{project.title}</h3>
                    <p className="featured-project-category">
                      {project.category}
                    </p>
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="featured-btn-brand-sm"
                      aria-label={`عرض تفاصيل ${project.title}`}
                    >
                      عرض التفاصيل <ExternalLink size={16} className="ml-1" />
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
      </div>
    </section>
  );
}
