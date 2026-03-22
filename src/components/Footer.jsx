import React from 'react';
import { SiLeetcode } from 'react-icons/si';
import { FiCode, FiLinkedin, FiGithub } from 'react-icons/fi';

const stats = [
  { label: 'Problems Solved', value: '420+', color: 'bg-violet-500/20 border-violet-400/30', icon: '⌨️' },
  { label: 'GitHub Repos', value: '24', color: 'bg-blue-500/20 border-blue-400/30', icon: '🐙' },
  { label: 'Contributions', value: '1.2k', color: 'bg-emerald-500/20 border-emerald-400/30', icon: '🚀' },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3 items-start">
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

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {stats.map((item) => (
                <div key={item.label} className={`rounded-2xl border ${item.color} p-4 bg-slate-900/70 backdrop-blur-md shadow-lg hover:-translate-y-1 transition`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-300">{item.label}</span>
                  </div>
                  <p className="mt-3 text-3xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-300">Based on current milestones</p>
                </div>
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