import { motion } from "framer-motion";
import Newsletter from "./Newsletter";

export default function Logo() {
  return (
    <div className="vf-column">
      <motion.div
        className="vf-logo"
        initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="vf-logo__icon">V</div>
        <div className="vf-logo__text">Velante</div>
      </motion.div>
      <motion.p
        className="vf-description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        نحو بصرة بصرية لا تُنسى لعالمك الرقمي.
      </motion.p>
      <Newsletter />
    </div>
  );
}
