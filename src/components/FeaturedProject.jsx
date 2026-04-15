import React from 'react';

const FeaturedProject = ({ project }) => {
  if (!project) return null;

  return (
    <section className="glass-panel border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
      <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold uppercase tracking-wide">
            ⭐ Featured
          </div>
          <h3 className="mt-4 text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
          <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">{project.description}</p>

          <div className="mt-5">
            <h4 className="text-sm text-blue-200 uppercase tracking-wide font-semibold">Core Features</h4>
            <ul className="list-disc list-inside text-gray-200 mt-2 space-y-1">
              {project.features?.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h4 className="text-sm text-blue-200 uppercase tracking-wide font-semibold">Tech Stack</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.techStack?.map((tech, idx) => (
                <span key={idx} className="text-xs font-medium px-3 py-1 rounded-full bg-slate-700/60 border border-slate-500 text-slate-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.liveDemo || '#'}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm border border-transparent transition hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
            >
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-4 py-2 border border-slate-500 text-slate-100 font-semibold text-sm bg-slate-800/70 transition hover:bg-slate-700 hover:border-blue-400"
            >
              View Code
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
          <div className="h-40 md:h-[260px] rounded-xl border border-blue-500/20 bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-slate-900 flex items-center justify-center text-center text-slate-200">
            <div>
              <div className="text-sm uppercase tracking-wide text-blue-200">Project at a Glance</div>
              <div className="mt-3 text-xs text-slate-300 leading-relaxed">RideSaathi is a robust full-stack system built with modern APIs, live updates, and secure user flows.</div>
            </div>
          </div>
          <div className="mt-4 text-xs text-slate-300">
            <p className="mb-2">Category: <span className="text-blue-300">{project.category}</span></p>
            <p>Release: <span className="text-blue-300">Q1 2026</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
