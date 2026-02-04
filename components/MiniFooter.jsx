import React from 'react';

const MiniFooter = () => {
  return (
    <footer className="bg-truck-blue-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Freeman Trucking. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default MiniFooter;
