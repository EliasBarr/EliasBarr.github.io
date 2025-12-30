import React from 'react';
import PromoCard from './PromoCard';
import ImageGallery from './ImageGallery';
import type { PromoCardData } from '../interfaces/promoCard';
import { useIsDesktop } from '../../../../core/common/hooks/useMediaQuery';
import '../css/PackagesSection.css';

interface PackagesSectionProps {
  packages: PromoCardData[];
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ packages }) => {
  const isDesktop = useIsDesktop();

  const allImages = packages.map(pkg => pkg.imagePath);

  return (
    <div className="packages-section">
      {packages.map((packageData, index) => (
        <PromoCard
          key={index}
          data={packageData}
          isEven={index % 2 === 0}
          isLast={index === packages.length - 1}
        />
      ))}
      

      {!isDesktop && <ImageGallery images={allImages} cols={2} gap={8} />}
    </div>
  );
};

export default PackagesSection;

