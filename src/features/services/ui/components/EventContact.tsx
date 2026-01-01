import React from 'react';
import '../css/EventContact.css';
import { Button } from '../../../../core/common/ui/components';

interface EventContactProps {
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageUrl?: string;
  imageAlt?: string;
}

const EventContact: React.FC<EventContactProps> = ({ 
  title = "Let's Talk About Your Event",
  buttonText = "Contact Me",
  onButtonClick,
  imageUrl,
  imageAlt = "Event background"
}) => {
  return (
    <section className="event-contact">
      {imageUrl && (
        <div className="event-contact-background">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="event-contact-image"
          />
        </div>
      )}
      
      <div className="event-contact-content">
        <div className="event-contact-text-container">
          <h2 className="event-contact-title font-heading">{title}</h2>
          <Button 
            text={buttonText}
            onClick={onButtonClick}
            variant="transparent"
            className="event-contact-button"
          />
        </div>
      </div>
    </section>
  );
};

export default EventContact;

