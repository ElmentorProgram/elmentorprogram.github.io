import { useEffect } from "react";
import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import SEOMetaTags from "./components/SEOMetaTags";
import { initializeUXEnhancements } from "./utils/uxEnhancements";
import { initializePerformanceOptimizations } from "./utils/performanceOptimizations";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import CirclesSection from "./components/sections/CirclesSection";
import ActivitiesSection from "./components/sections/ActivitiesSection";
import FounderSection from "./components/sections/FounderSection";
import BenefitsSection from "./components/sections/BenefitsSection";
import IntroductoryVideoSection from "./components/sections/IntroductoryVideoSection";
import NewsSection from "./components/sections/NewsSection";
import ContactSection from "./components/sections/ContactSection";
import CommunityPresenceSection from "./components/sections/CommunityPresenceSection";
import CommunityGatheringSection from "./components/sections/CommunityGatheringSection";
import Footer from "./components/Footer";
import "./styles/Header.css";
import "./styles/ScrollProgress.css";
import "./styles/BackgroundStyles.css";
import "./styles/index.css";

function App() {
  useEffect(() => {
    initializeUXEnhancements();
    initializePerformanceOptimizations();
  }, []);

  return (
    <>
      <SEOMetaTags />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main-content" className="main-content">
        <HeroSection />
        <AboutSection />
        <CirclesSection />
        <ActivitiesSection />
        <FounderSection />
        <BenefitsSection /> <IntroductoryVideoSection />
        <NewsSection />
        <CommunityGatheringSection />
        <ContactSection />
        <CommunityPresenceSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
