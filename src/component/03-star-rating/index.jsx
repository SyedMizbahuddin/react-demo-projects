import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const onClick = (index) => {
    setRating(index);
  };

  const onMouseMove = (index) => {
    setHover(index);
  };

  const onMouseLeave = (index) => {
    setHover(0);
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index = index + 1;
        return (
          <FaStar
            key={index}
            className={index < (hover || rating) ? "active" : "inactive"}
            onClick={() => onClick(index)}
            onMouseMove={() => onMouseMove(index)}
            onMouseLeave={() => onMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}
