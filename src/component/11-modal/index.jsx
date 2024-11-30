import { useState } from "react";
import Modal from "./modal";

export default function ModalTest() {
  const [show, setShow] = useState(false);

  const data = {
    id: "id",
    header: "HEADD",
    body: "bodydyydydydydydy",
    footer: "dome",
  };
  return (
    <div>
      <button onClick={() => setShow(true)}> Open Modal</button>
      {show ? <Modal {...data} setShow={setShow} /> : null}
    </div>
  );
}
