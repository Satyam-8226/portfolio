import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-950 via-gray-900 to-gray-900 relative overflow-hidden pt-20">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-80 h-80 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl opacity-40"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in leading-tight">
          Hi, I'm <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Satyam</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 mb-8">
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto italic">
          "I build scalable web applications and solve real-world problems using modern technologies."
        </p>
        <p className="text-base md:text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
          I am a full stack developer with strong skills in React, Node.js, and MongoDB. I enjoy building practical applications that solve real-world problems and improve user experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg flex items-center gap-2"
          >
            <span>View Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-gray-400 text-white hover:border-blue-400 hover:bg-blue-600/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </button>
          <a
            href="#"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;