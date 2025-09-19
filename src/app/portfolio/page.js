import Header from "@/components/portfolio/Header";
import Gallery from "@/components/portfolio/Gallery";
import Packages from "@/components/packs/Packages";
import Services from "@/components/Services/Services";
import PackagesFAQ from "@/components/FAQs/FAQs";
// import CaseStudies from "@/components/portfolio/CaseStudies";
// import CTA from "@/components/portfolio/CTA";
import Lightbox from "@/components/portfolio/Lightbox";
import "./PortfolioPage.css";

export default function PortfolioPage() {
  return (
    <div className="vw-page" dir="rtl">
      <Header />
      <Gallery />
      <Packages bg="bg-gradient-to-b from-gray-900 to-primary" />
      <Services bg="bg-gradient-to-b from-primary to-gray-900" />
      <PackagesFAQ />
      {/* <CaseStudies />
      <CTA /> */}
      <Lightbox />
    </div>
  );
}
