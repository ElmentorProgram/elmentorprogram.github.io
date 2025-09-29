import React from "react";
import "../../styles/ContactSection.css";
import "../../styles/ContactInfo.css";
import { FaInfoCircle } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-section-title">Get in Touch</h2>{" "}
        <p className="contact-section-subtitle">
          Ready to connect with the Elmentor Program? We'd love to hear from
          you!
        </p>
        <div className="contact-info-box">
          <div className="contact-info-icon">
            <FaInfoCircle />
          </div>
          <h3 className="contact-info-title">Contact Form Coming Soon!</h3>
          <p className="contact-info-text">
            We're working on implementing a contact form. For now, the best way
            to reach us is through Facebook.
          </p>
          <a
            href="https://www.facebook.com/mohamedradwan.me"
            className="messenger-contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message Eng Mohamed Radwan
          </a>
          <p className="contact-small-text">
            directly for questions, feedback, or to join our community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
