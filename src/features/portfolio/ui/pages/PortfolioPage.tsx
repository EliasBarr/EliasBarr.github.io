import React from 'react';
import ServicesGrid from '../../../services/ui/components/ServicesGrid';
import { portfolioCardData } from '../../constants/portfolioCardData';
import '../css/PortfolioPage.css';

const PortfolioPage: React.FC = () => {
  return (
    <main className="portfolio-page">
      <div className="portfolio-page-header portfolio-page-header--main">
        <h1 className="portfolio-page-title font-heading">PORTFOLIO</h1>
      </div>
      <div className="portfolio-page-content">
        <ServicesGrid cards={portfolioCardData} />
      </div>
    </main>
  );
};

export default PortfolioPage;

