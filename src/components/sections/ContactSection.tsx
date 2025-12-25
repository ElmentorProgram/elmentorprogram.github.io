import React from 'react';
import '../../styles/ContactSection.css';
import '../../styles/ContactInfo.css';

const ContactSection: React.FC = () => {
  const openApplicationForm = () => {
    window.open(
      'https://forms.office.com/pages/responsepage.aspx?id=VMuHclbbA0SbDZvix-_OTiBS0-e3DjdBpyuSsEcOutNUQ002QVU3U1IyU0JWSzRXUlBDOTdNQkIyMiQlQCN0PWcu&route=shorturl',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/201224073193', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-form">

          <h1 className="contact-info-title">Apply to Join Elmentor Community</h1>

          <p className="contact-info-text" > We’re excited to hear from you!</p>

          <p className="contact-info-text">
            Due to high interest, applications may take several months to review.
          </p>

          <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
            <button
              type="button"
              className="messenger-contact-button primary-button"
              onClick={openApplicationForm}
              aria-label="Start your application to join Elmentor Community"
            >
              Start Application
            </button>
          </div>

          <p className="contact-info-text">
            Your application will be added to the waiting list — we’ll contact you once you’re selected for an interview.
          </p>

          <h2 className="contact-info-title">Need a faster option?</h2>

          <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
            <button
              type="button"
              className="messenger-contact-button secondary-button"
              onClick={openWhatsApp}
              aria-label="Message Financial Manager on WhatsApp"
            >
              Message Financial Manager on WhatsApp
            </button>
          </div>

          <p className="contact-info-text">
            Please note that offers and discounts don't apply in this case.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
