import React from 'react';
import { TitlePageCard } from '../../../../core/common/ui/components';
import '../css/ProductPhotographyPage.css';
import PromoCard from '../components/PromoCard';
import { productPhotographyPackages } from '../../constants/productPhotographyPackages';

const ProductPhotographyPage: React.FC = () => {
  return (
    <div className="product-photography-page">
      <div className="product-photography-banner">
        <TitlePageCard
          assetPath="/src/assets/product_banner.png"
          title="PRODUCT PHOTOGRAPHY"
          alt="Product photography banner with pastries"
        />
      </div>

      <div className="product-photography-content">
        {productPhotographyPackages.map((packageData, index) => (
          <PromoCard
            key={index}
            data={packageData}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPhotographyPage;
