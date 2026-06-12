import { useEffect, useState } from "react";
import axios from "axios";

const CACHE_KEY = "developer_data_cache";
const CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 hours

export default function useDeveloperData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCachedData = () => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);

      if (!cached) return null;

      const parsed = JSON.parse(cached);

      if (Date.now() - parsed.timestamp < CACHE_DURATION) {
        return parsed.data;
      }

      return null;
    } catch {
      return null;
    }
  };

  const setCachedData = (data) => {
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          data,
          timestamp: Date.now(),
        })
      );
    } catch (err) {
      console.error("Cache write error:", err);
    }
  };

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);

        const cachedData = getCachedData();

        if (cachedData) {
          setData(cachedData);
          setLoading(false);
          return;
        }

        const githubUsername = "Satyam-8226";

        const response = await axios.get(
          `https://api.github.com/users/${githubUsername}`
        );

        const result = {
          repos: response.data.public_repos || 0,
          followers: response.data.followers || 0,
          following: response.data.following || 0,
        };

        setCachedData(result);
        setData(result);
        setError(null);
      } catch (err) {
        console.error("GitHub data fetch failed:", err);

        const cachedData = getCachedData();

        if (cachedData) {
          setData(cachedData);
        }

        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return {
    data,
    loading,
    error,
  };
}