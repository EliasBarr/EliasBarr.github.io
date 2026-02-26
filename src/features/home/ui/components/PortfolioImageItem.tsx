import React from 'react';
import type { PortfolioItem } from '../../constants/portfolioData';
import '../css/PortfolioImageItem.css';

interface PortfolioImageItemProps {
  item: PortfolioItem;
  isMobile: boolean;
  onClick: (e?: React.MouseEvent) => void;
}

const PortfolioImageItem: React.FC<PortfolioImageItemProps> = ({
  item,
  isMobile,
  onClick,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className="portfolio-image-item"
      role="button"
      tabIndex={0}
      onClick={(e) => onClick(e)}
      onKeyDown={handleKeyDown}
      aria-label={`Ver imagen: ${item.title}`}
    >
      <div className="portfolio-image-wrap">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          style={{
            maxWidth: '100%',
            height: 'auto',
            imageRendering: 'auto',
            objectFit: isMobile ? 'contain' : 'cover',
          }}
        />
      </div>
    </div>
  );
};

export default PortfolioImageItem;
