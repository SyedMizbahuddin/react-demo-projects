/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const COLOR_TYPE = {
  HEX: "HEX",
  RGB: "RGB",
};

export default function RandomColor() {
  const [type, setType] = useState(COLOR_TYPE.HEX);
  const [color, setColor] = useState("#000000");

  const handleGenerateColor = () => {
    if (type === COLOR_TYPE.HEX) {
      handleHEX();
    } else {
      handleRGB();
    }
  };

  const random = (len) => {
    return Math.floor(Math.random() * len);
  };

  const handleHEX = () => {
    const hex = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[random(hex.length)];
    }
    setColor(hexColor);
  };

  const handleRGB = () => {
    const r = random(256);
    const g = random(256);
    const b = random(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    handleGenerateColor();
  }, [type]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
      }}
    >
      <button onClick={() => setType(COLOR_TYPE.HEX)}>
        Generate HEX Color
      </button>
      <button onClick={() => setType(COLOR_TYPE.RGB)}>
        Generate RGB Color
      </button>
      <button onClick={handleGenerateColor}>Generate Random Color</button>

      <h1>
        {type} {"   "}
        {color}
      </h1>
    </div>
  );
}
