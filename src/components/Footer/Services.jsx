import { motion } from "framer-motion";

export default function Services() {
  const services = [
    "تصميم الهوية البصرية",
    "تصميم وبرمجة المواقع",
    "متاجر إلكترونية (E-commerce)",
    "إعلانات ممولة (فيسبوك & جوجل)",
    "تصميم صفحات السوشيال ميديا",
  ];

  return (
    <motion.div
      className="vf-column"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="vf-column-title">خدماتنا</h3>
      <ul className="vf-links">
        {services.map((service, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <a href="#" className="vf-link">
              {service}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
