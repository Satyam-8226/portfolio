import React, { Suspense, useEffect, useMemo, useState } from 'react';

const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const GitHubStats = React.lazy(() => import('./components/GitHubStats'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme === 'dark';
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const bgClass = useMemo(
    () =>
      darkMode
        ? 'bg-slate-950 text-slate-100'
        : 'bg-slate-100 text-slate-900',
    [darkMode]
  );

  return (
    <div className={`${bgClass} min-h-screen overflow-x-hidden transition-colors duration-300`}>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <GitHubStats />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;