import { useContext } from "react";
import { FeatureContext } from "./context";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureContext);
  console.log("FeatureFlags", enabledFlags);
  return <div>Feature flag</div>;
}
