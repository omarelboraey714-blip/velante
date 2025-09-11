import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <header className="vc-header">
      <div className="vc-header__background">
        <div className="vc-header__animation"></div>
      </div>
      <div className="vc-header__overlay">
        <motion.div
          className="vc-header__content"
          initial={{ opacity: 0, rotateX: 20 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="vc-header__title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            لنبنى شيئا رائعا معا
          </motion.h1>
          <motion.p
            className="vc-header__subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            مستعدون لبدء مشروعك؟
          </motion.p>
          <motion.p
            className="vc-header__description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            فريقنا متحمس لسماع فكرتك وتحويلها إلى واقع ملموس. اختر الطريقة التي
            تناسبك للتواصل.
          </motion.p>
        </motion.div>
      </div>
    </header>
  );
}
