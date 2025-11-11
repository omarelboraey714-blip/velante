'use client';

import { useState, useRef, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronDown,
  X,
  Menu,
  ChevronRight,
  ArrowLeft,
  ChevronLeft,
} from 'lucide-react';

const NavItem = memo(({ href, children, onClick }) => (
  <li>
    <Link
      href={href}
      className="block py-3 font-bold text-light hover:text-e-blue transition-colors duration-200 relative group"
      onClick={onClick}
    >
      {children}
      <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-e-blue transition-all duration-300 group-hover:w-full" />
    </Link>
  </li>
));

NavItem.displayName = 'NavItem';

// Dropdown للشاشات الكبيرة فقط
const DesktopDropdown = memo(({ isOpen, setIsOpen }) => {
  const dropdownItems = [
    { href: '/services/branding', label: 'هوية بصرية' },
    { href: '/services/web-development', label: 'تطوير المواقع' },
    { href: '/services/ads', label: 'إعلانات' },
  ];

  return (
    <li className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        className="flex items-center font-bold py-3 text-light hover:text-e-blue transition-colors duration-200 gap-1"
        onMouseEnter={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        الخدمات
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.2,
          }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute right-0 mt-2 w-48 bg-primary/60 rounded-lg shadow-lg  py-2 z-[1000]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              duration: 0.2,
            }}
          >
            {dropdownItems.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-light hover:bg-e-blue  transition-colors duration-200 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
});

DesktopDropdown.displayName = 'DesktopDropdown';

