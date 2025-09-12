import Header from "@/components/portfolio/Header";
import Gallery from "@/components/portfolio/Gallery";
import CaseStudies from "@/components/portfolio/CaseStudies";
import CTA from "@/components/portfolio/CTA";
import Lightbox from "@/components/portfolio/Lightbox";
import "./PortfolioPage.css";

export default function PortfolioPage() {
  return (
    <div className="vp-page" dir="rtl">
      <Header />

      <Gallery />
      <CaseStudies />
      <CTA />
      <Lightbox />
    </div>
  );
}
