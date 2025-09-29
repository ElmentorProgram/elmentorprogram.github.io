import React from "react";
import Button from "./Button";
import "../styles/Footer.css";
import logoImage from "../assets/images/elmentor-logo.svg";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="elmentor-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-content">
          {" "}
          <div className="footer-logo-attribution">
            {" "}
            <img
              src={logoImage}
              alt="Elmentor Program Logo"
              className="footer-devops-logo"
            />
            <p className="footer-attribution">
              Crafted with ❤️ and code by the Elmentor Program, operated by
              DevOps Visions, supercharged by GitHub Copilot. Empowering growth
              through mentorship.
            </p>
          </div>
          <div className="footer-navigation">
            <div className="footer-links">
              <h5 className="footer-links-title">EXPLORE</h5>
              <nav aria-label="Footer navigation">
                <a href="#hero" className="footer-link">
                  Home
                </a>
                <a href="#about" className="footer-link">
                  About
                </a>
                <a href="#activities" className="footer-link">
                  Activities
                </a>
                <a href="#benefits" className="footer-link">
                  Benefits
                </a>
                <a href="#founder" className="footer-link">
                  Founder
                </a>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </nav>
            </div>

            <div className="footer-legal">
              <h5 className="footer-links-title">LEGAL</h5>
              <nav aria-label="Legal links">
                <a href="#code-of-conduct" className="footer-link">
                  Code of Conduct
                </a>
                <a href="#privacy" className="footer-link">
                  Privacy Policy
                </a>
                <a href="#terms" className="footer-link">
                  Terms of Service
                </a>
              </nav>
            </div>
          </div>
          <div className="footer-cta">
            <h5 className="footer-cta-title">Ready to Get Started?</h5>
            <p className="footer-cta-text">
              Join our community and start your mentorship journey today.
            </p>{" "}
            <Button
              variant="secondary"
              size="base"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="Join the El Mentor Program - scroll to contact form"
            >
              Join Now
            </Button>
          </div>
        </div>

        <div className="footer-copyright">
          {" "}
          <p>&copy; {currentYear} Elmentor Program. All rights reserved.</p>
          <p className="footer-built-with">
            Built with React, enhanced with GitHub Copilot, and deployed with
            love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
