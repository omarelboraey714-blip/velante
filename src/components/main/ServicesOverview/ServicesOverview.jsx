"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { Palette, Code, Megaphone } from "lucide-react";

// مكون زر موحد
const CTAButton = ({ href, children, variant = "primary" }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`inline-block px-6 py-3 rounded-full font-medium text-base cursor-pointer transition-all duration-200 ${
      variant === "primary"
        ? "bg-e-blue text-white hover:bg-l-blue hover:shadow-md"
        : "border-2 border-e-blue text-e-blue hover:bg-e-blue hover:text-white"
    }`}
  >
    <Link href={href}>{children}</Link>
  </motion.div>
);

export default function ServicesOverview() {
  const services = [
    {
      id: 1,
      icon: <Palette size={48} className="text-l-blue" />,
      image: "/images/branding-icon.jpg",
      title: "تصميم الهوية البصرية",
      description:
        "لوغو يعبّر عنك، ألوان تُعبّر عن شعورك، وخطوط تحكي قصتك. نصنع لك وجهًا تتعرّف عليه العيون في لمح البصر.",
      link: "/services/branding",
    },
    {
      id: 2,
      icon: <Code size={48} className="text-l-blue" />,
      image: "/images/web-icon.jpg",
      title: "تصميم و تطوير المواقع",
      description:
        "مواقع سريعة، آمنة، وسهلة الإدارة. متوافقة مع محركات البحث وجاهزة لتحقق أهدافك، سواء البيع أو العرض.",
      link: "/services/web-development",
    },
    {
      id: 3,
      icon: <Megaphone size={48} className="text-l-blue" />,
      image: "/images/ads-icon.jpg",
      title: "إعلانات مُمولة فعّالة",
      description:
        "نضع إعلاناتك أمام الأنظار المستهدفة بدقة. حملات على فيسبوك، إنستغرام، وجوجل تحقق أعلى عائد ممكن.",
      link: "/services/ads",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20  overflow-hidden">
      {/* Subtle SVG Pattern للخلفية */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-light">
            خدماتنا التي تُحدث الفرق
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-gray-900 rounded-xl shadow-sm hover:shadow-lg hover:shadow-primary transition-shadow duration-200 p-6 grid justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 1.2 }}
            >
              <div className="flex justify-center mb-4 text-2xl">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-light mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-light text-sm sm:text-base flex-grow text-center">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="text-e-blue font-medium hover:text-l-blue transition-colors duration-200 mt-4 text-center"
                aria-label={`اعرف المزيد عن ${service.title}`}
              >
                اعرف المزيد →
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <CTAButton href="/contact">اطلب عرض أسعار</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
