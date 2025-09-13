"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import useSWR from "swr"; // v2.3.6
import { motion } from "framer-motion"; // v12.23.12
import { ExternalLink } from "lucide-react";
import "./FeaturedWork.css";

// Fallback data
const fallbackProjects = [
  {
    id: 1,
    title: "هوية علامة تجارية لشركة تقنية",
    category: "هوية بصرية",
    image: "/images/project1.jpg",
    featured: true,
    tag: "branding",
  },
  {
    id: 2,
    title: "موقع إلكتروني لشركة استشارات",
    category: "تطوير المواقع",
    image: "/images/project2.jpg",
    tag: "web-development",
  },
  {
    id: 3,
    title: "حملة إعلانية لمنتج جديد",
    category: "إعلانات ممولة",
    image: "/images/project3.jpg",
    tag: "ads",
  },
  {
    id: 4,
    title: "هوية علامة تجارية لمطعم",
    category: "هوية بصرية",
    image: "/images/project4.jpg",
    featured: true,
    tag: "branding",
  },
  {
    id: 5,
    title: "تطبيق لشركة توصيل",
    category: "تطوير المواقع",
    image: "/images/project5.jpg",
    tag: "web-development",
  },
  {
    id: 6,
    title: "حملة تسويقية لمنتج تجميلي",
    category: "إعلانات ممولة",
    image: "/images/project6.jpg",
    tag: "ads",
  },
];

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export default function FeaturedWork() {
  const pathname = usePathname();

  // تحديد الفلتر بناءً على المسار
  const filterTag = useMemo(() => {
    if (pathname.includes("/services/ads")) return "ads";
    if (pathname.includes("/services/web-development"))
      return "web-development";
    if (pathname.includes("/services/branding")) return "branding";
    return "all";
  }, [pathname]);

  const {
    data: projects,
    error,
    isLoading,
  } = useSWR(`/api/projects?tag=${filterTag}`, fetcher, {
    revalidateOnFocus: false, // منع إعادة الطلب عند التركيز
    dedupingInterval: 10000, // 10 ثواني لتجنب الطلبات المتكررة
    fallbackData: fallbackProjects.filter(
      (p) => filterTag === "all" || p.tag === filterTag
    ),
    revalidateOnMount: true, // التأكد من الجلب عند التحميل الأولي
  });

  if (isLoading) {
    return (
      <motion.div
        className="featured-work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        جاري التحميل...
      </motion.div>
    );
  }

  if (error) {
    console.error("Error fetching projects:", error);
    // Fallback يظهر بدون إزعاج المستخدم
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
            role="alert"
          >
            <p className="featured-empty-message">
              لا توجد لدينا أعمال سابقة كن أول عميل لدينا و احصل على خصم 40%
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
              {projects.map((project) => (
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
