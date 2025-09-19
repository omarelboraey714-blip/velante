import PaidAdsHeader from "@/components/paid-ads/PaidAdsHeader";
import PaidAdsIntro from "@/components/paid-ads/PaidAdsIntro";
import PaidAdsPlatforms from "@/components/paid-ads/PaidAdsPlatforms";
import PaidAdsSuccessSteps from "@/components/paid-ads/PaidAdsSuccessSteps";

import Packages from "@/components/packs/Packages";
import Services from "@/components/Services/Services";
import PaidAdsForm from "@/components/paid-ads/PaidAdsForm";
import PaidAdsFAQ from "@/components/FAQs/FAQs";
import "./PaidAdsPage.css";

export default function PaidAdsPage() {
  return (
    <div className="vpa-page" dir="rtl">
      <PaidAdsHeader />
      <PaidAdsIntro />
      <PaidAdsPlatforms />
      <PaidAdsSuccessSteps />

      <Packages />
      <Services />
      {/* <PaidAdsForm /> */}
      <PaidAdsFAQ />
    </div>
  );
}
