import React from 'react';
import { SiLeetcode } from 'react-icons/si';
import { FiCode, FiLinkedin, FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

const Footer = () => {
  const highlightProjects = projects
    .slice()
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .slice(0, 2);

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-slate-300 font-semibold">Developer Profiles</p>
            <p className="mt-1 text-slate-400 text-sm">Follow my coding journey and open-source contributions.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="https://github.com/Satyam-8226" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-400 text-slate-200 transition">
                <FiGithub className="w-4 h-4" /> GitHub
              </a>
              <a href="https://leetcode.com/u/Satyam-8226/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 hover:border-indigo-400 text-slate-200 transition">
                <SiLeetcode className="w-4 h-4" /> LeetCode
              </a>
              <a href="https://codolio.com/profile/Satyam-8226" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 hover:border-fuchsia-400 text-slate-200 transition">
                <FiCode className="w-4 h-4" /> Codolio
              </a>
              <a href="https://linkedin.com/in/satyam8226" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-400 text-slate-200 transition">
                <FiLinkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-gray-700 rounded-3xl p-6">
            <p className="text-slate-300 font-semibold uppercase tracking-[.2em] text-xs">Highlighted Projects</p>
            <div className="mt-5 space-y-4">
              {highlightProjects.map((project) => (
                <a
                  key={project.id}
                  // href={project.liveDemo || project.githubLink}
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-slate-800 bg-slate-950/80 p-4 transition hover:border-blue-400 hover:bg-slate-900"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-white font-semibold">{project.title}</p>
                      <p className="text-slate-400 text-sm mt-1">{project.category}</p>
                    </div>
                    <span className="text-xs uppercase tracking-[.18em] text-blue-300">View</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-4 text-center text-slate-400 text-xs">
          © {new Date().getFullYear()} Satyam Pandey. Built with React + Tailwind.
        </div>
      </div>
    </footer>
  );
};

export default Footer;