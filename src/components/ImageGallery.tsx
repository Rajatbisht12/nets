import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
        <img 
          src={images[activeImage] || "/api/placeholder/800/450"} 
          alt="Celebrity" 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden cursor-pointer ${
              index === activeImage ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setActiveImage(index)}
          >
            <img 
              src={image || "/api/placeholder/150/150"} 
              alt={`Thumbnail ${index + 1}`} 
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
