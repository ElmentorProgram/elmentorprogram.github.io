import React from 'react';
import '../../styles/CommunityGatheringSection.css';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

// Community gathering data
const COMMUNITY_GATHERINGS = [  {    id: 'japan2022',
    title: 'Japan/Tokyo Nov 2022',
    location: 'Tokyo, Japan',
    date: 'November 2022',
    image: 'https://raw.githubusercontent.com/MohamedRadwan-DevOps/devops-step-by-step/main/source/images/mics/jap-nov-23.jpg'
  },
  {
    id: 'egypt2023',
    title: 'Egypt/Cairo Feb 2023',
    location: 'Cairo, Egypt',
    date: 'February 2023',
    image: 'https://raw.githubusercontent.com/MohamedRadwan-DevOps/devops-step-by-step/main/source/images/mics/eg-2-23.jpg'
  },
  {
    id: 'usa2023',
    title: 'USA/Seattle April 2023',
    location: 'Seattle, USA',
    date: 'April 2023',
    image: 'https://raw.githubusercontent.com/MohamedRadwan-DevOps/devops-step-by-step/main/source/images/mics/usa-apr-23.jpg'
  }
  ,
  {
    id: 'ksa2024',
    title: 'KSA/Riyadh March 2024',
    location: 'Riyadh, KSA',
    date: 'March 2024',
    image: 'https://raw.githubusercontent.com/MohamedRadwan-DevOps/devops-step-by-step/main/source/images/mics/egy-aug-24.jpg'
  },
  {
    id: 'egypt2024',
    title: 'Egypt/Cairo August 2024',
    location: 'Cairo, Egypt',
    date: 'August 2024',
    image: 'https://raw.githubusercontent.com/MohamedRadwan-DevOps/devops-step-by-step/main/source/images/mics/egy-aug-24.jpg'
  }
];

const CommunityGatheringSection: React.FC = () => {
  return (
    <section className="community-gathering-section" id="gatherings">
      <div className="container">
        <h2 className="section-title">Community Gathering</h2>
        
        <p className="section-description">
          Join our global community of DevOps professionals and mentoring enthusiasts. Our gatherings bring 
          together passionate individuals from around the world to share knowledge, network, and grow 
          together.
        </p>
        
        <div className="gathering-cards">
          {COMMUNITY_GATHERINGS.map((gathering) => (
            <div key={gathering.id} className="gathering-card">
              <div className="gathering-image-container">
                <img 
                  src={gathering.image} 
                  alt={`${gathering.title} community gathering`} 
                  className="gathering-image"
                />
              </div>
              <div className="gathering-content">
                <h3 className="gathering-title">{gathering.title}</h3>
                <div className="gathering-details">
                  <p className="gathering-location">
                    <FaMapMarkerAlt className="gathering-icon" />
                    <span>{gathering.location}</span>
                  </p>
                  <p className="gathering-date">
                    <FaCalendarAlt className="gathering-icon" />
                    <span>{gathering.date}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gathering-join-cta">          <p>Want to join our next gathering or organize one in your city?</p>
          <a href="https://www.facebook.com/mradwandevops" className="messenger-button" target="_blank" rel="noopener noreferrer">
            Message Eng Mohamed Radwan on Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunityGatheringSection;
