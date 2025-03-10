import React, { useState } from 'react';
import { Service, BookingFormData } from '../types/types';

interface BookingFormProps {
  service: Service;
  celebrityId: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ service, celebrityId }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: service.id,
    serviceType: service.type,
    personalMessage: '',
    dateTime: service.type === 'MeetAndGreet' ? '' : undefined,
    specialInstructions: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      console.log('Booking submitted:', { celebrityId, ...formData });
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1000);
  };
  
  if (formSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <h3 className="text-lg font-bold text-green-800">Booking Confirmed!</h3>
        <p className="text-green-700 mt-1">Thank you for your booking. We'll be in touch soon.</p>
        <button 
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          onClick={() => setFormSubmitted(false)}
        >
          Book Another Service
        </button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Personal Message *
        </label>
        <textarea
          name="personalMessage"
          value={formData.personalMessage}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder={Tell ${service.type === 'VideoMessage' ? 'us what you want in your video' : service.type === 'DM' ? 'us what you want to discuss' : 'us about your meet & greet expectations'}}
        ></textarea>
      </div>
      
      {service.type === 'MeetAndGreet' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Date and Time *
          </label>
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime || ''}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Special Instructions (Optional)
        </label>
        <textarea
          name="specialInstructions"
          value={formData.specialInstructions || ''}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Any special requests or details..."
        ></textarea>
      </div>
      
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-md font-medium text-white ${
            isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
          } transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          {isSubmitting ? 'Processing...' : Book Now - $${service.price.toFixed(2)}}
        </button>
      </div>
    </form>
  );
};

export default BookingForm;