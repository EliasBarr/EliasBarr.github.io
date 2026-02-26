import { ALL_PORTFOLIO_IMAGE_PATHS } from '../../portfolio/constants/portfolioAssets';

export interface PortfolioItem {
  img: string;
  title: string;
}

/** Portfolio images for home preview and legacy use; source: assets/portfolio (events, family, products, weddings). */
export const PORTFOLIO_DATA: PortfolioItem[] = ALL_PORTFOLIO_IMAGE_PATHS.map((img, i) => ({
  img,
  title: `Portfolio ${i + 1}`,
}));
