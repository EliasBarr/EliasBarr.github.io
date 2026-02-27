import type { CardModel } from '../../../core/types/cardModel';
import weddingImage from '../../../assets/wedding_service.png';
import coupleImage from '../../../assets/family_session_service.png';
import paprikaImage from '../../../assets/product_photo_service.png';
import eventsImage from '../../../assets/events.png'; 

export const serviceCardData: CardModel[] = [
  {
    title: 'Weddings',
    previewImage: weddingImage,
    description: 'Where every glance becomes an eternal memory',
    link: '/services/weddings',
  },
  {
    title: 'Family Sessions, Individual or Couple Studio Portraits',
    previewImage: coupleImage,
    description: 'The most valuable portrait is the one that tells your story',
    link: '/people-studio-portraits',
  },
  {
    title: 'Product Photography',
    previewImage: paprikaImage,
    description: 'Let your brand speak without saying a word',
    link: '/product-photography',
  },
  {
    title: 'Events',
    previewImage: eventsImage,
    description: 'To be determined',
    link: '/events',
  }
];
