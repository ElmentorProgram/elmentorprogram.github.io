import { useRef } from 'react';
import Button from '../Button';
import '../../styles/HeroSection.css';
import elmentorLogo from '../../../assets/elmentor-logo-BmwUH4zI.png';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  // Note: Advanced scroll effects have been temporarily disabled to fix TypeScript build issues
  // A simpler implementation is used instead. The visual appearance remains the same.

  return (
    <section className="elmentor-hero" id="hero" ref={heroRef}>
      {/* Background pattern overlay is handled by CSS */}
      <div className="elmentor-hero-overlay"></div>
        <div className="elmentor-hero-content">
          
          <img 
            src={elmentorLogo} 
            alt="Elmentor Program Logo" 
            className="elmentor-logo-top"
            style={{ width: '200px', height: 'auto' }}
          />

        <h1 className="elmentor-hero-title">
          Join Elmentor Program: A Private Community for Continuous Learning and Professional Growth.<br />
          <span className="elmentor-hero-slogan">Empower through mentorship.</span>
        </h1>
        
        <p className="elmentor-hero-subhead">
          Connect, collaborate, and elevate your skills with a diverse network of tech enthusiasts and experts.<br />
          As we believe, <span className="elmentor-hero-quote">"If you want to go fast, go alone. If you want to go far, go together."</span>
        </p>
        
        <div className="hero-cta-container">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            ariaLabel="Explore the Elmentor Program"
          >
            Explore Elmentor Program
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            ariaLabel="Get in touch with us"
          >
            Get Started
          </Button>
        </div>
      </div>
      
      {/* Animated wave shape divider at bottom of hero section */}
      <div className="elmentor-hero-wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="elmentor-hero-wave-shape"></path>
        </svg>
      </div>
    </section>
  );
}
