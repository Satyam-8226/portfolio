import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Satyam Pandey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;