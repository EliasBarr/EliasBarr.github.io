import React from 'react';
import AboutUs from '../components/AboutUs';
import { SOCIAL_LINKS } from '../../../../core/constants/contactInfo';
import aboutUsImage from '../../../../assets/about_us.png';

const AboutUsPage: React.FC = () => {
  const handleContactClick = () => {
    window.open(SOCIAL_LINKS.whatsapp, '_blank');
  };

  return (
    <div className="about-page">
      <AboutUs 
        title="ABOUT ME"
        description="Pharus Creative is a studio specializing in photography, video production, content creation, and digital marketing. We illuminate emotion, build identity, and leave a mark. Our inspiration comes from a personal journey, and we are based in Montreal."
        buttonText="Contact Me"
        onButtonClick={handleContactClick}
        imageUrl={aboutUsImage}
        imageAlt="Gai cat - About me image"
      />
    </div>
  );
};

export default AboutUsPage;
