import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./Navigation.css";

const Navigation: React.FC = () => {
  const { language, setLanguage, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "hero",
        "about",
        "circles",
        "activities",
        "founder",
        "news",
        "contact",
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "circles", label: "Circles" },
    { id: "activities", label: "Activities" },
    { id: "founder", label: "Founder" },
    { id: "news", label: "News" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`navigation ${isScrolled ? "scrolled" : ""} ${isRTL ? "rtl" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav__container">
        {/* Logo */}
        <div className="nav__logo">
          <button
            onClick={() => scrollToSection("hero")}
            className="nav__logo-button"
            aria-label="Go to homepage"
          >
            <span className="nav__logo-text">DevOps Visions</span>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="nav__menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav__link ${activeSection === item.id ? "active" : ""}`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Language Toggle & Mobile Menu Button */}
        <div className="nav__actions">
          <button
            onClick={toggleLanguage}
            className="nav__lang-toggle"
            aria-label={`Switch to ${language === "en" ? "Arabic" : "English"}`}
          >
            {language === "en" ? "العربية" : "English"}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`nav__mobile-toggle ${isMobileMenuOpen ? "active" : ""}`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="nav__hamburger-line"></span>
            <span className="nav__hamburger-line"></span>
            <span className="nav__hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`nav__mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="nav__mobile-content">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav__mobile-link ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="nav__overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navigation;
