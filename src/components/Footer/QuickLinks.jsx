import { motion } from "framer-motion";

export default function QuickLinks() {
  const quickLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "عن الشركة", href: "/about" },
    { name: "خدماتنا", href: "/services" },
    { name: "أعمالنا", href: "/portfolio" },
    { name: "الباقات", href: "/packages" },
    { name: "المدونة", href: "/blog" },
    { name: "اتصل بنا", href: "/contact" },
  ];

  return (
    <motion.div
      className="vf-column"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="vf-column-title">روابط سريعة</h3>
      <ul className="vf-links">
        {quickLinks.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <a href={link.href} className="vf-link">
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
