import React from 'react';

const About = () => {
  const services = [
    'Intermodal trucking',
    'Flatbed',
    'Overweight loads',
    'Transloading',
    'Freight storage',
    'Chassis rental'
  ];

  return (
    <section id="about" className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-truck-blue-900 mb-4">
            About Freeman Trucking
          </h2>
          <div className="w-24 h-1 bg-truck-orange-500 mx-auto"></div>
        </div>

        {/* Heritage Section with Old Photo */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-truck-blue-900 mb-6">Our Heritage</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                As one of Chicago's original drayage companies, Jack Freeman Trucking has been a cornerstone of the region's logistics industry for decades. Our deep roots in the Chicago area give us unparalleled knowledge of local operations and infrastructure.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Through our investment in technology, we have developed a load-tracking program that ensures customers get as much time as possible to schedule their shipments. With our scheduling software, we manage the most complex customer needs to ensure they're moving the right product at the right time in the most cost-efficient manner.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Over the years, our service area has grown to a 500 mile radius of Chicago, serving the entire Midwest region with the same dedication and expertise that has defined us from the beginning.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/assets/OldSchoolPhoto.jpg"
                  alt="Freeman Trucking - Historic Photo"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-truck-blue-900 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
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
                  <span className="text-lg text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-truck-blue-900 mb-6">Contact Information</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <svg
                  className="h-6 w-6 text-truck-orange-500 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold">Address</p>
                  <p>4948 S Western Ave</p>
                  <p>Chicago, IL 60609</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="h-6 w-6 text-truck-orange-500 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>(773) 774-4100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
