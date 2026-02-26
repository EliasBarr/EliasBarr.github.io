import weddingImage from '../../../assets/wedding_service.png';
import coupleImage from '../../../assets/family_session_service.png';
import paprikaImage from '../../../assets/product_photo_service.png';
import cupsImage from '../../../assets/cups_banner.png';
import couplePng from '../../../assets/couple.png';
import weddingPng from '../../../assets/wedding.png';
import weddingBannerPng from '../../../assets/wedding_banner_page.png';
import cupsBannerPng from '../../../assets/cups_banner.png';
import paprikaPng from '../../../assets/paprika.png';
import familySessionBannerPng from '../../../assets/family_session_banner_page.png';
import gaiCatPng from '../../../assets/about_us.png';
import type { CardModel } from '../../../core/types/cardModel';

// ==================== INTERFACES ====================

/**
 * Interface for promotional card data with pricing and detailed items
 */
export interface PromoCardData {
  title: string;
  description: string;
  descriptionItems: string[];
  price: string[];
  imagePath: string;
}

// ==================== WEDDING PACKAGES ====================

export const weddingPackages: PromoCardData[] = [
  {
    title: "Intimate Moments",
    description: "Ideal for small weddings or intimate celebrations:",
    descriptionItems: [
      "Coverage up to 3 hours (mainly reception)",
      "100 to 200 professionally edited photos",
      "Brief studio-style photo session of the couple during the reception",
      "2 Instax Polaroid prints delivered on the event day",
      "1-minute highlight trailer video",
      "Delivery via online gallery within 1 to 2 weeks"
    ],
    price: ["$300 CAD"],
    imagePath: couplePng
  },
  {
    title: "Timeless Story",
    description: "Perfect to capture all key moments of your wedding day:",
    descriptionItems: [
      "Coverage up to 6 hours (ceremony, reception, and couple session)",
      "200 to 300 professionally edited photos",
      "Studio-style photo session of the couple on the event day",
      "2 Instax Polaroid prints delivered on the event day",
      "2 to 3-minute highlight trailer video",
      "Delivery via online gallery within 1 to 2 weeks"
    ],
    price: ["$600 CAD"],
    imagePath: weddingPng
  },
  {
    title: "Eternal Love",
    description: "The full wedding experience, captured in detail:",
    descriptionItems: [
      "Full-day coverage (up to 10 hours)",
      "500 to 700 professionally edited photos",
      "Pre-wedding engagement-style session to announce the ceremony",
      "Engagement photos delivered within 1 week",
      "Coverage of bride and groom preparation, ceremony, and reception",
      "10 Instax Polaroid prints delivered on the event day",
      "2 highlight trailer videos:",
      "1-minute video from the engagement-style session",
      "2 to 3-minute video from the wedding day",
      "Delivery of wedding day photos within 1 to 2 weeks"
    ],
    price: ["$1,500 CAD"],
    imagePath: weddingBannerPng
  }
];

// ==================== PRODUCT PHOTOGRAPHY PACKAGES ====================

export const productPhotographyPackages: PromoCardData[] = [
  {
    title: "Essential Light",
    description: "For brands that need just the right amount of visual storytelling to express their essence.",
    descriptionItems: [
      "10 high-impact photos (products, ambience, or location).",
      "2 high-production creative reels.",
      "Professional editing.",
      "Delivery in high-resolution digital gallery.",
      "1 creative session, scheduled in advance."
    ],
    price: ["$300 CAD"],
    imagePath: cupsImage
  },
  {
    title: "Clear Vision",
    description: "Your brand deserves a visual identity that speaks on its own. This package elevates your content with authenticity and emotion.",
    descriptionItems: [
      "15 carefully crafted high-quality photos.",
      "2 strategic reels, ready for social media.",
      "Content adapted to various formats.",
      "Advanced professional editing.",
      "Delivery in high-resolution gallery.",
      "Up to 2 scheduled creative sessions."
    ],
    price: ["$450 CAD"],
    imagePath: cupsBannerPng
  },
  {
    title: "Creative Beacon",
    description: "The most complete Pharus Creative experience. Ideal for brands that want to impress, connect, and inspire.",
    descriptionItems: [
      "25 premium-quality, high-impact photos.",
      "3 reels with strong visual narrative.",
      "Full creative direction and personalized production.",
      "Multiformat professional editing.",
      "Private high-resolution gallery delivery.",
      "2 to 3 tailored sessions according to project goals."
    ],
    price: ["$750 CAD"],
    imagePath: paprikaPng
  }
];

// ==================== PEOPLE STUDIO PORTRAITS PACKAGES ====================

export const peopleStudioPortraitsPackages: PromoCardData[] = [
  {
    title: "Essence Portrait",
    description: "Capture the essence of your loved ones in a warm and professional setting. Ideal for: family portraits, couples, or individual sessions.",
    descriptionItems: [
      "10 professionally edited photos",
      "High-resolution digital gallery delivery",
      "1 complimentary Polaroid print as a keepsake",
      "Session for 1 to 6 people",
      "*Studio located in Granby, Quebec",
      "*Additional people can be included for an extra fee"
    ],
    price: ["$250 CAD"],
    imagePath: familySessionBannerPng
  },
  {
    title: "Timeless Portrait",
    description: "Perfect for creating a fuller visual story. Ideal for: family, couples, or solo portraits.",
    descriptionItems: [
      "20 professionally edited photos",
      "Delivery via private high-resolution online gallery",
      "1 complimentary Polaroid print",
      "Studio or outdoor location",
      "Up to 6 people included"
    ],
    price: ["$400 CAD - Studio", "$450 CAD - On-Location"],
    imagePath: couplePng
  },
  {
    title: "Legacy Portrait",
    description: "Ideal for preserving a complete and artistic memory of your special moment. Perfect for: families, couples, or individual portraits.",
    descriptionItems: [
      "30 professionally edited photos",
      "Online high-resolution gallery",
      "1 complimentary Polaroid print",
      "Studio or outdoor location in Montreal or nearby areas",
      "Up to 6 people included, with option to add more for an additional fee"
    ],
    price: ["$550 CAD - Studio", "$600 CAD - On-Location"],
    imagePath: gaiCatPng
  }
];

// ==================== SERVICE CARDS ====================

export const serviceCardData: CardModel[] = [
  {
    title: 'Weddings',
    description: 'Where every glance becomes an eternal memory',
    previewImage: weddingImage,
    link: '/services/weddings',
  },
  {
    title: 'Family Sessions, Individual or Couple Studio Portraits',
    description: 'The most valuable portrait is the one that tells your story',
    previewImage: coupleImage,
    link: '/people-studio-portraits',
  },
  {
    title: 'Product Photography',
    description: 'Let your brand speak without saying a word',
    previewImage: paprikaImage,
    link: '/product-photography',
  },
  {
    title: 'Events',
    description: 'Turning your brand into a story everyone wants to follow',
    previewImage: cupsImage,
    link: '/events',
  },
];

// ==================== AGGREGATED DATA ====================

/**
 * All packages consolidated in one object for easy access
 */
export const allPackages = {
  wedding: weddingPackages,
  productPhotography: productPhotographyPackages,
  peopleStudioPortraits: peopleStudioPortraitsPackages,
  services: serviceCardData
};

/**
 * Helper type for package categories
 */
export type PackageCategory = keyof typeof allPackages;

