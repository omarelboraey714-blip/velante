// src/app/page.js
import HeroSection from "@/components/main/HeroSection/HeroSection";
import ServicesOverview from "@/components/main/ServicesOverview/ServicesOverview";
import WhyUs from "@/components/main/WhyUs/WhyUs";
import FeaturedWork from "@/components/main/FeaturedWork/FeaturedWork";
import Testimonials from "@/components/main/Testimonials/Testimonials";
import PackagesCTA from "@/components/main/PackagesCTA/PackagesCTA";

export default function Home() {
  return (
    <div className="homepage">
      <HeroSection />
      <ServicesOverview />
      <WhyUs />
      <FeaturedWork />
      <Testimonials />
      <PackagesCTA />
    </div>
  );
}
