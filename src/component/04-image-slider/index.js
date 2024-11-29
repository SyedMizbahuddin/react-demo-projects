/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(uri) {
    try {
      setLoading(true);
      const url = `${uri}?page=${page}&limit=${limit}`;
      const response = await fetch(url);
      console.log("ImageSlider", response);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  console.log("ImageSlider", images);

  if (loading) {
    return <div>Loading Please Wait!</div>;
  }

  if (error !== null) {
    return <div>Error Occured: {error}</div>;
  }

  const handlePrevious = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((item, index) => (
            <img
              key={item.id}
              alt={item.download_url}
              src={item.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}

      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />

      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
