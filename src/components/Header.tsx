import { useState, useEffect } from 'react';
import '../styles/Header.css';
import logoImage from '../assets/images/elmentor-logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Circles', href: '#circles', id: 'circles' },
  { label: 'Activities', href: '#activities', id: 'activities' },
  { label: 'Founder', href: '#founder', id: 'founder' },
  { label: 'Benefits', href: '#benefits', id: 'benefits' },
  { label: 'News', href: '#news', id: 'news' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const MOBILE_BREAKPOINT = 900;

export default function Header() {  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

  useEffect(() => {
    // Initial check for scroll position
    setScrolled(window.scrollY > 50);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile && menuOpen) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('mobile-menu-open');
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          closeMenu();
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.classList.remove('mobile-menu-open');
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  }, [menuOpen]);
  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);
  
  // Function to handle section navigation and prevent default behavior
  const handleSectionNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    closeMenu();
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      
      // Update URL without triggering navigation
      const newUrl = window.location.pathname + window.location.search + '#' + sectionId;
      window.history.replaceState(null, '', newUrl);
    }
  };

  return (
    <header className={`elmentor-header${scrolled ? ' scrolled' : ''}`}>      <nav className="elmentor-nav" aria-label="Main Navigation">        <a 
          href="#hero" 
          className="elmentor-logo-link" 
          tabIndex={0}
          onClick={(e) => handleSectionNavigation(e, 'hero')}
        >
          <img 
            src={logoImage}
            alt="Elmentor Program Logo" 
            className="elmentor-logo"
          />
        </a>
        {isMobile && (
          <button
            className="elmentor-hamburger"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="elmentor-mobile-menu"
            onClick={handleMenuToggle}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        )}
        {!isMobile && (
          <>            <ul className="elmentor-nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    tabIndex={0} 
                    onClick={(e) => handleSectionNavigation(e, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul><div className="elmentor-lang-switcher" role="group" aria-label="Language Switcher">
              <a href="#/" className="lang-btn active" tabIndex={0}>English</a>
              <span className="lang-divider">|</span>
              <a href="#/arabic" className="lang-btn" tabIndex={0}>العربية</a>
            </div>
          </>
        )}
      </nav>
      {isMobile && (
        <div
          id="elmentor-mobile-menu"
          className={`elmentor-mobile-menu${menuOpen ? ' open' : ''}`}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  tabIndex={0} 
                  onClick={(e) => handleSectionNavigation(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul><div className="elmentor-lang-switcher-mobile" role="group" aria-label="Language Switcher">
            <a href="#/" className="lang-btn active" tabIndex={0}>EN</a>
            <span className="lang-divider">|</span>
            <a href="#/arabic" className="lang-btn" tabIndex={0}>ع</a>
          </div>
        </div>
      )}
      {isMobile && <div className={`elmentor-menu-backdrop${menuOpen ? ' open' : ''}`} onClick={closeMenu} tabIndex={-1} aria-hidden="true"></div>}
    </header>
  );
}
