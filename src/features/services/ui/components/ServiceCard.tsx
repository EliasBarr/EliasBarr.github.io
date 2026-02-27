import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { CardModel } from '../../../../core/types/cardModel';
import { useIsDesktop } from '../../../../core/common/hooks/useMediaQuery';
import '../css/ServiceCard.css';

interface ServiceCardProps {
  card: CardModel;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (!isDesktop) setIsHovered(false);
  }, [isDesktop]);

  return (
    <Link
      to={card.link || `/services/${card.title.toLowerCase()}`}
      className="service-card"
      onMouseEnter={() => isDesktop && setIsHovered(true)}
      onMouseLeave={() => isDesktop && setIsHovered(false)}
    >
      <div className="card-image-container">
        <img 
          src={card.previewImage} 
          alt={card.title} 
          className={`card-image ${isHovered ? 'image-hovered' : ''}`}
        />
        <div className={`image-overlay ${isHovered ? 'overlay-visible' : ''}`}>
          <h3 className={`card-title ${isHovered ? 'title-hidden' : ''}`}>{card.title}</h3>
        </div>
      </div>
      
      <div className={`card-description ${isHovered ? 'description-visible' : ''}`}>
        <p className="description-text">{card.description}</p>
        <div className="learn-more">
          <span>Learn more</span>
          <span className="arrow">→</span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
