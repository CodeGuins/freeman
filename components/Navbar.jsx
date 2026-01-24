import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-transparent backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center">
              <img
                src="/assets/jack_freeman_logo.png"
                alt="Freeman Trucking"
                className={`h-12 w-auto transition-all duration-300 ${
                  isScrolled ? 'brightness-0 invert' : ''
                }`}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-white hover:text-truck-orange-500'
                    : 'text-truck-blue-900 hover:text-truck-orange-500'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#quote"
              className="bg-truck-orange-500 hover:bg-truck-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-truck-orange-500 ${
                isScrolled ? 'text-white' : 'text-truck-blue-900'
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={`md:hidden ${
          isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-truck-blue-900 hover:text-truck-orange-500 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#quote"
              className="bg-truck-orange-500 hover:bg-truck-orange-600 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
