import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Satyam</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 mb-2">
            {displayText}
            <span className="animate-blink">|</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto italic"
        >
          "I build scalable web applications and solve real-world problems using modern technologies."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base md:text-lg text-gray-500 mb-12 max-w-3xl mx-auto"
        >
          I am a full stack developer with strong skills in React, Node.js, and MongoDB. I enjoy building practical applications that solve real-world problems and improve user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            <span>View Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-400 text-white hover:border-blue-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Contact Me
          </motion.button>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;