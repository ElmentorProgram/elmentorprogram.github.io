import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTranslations } from "../../utils/translations";
import "./Navigation.css";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, isRTL } = useLanguage();
  const t = useTranslations(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  const navItems = [
    { id: "hero", label: t.navigation.home },
    { id: "about", label: t.navigation.about },
    { id: "circles", label: t.navigation.circles },
    { id: "activities", label: t.navigation.activities },
    { id: "founder", label: t.navigation.founder },
    { id: "news", label: t.navigation.news },
    { id: "contact", label: t.navigation.contact },
    { id: "community", label: t.navigation.community },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav
        className={`navigation ${isScrolled ? "scrolled" : ""} ${isRTL ? "rtl" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navigation__container">
          <div className="navigation__brand">
            <button
              onClick={() => scrollToSection("hero")}
              className="navigation__logo"
              aria-label="Go to homepage"
            >
              <span className="navigation__logo-text">Elmentor</span>
              <span className="navigation__logo-subtitle">DevOps Visions</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="navigation__desktop">
            <ul className="navigation__menu" role="menubar">
              {navItems.map((item) => (
                <li key={item.id} role="none">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="navigation__link"
                    role="menuitem"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleLanguage}
              className="navigation__language-toggle"
              aria-label={`Switch to ${language === "en" ? "Arabic" : "English"}`}
              title={t.navigation.language}
            >
              <Globe size={20} />
              <span>{language === "en" ? "ع" : "EN"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="navigation__mobile-toggle"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`navigation__mobile ${isMenuOpen ? "open" : ""}`}
          role="menu"
          aria-hidden={!isMenuOpen}
        >
          <ul className="navigation__mobile-menu">
            {navItems.map((item) => (
              <li key={item.id} role="none">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="navigation__mobile-link"
                  role="menuitem"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li role="none">
              <button
                onClick={toggleLanguage}
                className="navigation__mobile-link navigation__mobile-language"
                role="menuitem"
              >
                <Globe size={20} />
                <span>
                  {t.navigation.language} ({language === "en" ? "ع" : "EN"})
                </span>
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Overlay */}
        {isMenuOpen && (
          <div
            className="navigation__overlay"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </nav>
    </>
  );
};

export default Navigation;
