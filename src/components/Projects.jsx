import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import FeaturedProject from './FeaturedProject';

const categories = ['All', 'Full Stack', 'AI/ML', 'Frontend'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const featuredProject = projects.find((project) => project.featured) || projects[0];

  const ProjectCard = ({ project, index, onSelect }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        whileHover={{ y: -10 }}
      >
        <motion.div
        className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-xl p-6 h-full hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative"
        whileHover={{ boxShadow: '0 20px 40px rgba(59, 130, 246, 0.12)' }}
      >
          {/* Decorative animated ring */}
          <div className="pointer-events-none absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spinSlow z-0" />

          {/* Torch-style glow effect */}
          <div className="torch-spotlight rounded-xl" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
              </div>
              <motion.button
                onClick={() => onSelect(project)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-blue-400 transition-colors p-2 relative z-20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </motion.button>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech, tid) => (
                  <motion.span
                    key={tid}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + tid * 0.1 }}
                    className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-200 px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs text-slate-400 px-2 py-1">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 relative z-20">
              <motion.a
                href={project.liveDemo || '#'}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-medium text-sm text-center transition-all duration-300 pointer-events-auto"
              >
                Live Demo
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 border border-slate-600 text-slate-200 hover:border-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg font-medium text-sm text-center transition-all duration-300 pointer-events-auto"
              >
                GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Hover overlay effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-28 bg-slate-950/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white">Projects</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-3">Explore production-ready applications, architecture decisions, and modern engineering practices.</p>
        </div>

        <FeaturedProject project={featuredProject} />

        <div className="bg-slate-900/40 p-3 rounded-2xl border border-slate-700">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <motion.div
            className="w-full max-w-3xl rounded-3xl border border-slate-600 bg-slate-900 p-4 md:p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs uppercase text-blue-300 tracking-wider font-semibold">Project Modal</p>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-slate-600 text-slate-200 px-2 py-1 text-base hover:border-blue-400"
              >
                ✕
              </button>
            </div>
            <p className="mt-3 text-slate-300">{selectedProject.description}</p>

            <div className="mt-4 grid md:grid-cols-2 gap-3">
              <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-xl">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-blue-300">Features</h4>
                <ul className="mt-2 text-slate-200 text-sm list-disc list-inside space-y-1">
                  {selectedProject.features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-xl">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-blue-300">Tech Stack</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => <span key={i} className="text-xs bg-blue-500/20 border border-blue-400/20 rounded-full px-2 py-1 text-blue-200">{tech}</span>)}
                </div>
              </div>
            </div>

            {selectedProject.iframeSrc && (
              <div className="mt-4 rounded-xl border border-slate-700 overflow-hidden">
                <iframe src={selectedProject.iframeSrc} title="Live Preview" className="w-full h-56 md:h-72" loading="lazy" />
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              <a href={selectedProject.liveDemo || '#'} target="_blank" rel="noreferrer" className="rounded-lg bg-blue-500 text-white px-3 py-2 text-xs font-medium">Live Demo</a>
              <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-600 text-slate-200 px-3 py-2 text-xs font-medium">View Code</a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
