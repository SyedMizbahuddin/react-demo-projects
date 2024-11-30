import { useEffect, useState } from "react";
import { useLazyGet } from "../../hooks/commonHooks";

const postProcess = (data) => data.products;

export default function ScrollIndicator({ url }) {
  const { data, loading, error, fetchData } = useLazyGet();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function getData() {
    await fetchData(url, postProcess);
  }

  useEffect(() => {
    getData();
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  // return in UseEffect is for Clean up
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) {
    return <div>Loading....!</div>;
  }

  if (error) {
    return <div>Error....{error}</div>;
  }

  console.log("ScrollIndicator", data);
  return (
    <div>
      <h1>Custom Scroll Indicator</h1>
      <div className="data-container">
        {data && data.length ? data.map((item) => <p>{item.title}</p>) : null}
      </div>
    </div>
  );
}
