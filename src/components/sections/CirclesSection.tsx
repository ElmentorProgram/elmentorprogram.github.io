import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import '../../styles/CirclesSection.css';

// Using the exact provided descriptions
const ELMENTOR_CIRCLES = [
  {
    name: "Audience",
    description: "External audience who engage with us from the outside"
  },
  {
    name: "Guests",
    description: "Occasional participants with limited access"
  },
  {
    name: "Members",
    description: "Active, permanent participants in the community"
  },
  {
    name: "Group Advisory (GAs)",
    description: "Leaders who support and guide members"
  },
  {
    name: "Lead Group Advisory (LGAs)",
    description: "Guide both the Group Advisory and members"
  },
  {
    name: "Executives",
    description: "Set strategic direction and oversee all layers"
  }
];

const CirclesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="circles" 
      className="circles-section" 
      aria-labelledby="circles-title"
      ref={sectionRef}
    >
      <div className="circles-container">
        <h2 
          id="circles-title" 
          className={`circles-section-title ${isVisible ? 'animate-fade-in' : ''}`}
          ref={titleRef}
        >
          Understanding Knowledge Access Through Elmentor Circles
        </h2>
        
        <div 
          className={`circles-explanation ${isVisible ? 'animate-fade-in animate-delay-200' : ''}`}
          ref={introRef}
        >
          <p className="circles-intro">
            To structure access, engagement, and leadership within the community, we use a model called 
            <strong> Elmentor Circles</strong>. These circles define different levels of participation 
            and responsibility, arranged in clear layers:
          </p>
        </div>

        <div 
          className={`circles-diagram ${isVisible ? 'animate-scale-in animate-delay-400' : ''}`}
          ref={diagramRef}
        >          <div className="circles-image-wrapper">
            <img 
              src="./assets/circles/elmentor-circles.png" 
              alt="Elmentor Circles Diagram showing the layered structure from Audience to Executives" 
              className="circles-image"
              loading="lazy"
            />
            <div className="circles-image-overlay"></div>
          </div>
        </div>
        
        <div className="circles-content">
          <div 
            className={`circles-list-container ${isVisible ? 'animate-fade-in-up animate-delay-600' : ''}`}
            ref={listRef}
          >
            <ul className="circles-list">
              {ELMENTOR_CIRCLES.map((circle, index) => (
                <li 
                  key={circle.name} 
                  className={`circle-item ${isVisible ? `animate-fade-in-left animate-delay-${(index + 3) * 200}` : ''}`}
                >
                  <span className="circle-name">{circle.name}</span> – {circle.description}
                </li>
              ))}
            </ul>
          </div>

          <div 
            className={`circles-visual-note ${isVisible ? 'animate-fade-in animate-delay-1400' : ''}`}
            ref={noteRef}
          >
            <p>
              This model helps us structure engagement, learning, and decision-making in a clear and scalable way.
            </p>
          </div>
          
          <div 
            className={`circles-cta ${isVisible ? 'animate-fade-in-up animate-delay-1600' : ''}`}
            ref={ctaRef}
          >
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              ariaLabel="Join El Mentor community"
            >
              Join Our Community
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}
              ariaLabel="Learn about our activities"
            >
              Explore Our Activities
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="circles-bg-decoration">
        <div className="circle-deco circle-deco-1"></div>
        <div className="circle-deco circle-deco-2"></div>
        <div className="circle-deco circle-deco-3"></div>
      </div>
    </section>
  );
};

export default CirclesSection;
