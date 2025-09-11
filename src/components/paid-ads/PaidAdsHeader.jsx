import { motion } from "framer-motion";

export default function PaidAdsHeader() {
  return (
    <header className="vpa-header">
      <div className="vpa-header__image">
        <div className="vpa-header__overlay">
          <motion.div
            className="vpa-header__content"
            initial={{ opacity: 0, rotateX: 20 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="vpa-header__title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              لا تطلق النقود على إعلانات لا تعمل! دع خبرائنا يديرون حملاتك
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
