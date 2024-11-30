import { useState } from "react";
import "./styles.css";
import { useLazyGet } from "../../hooks/commonHooks";
import User from "./user";

// const postProcess = (data) => data.body;

export default function GithubFinder() {
  const [input, setInput] = useState("");
  const { data, loading, error, fetchData } = useLazyGet();

  async function fetchGithub() {
    await fetchData(`https://api.github.com/users/${input}`);
  }

  if (loading) {
    return <div>Loading....!</div>;
  }

  if (error) {
    return <div>Error....{error}</div>;
  }

  console.log("GithubFinder data", data);

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-user"
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={fetchGithub}>Search</button>
        {data !== null ? <User user={data} /> : null}
      </div>
    </div>
  );
}
