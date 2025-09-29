import React from "react";
import {
  FaGithub,
  FaMicrosoft,
  FaLightbulb,
  FaHandsHelping,
  FaCogs,
} from "react-icons/fa";
import Button from "../../Button";
import "../../../styles/AboutSection.css";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About the DevOps Visions Program</h2>
        <div className="about-content">
          {/* Card 1: Mission & Core Values */}
          <div className="about-block">
            <h3 className="about-subtitle">
              <FaLightbulb className="about-icon" aria-hidden="true" />
              Mission & Core Values
            </h3>
            <ul className="about-list">
              <li>
                Empowering tech professionals through dedicated mentorship and
                collaborative knowledge sharing.
              </li>
              <li>
                Fostering a transparent, inclusive, and supportive community
                environment.
              </li>
              <li>
                Encouraging continuous learning, professional growth, and the
                pursuit of excellence.
              </li>
              <li>
                Providing genuine value and unwavering support for every
                member's journey.
              </li>
            </ul>
          </div>

          {/* Card 2: What We Offer */}
          <div className="about-block">
            <h3 className="about-subtitle">
              <FaHandsHelping className="about-icon" aria-hidden="true" />
              What We Offer
            </h3>
            <ul className="about-list">
              <li>
                Direct mentorship opportunities with industry-leading
                professionals.
              </li>
              <li>
                Access to exclusive educational content, workshops, and training
                sessions.
              </li>
              <li>
                Collaborative project-based learning in real-world scenarios.
              </li>
              <li>
                Comprehensive career guidance and professional development
                support.
              </li>
              <li>
                A robust network of peers, mentors, and industry connections.
              </li>
            </ul>
          </div>

          {/* Card 3: Community Impact */}
          <div className="about-block">
            <h3 className="about-subtitle">
              <FaCogs className="about-icon" aria-hidden="true" />
              Community Impact
            </h3>
            <ul className="about-list">
              <li>
                Over 500+ active community members across multiple regions and
                expertise levels.
              </li>
              <li>
                Successfully facilitated 200+ mentorship connections and
                collaborative partnerships.
              </li>
              <li>
                Developed and delivered 100+ educational workshops, webinars,
                and training sessions.
              </li>
              <li>
                Contributed to open-source projects with measurable community
                impact and industry recognition.
              </li>
            </ul>
          </div>

          {/* Card 4: Recognition & Partnerships */}
          <div className="about-block">
            <h3 className="about-subtitle">
              <FaMicrosoft className="about-icon" aria-hidden="true" />
              Recognition & Partnerships
            </h3>
            <ul className="about-list">
              <li>
                Officially recognized as a Microsoft Community Partner with
                dedicated support.
              </li>
              <li>
                Endorsed by industry leaders and established technology
                organizations.
              </li>
              <li>
                Active collaborations with leading tech companies and
                educational institutions.
              </li>
              <li>
                Recipient of multiple community excellence awards and industry
                acknowledgments.
              </li>
            </ul>
          </div>

          {/* Card 5: Continuous Growth */}
          <div className="about-block">
            <h3 className="about-subtitle">
              <FaGithub className="about-icon" aria-hidden="true" />
              Continuous Growth
            </h3>
            <ul className="about-list">
              <li>
                Commitment to evolving with industry trends and emerging
                technologies.
              </li>
              <li>
                Regular program enhancements based on member feedback and
                community needs.
              </li>
              <li>
                Expanding global reach with localized content and culturally
                relevant programming.
              </li>
              <li>
                Investment in cutting-edge tools and platforms to enhance the
                learning experience.
              </li>
            </ul>
          </div>
        </div>

        <div className="about-cta">
          <p className="about-cta-text">
            Ready to accelerate your career and connect with a community of
            passionate professionals?
          </p>{" "}
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            variant="primary"
            size="lg"
            className="about-cta-button"
          >
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
