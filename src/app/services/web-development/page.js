import WebDevelopmentHeader from "@/components/web-development/WebDevelopmentHeader";
import WebDevelopmentIntro from "@/components/web-development/WebDevelopmentIntro";
import WebDevelopmentTypes from "@/components/web-development/WebDevelopmentTypes";
import WebDevelopmentFeatures from "@/components/web-development/WebDevelopmentFeatures";
import WebDevelopmentTechnologies from "@/components/web-development/WebDevelopmentTechnologies";
import WebDevelopmentCalculator from "@/components/web-development/WebDevelopmentCalculator";
import WebDevelopmentPortfolio from "@/components/main/FeaturedWork/FeaturedWork";
import Packages from "@/components/packs/Packages";
import Services from "@/components/Services/Services";
import WebDevelopmentFAQ from "@/components/FAQs/FAQs";
import "./WebDevelopmentPage.css";

export default function WebDevelopmentPage() {
  return (
    <div className="vwd-page" dir="rtl">
      <WebDevelopmentHeader />
      <WebDevelopmentIntro />
      <WebDevelopmentTypes />
      <WebDevelopmentFeatures />
      <WebDevelopmentTechnologies />
      {/* <WebDevelopmentCalculator /> */}
      <WebDevelopmentPortfolio />
      <Packages />
      <Services />
      <WebDevelopmentFAQ />
    </div>
  );
}
