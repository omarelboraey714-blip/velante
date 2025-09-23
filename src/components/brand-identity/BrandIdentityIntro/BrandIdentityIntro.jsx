"use client";

import { motion } from "framer-motion";

export default function BrandIdentityIntro() {
  return (
    <section className="vbi-intro">
      <div className="vbi-container">
        <motion.div
          className="vbi-intro__content"
          initial={{ opacity: 0, y: 50, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="vbi-intro__text">
            في عالم يزداد تنافسية، أصبحت الهوية البصرية القوية هي سلاحك السري
            للتميز. في <span>VELANTE</span>، لا نصنع مجرد شعار، بل نبتكر علمًا
            بصريًا متكاملاً يحكي قصة علامتك التجارية ويجذب عملاءك المستهدفين.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
