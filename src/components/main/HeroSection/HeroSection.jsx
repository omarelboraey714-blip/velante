"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

// تحميل react-tsparticles ديناميكيًا بطريقة مختلفة
const Particles = dynamic(
  () => import("react-tsparticles").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-gray-900" />,
  }
);

// مكون زر موحد مع تحسينات
const CTAButton = ({ href, children, variant = "primary", onClick }) => (
  <motion.div
    whileTap={{ scale: 0.95 }}
    className={`inline-block px-6 py-3 rounded-full font-medium text-base transition-all duration-200 ${
      variant === "primary"
        ? "bg-lime-500 text-white hover:bg-lime-600 hover:shadow-lg"
        : "border-2 border-white text-white hover:bg-white hover:text-gray-800"
    }`}
  >
    <Link
      href={href}
      onClick={onClick}
      className=" w-full h-full flex items-center justify-center"
    >
      {children}
    </Link>
  </motion.div>
);

export default function HeroSection() {
  // تهيئة particles بطريقة مختلفة
  const particlesInit = async (engine) => {
    // يمكن إضافة presets أو shapes إضافية هنا إذا لازم
    return Promise.resolve();
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* خلفية Particles مع عناصر تمثل الخدمات */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: "#84CC16" },
            shape: {
              type: ["circle", "triangle", "square", "polygon"],
              polygon: { nb_sides: 6 },
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: { min: 8, max: 20 },
              random: true,
              anim: { enable: true, speed: 2, size_min: 5, sync: false },
            },
            links: {
              enable: true,
              distance: 120,
              color: "#84CC16",
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: { min: 0.5, max: 2 },
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
            rotate: {
              value: { min: 0, max: 360 },
              direction: "random",
              animation: { enable: true, speed: 5, sync: false },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: ["push", "repulse"] },
            },
            modes: {
              repulse: { distance: 80, duration: 0.4 },
              push: { particles_nb: 2 },
              remove: { particles_nb: 2 },
            },
          },
          detectRetina: true,
          background: {
            color: "#111827",
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Overlay لتحسين القراءة */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-10" />

      {/* المحتوى */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            عالمك الرقمي ببصمة فريدة
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            VELANTE تحول أفكارك إلى مواقع وهويات بصرية احترافية.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CTAButton href="/contact">اطلب خدمتك الآن</CTAButton>
            <CTAButton href="/portfolio" variant="outline">
              شاهد أعمالنا
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center gap-2 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={scrollToNextSection}
        aria-label="انتقل للقسم التالي"
      >
        <span className="text-sm font-medium">اكتشف المزيد</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}

// تصدير Metadata لـ SEO
export const metadata = {
  title: "VELANTE | تحويل مشاريعك إلى عالم رقمي احترافي",
  description:
    "VELANTE تقدم خدمات تصميم هوية بصرية، مواقع إلكترونية، وإعلانات ممولة لنقل مشروعك إلى العالم الرقمي.",
  keywords: "تطوير المواقع, هوية بصرية, إعلانات, تحويل رقمي, VELANTE",
};
