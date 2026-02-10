import React from 'react';
import Link from 'next/link';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Intermodal Trucking',
      slug: 'intermodal-trucking',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop',
      description: 'Efficient container transport from ports and rail yards'
    },
    {
      title: 'Flatbed',
      slug: 'flatbed',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop',
      description: 'Specialized flatbed hauling for oversized cargo'
    },
    {
      title: 'Overweight Loads',
      slug: 'overweight-loads',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      description: 'Expert handling of heavy and oversized shipments'
    },
    {
      title: 'Transloading',
      slug: 'transloading',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop',
      description: 'Seamless cargo transfer between transport modes'
    },
    {
      title: 'Freight Storage',
      slug: 'freight-storage',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      description: 'Secure warehousing and container storage'
    },
    {
      title: 'Chassis Rental',
      slug: 'chassis-rental',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop',
      description: "20', 40', tri-axle, and eight-pin chassis available"
    },
  ];

  return (
    <section id="services" className="pb-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-truck-blue-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-truck-orange-500 mx-auto mb-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={`/services#${service.slug}`}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-truck-blue-900 via-truck-blue-900/70 to-transparent opacity-90"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-truck-orange-500 font-semibold group-hover:text-white transition-colors duration-300">
                    <span className="text-sm">View details</span>
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
