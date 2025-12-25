import { useEffect, useState } from "react";

/*
  Custom Hook: useFetchData
  - Handles API fetching
  - Manages loading & error states
  - Reusable across components
*/
const useFetchData = (url) => {
  const [data, setData] = useState(null); // Stores API data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run if URL changes

  // Hook returns values to component
  return { data, loading, error };
};

export default useFetchData;
