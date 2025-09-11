"use client";

import PackagesHeader from "@/components/packages/PackagesHeader";
import PackagesSelector from "@/components/packages/PackagesSelector";
import PackagesComparison from "@/components/packages/PackagesComparison";
import PackagesAddons from "@/components/packages/PackagesAddons";
import PackagesFAQ from "@/components/packages/PackagesFAQ";
import PackagesFinalCTA from "@/components/packages/PackagesFinalCTA";
import PackagesStickyCTA from "@/components/packages/PackagesStickyCTA";
import "./PackagesPage.css";

export default function PackagesPage() {
  return (
    <div className="vp-page" dir="rtl">
      <PackagesHeader />
      <PackagesSelector />
      <PackagesComparison />
      <PackagesAddons />
      <PackagesFAQ />
      <PackagesFinalCTA />
      <PackagesStickyCTA />
    </div>
  );
}
