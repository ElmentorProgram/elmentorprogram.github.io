import React from "react";
import Button from "../Button";
import "../../styles/BenefitsSection.css";
import {
  FaGlobe,
  FaChalkboardTeacher,
  FaUsers,
  FaProjectDiagram,
  FaRocket,
  FaHandsHelping,
  FaGithub,
  FaMicrosoft,
  FaArrowRight,
  FaUserPlus,
} from "react-icons/fa";

const BENEFITS_DATA = [
  { text: "Global network access", icon: <FaGlobe /> },
  { text: "Exclusive knowledge sessions", icon: <FaChalkboardTeacher /> },
  { text: "Mentorship from industry leaders", icon: <FaUsers /> }, // Combined Mentorship
  {
    text: "Project collaboration on real-world scenarios",
    icon: <FaProjectDiagram />,
  }, // Combined Project Collaboration
  { text: "Career acceleration and support", icon: <FaRocket /> }, // Combined Career Acceleration
  { text: "Supportive community for growth", icon: <FaHandsHelping /> }, // Combined Support for Growth
  { text: "Organized knowledge base (GitHub-based)", icon: <FaGithub /> },
  {
    text: "Dynamic communication channels (Teams-based)",
    icon: <FaMicrosoft />,
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="benefits-section">
      <div className="benefits-container">
        {" "}
        <h2 className="benefits-title">
          Unlock Your Potential with Elmentor Program
        </h2>
        <p className="benefits-subtitle">
          Joining Elmentor Program offers a multitude of advantages designed to
          foster your professional and personal growth in the tech world.
        </p>
        <div className="benefits-grid">
          {BENEFITS_DATA.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon-container">
                <span className="benefit-icon" aria-hidden="true">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="benefit-text">{benefit.text}</h3>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="benefits-cta">
          <h3 className="benefits-cta-title">
            Ready to Experience These Benefits?
          </h3>{" "}
          <p className="benefits-cta-text">
            Join thousands of professionals who have accelerated their careers
            with Elmentor Program.
          </p>
          <div className="benefits-cta-buttons">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              ariaLabel="Start your journey with Elmentor Program"
              icon={<FaUserPlus />}
              iconPosition="right"
            >
              Start Your Journey
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() =>
                document
                  .getElementById("activities")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              ariaLabel="Explore our activities"
              icon={<FaArrowRight />}
              iconPosition="right"
            >
              Explore Activities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
