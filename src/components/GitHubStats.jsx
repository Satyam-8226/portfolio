import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaEye, FaCalendarAlt } from 'react-icons/fa';

const GitHubStats = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = 'Satyam-8226'; // Replace with actual GitHub username

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const [userResponse, reposResponse] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`)
        ]);

        setUserData(userResponse.data);
        // Sort repos by stars and recency
        const sortedRepos = reposResponse.data
          .filter(repo => !repo.fork && !repo.private)
          .sort((a, b) => {
            const aScore = a.stargazers_count * 2 + (new Date(a.updated_at) - new Date('2020-01-01')) / (1000 * 60 * 60 * 24);
            const bScore = b.stargazers_count * 2 + (new Date(b.updated_at) - new Date('2020-01-01')) / (1000 * 60 * 60 * 24);
            return bScore - aScore;
          })
          .slice(0, 6);

        setRepos(sortedRepos);
        setError(null);
      } catch (err) {
        console.error('GitHub API error:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (loading) {
    return (
      <section id="github" className="py-28 bg-slate-950/80 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">GitHub Activity</h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !userData || repos.length === 0) {
    return null; // Remove section if data fails or is not meaningful
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="github" className="py-28 bg-slate-950/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            GitHub Activity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Real-time insights from my GitHub profile
          </motion.p>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">{userData.public_repos}</div>
            <div className="text-slate-400 text-sm">Public Repos</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">{userData.followers}</div>
            <div className="text-slate-400 text-sm">Followers</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">{userData.following}</div>
            <div className="text-slate-400 text-sm">Following</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">
              {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
            </div>
            <div className="text-slate-400 text-sm">Total Stars</div>
          </div>
        </motion.div>

        {/* Top Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Top Repositories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors truncate">
                    {repo.name}
                  </h4>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors ml-2"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {repo.description || 'No description available'}
                </p>

                <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <FaCodeBranch className="w-4 h-4" />
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>{formatDate(repo.updated_at)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <FaStar className="w-4 h-4" />
                      <span className="text-sm">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400">
                      <FaCodeBranch className="w-4 h-4" />
                      <span className="text-sm">{repo.forks_count}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <FaEye className="w-4 h-4" />
                    <span className="text-sm">{repo.watchers_count}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;