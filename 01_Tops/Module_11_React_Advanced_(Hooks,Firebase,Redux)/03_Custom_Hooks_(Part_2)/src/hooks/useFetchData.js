import { useEffect, useState } from "react";

/**
 * Custom Hook: useFetchData
 * @param {string} url - API endpoint
 */
function useFetchData(url) {
  // Data state
  const [data, setData] = useState(null);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Error state
  const [error, setError] = useState(null);

  /**
   * Effect 1: Fetch data whenever URL changes
   */
  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  /**
   * Effect 2: Reset data when URL changes (optional but clean)
   */
  useEffect(() => {
    setData(null);
  }, [url]);

  // Return everything the component needs
  return { data, loading, error };
}

export default useFetchData;
