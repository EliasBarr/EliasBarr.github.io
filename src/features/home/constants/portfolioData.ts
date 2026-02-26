import { ALL_HOME_IMAGE_PATHS } from './homeAssets';

export interface PortfolioItem {
  img: string;
  title: string;
}

/** Imágenes del portfolio mostrado en la home (preview); source: assets/home. */
export const PORTFOLIO_DATA: PortfolioItem[] = ALL_HOME_IMAGE_PATHS.map((img, i) => ({
  img,
  title: `Portfolio ${i + 1}`,
}));
