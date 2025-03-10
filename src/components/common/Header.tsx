import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-purple-600 font-bold text-2xl">Celebrity Connect</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/celebrities" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Celebrities
            </Link>
            <Link to="/howitworks" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              How It Works
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Pricing
            </Link>
            <button className="btn-outline">
              <Link to="/signup">SignUp</Link>
            </button>
            <button className="btn-primary">
              <Link to="/login">Login</Link>
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            <Link 
              to="/celebrities" 
              className="block text-gray-600 hover:text-purple-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Celebrities
            </Link>
            <Link 
              to="/howitworks" 
              className="block text-gray-600 hover:text-purple-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/celebritiesProfile" 
              className="block text-gray-600 hover:text-purple-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Celebrity-Profiles
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <button className="btn-outline w-full">Sign Up</button>
              <button className="btn-primary w-full">Login</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;