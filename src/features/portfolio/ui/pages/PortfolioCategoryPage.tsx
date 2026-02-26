import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PortfolioSection from '../../../home/ui/components/PortfolioSection';
import { portfolioCardData } from '../../constants/portfolioCardData';
import '../css/PortfolioPage.css';

const PortfolioCategoryPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const card = portfolioCardData.find((c) => c.link === pathname);

  if (!card || !card.gallery?.length) {
    navigate('/portfolio', { replace: true });
    return null;
  }

  const customItems = card.gallery.map((img, i) => ({
    img,
    title: `${card.title} ${i + 1}`,
  }));

  return (
    <main className="portfolio-page">
      <div className="portfolio-page-header">
        <h1 className="portfolio-page-title font-heading">{card.title.toUpperCase()}</h1>
      </div>
      <div className="portfolio-page-content">
        <PortfolioSection customItems={customItems} />
      </div>
    </main>
  );
};

export default PortfolioCategoryPage;
