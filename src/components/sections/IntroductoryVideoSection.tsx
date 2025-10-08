import React from 'react';
import '../../styles/IntroductoryVideoSection.css';
import Button from '../Button';

const IntroductoryVideoSection: React.FC = () => {
  const videoId = 'hZ2oxrJg2Cc';
  const startTime = 5; // Start at 5 seconds
  const videoUrl = `https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=0&rel=0`; // Added rel=0 to hide related videos

  return (
    <section id="intro-video" className="intro-video-section" aria-labelledby="video-title">
      <div className="intro-video-container">
        <h2 id="video-title" className="intro-video-title">Discover Elmentor Program: Watch Our Introduction</h2>
        <p className="intro-video-subtitle">
          Get a quick overview of the Elmentor Program and learn how it can help you achieve your career goals.
        </p>
        <div className="video-responsive-wrapper">
          <iframe
            src={videoUrl}
            title="What is the DevOps Visions Program and How Can It Help You?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            aria-describedby="video-description"
          ></iframe>
        </div>
        <p id="video-description" className="video-description">
          This introductory video provides an overview of the Elmentor Program, explaining how our mentorship 
          approach can accelerate your professional development in the tech industry.
        </p>

        <div className="video-cta-section">
          <h3 className="video-cta-title">Ready to Start Your Journey?</h3>
          <p className="video-cta-text">
            After watching our introduction, take the next step and join our community of learners and mentors.
          </p>
          <div className="video-cta-buttons">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              ariaLabel="Join the DevOps Visions Program - Go to contact form"
            >
              Join the Program
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}
              ariaLabel="Learn more about our activities"
            >
              Explore Activities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductoryVideoSection;
