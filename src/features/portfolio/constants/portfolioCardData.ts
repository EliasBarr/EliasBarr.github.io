
import { PORTFOLIO_IMAGE_PATHS, PORTFOLIO_MAIN_IMAGES } from './portfolioAssets';
import type { CardModel } from '../../../core/types/cardModel';




export const portfolioCardData: CardModel[] = [
  {
    title: 'Weddings',
    previewImage: PORTFOLIO_MAIN_IMAGES.weddings,
    description: 'Where every glance becomes an eternal memory',
    link: '/wedding-portfolio',
    gallery: [...PORTFOLIO_IMAGE_PATHS.weddings],
  },
  {
    title: 'Family Sessions, Individual or Couple Studio Portraits',
    previewImage: PORTFOLIO_MAIN_IMAGES.family,
    description: 'The most valuable portrait is the one that tells your story',
    link: '/family-portfolio',
    gallery: [...PORTFOLIO_IMAGE_PATHS.family],
  },
  {
    title: 'Product Photography',
    previewImage: PORTFOLIO_MAIN_IMAGES.products,
    description: 'Let your brand speak without saying a word',
    link: '/product-portfolio',
    gallery: [...PORTFOLIO_IMAGE_PATHS.products],
  },
  {
    title: 'Events',
    previewImage: PORTFOLIO_MAIN_IMAGES.events,
    description: 'To be determined',
    link: '/event-portfolio',
    gallery: [...PORTFOLIO_IMAGE_PATHS.events],
  },
];
