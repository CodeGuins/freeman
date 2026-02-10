import React from 'react';

const ServicesSections = () => {
  const services = [
    {
      id: 'intermodal-trucking',
      title: 'Intermodal Trucking',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&h=800&fit=crop',
      description: 'As one of Chicago\'s original drayage companies, we specialize in efficient intermodal container transport from ports and rail yards throughout the Chicago region and Midwest.',
      features: [
        'Experienced in all Chicago area ports and rail terminals',
        'Real-time load tracking and scheduling software',
        'On-time pickup and delivery within 500-mile radius',
        'Hazmat certified and experienced drivers',
        'Direct communication with dispatch team'
      ]
    },
    {
      id: 'flatbed',
      title: 'Flatbed Services',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&h=800&fit=crop',
      description: 'Specialized flatbed hauling services for cargo that requires open-deck transportation, including machinery, building materials, and oversized equipment.',
      features: [
        'Various flatbed configurations available',
        'Secure load strapping and tarping',
        'Experienced with dimensional freight',
        'Permit acquisition for oversized loads',
        'Professional rigging and loading assistance'
      ]
    },
    {
      id: 'overweight-loads',
      title: 'Overweight Loads',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop',
      description: 'Expert handling of heavy and oversized shipments that exceed standard weight limits, with specialized equipment and permitting expertise.',
      features: [
        'Heavy-duty equipment for oversized cargo',
        'Route planning and permit coordination',
        'Escort vehicle arrangement when required',
        'Weight distribution analysis',
        'Compliance with federal and state regulations'
      ]
    },
    {
      id: 'transloading',
      title: 'Transloading',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=800&fit=crop',
      description: 'Seamless cargo transfer between different modes of transportation to optimize your supply chain and reduce shipping costs.',
      features: [
        'Container to truck transfers',
        'Rail to truck conversions',
        'Specialized equipment for various cargo types',
        'Reduce overall shipping costs and transit times',
        'Professional handling to minimize damage risk'
      ]
    },
    {
      id: 'freight-storage',
      title: 'Freight Storage',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop',
      description: 'Secure warehousing and container storage solutions with flexible terms to accommodate your inventory management needs.',
      features: [
        'Secure, monitored storage facilities',
        'Short and long-term storage options available',
        'Easy access to major transportation routes',
        'Container inspection and maintenance services',
        'Inventory management and reporting'
      ]
    },
    {
      id: 'chassis-rental',
      title: 'Chassis Rental',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&h=800&fit=crop',
      description: 'Comprehensive chassis rental services with a wide selection to meet all your intermodal container transportation needs.',
      features: [
        "20', 40', tri-axle, and eight-pin chassis available",
        'Well-maintained, inspected equipment',
        'Flexible rental terms and competitive rates',
        '24/7 chassis availability',
        'Roadside assistance and emergency support'
      ]
    },
  ];

  return (
    <div className="bg-white">
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-truck-blue-900/30 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="inline-block px-4 py-1 bg-truck-orange-500 text-white text-sm font-semibold rounded-full mb-4">
                  Service {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className="text-4xl font-bold text-truck-blue-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-truck-orange-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/get-a-quote"
                  className="inline-flex items-center px-6 py-3 bg-truck-orange-500 hover:bg-truck-orange-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Get a Quote
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicesSections;
