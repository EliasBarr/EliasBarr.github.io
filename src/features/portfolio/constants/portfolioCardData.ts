
import weddingImage from '../../../assets/wedding_service.png';
import coupleImage from '../../../assets/family_session_service.png';
import paprikaImage from '../../../assets/product_photo_service.png';
import eventsImage from '../../../assets/events.png';
import { PORTFOLIO_IMAGE_PATHS } from './portfolioAssets';
import type { CardModel } from '../../../core/types/cardModel';




export const portfolioCardData: CardModel[] = [
  {
    title: 'Weddings',
    imagePath: weddingImage,
    description: 'Where every glance becomes an eternal memory',
    link: '/wedding-portfolio',
    images: [...PORTFOLIO_IMAGE_PATHS.weddings],
  },
  {
    title: 'Family Sessions, Individual or Couple Studio Portraits',
    imagePath: coupleImage,
    description: 'The most valuable portrait is the one that tells your story',
    link: '/family-portfolio',
    images: [...PORTFOLIO_IMAGE_PATHS.family],
  },
  {
    title: 'Product Photography',
    imagePath: paprikaImage,
    description: 'Let your brand speak without saying a word',
    link: '/product-portfolio',
    images: [...PORTFOLIO_IMAGE_PATHS.products],
  },
  {
    title: 'Events',
    imagePath: eventsImage,
    description: 'To be determined',
    link: '/event-portfolio',
    images: [...PORTFOLIO_IMAGE_PATHS.events],
  },
];
