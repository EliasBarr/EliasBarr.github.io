import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { Button } from '../../../../core/common/ui/components';
import { useIsMobile, useIsTablet } from '../../../../core/common/hooks/useMediaQuery';
import PortfolioImageItem from './PortfolioImageItem';
import PortfolioLightbox from './PortfolioLightbox';
import '../css/PortfolioSection.css';
import { PORTFOLIO_DATA, type PortfolioItem } from '../../constants/portfolioData';

interface PortfolioSectionProps {
  title?: string;
  /** When provided, show these items instead of PORTFOLIO_DATA (e.g. package images in services). */
  customItems?: PortfolioItem[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ customItems }) => {
  const displayData = customItems ?? PORTFOLIO_DATA;
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOrigin, setLightboxOrigin] = useState<{ x: number; y: number } | null>(null);

  const handleViewPortfolio = () => {
    navigate('/portfolio');
  };

  const openLightbox = (index: number, e?: React.MouseEvent) => {
    setLightboxIndex(index);
    setLightboxOrigin(e ? { x: e.clientX, y: e.clientY } : null);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const handleLightboxNavigate = (direction: 'prev' | 'next') => {
    setLightboxIndex((prev) => {
      if (direction === 'prev') return Math.max(0, prev - 1);
      return Math.min(displayData.length - 1, prev + 1);
    });
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <Box sx={{ width: '100%' }}>
          <ImageList variant="masonry" cols={cols} gap={8}>
            {displayData.map((item: PortfolioItem, index: number) => (
              <ImageListItem key={item.img}>
                <PortfolioImageItem
                  item={item}
                  isMobile={isMobile}
                  onClick={(e) => openLightbox(index, e)}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        {lightboxOpen &&
          createPortal(
            <PortfolioLightbox
              items={displayData}
              currentIndex={lightboxIndex}
              origin={lightboxOrigin}
              onClose={closeLightbox}
              onNavigate={handleLightboxNavigate}
            />,
            document.body
          )}
        
        {!customItems && (
          <div className="portfolio-button-container">
            <Button 
              text="View My Portfolio"
              onClick={handleViewPortfolio}
              variant="secondary"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
