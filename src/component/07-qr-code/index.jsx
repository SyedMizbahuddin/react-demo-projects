import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");

  return (
    <div>
      <h1> QR Code Generator</h1>
      <div>
        <input
          onClick={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter value here"
        />
        <button
          onClick={() => {
            setValue(input);
            setInput("");
          }}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code'value" value={value} size={400} />
      </div>
    </div>
  );
}
