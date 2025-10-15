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
            window.open(
              'https://forms.office.com/pages/responsepage.aspx?id=VMuHclbbA0SbDZvix-_OTiBS0-e3DjdBpyuSsEcOutNUQ002QVU3U1IyU0JWSzRXUlBDOTdNQkIyMiQlQCN0PWcu&route=shorturl',
              '_blank'
            );
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
            If you'd like to bypass the waiting list, you may contact:
          </p>

          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <button
              type="button"
              className="messenger-contact-button"
              onClick={() =>
                window.open('https://wa.me/201224073193', '_blank', 'noopener,noreferrer')
              }
            >
              Message Financial Manager on WhatsApp
            </button>
          </div>

          <p className="contact-small-text" style={{ color: '#d9534f', fontWeight: 'bold' }}>
            Please note that offers and discounts will not apply in this case.
          </p>

          <div style={{ textAlign: 'center' }}>
            <button type="submit" className="messenger-contact-button">
              Start Application
            </button>
          </div>

          <p className="contact-small-text">
            Your application will be added to the waiting list — we’ll contact you once you’re selected for an interview.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;