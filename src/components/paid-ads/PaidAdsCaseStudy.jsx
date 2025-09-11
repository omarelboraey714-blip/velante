import { motion } from "framer-motion";

export default function PaidAdsCaseStudy() {
  const results = [
    {
      icon: "↓",
      value: "40%",
      label: "في تكلفة الاكتساب",
    },
    {
      icon: "↑",
      value: "300%",
      label: "في معدل التحويلات",
    },
    {
      icon: "↑",
      value: "15%",
      label: "في المبيعات خلال شهرين",
    },
  ];

  return (
    <section className="vpa-case-study">
      <div className="vpa-container">
        <motion.div
          className="vpa-case-study__content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="vpa-case-study__title">
            كيف ساعدنا علامة تجارية في تحقيق:
          </h2>
          <div className="vpa-results">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="vpa-result"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <span className="vpa-result-icon">{result.icon}</span>
                <div>
                  <div className="vpa-result-value">{result.value}</div>
                  <div className="vpa-result-label">{result.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
