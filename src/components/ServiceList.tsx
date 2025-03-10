import React from 'react';
import { Service } from '../types/Types';

interface ServicesListProps {
  services: Service[];
  onServiceSelect: (serviceId: string) => void;
  selectedServiceId: string | null;
}

const ServicesList: React.FC<ServicesListProps> = ({ 
  services, 
  onServiceSelect,
  selectedServiceId
}) => {
  return (
    <div className="space-y-4">
      {services.map((service) => (
        <div 
          key={service.id}
          className={`border rounded-lg p-4 cursor-pointer transition ${
            selectedServiceId === service.id 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 hover:border-blue-300'
          }`}
          onClick={() => onServiceSelect(service.id)}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{service.type}</p>
              {service.duration && (
                <p className="text-gray-600 text-sm">Duration: {service.duration}</p>
              )}
            </div>
            <div className="text-lg font-bold text-blue-600">
              ${service.price.toFixed(2)}
            </div>
          </div>
          <p className="mt-2 text-gray-700">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;