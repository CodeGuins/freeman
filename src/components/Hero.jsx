import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-truck-blue-900 h-screen flex items-center justify-center">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-truck-blue-900/90 to-truck-blue-800/70 z-10"></div>
      
      {/* Placeholder background image - using a trucking-themed pattern */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" 
           style={{
             backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&h=1080&fit=crop')`,
           }}>
      </div>

      {/* Hero content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Delivering Excellence
          <span className="block text-truck-orange-500 mt-2">
            Across America
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Your trusted partner in freight logistics.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#quote"
            className="bg-truck-orange-500 hover:bg-truck-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-truck-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 w-full sm:w-auto"
          >
            Our Services
          </a>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-600">
          <div>
            <div className="text-4xl font-bold text-truck-orange-500 mb-2">25+</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-truck-orange-500 mb-2">500+</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">Trucks in Fleet</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-truck-orange-500 mb-2">50K+</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">Deliveries Made</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <a href="#services" className="animate-bounce">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
