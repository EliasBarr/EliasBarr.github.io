import React from 'react';
import '../css/ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <p className="contact-text">
          *If you're looking to book a newborn session, feel free to message us directly so we can design a session tailored to your needs. We're happy to customize any package to fit your vision.*
        </p>
        <button className="contact-button">Contact Me</button>
      </div>
    </div>
  );
};

export default ContactSection;
