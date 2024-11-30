import { useState } from "react";

export function useLazyGet() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, postProcess) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      const result = postProcess ? postProcess(json) : json;
      if (result) {
        setData(result);
        return result;
      }
    } catch (e) {
      console.log("useLazyGet", e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
  };
}
