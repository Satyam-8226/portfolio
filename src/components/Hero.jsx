import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';

const techOrbs = [
  { Icon: SiReact, label: 'React', left: '8%', top: '18%', delay: 0 },
  { Icon: SiNodedotjs, label: 'Node.js', left: '82%', top: '22%', delay: 0.4 },
  { Icon: SiMongodb, label: 'MongoDB', left: '68%', top: '72%', delay: 0.7 }
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: '50%', y: '50%' });
  const heroRaf = useRef(null);
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 90);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    return () => {
      if (heroRaf.current) cancelAnimationFrame(heroRaf.current);
    };
  }, []);

  const handleMouseMove = (event) => {
    if (heroRaf.current) cancelAnimationFrame(heroRaf.current);
    heroRaf.current = requestAnimationFrame(() => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      setCursorPos({ x: `${x}%`, y: `${y}%` });
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      style={{ '--cursor-x': cursorPos.x, '--cursor-y': cursorPos.y }}
      className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 hero-pointer pointer-events-none" />
      <div className="absolute -top-10 left-10 w-72 h-72 rounded-full bg-blue-500/15 blur-3xl animate-float opacity-70" />
      <div className="absolute top-24 right-10 w-80 h-80 rounded-full bg-purple-500/15 blur-3xl animate-float opacity-50" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl animate-float opacity-40" />

      {techOrbs.map(({ Icon, label, left, top, delay }) => (
        <motion.div
          key={label}
          className="hidden md:flex items-center justify-center absolute w-16 h-16 rounded-full border border-white/10 bg-slate-950/40 shadow-2xl shadow-violet-500/10 text-white"
          style={{ left, top }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
        >
          <Icon className="w-7 h-7" />
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Satyam</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-200 mb-2">
            {displayText}
            <span className="animate-blink">|</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto italic"
        >
          I build elegant applications with React, Node.js, and MongoDB, focused on performant experiences and crisp interfaces.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Clean architecture, thoughtful motion, and modern visuals that keep content clear and readable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(59, 130, 246, 0.35)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-3xl font-semibold transition-all duration-300 shadow-lg"
          >
            View Projects
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.04, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-500 text-white hover:border-blue-400 px-8 py-4 rounded-3xl font-semibold transition-all duration-300"
          >
            Contact Me
          </motion.button>

          <motion.a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04, backgroundColor: '#2d3748' }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-3xl font-semibold transition-all duration-300"
          >
            Resume
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 overflow-hidden leading-[0] pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-28 opacity-80">
          <path fill="rgba(15,23,42,0.97)" d="M0,32 C144,96 432,0 720,24 C1008,48 1296,96 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
