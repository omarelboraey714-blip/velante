import BrandIdentityHeader from "@/components/brand-identity/BrandIdentityHeader/BrandIdentityHeader";
import BrandIdentityIntro from "@/components/brand-identity/BrandIdentityIntro/BrandIdentityIntro";
import BrandIdentityFeatures from "@/components/brand-identity/BrandIdentityFeatures/BrandIdentityFeatures";
import BrandIdentityProcess from "@/components/brand-identity/BrandIdentityProcess/BrandIdentityProcess";
import BrandIdentityPortfolio from "@/components/main/FeaturedWork/FeaturedWork";
import Packages from "@/components/packs/Packages";
import Services from "@/components/Services/Services";
import BrandIdentityFAQ from "@/components/FAQs/FAQs";
import "./BrandIdentityPage.css";

export default function BrandIdentityPage() {
  return (
    <div className="vbi-page" dir="rtl">
      <BrandIdentityHeader />
      <BrandIdentityIntro />
      <BrandIdentityFeatures />
      <BrandIdentityProcess />
      <BrandIdentityPortfolio />
      <Packages />

      <Services />
      <BrandIdentityFAQ />
    </div>
  );
}
