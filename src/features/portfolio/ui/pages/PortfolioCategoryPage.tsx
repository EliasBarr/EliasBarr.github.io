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

  const handleBack = () => navigate('/portfolio');

  return (
    <main className="portfolio-page">
      <div className="portfolio-page-header">
        <button
          type="button"
          onClick={handleBack}
          className="portfolio-page-back"
          aria-label="Volver al portfolio"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="portfolio-page-title font-heading">{card.title.toUpperCase()}</h1>
      </div>
      <div className="portfolio-page-content">
        <PortfolioSection customItems={customItems} />
      </div>
    </main>
  );
};

export default PortfolioCategoryPage;
