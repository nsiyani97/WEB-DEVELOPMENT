import { useState, useEffect, useRef } from "react";

const STATUS = {
  LOADING: "Loading",
  ERROR: "Error",
  SUCCESS: "Success",
};

export default function TypeAhead() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(STATUS.LOADING);
  const [results, setResults] = useState([]);
  const cache = useRef({});

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchData = async () => {
      try {
        setStatus(STATUS.LOADING);

        if (cache.current[query]) {
          console.log("Getting from cache");
          setStatus(STATUS.SUCCESS);
          setResults(cache.current[query]);
          return;
        }

        const response = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=20`,
          { signal }
        );

        const data = await response.json();
        setStatus(STATUS.SUCCESS);

        cache.current[query] = data.products;
        console.log("Getting from API");
        setResults(data.products);
      } catch (error) {
        if (error.name !== "AbortError") {
          setStatus(STATUS.ERROR);
        }
      }
    };

    const timerId = setTimeout(fetchData, 500);

    return () => {
      // Let's suppose this use effect gets called twice in quick succession
      // Before the useEffect callback function gets called the second time
      // This function will get executed to cleanup for the operations done by the first call
      clearTimeout(timerId);
      abortController.abort();
    };
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {status === STATUS.LOADING && <div>Loading...</div>}
      {status === STATUS.ERROR && <div>An Error Occured</div>}
      {status === STATUS.SUCCESS && (
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
