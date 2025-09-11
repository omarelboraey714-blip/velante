"use client";

import Header from "@/components/about/Header";
import Story from "@/components/about/Story";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import Stats from "@/components/about/Stats";
import Testimonials from "@/components/about/Testimonials";
import CTA from "@/components/about/CTA";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="va-page" dir="rtl">
      <Header />
      <Story />
      <MissionVision />
      <Values />
      <Team />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
}
