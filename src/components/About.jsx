import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Express.js', level: 80 },
    { name: 'Git & GitHub', level: 85 }
  ];

  const experiences = [
    {
      year: '2024',
      title: 'Full Stack Developer',
      company: 'Freelance',
      description: 'Building scalable web applications using React, Node.js, and MongoDB. Focus on clean code and user experience.'
    },
    {
      year: '2023',
      title: 'Frontend Developer',
      company: 'Personal Projects',
      description: 'Developed multiple React applications with modern UI/UX practices and responsive design.'
    },
    {
      year: '2022',
      title: 'Learning Journey',
      company: 'Self-Taught',
      description: 'Mastered full-stack development through online courses, building projects, and contributing to open source.'
    }
  ];

  return (
    <section id="about" className="py-28 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Get to know me</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a full stack developer with strong skills in React, Node.js, and MongoDB. I enjoy building practical applications that solve real-world problems and improve user experience.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white">Skills & Technologies</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 font-medium">{skill.name}</span>
                    <span className="text-blue-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Experience Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900"></div>

                  {/* Content */}
                  <div className="flex-1 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <span className="text-blue-400 font-semibold">{exp.year}</span>
                    </div>
                    <p className="text-purple-300 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;