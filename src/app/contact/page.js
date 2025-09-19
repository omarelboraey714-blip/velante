import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/FAQs/FAQs";
import ContactMap from "@/components/contact/ContactMap";
import ContactSocial from "@/components/contact/ContactSocial";
import ContactStickyBar from "@/components/contact/ContactStickyBar";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="vc-page" dir="rtl">
      <ContactHeader />
      <ContactInfo />
      <ContactForm />
      <ContactFAQ />
      <ContactMap />
      <ContactSocial />
      <ContactStickyBar />
    </div>
  );
}
