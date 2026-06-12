import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaUsers,
  FaCode,
  FaLaptopCode,
  FaExternalLinkAlt,
} from "react-icons/fa";
import useDeveloperData from "../hooks/useDeveloperData";

const GitHubStats = () => {
  const { data, loading, error } = useDeveloperData();

  if (error && !data) return null;

  const stats = [
    {
      icon: FaGithub,
      label: "Repositories",
      value: data?.repos || 0,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaUsers,
      label: "Followers",
      value: data?.followers || 0,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FaCode,
      label: "Problems Solved",
      value: "500+",
      gradient: "from-orange-500 to-yellow-500",
    },
  ];

  const profiles = [
    {
      title: "GitHub",
      icon: FaGithub,
      description:
        "Explore my repositories, open-source contributions and development activity.",
      url: "https://github.com/Satyam-8226",
    },
    {
      title: "LeetCode",
      icon: FaCode,
      description:
        "500+ problems solved across Data Structures, Algorithms, Trees, Graphs and Dynamic Programming.",
      url: "https://leetcode.com/u/Satyam-8226/",
      badge: "500+ Problems Solved",
    },
    {
      title: "Codolio",
      icon: FaLaptopCode,
      description:
        "Unified coding profile showcasing achievements, coding activity and developer growth.",
      url: "https://codolio.com/profile/Satyam-8226",
    },
  ];

  return (
    <section
      id="profiles"
      className="relative py-28 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Coding Profiles
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A snapshot of my coding journey, problem solving, open-source work,
            and continuous learning.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-xl p-6"
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-linear-to-r ${stat.gradient}`}
              >
                <stat.icon className="text-white text-2xl" />
              </div>

              {loading ? (
                <div className="animate-pulse mt-4">
                  <div className="h-10 bg-slate-700 rounded mb-3" />
                  <div className="h-4 bg-slate-700 rounded" />
                </div>
              ) : (
                <>
                  <h3 className="text-4xl font-bold text-white mt-4">
                    {stat.value}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    {stat.label}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Profile Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.title}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-xl p-7 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <profile.icon className="text-3xl text-blue-400" />

                <FaExternalLinkAlt className="text-slate-500 group-hover:text-blue-400 transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {profile.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-5">
                {profile.description}
              </p>

              {profile.badge && (
                <div className="mb-5">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    {profile.badge}
                  </span>
                </div>
              )}

              <span className="text-blue-400 font-medium">
                View Profile →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;