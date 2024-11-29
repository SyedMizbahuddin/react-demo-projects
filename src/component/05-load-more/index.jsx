import { useEffect, useState } from "react";
import "./styles.css";
import { useLazyGet } from "../../hooks/commonHooks";

export default function LoadMore() {
  const [products, setProducts] = useState([]);
  const { data, loading, error, fetchData } = useLazyGet();
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      const url = `https://dummyjson.com/products?limit=20&skip=${count * 20}`;
      const res = await fetchData(url);
      if (res && res.products) {
        setProducts((prev) => [...prev, ...res.products]);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading.......</div>;
  }

  console.log("LoadMore ", data, products, loading);
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => {
              console.log("LoadMore len", products.length);
              return (
                <div className="product" key={index}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>Load More</button>
      </div>
    </div>
  );
}
