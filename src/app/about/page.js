import Header from "@/components/about/Header";
import Story from "@/components/about/Story";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import Stats from "@/components/about/Stats";
import Testimonials from "@/components/about/Testimonials";
import CTA from "@/components/about/CTA";
import "./AboutPage.css";

// ✅ Metadata خاصة بصفحة "من نحن"
export const metadata = {
  title: "عن Velante | من نحن",
  description:
    "تعرف على قصة Velante، رؤيتنا ورسالتنا وقيمنا. فريقنا المبدع يساعد الشركات والعلامات التجارية على بناء حضور رقمي قوي من خلال الهوية البصرية، التسويق، وتطوير المواقع.",
  openGraph: {
    title: "عن Velante | وكالة التصميم والتسويق الرقمي",
    description:
      "نحن فريق إبداعي متخصص في بناء هويات بصرية قوية، تصميم السوشيال ميديا، إدارة الإعلانات الممولة، وتطوير المواقع.",
    url: "https://velante-one.vercel.app/about",
    siteName: "Velante",
    images: [
      {
        url: "https://velante-one.vercel.app/og-about.jpg", // 🔹 ارفع صورة خاصة بصفحة About في public باسم og-about.jpg
        width: 1200,
        height: 630,
        alt: "فريق Velante",
      },
    ],
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "عن Velante | من نحن",
    description:
      "فريق Velante الإبداعي يساعدك على بناء حضور رقمي قوي بهوية بصرية، تسويق، ومواقع حديثة.",
    images: ["https://velante-one.vercel.app/og-about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="va-page" dir="rtl">
      <Header />
      <Story />
      <MissionVision />
      <Values />
      <Team />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
}
