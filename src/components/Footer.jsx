import React from 'react';
import { SiLeetcode } from 'react-icons/si';
import { FiCode, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-wrap gap-6">
          {/* Social Links Section */}
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

          {/* LeetCode Stat Card */}
          <div className="bg-slate-900/70 border border-gray-700 rounded-xl px-5 py-4 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 min-w-[160px]">
            <p className="text-xs tracking-widest text-gray-400 uppercase">Problems Solved</p>
            <h2 className="text-2xl font-bold text-white mt-1">440+</h2>
            <p className="text-xs text-gray-500">LeetCode</p>
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