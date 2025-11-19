import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import '../css/PortfolioSection.css';

interface PortfolioSectionProps {
  title?: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({}) => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <Box sx={{ width: '100%' }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {PORTFOLIO_DATA.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    imageRendering: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </section>
  );
};

export default PortfolioSection;
