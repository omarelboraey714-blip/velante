"use client";

import Logo from "./Logo";

import QuickLinks from "./QuickLinks";
import Services from "./Services";
import ContactInfo from "./ContactInfo";
import Social from "./Social";
import BottomBar from "./BottomBar";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="vf-footer" dir="rtl">
      <div className="vf-main">
        <div className="vf-container">
          <div className="vf-grid">
            <Logo />
            <QuickLinks />
            <Services />
            <ContactInfo />
          </div>
        </div>
      </div>
      <BottomBar />
    </footer>
  );
}
