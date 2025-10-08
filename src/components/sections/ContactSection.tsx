import React from 'react';
import '../../styles/ContactSection.css';
import '../../styles/ContactInfo.css';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-section-title">Get in Touch</h2>
        <p className="contact-section-subtitle">
          Ready to connect with the Elmentor Program? We'd love to hear from you!
        </p>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          window.open('https://forms.office.com/pages/responsepage.aspx?id=VMuHclbbA0SbDZvix-_OTiBS0-e3DjdBpyuSsEcOutNUQ002QVU3U1IyU0JWSzRXUlBDOTdNQkIyMiQlQCN0PWcu&route=shorturl', '_blank');
        }}
      >
          <h3 className="contact-info-title">Apply to Join Elmentor Community</h3>
          <p className="contact-info-text">
            We’re excited to hear from you!
          </p>
          <p className="contact-info-text">
            Please note that we currently have a substantial waiting list, 
            and it may take up to six months or more before we can get back to you.
          </p>

          <p className="contact-info-text">
            If you'd like to bypass the waiting list, you may contact 
            <strong> Ms. Nadia (Financial Manager)</strong> at 
            <a href="tel:+201224073193" className="contact-link"> +20 122 407 3193</a>. 
            Please note that offers and discounts will not apply in this case.
          </p>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Why do you want to join?</label>
            <textarea id="message" name="message" required />
          </div>

          <button type="submit" className="messenger-contact-button">
            Submit Your Application
          </button>

          <p className="contact-small-text">
            Your application will be added to the waiting list — we’ll contact you once you’re selected for an interview.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
