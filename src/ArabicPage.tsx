import React from "react";
import ArabicVersionPlaceholder from "./components/ArabicVersionPlaceholder";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/globals.css";

const ArabicPage: React.FC = () => {
  // Set language direction for the entire page
  React.useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";

    // Reset direction when component unmounts
    return () => {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    };
  }, []);

  return (
    <div className="arabic-app">
      <Header />
      <main className="main-content">
        <ArabicVersionPlaceholder />
      </main>
      <Footer />
    </div>
  );
};

export default ArabicPage;
