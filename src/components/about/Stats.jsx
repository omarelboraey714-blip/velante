"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { toast } from "sonner";

export default function Stats() {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/api/stats");
        const result = await response.json();

        if (!result.success) throw new Error(result.error);

        setStats(result.data || []);
      } catch (error) {
        toast.error("حدث خطأ أثناء جلب الإحصائيات");
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  useEffect(() => {
    if (inView && !isLoading) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.5, delay: i * 0.2 },
      }));
    }
  }, [controls, inView, isLoading]);

  return (
    <section className="va-stats" ref={ref}>
      <div className="va-container">
        {isLoading ? (
          <p>جاري تحميل الإحصائيات...</p>
        ) : (
          <div className="va-stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="va-stat-card"
                custom={index}
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                animate={controls}
              >
                <motion.div
                  className="va-stat-number"
                  initial={{ text: 0 }}
                  animate={{ text: stat.number }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  onUpdate={(latest) =>
                    (document.getElementById(
                      `stat-${stat.id}`
                    ).textContent = `${Math.floor(latest.text)}${stat.suffix}`)
                  }
                >
                  <span id={`stat-${stat.id}`}>
                    {Math.floor(0)}
                    {stat.suffix}
                  </span>
                </motion.div>
                <div className="va-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
