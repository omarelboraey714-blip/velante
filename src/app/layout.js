import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactStickyBar from "@/components/ContactStickyBar/ContactStickyBar";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Tajawal } from "next/font/google";

// ✅ الخط
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// ✅ Metadata عامة للموقع كله
export const metadata = {
  title: {
    default: "Velante | وكالة التصميم والتسويق الرقمي",
    template: "%s | Velante",
  },
  description:
    "Velante وكالة متخصصة في الهوية البصرية، تصميم السوشيال ميديا، الإعلانات الممولة، وتطوير المواقع. نبني حضور رقمي متكامل يساعد علامتك التجارية على النمو.",
  keywords: [
    "Velante",
    "تصميم هوية بصرية",
    "تصميم مواقع",
    "إعلانات ممولة",
    "تصميم سوشيال ميديا",
    "تسويق رقمي",
    "وكالة تصميم",
  ],
  metadataBase: new URL("http://localhost:3000"), // غيرها لـ production URL لاحقًا
  title: "Velante | وكالة التصميم والتسويق الرقمي",
  description:
    "Velante وكالة متخصصة في الهوية البصرية، تصميم السوشيال ميديا، الإعلانات الممولة، وتطوير المواقع. نبني حضور رقمي متكامل يساعد علامتك التجارية على النمو",
  icons: {
    icon: "/images/icon.ico",
  },
  openGraph: {
    title: "Velante | وكالة التصميم والتسويق الرقمي",
    description:
      "وكالة إبداعية تقدم خدمات الهوية البصرية، تصميم السوشيال ميديا، الإعلانات الممولة، وتطوير المواقع.",
    url: "https://velante-one.vercel.app",
    siteName: "Velante",
    images: [
      {
        url: "https://velante-one.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Velante - Creative Digital Agency",
      },
    ],
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velante | وكالة التصميم والتسويق الرقمي",
    description:
      "خدمات متكاملة في الهوية البصرية، تصميم السوشيال ميديا، الإعلانات الممولة، وتطوير المواقع.",
    images: ["https://velante-one.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" className={tajawal.className} dir="rtl">
      <body>
        <Header />
        <main>{children}</main>
        <Toaster
          toastOptions={{
            className: "rounded-xl shadow-lg shadow-e-blue ",
            success: {
              className: "bg-l-blue text-light font-bold",
            },
            error: {
              className: "bg-red-600 text-white",
            },
            warning: {
              className: "bg-yellow-500 text-black",
            },
            info: {
              className: "bg-blue-500 text-white",
            },
          }}
          position="top-right"
        />
        <ContactStickyBar />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
