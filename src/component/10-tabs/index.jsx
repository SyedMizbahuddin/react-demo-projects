import { useState } from "react";
import "./styles.css";

export default function Tabs({ tabsContent, onChange }) {
  const [tabInd, setTabInd] = useState(0);

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${tabInd === index ? "active" : ""}`}
            key={tabItem.label}
            onClick={() => {
              onChange(index);
              setTabInd(index);
            }}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>

      <div className="content">
        {tabsContent[tabInd] && tabsContent[tabInd].content}
      </div>
    </div>
  );
}
