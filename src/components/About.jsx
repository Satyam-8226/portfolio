import React from 'react';

const About = () => {
  const skills = {
    frontend: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js'],
    database: ['MongoDB'],
    other: ['Git & GitHub', 'REST APIs', 'Problem Solving (DSA)']
  };

  return (
    <section id="about" className="py-28 bg-gray-900/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="animate-fade-in space-y-6">
            <h3 className="text-3xl font-bold text-white">Get to know me</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a full stack developer with strong skills in React, Node.js, and MongoDB. I enjoy building practical applications that solve real-world problems and improve user experience.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="animate-fade-in space-y-8">
            <h3 className="text-3xl font-bold text-white">Skills & Technologies</h3>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold text-blue-300 mb-4 capitalize flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  {category}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {skillList.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 border border-gray-700 text-gray-200 px-4 py-3 rounded-lg text-center hover:border-blue-400 hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-105 cursor-default"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
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