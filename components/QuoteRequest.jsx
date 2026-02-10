import React, { useState } from 'react';

const QuoteRequest = () => {
  const [formData, setFormData] = useState({
    // Contact Information
    fullName: '',
    company: '',
    email: '',
    phone: '',

    // Shipment Details
    pickupLocation: '',
    deliveryLocation: '',
    containerSize: '',
    containerType: '',
    weight: '',
    cargoDescription: '',
    pickupDate: '',
    specialRequirements: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // TODO: Replace with actual form submission logic
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);
      setSubmitStatus('success');

      // Reset form
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        pickupLocation: '',
        deliveryLocation: '',
        containerSize: '',
        containerType: '',
        weight: '',
        cargoDescription: '',
        pickupDate: '',
        specialRequirements: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerSizes = [
    '20\' Standard',
    '40\' Standard',
    '40\' High Cube',
    '45\' High Cube',
    '20\' Refrigerated',
    '40\' Refrigerated',
    'Other'
  ];

  const containerTypes = [
    'Dry Van',
    'Refrigerated',
    'Flatbed',
    'Open Top',
    'Tank',
    'Other'
  ];

  return (
    <div className="bg-gray-50 py-16" id="quote">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-truck-blue-900 mb-4">
            Request a Quote
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with a competitive quote within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information Section */}
            <div>
              <h3 className="text-xl font-semibold text-truck-blue-900 mb-4 pb-2 border-b-2 border-truck-orange-500">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truck-orange-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truck-orange-500 focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truck-orange-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truck-orange-500 focus:border-transparent transition-all"
                    placeholder="(773) 555-0100"
                  />
                </div>
              </div>
            </div>

            {/* Shipment Details Section */}
            <div>
              <h3 className="text-xl font-semibold text-truck-blue-900 mb-4 pb-2 border-b-2 border-truck-orange-500">
                Shipment Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    required
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truck-orange-500 focus:border-transparent transition-all"
                    placeholder="Port of Chicago, IL"
                  />
                </div>

                <div>
                  <label htmlFor="deliveryLocation" className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="deliveryLocation"
                    name="deliveryLocation"
                    required
                    value={formData.deliveryLocation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truck-orange-500 focus:border-transparent transition-all"
                    placeholder="City, State or ZIP"
                  />
                </div>

                <div>
                  <label htmlFor="containerSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Container Size <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="containerSize"
                    name="containerSize"
                    required
                    value={formData.containerSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truck-orange-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a size</option>
                    {containerSizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="containerType" className="block text-sm font-medium text-gray-700 mb-2">
                    Container Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="containerType"
                    name="containerType"
                    required
                    value={formData.containerType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truck-orange-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a type</option>
                    {containerTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Weight (lbs)
                  </label>
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truck-orange-500 focus:border-transparent transition-all"
                    placeholder="25000"
                  />
                </div>

                <div>
                  <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Pickup Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                    required
                    value={formData.pickupDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truck-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="cargoDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Cargo Description <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cargoDescription"
                    name="cargoDescription"
                    required
                    value={formData.cargoDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truck-orange-500 focus:border-transparent transition-all"
                    placeholder="e.g., Electronics, Food Products, Industrial Equipment"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requirements or Notes
                  </label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    rows="4"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truck-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="Any special handling requirements, time constraints, or additional information..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-truck-orange-500 hover:bg-truck-orange-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Request Quote'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Thank you! Your quote request has been submitted successfully. We'll contact you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">
                    There was an error submitting your request. Please try again or call us at (773) 774-4100.
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Contact info below form */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Need immediate assistance?{' '}
            <a href="tel:+17737744100" className="text-truck-orange-500 hover:text-truck-orange-600 font-semibold">
              Call us at (773) 774-4100
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;
