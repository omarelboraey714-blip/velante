import PackagesHeader from "@/components/packages/PackagesHeader";
import PackagesSelector from "@/components/packages/PackagesSelector";
import PackagesComparison from "@/components/packages/PackagesComparison";
import Packages from "@/components/packs/Packages";
import Services from "@/components/Services/Services";
import PackagesFAQ from "@/components/FAQs/FAQs";
import PackagesFinalCTA from "@/components/packages/PackagesFinalCTA";
import "./PackagesPage.css";

export default function PackagesPage() {
  return (
    <div className="vp-page" dir="rtl">
      <PackagesHeader />
      <PackagesSelector />
      <PackagesComparison />

      <Packages bg="bg-gradient-to-b from-gray-900 to-primary" />
      <Services bg="bg-gradient-to-b from-primary to-gray-900" />
      <PackagesFAQ />
      <PackagesFinalCTA />
    </div>
  );
}
