import { useEffect, useState } from "react";
import { useLazyGet } from "../../hooks/commonHooks";

const postProcess = (data) =>
  data.users.map(
    (item) => `${item.firstName?.toLowerCase()} ${item.lastName?.toLowerCase()}`
  );

export default function SearchAuto() {
  const [value, setValue] = useState("");
  const { data, loading, error, fetchData } = useLazyGet();
  const [filter, setFilter] = useState([]);

  async function fetchList() {
    await fetchData("https://dummyjson.com/users", postProcess);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
    const query = e.target.value.toLowerCase();

    if (query.length > 1) {
      const filData = (data || []).filter((item) => item.includes(query));
      setFilter(filData);
    } else {
      setFilter([]);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  if (loading) {
    return <div>Loading....!</div>;
  }

  if (error) {
    return <div>Error....{error}</div>;
  }

  console.log("SearchAuto", data);
  return (
    <div>
      <input name="search" value={value} onChange={handleChange} />
      {filter
        ? filter.map((item) => <p onClick={() => setValue(item)}>{item}</p>)
        : null}
    </div>
  );
}
