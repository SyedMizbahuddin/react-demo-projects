import { createContext, useEffect, useState } from "react";
import serviceAPI from "../data";

export const FeatureContext = createContext(null);

export default function FeatureContextState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      //original service call
      const response = await serviceAPI();
      setEnabledFlags(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureContext.Provider>
  );
}
