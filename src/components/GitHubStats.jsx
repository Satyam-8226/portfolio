import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaUsers } from 'react-icons/fa';
import useDeveloperData from '../hooks/useDeveloperData';

const DeveloperProfiles = () => {
  const { data, loading, error } = useDeveloperData();

  // Don't render if GitHub data failed
  if (error && !data) {
    return null;
  }

  const statCards = [
    {
      icon: FaGithub,
      label: 'GitHub Repos',
      value: data?.repos || 0,
      loading,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaUsers,
      label: 'Followers',
      value: data?.followers || 0,
      loading,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  // Only add LeetCode if data is available
  if (data?.problemsSolved && data.problemsSolved > 0) {
    statCards.push({
      icon: FaCode,
      label: 'Problems Solved',
      value: data.problemsSolved,
      loading,
      color: 'from-green-500 to-green-600'
    });
  }

  return (
    <section id="profiles" className="py-28 bg-slate-950/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Developer Profiles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Real-time insights from my coding journey
          </motion.p>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
              }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color} group-hover:shadow-lg group-hover:shadow-blue-400/30 transition-all duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  {stat.loading ? (
                    <div className="animate-pulse">
                      <div className="h-8 bg-slate-700 rounded w-16 mx-auto mb-2"></div>
                      <div className="h-4 bg-slate-700 rounded w-20 mx-auto"></div>
                    </div>
                  ) : (
                    <>
                      <div className="text-3xl font-bold text-white mb-1">{stat.value.toLocaleString()}</div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperProfiles;