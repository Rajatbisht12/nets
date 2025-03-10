
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Celebrities from "./pages/Celebrities";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import CelebrityProfile from './components/CelebrityProfile';
import { Celebrity } from './types/Types';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Login from "./components/Logins/Login";
import Signup from "./components/Logins/Signup";
import ProtectedRoute from "./components/Logins/ProtectedRoutes";
const queryClient = new QueryClient();


const mockCelebrity: Celebrity = {
  id: '123',
  name: 'Alex Johnson',
  bio: 'Alex Johnson is an award-winning actor known for roles in "The Dark Night" and "Ocean\'s Horizon." With over 15 years in the entertainment industry, Alex has worked with top directors and built a reputation for versatility and depth. Outside of acting, Alex is passionate about environmental causes and runs a non-profit focused on ocean conservation.',
  images: [
    '/api/placeholder/800/450?text=Red+Carpet+Event',
    '/api/placeholder/800/450?text=Movie+Premiere',
    '/api/placeholder/800/450?text=Award+Show',
    '/api/placeholder/800/450?text=On+Set+Photo',
    '/api/placeholder/800/450?text=Charity+Gala'
  ],
  services: [
    {
      id: 'video-1',
      type: 'VideoMessage',
      title: 'Personalized Video Message',
      description: 'Get a custom video message for yourself or a friend. Perfect for birthdays, anniversaries, or just to make someone\'s day special!',
      price: 99.99,
      duration: '30-60 seconds'
    },
    {
      id: 'dm-1',
      type: 'DM',
      title: 'Private Message Conversation',
      description: 'Have a one-on-one conversation with Alex through direct messages. Ask questions, get advice, or just chat!',
      price: 49.99
    },
    {
      id: 'meet-1',
      type: 'MeetAndGreet',
      title: 'Virtual Meet & Greet',
      description: 'Schedule a private video call with Alex. Great for fans who want a more personal experience!',
      price: 249.99,
      duration: '15 minutes'
    }
  ],
  reviews: [
    {
      id: 'rev1',
      userName: 'JenniferP',
      rating: 5,
      comment: 'Alex created an amazing birthday video for my husband whos a huge fan. He was so personal and even referenced inside jokes I mentioned. Worth every penny!',
      date: 'March 2, 2025',
      serviceType: 'VideoMessage'
    },
    {
      id: 'rev2',
      userName: 'MikeT',
      rating: 4,
      comment: 'Our meet & greet was fantastic. Alex was very engaging and spent the full time chatting with us. Only reason for 4 stars is some technical issues at the beginning.',
      date: 'February 15, 2025',
      serviceType: 'MeetAndGreet'
    },
    {
      id: 'rev3',
      userName: 'SamanthaK',
      rating: 5,
      comment: 'The DM conversation was so meaningful. Alex gave me great advice about my acting career and seemed genuinely interested.',
      date: 'January 28, 2025',
      serviceType: 'DM'
    }
  ],
  rating: 4.7
};
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/celebrities" element={<Celebrities />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/celebritiesProfile" element={ <CelebrityProfile celebrity={mockCelebrity} />} />
          <Route path="/howitworks" element={<HowItWorks/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
