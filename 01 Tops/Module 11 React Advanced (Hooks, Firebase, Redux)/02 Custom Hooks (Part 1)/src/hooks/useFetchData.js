import { useState, useEffect } from "react";

function useFetchData(url) {
  // 1️⃣ State for data
  const [data, setData] = useState(null);

  // 2️⃣ State for loading
  const [loading, setLoading] = useState(true);

  // 3️⃣ State for error
  const [error, setError] = useState(null);

  // 4️⃣ Side effect for API call
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  // 5️⃣ Return values
  return { data, loading, error };
}

export default useFetchData;
