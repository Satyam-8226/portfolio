import React from 'react';
import { SiLeetcode } from 'react-icons/si';
import { FiCode } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-300 font-semibold">Connect with me</p>
            <p className="text-gray-400 text-sm">Profile links and quick access to resume</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://codolio.com/profile/Satyam-8226"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg transition-all duration-300"
            >
              <FiCode className="w-4 h-4" />
              Codolio
            </a>
            <a
              href="https://leetcode.com/u/Satyam-8226/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg transition-all duration-300"
            >
              <SiLeetcode className="w-4 h-4" />
              LeetCode
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Satyam Pandey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;