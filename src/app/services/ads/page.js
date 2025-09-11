"use client";

import PaidAdsHeader from "@/components/paid-ads/PaidAdsHeader";
import PaidAdsIntro from "@/components/paid-ads/PaidAdsIntro";
import PaidAdsPlatforms from "@/components/paid-ads/PaidAdsPlatforms";
import PaidAdsSuccessSteps from "@/components/paid-ads/PaidAdsSuccessSteps";
import PaidAdsCaseStudy from "@/components/paid-ads/PaidAdsCaseStudy";
import PaidAdsPackages from "@/components/paid-ads/PaidAdsPackages";
import PaidAdsForm from "@/components/paid-ads/PaidAdsForm";
import PaidAdsFAQ from "@/components/paid-ads/PaidAdsFAQ";
import "./PaidAdsPage.css";

export default function PaidAdsPage() {
  return (
    <div className="vpa-page" dir="rtl">
      <PaidAdsHeader />
      <PaidAdsIntro />
      <PaidAdsPlatforms />
      <PaidAdsSuccessSteps />
      <PaidAdsCaseStudy />
      <PaidAdsPackages />
      <PaidAdsForm />
      <PaidAdsFAQ />
    </div>
  );
}
