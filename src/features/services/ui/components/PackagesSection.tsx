import React from 'react';
import PromoCard from './PromoCard';
import type { PromoCardData } from '../interfaces/promoCard';
import { useIsDesktop } from '../../../../core/common/hooks/useMediaQuery';
import PortfolioSection from '../../../home/ui/components/PortfolioSection';
import type { PortfolioItem } from '../../../home/constants/portfolioData';
import '../css/PackagesSection.css';

interface PackagesSectionProps {
  packages: PromoCardData[];
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ packages }) => {
  const isDesktop = useIsDesktop();

  const portfolioItems: PortfolioItem[] = packages.map((pkg) => ({
    img: pkg.imagePath,
    title: pkg.title,
  }));

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

      {!isDesktop && (
        <PortfolioSection customItems={portfolioItems} isPreview={false} />
      )}
    </div>
  );
};

export default PackagesSection;

