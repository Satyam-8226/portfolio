import React, { useState } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0">
            <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Satyam Pandey</h1>
          </div>
          <div className="hidden md:flex md:items-center md:gap-3">
            <div className="ml-10 flex items-baseline space-x-2 md:space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-400 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-700/50"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-700/50"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-400 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-700/50"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-700/50"
              >
                Contact
              </button>
              <a
                href="/resume1.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Resume
              </a>
            </div>

            {/* DARK MODE BUTTON */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="text-gray-300 border border-gray-500 hover:border-blue-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="text-gray-300 border border-gray-500 hover:border-blue-400 px-2 py-1 rounded-lg text-sm font-medium transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 bg-opacity-90">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 bg-blue-600/70 hover:bg-blue-500/80"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;