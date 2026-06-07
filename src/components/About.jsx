import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
updatedResume
const About = () => {
  const techStack = {
    'Frontend': ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
    'Backend': ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Socket.IO'],
    'Database': ['MongoDB'],
    'Programming & Problem Solving': ['Java', 'Data Structures & Algorithms'],
    'Tools': ['Git', 'GitHub', 'Postman', 'VS Code']
  };

  const experiences = [
    {
      year: '2026',
      title: 'QuickHire AI',
      company: 'Full Stack Recruitment Platform',
      description:
        'Built an AI-assisted recruitment platform enabling recruiters to post jobs, manage candidates, review resumes, and streamline hiring workflows using React, Node.js, Express.js, MongoDB, and modern web technologies.'
    },
    {
      year: '2025',
      title: 'RideSaathi',
      company: 'Full Stack Ride Sharing Platform',
      description:
        'Developed a ride-sharing application connecting drivers and passengers through route-based matching, authentication, real-time tracking, and scalable backend architecture.'
    },
    {
      year: 'Present',
      title: 'B.Tech Student',
      company: 'MNNIT Allahabad',
      description:
        'Pursuing B.Tech while actively building real-world software projects, strengthening Data Structures & Algorithms, and preparing for Software Engineering roles.'
    }
  ];

  return (
    <SectionWrapper id="about" className="py-28 bg-linear-to-b from-slate-950 to-slate-900 relative">
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
            Pre-Final Year B.Tech Student | Full Stack Developer | DSA Enthusiast
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
            <h3 className="text-3xl font-bold text-white">
              Get to know me
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Satyam Pandey, a pre-final year B.Tech student at MNNIT Allahabad
              and a passionate Full Stack Developer. I enjoy building scalable web
              applications that solve real-world problems while delivering seamless
              user experiences.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My primary expertise lies in the MERN stack, where I have developed
              end-to-end applications such as RideSaathi, a ride-sharing platform
              with real-time features, and QuickHire AI, a recruitment platform
              designed to simplify hiring workflows for recruiters and candidates.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Alongside development, I actively practice Data Structures and
              Algorithms to strengthen my problem-solving abilities and software
              engineering fundamentals. I am continuously exploring system design,
              backend architecture, and modern technologies to build production-ready
              applications.
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
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Focused on building scalable full-stack applications, solving complex problems with DSA, and continuously exploring modern software engineering practices.
            </p>

            <div className="space-y-6">
              {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="space-y-3"
                >
                  <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                        className="px-3 py-1.5 rounded-full bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-blue-400/30 text-gray-200 text-xs font-medium hover:border-blue-400/60 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
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
          <h3 className="text-3xl font-bold text-white text-center mb-12">Development Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-purple-500"></div>

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
                  <div className="relative z-10 w-4 h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900"></div>

                  {/* Content */}
                  <div className="flex-1 bg-linear-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
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
    </SectionWrapper>
  );
};

export default About;