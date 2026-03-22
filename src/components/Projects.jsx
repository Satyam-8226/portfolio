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
    const [isFlipped, setIsFlipped] = useState(false);
    const [hoverPos, setHoverPos] = useState({ mx: '50%', my: '50%' });

    const onMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const mx = `${((e.clientX - rect.left) / rect.width) * 100}%`;
      const my = `${((e.clientY - rect.top) / rect.height) * 100}%`;
      setHoverPos({ mx, my });
    };

    return (
      <motion.div
        className="card-glow relative"
        style={{ '--mx': hoverPos.mx, '--my': hoverPos.my }}
        onMouseMove={onMouseMove}
        onMouseLeave={() => setHoverPos({ mx: '50%', my: '50%' })}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
      >
        <div className="cursor-glow" />
        <div className="card-overlay" />
        <div className="card-inset p-4 md:p-5 min-h-55 relative">
          <motion.div
            className="relative h-full"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            style={{ transformStyle: 'preserve-3d' }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div className="absolute inset-0 backface-hidden">
              <button
                onClick={() => onSelect(project)}
                className="w-full h-full text-left"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold">{project.category}</span>
                  <span className="text-xs text-slate-300 border border-slate-600 px-2 py-1 rounded-full">Details</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-3">{project.title}</h3>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech, tid) => (
                    <span key={tid} className="text-xs bg-slate-800/80 border border-slate-600 rounded-full px-2 py-1 text-slate-200">{tech}</span>
                  ))}
                </div>
              </button>
            </div>
            <div className="absolute inset-0 rotate-y-180 backface-hidden pr-0 md:pr-1">
              <div className="bg-slate-900/90 border border-slate-600/40 rounded-xl p-3 h-full">
                <h4 className="text-sm uppercase tracking-[0.18em] text-blue-300 font-semibold">Features</h4>
                <ul className="mt-2 list-disc list-inside text-slate-200 text-sm space-y-1">
                  {project.features.map((feature, fidx) => <li key={fidx}>{feature}</li>)}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech, tid) => (
                    <span key={tid} className="text-[11px] bg-blue-500/20 border border-blue-400/30 text-blue-200 px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <a href={project.liveDemo || '#'} target="_blank" rel="noreferrer" className="text-xs bg-blue-500 text-white px-2 py-1 rounded-md">Live Demo</a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-xs border border-slate-500 text-slate-200 px-2 py-1 rounded-md">GitHub</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
