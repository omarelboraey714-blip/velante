import { motion } from "framer-motion";

export default function WebDevelopmentPortfolio() {
  const websites = [
    {
      id: 1,
      title: "موقع شركة تقنية",
      type: "موقع ترويجي",
      image: "/images/website1.jpg",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "متجر إلكتروني للأزياء",
      type: "متجر إلكتروني",
      image: "/images/website2.jpg",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "منصة تعليمية",
      type: "منصة تعليمية",
      image: "/images/website3.jpg",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "تطبيق إدارة المشاريع",
      type: "تطبيق ويب",
      image: "/images/website4.jpg",
      liveUrl: "#",
    },
  ];

  return (
    <section className="vwd-portfolio">
      <div className="vwd-container">
        <motion.h2
          className="vwd-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          معرض مواقع
        </motion.h2>
        <div className="vwd-portfolio__grid">
          {websites.map((website) => (
            <motion.div
              key={website.id}
              className="vwd-portfolio__item"
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ rotateY: 10, scale: 1.05 }}
              viewport={{ once: true }}
            >
              <div className="vwd-portfolio__image">
                <img
                  src={website.image || "/images/website-placeholder.jpg"}
                  alt={website.title}
                  onError={(e) =>
                    (e.target.src = "/images/website-placeholder.jpg")
                  }
                />
                <motion.div
                  className="vwd-portfolio__overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={website.liveUrl} className="vwd-portfolio__link">
                    زيارة الموقع الحي
                  </a>
                </motion.div>
              </div>
              <div className="vwd-portfolio__info">
                <h3 className="vwd-portfolio__title">{website.title}</h3>
                <p className="vwd-portfolio__type">{website.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
