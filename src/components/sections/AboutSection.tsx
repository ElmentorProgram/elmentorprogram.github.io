import React, { useEffect, useRef } from "react";
import {
  FaGithub,
  FaMicrosoft,
  FaLightbulb,
  FaHandsHelping,
  FaCogs,
} from "react-icons/fa";
import Button from "../Button";
import "../../styles/AboutSection.css";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Animation effect on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    blockRefs.current.forEach((block) => {
      if (block) observer.observe(block);
    });

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);

      blockRefs.current.forEach((block) => {
        if (block) observer.unobserve(block);
      });
    };
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-container">
        {" "}
        <h2 className="about-title" ref={titleRef}>
          About the Elmentor Program
        </h2>
        <div className="about-content">
          {/* Card 1: Mission & Core Values */}
          <div
            className="about-block"
            ref={(el) => (blockRefs.current[0] = el)}
            data-animation-delay="0"
          >
            <div className="about-block-inner">
              {" "}
              <h3 className="about-subtitle">
                <FaLightbulb
                  className="about-icon pulse-icon"
                  aria-hidden="true"
                />
                Mission & Core Values
              </h3>
              <ul className="about-list">
                <li>
                  Elmentor Program is a private community operated by DevOps
                  Visions professional services.
                </li>
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
          </div>

          {/* Card 2: What We Offer */}
          <div
            className="about-block"
            ref={(el) => (blockRefs.current[1] = el)}
            data-animation-delay="200"
          >
            <div className="about-block-inner">
              <h3 className="about-subtitle">
                <FaHandsHelping
                  className="about-icon pulse-icon"
                  aria-hidden="true"
                />
                What We Offer
              </h3>
              <ul className="about-list">
                <li>
                  Mentorship from experienced industry leaders and Microsoft
                  MVPs.
                </li>
                <li>
                  Access to curated knowledge, learning resources, and exclusive
                  content.
                </li>
                <li>
                  Networking opportunities with a diverse global community of
                  tech professionals.
                </li>
                <li>
                  Opportunities for hands-on experience through real-world
                  community projects and open-source contributions.
                </li>
                <li>
                  Comprehensive career development support (CV reviews,
                  referrals, job offers).
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: How We Work: Our Platforms */}
          <div
            className="about-block"
            ref={(el) => (blockRefs.current[2] = el)}
            data-animation-delay="400"
          >
            <div className="about-block-inner">
              <h3 className="about-subtitle">
                <FaCogs className="about-icon pulse-icon" aria-hidden="true" />
                How We Work: Our Platforms
              </h3>
              <ul className="about-list">
                <li>
                  <span className="about-key">
                    <FaGithub className="about-icon" aria-hidden="true" />
                    <a
                      href="https://github.com/DevOpsVisions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </span>
                  : Our central knowledge base for structured documentation,
                  collaborative project development, and transparent information
                  sharing.
                </li>
                <li>
                  <span className="about-key">
                    <FaMicrosoft className="about-icon" aria-hidden="true" />
                    Microsoft Teams
                  </span>
                  : Our primary platform for daily communication, real-time
                  discussions, group collaboration, and community announcements.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="about-cta" ref={ctaRef}>
          <Button
            variant="primary"
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            ariaLabel="Join the DevOps Visions community"
          >
            Join Our Community
          </Button>{" "}
          <Button
            variant="ghost"
            size="lg"
            onClick={() =>
              window.open("https://github.com/ElmentorProgram", "_blank")
            }
            ariaLabel="View our GitHub organization"
            icon={<FaGithub />}
          >
            View on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
