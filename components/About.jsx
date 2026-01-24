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

  const team = [
    {
      name: 'Jonathan Freeman',
      role: 'Sales',
      image: '/assets/team/jonathan-placeholder.jpg',
    },
    {
      name: 'Lou Perales',
      role: 'Operations/Dispatch',
      image: '/assets/team/lou-placeholder.jpg',
    },
    {
      name: 'Juan Vargas',
      role: 'Operations/Dispatch',
      image: '/assets/team/juan-placeholder.jpg',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-truck-blue-900 mb-4">
            About Freeman Trucking
          </h2>
          <div className="w-24 h-1 bg-truck-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving the Chicago Region and Midwest with excellence in logistics since 1999
          </p>
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

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-truck-blue-900 mb-12 text-center">
            Meet Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x500/1e293b/ffffff?text=' + member.name.split(' ').map(n => n[0]).join('');
                    }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-truck-blue-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-truck-orange-500 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
