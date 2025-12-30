import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../css/ImageGallery.css';
import Button from '../../../../core/common/ui/components/Button';

interface ImageGalleryProps {
  images: string[];
  cols?: number;
  gap?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  cols = 2, 
  gap = 8 
}) => {
  const navigate = useNavigate();
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="image-gallery">
      <Box sx={{ width: '100%' }}>
        <ImageList variant="masonry" cols={cols} gap={gap}>
          {images.map((img, index) => (
            <ImageListItem key={`${img}-${index}`}>
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                loading="lazy"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  imageRendering: 'auto',
                  objectFit: 'cover',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <Button 
        text="View All"
        onClick={() => navigate('/portfolio')}
        variant="primary"
        className="promo-mobile-button"
      />
    </div>
  );
};

export default ImageGallery;

