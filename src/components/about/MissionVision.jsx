import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="va-mission-vision">
      <div className="va-container">
        <div className="va-mission-vision-grid">
          <motion.div
            className="va-mission-card"
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="va-mission-icon">🎯</div>
            <h3 className="va-mission-title">مهمتنا</h3>
            <p className="va-mission-text">
              تمكين الشركات والأفراد من خلال تقديم حلول تصميم وتطوير رقمية
              استثنائية، تسهل عليهم طريق النجاح وتجعل حضورهم الرقمي قويًا
              ومؤثرًا.
            </p>
          </motion.div>
          <motion.div
            className="va-vision-card"
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="va-vision-icon">🔭</div>
            <h3 className="va-vision-title">رؤيتنا</h3>
            <p className="va-vision-text">
              أن نكون الشريك الإبداعي الأول في المنطقة لكل من يريد بناء أو تطوير
              عالمه الرقمي بجودة لا تُضاهى وخدمة شخصية لا تتوقف.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
