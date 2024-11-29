import { useState } from "react";

export function useLazyGet() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      if (json) {
        setData(json);
        setLoading(false);
        return json;
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
  };
}
