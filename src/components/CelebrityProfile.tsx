import React, { useState } from 'react';
import { Celebrity } from '../types/Types';
import ImageGallery from './ImageGallery';
import ServicesList from './ServiceList';
import ReviewsSection from './ReviewSection';
import BookingForm from './BookingForm';

interface CelebrityProfileProps {
  celebrity: Celebrity;
}

const CelebrityProfile: React.FC<CelebrityProfileProps> = ({ celebrity }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  
  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };
  
  const selectedService = celebrity.services.find(service => service.id === selectedServiceId);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative h-64 bg-gradient-to-r from-purple-600 to-blue-500">
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-4xl font-bold">{celebrity.name}</h1>
            <div className="flex items-center mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.round(celebrity.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2">{celebrity.rating.toFixed(1)} ({celebrity.reviews.length} reviews)</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
          {/* Bio and Gallery Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-gray-700 mb-6">{celebrity.bio}</p>
            
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <ImageGallery images={celebrity.images} />
            
            {celebrity.reviews.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mt-8 mb-4">Reviews</h2>
                <ReviewsSection reviews={celebrity.reviews} />
              </>
            )}
          </div>
          
          {/* Services and Booking Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <ServicesList 
              services={celebrity.services} 
              onServiceSelect={handleServiceSelect}
              selectedServiceId={selectedServiceId}
            />
            
            {selectedService && (
              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Book this service</h2>
                <BookingForm 
                  service={selectedService}
                  celebrityId={celebrity.id}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelebrityProfile;
