import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="vp-header">
      <div className="vp-video-background">
        <div className="vp-motion-graphics"></div>
      </div>
      <div className="vp-header-overlay">
        <motion.div
          className="vp-header-content"
          initial={{ opacity: 0, rotateX: 20 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="vp-header-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            إبداعٌ يترجم أفكارك إلى واقع
          </motion.h1>
          <motion.p
            className="vp-header-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            قصص نجاح نفتخر بها
          </motion.p>
          <motion.p
            className="vp-header-description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            كل مشروع هو قصة فريدة من التحدي والإبداع والحل. هنا نعرض لكم جزءًا
            من رحلتنا في تحويل الأفكار إلى نتائج ملموسة.
          </motion.p>
        </motion.div>
      </div>
    </header>
  );
}
