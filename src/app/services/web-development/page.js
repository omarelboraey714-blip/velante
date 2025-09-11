"use client";

import WebDevelopmentHeader from "@/components/web-development/WebDevelopmentHeader";
import WebDevelopmentIntro from "@/components/web-development/WebDevelopmentIntro";
import WebDevelopmentTypes from "@/components/web-development/WebDevelopmentTypes";
import WebDevelopmentFeatures from "@/components/web-development/WebDevelopmentFeatures";
import WebDevelopmentTechnologies from "@/components/web-development/WebDevelopmentTechnologies";
import WebDevelopmentCalculator from "@/components/web-development/WebDevelopmentCalculator";
import WebDevelopmentPortfolio from "@/components/web-development/WebDevelopmentPortfolio";
import WebDevelopmentFAQ from "@/components/web-development/WebDevelopmentFAQ";
import "./WebDevelopmentPage.css";

export default function WebDevelopmentPage() {
  return (
    <div className="vwd-page" dir="rtl">
      <WebDevelopmentHeader />
      <WebDevelopmentIntro />
      <WebDevelopmentTypes />
      <WebDevelopmentFeatures />
      <WebDevelopmentTechnologies />
      <WebDevelopmentCalculator />
      <WebDevelopmentPortfolio />
      <WebDevelopmentFAQ />
    </div>
  );
}