// Mobile Services Menu - صفحة منفصلة في الموبايل
const MobileServicesMenu = memo(({ onBack, onClose }) => {
  const servicesItems = [
    { href: '/services/branding', label: 'هوية بصرية' },
    { href: '/services/web-development', label: 'تطوير المواقع' },
    { href: '/services/ads', label: 'إعلانات' },
  ];

  return (
    <motion.div
      className="fixed top-0 right-0 h-[100vh] w-80 max-w-[90vw] bg-gradient-to-b from-gray-900 to-primary shadow-xl z-50 flex flex-col"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.3,
      }}
    >
      {/* Header مع زر الرجوع */}
      <div className="flex items-center justify-between p-4 border-b border-gray-900">
        <button
          className="p-2 text-light hover:text-e-blue hover:bg-gray-950 cursor-pointer rounded-full transition-colors duration-200"
          onClick={onBack}
          aria-label="الرجوع للقائمة الرئيسية"
        >
          <ArrowLeft size={24} />
        </button>
        <span className="text-lg font-bold text-light">الخدمات</span>
        <button
          className="p-2 text-light cursor-pointer hover:text-e-blue hover:bg-gray-950 rounded-full transition-colors duration-200"
          onClick={onClose}
          aria-label="إغلاق القائمة"
        >
          <X size={24} />
        </button>
      </div>

      {/* قائمة الخدمات */}
      <ul className="grid gap-4">
        {servicesItems.map((item, index) => (
          <motion.li
            key={item.href}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.05,
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
          >
            <Link
              href={item.href}
              className="flex items-center justify-between px-6 py-4 text-light hover:bg-gray-950 hover:text-e-blue transition-colors duration-200 "
              onClick={onClose}
            >
              <span className="font-medium">{item.label}</span>
              <ChevronRight size={20} className="text-light" />
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
});

MobileServicesMenu.displayName = 'MobileServicesMenu';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = useCallback(event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsServicesOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) {
      setIsMobileMenuOpen(false);
      setIsServicesOpen(false);
      setShowMobileServices(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const handleMobileLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
    setShowMobileServices(false);
  }, []);

  const openMobileServices = useCallback(() => {
    setShowMobileServices(true);
  }, []);

  const closeMobileServices = useCallback(() => {
    setShowMobileServices(false);
    setIsMobileMenuOpen(false);
  }, []);

  const backToMainMenu = useCallback(() => {
    setShowMobileServices(false);
  }, []);

  return (
    <header
      dir="rtl"
      className="fixed top-0 left-0 right-0 shadow-sm z-50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <motion.div
          className="flex-shrink-0 order-3 h-10 w-25"
          whileHover={{
            scale: 1.05,
            transition: { type: 'spring', stiffness: 400, damping: 10 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">
            <img src="/images/logo.webp" alt="velante-logo" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6 lg:space-x-8">
            <NavItem href="/">الرئيسية</NavItem>
            <div ref={dropdownRef}>
              <DesktopDropdown
                isOpen={isServicesOpen}
                setIsOpen={setIsServicesOpen}
              />
            </div>
            <NavItem href="/packages">الباقات</NavItem>
            <NavItem href="/portfolio">أعمالنا</NavItem>
            <NavItem href="/about">عنا</NavItem>
            <NavItem href="/contact">اتصل بنا</NavItem>
          </ul>
        </nav>

        <motion.div className="hidden md:block" whileTap={{ scale: 0.95 }}>
          <Link href={'/contact'}>
            <button
              className="px-6 py-2 bg-e-blue cursor-pointer text-white font-medium rounded-full hover:bg-l-blue hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              aria-label="اتصل الآن"
            >
              اتصل الآن
            </button>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden cursor-pointer p-2 text-light hover:text-e-blue transition-colors duration-200 focus:outline-none cursor-pointer focus:ring-2 focus:ring-e-blue focus:ring-opacity-50 rounded-lg"
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
          aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && !showMobileServices && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Mobile Main Menu */}
              <motion.div
                className="fixed top-0 grid gap-6 right-0 w-80 min-h-[100vh] max-w-[90vw] bg-gradient-to-b from-gray-900 to-primary  shadow-xl z-50"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 0.3,
                }}
              >
                <div className="flex items-center justify-between p-4 border-b border-gray-950">
                  <Link href="/" onClick={handleMobileLinkClick}>
                    <img src="/images/logo.webp" className="w-24 h-auto" />
                  </Link>
                  <motion.button
                    className="p-2 text-light hover:text-e-blue cursor-pointer hover:bg-gray-950 rounded-full transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="إغلاق القائمة"
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <ul className="grid gap-4 px-4">
                  <NavItem href="/" onClick={handleMobileLinkClick}>
                    الرئيسية
                  </NavItem>

                  {/* Mobile Services Item - opens separate menu */}
                  <li>
                    <button
                      className="flex items-center relative justify-between w-full px-6 py-3 font-bold text-light hover:text-e-blue cursor-pointer transition-colors duration-200 group"
                      onClick={openMobileServices}
                      aria-label="الخدمات"
                    >
                      <span>الخدمات</span>
                      <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-e-blue transition-all duration-300 group-hover:w-full" />
                      <ChevronLeft size={20} className="text-light" />
                    </button>
                  </li>

                  <NavItem href="/packages" onClick={handleMobileLinkClick}>
                    الباقات
                  </NavItem>
                  <NavItem href="/portfolio" onClick={handleMobileLinkClick}>
                    أعمالنا
                  </NavItem>
                  <NavItem href="/about" onClick={handleMobileLinkClick}>
                    عنا
                  </NavItem>
                  <NavItem href="/contact" onClick={handleMobileLinkClick}>
                    اتصل بنا
                  </NavItem>
                </ul>

                <div className="px-6 mt-4 pb-6">
                  <Link href={'/contact'}>
                    <motion.button
                      className="w-full px-6 py-3 cursor-pointer bg-e-blue text-white font-medium rounded-full hover:bg-l-blue hover:shadow-lg transition-all duration-200"
                      aria-label="اتصل الآن"
                      whileTap={{ scale: 0.98 }}
                    >
                      اتصل الآن
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Mobile Services Menu - appears when user clicks Services */}
        <AnimatePresence>
          {showMobileServices && (
            <MobileServicesMenu
              onBack={backToMainMenu}
              onClose={closeMobileServices}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
