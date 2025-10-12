"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import useSWR from "swr";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/core/accordion';
import { ChevronRight } from 'lucide-react';
import "./FAQs.css";

// Fallback data
const fallbackFaqs = [
  {
    id: 1,
    question: "كيف أختار الباقة المناسبة لي؟",
    answer:
      "إذا كنت في البداية، ننصحك بالباقة الأساسية. إذا كان لديك عمل قائم وتريد تطويره، فالباقة المتقدمة هي الخيار الأمثل. للشركات الكبيرة، نوصي بالاتصال بنا لمناقشة احتياجاتك الخاصة.",
    category: "packages",
  },
];

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch FAQs");
  }
  return response.json();
};

export default function FAQ() {
  const pathname = usePathname();

  const category = useMemo(() => {
    if (pathname.includes("/services/branding")) return "branding";
    if (pathname.includes("/services/web-development"))
      return "web-development";
    if (pathname.includes("/services/ads")) return "ads";
    if (pathname.includes("/packages")) return "packages";
    if (pathname.includes("/contact")) return "contact";
    return "all";
  }, [pathname]);

  const {
    data: faqs,
    error,
    isLoading,
  } = useSWR(`/api/faqs?category=${category}`, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
    initialData: fallbackFaqs.filter(
      (f) => category === "all" || f.category === category
    ),
    onError: (err) => console.error("Error fetching FAQs:", err),
  });

  return (
    <section id="faq-section" className="vp-faq" aria-label="الأسئلة الشائعة">
      <div className="vp-container">
        <motion.h2
          className="vp-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          أسئلة شائعة
        </motion.h2>

        {isLoading ? (
          <motion.div
            className="vp-loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            role="status"
            aria-live="polite"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="vp-spinner"
            >
              O
            </motion.div>
          </motion.div>
        ) : faqs.length === 0 ? (
          <motion.div
            className="vp-empty-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            role="alert"
            aria-live="polite"
          >
            <p className="vp-empty-message">
              لا توجد أسئلة شائعة متاحة حاليًا. تواصل معنا لمعرفة المزيد!
            </p>
            <Link
              href="/contact"
              className="vp-btn vp-btn--primary"
              aria-label="تواصل معنا لمعرفة المزيد"
            >
              تواصل معنا
            </Link>
          </motion.div>
        ) : (
          <Accordion
            className="flex w-full flex-col max-w-4xl mx-auto"
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            variants={{
              expanded: {
                opacity: 1,
                scale: 1,
              },
              collapsed: {
                opacity: 0,
                scale: 0.95,
              },
            }}
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={`faq-${faq.id}`} 
                className="py-2"
              >
                <AccordionTrigger className="w-full py-4 text-left text-light hover:text-l-blue transition-colors duration-200">
                  <div className="flex items-center w-full">
                    <ChevronRight className="h-5 w-5 text-l-blue transition-transform duration-200 group-data-expanded:rotate-90 ml-3" />
                    <div className="flex-1 text-right">
                      <span className="text-lg font-medium">
                        {faq.question}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="origin-top">
                  <div className="pl-8 pr-4 py-4">
                    <p className="text-light text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </section>
  );
}
