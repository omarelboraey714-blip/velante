import { motion } from "framer-motion";

export default function BottomBar() {
  const legalLinks = [
    { name: "شروط الخدمة", href: "/terms" },
    { name: "سياسة الخصوصية", href: "/privacy" },
    { name: "سياسة ملفات تعريف الارتباط", href: "/cookies" },
  ];

  return (
    <div className="vf-bottom">
      <div className="vf-container">
        <motion.div
          className="vf-bottom-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="vf-copyright">
            © 2025 Velante. جميع الحقوق محفوظة.
          </div>
          <div className="vf-legal-links">
            {legalLinks.map((link, index) => (
              <span key={index}>
                <a href={link.href} className="vf-legal-link">
                  {link.name}
                </a>
                {index < legalLinks.length - 1 && " | "}
              </span>
            ))}
          </div>
          <div className="vf-credit">مصمم بواسطة Velante</div>
        </motion.div>
      </div>
    </div>
  );
}
