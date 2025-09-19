import PackagesHeader from "@/components/packages/PackagesHeader";
import PackagesSelector from "@/components/packages/PackagesSelector";
import PackagesComparison from "@/components/packages/PackagesComparison";
// import PackagesAddons from "@/components/packages/PackagesAddons";
import Packages from "@/components/packs/Packages";
import Services from "@/components/Services/Services";
import PackagesFAQ from "@/components/FAQs/FAQs";
import PackagesFinalCTA from "@/components/packages/PackagesFinalCTA";
import PackagesStickyCTA from "@/components/packages/PackagesStickyCTA";
import "./PackagesPage.css";

export default function PackagesPage() {
  return (
    <div className="vp-page" dir="rtl">
      <PackagesHeader />
      <PackagesSelector />
      <PackagesComparison />
      {/* <PackagesAddons /> */}
      <Packages bg="bg-gradient-to-b from-gray-900 to-primary" />
      <Services bg="bg-gradient-to-b from-primary to-gray-900" />
      <PackagesFAQ />
      <PackagesFinalCTA />
      <PackagesStickyCTA />
    </div>
  );
}
