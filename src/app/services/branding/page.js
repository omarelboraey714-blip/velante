import BrandIdentityHeader from "@/components/brand-identity/BrandIdentityHeader/BrandIdentityHeader";
import BrandIdentityIntro from "@/components/brand-identity/BrandIdentityIntro/BrandIdentityIntro";
import BrandIdentityFeatures from "@/components/brand-identity/BrandIdentityFeatures/BrandIdentityFeatures";
import BrandIdentityProcess from "@/components/brand-identity/BrandIdentityProcess/BrandIdentityProcess";
import BrandIdentityPortfolio from "@/components/brand-identity/BrandIdentityPortfolio/BrandIdentityPortfolio";
import BrandIdentityPricing from "@/components/brand-identity/BrandIdentityPricing/BrandIdentityPricing";
import BrandIdentityFAQ from "@/components/brand-identity/BrandIdentityFAQ/BrandIdentityFAQ";
import "./BrandIdentityPage.css";

export default function BrandIdentityPage() {
  return (
    <div className="vbi-page" dir="rtl">
      <BrandIdentityHeader />
      <BrandIdentityIntro />
      <BrandIdentityFeatures />
      <BrandIdentityProcess />
      <BrandIdentityPortfolio />
      <BrandIdentityPricing />
      <BrandIdentityFAQ />
    </div>
  );
}
