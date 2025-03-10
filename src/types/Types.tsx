export interface Celebrity {
    id: string;
    name: string;
    bio: string;
    images: string[];
    services: Service[];
    reviews: Review[];
    rating: number;
  }
  
  export interface Service {
    id: string;
    type: 'VideoMessage' | 'DM' | 'MeetAndGreet';
    title: string;
    description: string;
    price: number;
    duration?: string;
  }
  
  export interface Review {
    id: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
    serviceType: 'VideoMessage' | 'DM' | 'MeetAndGreet';
  }
  
  export interface BookingFormData {
    serviceId: string;
    serviceType: 'VideoMessage' | 'DM' | 'MeetAndGreet';
    personalMessage: string;
    dateTime?: string;
    specialInstructions?: string;
  }