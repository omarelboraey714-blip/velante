// src/app/page.js
import HeroSection from '@/components/main/HeroSection/HeroSection';
import ServicesOverview from '@/components/main/ServicesOverview/ServicesOverview';
import WhyUs from '@/components/main/WhyUs/WhyUs';
import FeaturedWork from '@/components/FeaturedWork/FeaturedWork';
import Testimonials from '@/components/Testimonials/Testimonials';
import PackagesCTA from '@/components/main/PackagesCTA/PackagesCTA';

// ✅ SEO Metadata
export const metadata = {
  title: 'Velante | Branding, Web Design & Digital Marketing',
  description:
    'Velante is a creative agency specialized in branding, social media design, paid ads, and web development. We build strong digital identities that help businesses grow.',
  keywords: [
    'Velante',
    'branding',
    'visual identity',
    'logo design',
    'social media design',
    'paid ads',
    'web development',
    'digital marketing',
    'creative agency',
  ],
  openGraph: {
    title: 'Velante | Creative Branding & Digital Marketing Agency',
    description:
      'We design brands, build websites, and run digital marketing campaigns that drive growth.',
    url: 'https://velante-one.vercel.app',
    siteName: 'Velante',
    images: [
      {
        url: 'https://velante-one.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Velante - Creative Digital Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velante | Creative Branding & Digital Marketing',
    description:
      'Branding, social media design, paid ads, and web development for businesses that want to grow.',
    images: ['velante-one.vercel.app/og-image.jpg'], // نفس الصورة أو نسخة خاصة بتويتر
  },
};

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
