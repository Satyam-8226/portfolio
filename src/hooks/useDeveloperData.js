import { useEffect, useState } from "react";
import axios from "axios";

export default function useDeveloperData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const CACHE_KEY = 'developer_data_cache';
  const CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 hours

  const getCachedData = () => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data: cachedData, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          return cachedData;
        }
      }
    } catch (error) {
      console.error('Error reading cache:', error);
    }
    return null;
  };

  const setCachedData = (data) => {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data,
        timestamp: Date.now()
      }));
    } catch (error) {
      console.error('Error setting cache:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const cachedData = getCachedData();

        if (cachedData) {
          setData(cachedData);
          setLoading(false);
          return;
        }

        const username = 'Satyam-8226';
        const leetcodeUsername = 'satyam8226';

        // Fetch GitHub data
        const githubResponse = await axios.get(`https://api.github.com/users/${username}`);

        const finalData = {
          repos: githubResponse.data.public_repos || 0,
          followers: githubResponse.data.followers || 0,
          following: githubResponse.data.following || 0,
          totalStars: 0, // Will be calculated if needed
        };

        // Try to fetch LeetCode data (optional)
        try {
          const leetcodeResponse = await axios.get(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`);
          if (leetcodeResponse.data && leetcodeResponse.data.totalSolved) {
            finalData.problemsSolved = leetcodeResponse.data.totalSolved;
          }
        } catch (leetcodeError) {
          console.warn('LeetCode API failed, continuing without it:', leetcodeError);
          finalData.problemsSolved = 0;
        }

        setCachedData(finalData);
        setData(finalData);
        setError(null);
      } catch (err) {
        console.error('Error fetching developer data:', err);
        setError(err);
        // Try to use cached data as fallback
        const cachedData = getCachedData();
        if (cachedData) {
          setData(cachedData);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}