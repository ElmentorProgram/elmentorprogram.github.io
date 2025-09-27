import React from 'react';
import '../../styles/FounderSection.css';
import founderImage from '../../assets/images/founder/mohamed-radwan.png';
import { FaLinkedin, FaGithub, FaBlog, FaYoutube } from 'react-icons/fa';
import Button from '../Button';

const FounderSection: React.FC = () => {
  const founderName = "Mohamed Radwan";  const founderTitle = "Microsoft DevOps MVP, Founder of DevOps Visions & Elmentor Program (24+ years experience)";
  const bio = "Mohamed Radwan is a Microsoft MVP with over 24 years of experience in the tech industry. He has worked with more than 60 global enterprise companies, specializing in DevOps, Azure, Agile, and GitHub. Mohamed is passionate about automation, community contributions, and is a frequent speaker at major technology conferences. He founded DevOps Visions, a professional services entity, and the Elmentor Program to empower tech professionals through mentorship, collaborative knowledge sharing, and cutting-edge DevOps practices.";
  
  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/mohamedahmedradwan/', label: 'View LinkedIn Profile' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/MohamedRadwan-DevOps/devops-step-by-step', label: 'GitHub Portfolio' },
    { name: 'Blog', icon: <FaBlog />, url: 'https://mohamedradwan-devops.github.io/', label: 'Personal Blog' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/@MRadwanMSF', label: 'Watch Mohamed on YouTube' },
  ];

  return (
    <section id="founder" className="founder-section" aria-labelledby="founder-title">
      <div className="founder-container">
        <h2 id="founder-title" className="founder-section-title">About the Founder</h2>
        <div className="founder-content-wrapper">          <div className="founder-image-container">            <img 
              src={founderImage}
              alt={`${founderName}, Microsoft DevOps MVP, Founder of DevOps Visions and Elmentor Program`} 
              className="founder-image"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
            />
          </div>
          <div className="founder-details-container">
            <h3 className="founder-name">{founderName}</h3>
            <p className="founder-title" role="text">{founderTitle}</p>
            <p className="founder-bio" role="text">{bio}</p>
            
            <div className="founder-social-links" role="list" aria-label="Mohamed Radwan's social media profiles">
              {socialLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="founder-social-link" 
                  aria-label={link.label}
                  role="listitem"
                >
                  <span className="social-icon" aria-hidden="true">{link.icon}</span>
                  <span className="social-label">{link.label}</span>
                </a>
              ))}
            </div>

            <div className="founder-cta-section">
              <h4 className="founder-cta-title">Ready to Learn from Mohamed?</h4>
              <p className="founder-cta-text">
                Connect with Mohamed and start your journey with personalized mentorship and guidance.
              </p>
              <div className="founder-cta-buttons">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => window.open('https://www.linkedin.com/in/mohamedahmedradwan/', '_blank')}
                  ariaLabel="Connect with Mohamed Radwan on LinkedIn"
                >
                  Connect on LinkedIn
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  ariaLabel="Contact Mohamed through the contact form"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
