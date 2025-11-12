'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function Values() {
  const [values, setValues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchValues() {
      try {
        const response = await fetch('/api/values');
        const result = await response.json();

        if (!result.success) throw new Error(result.error);

        setValues(result.data || []);
      } catch (error) {
        toast.error('حدث خطأ أثناء جلب القيم');
      } finally {
        setIsLoading(false);
      }
    }

    fetchValues();
  }, []);

  return (
    <section className="va-values">
      <div className="va-container">
        <motion.h2
          className="va-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          القيم التي تقود كل ما نقوم به
        </motion.h2>
        {isLoading ? (
          <p>جاري تحميل القيم...</p>
        ) : (
          <div className="va-values-grid">
            {values.map(value => (
              <motion.div
                key={value.id}
                className="va-value-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="va-value-icon">{value.icon}</div>
                <h3 className="va-value-title">{value.title}</h3>
                <p className="va-value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
