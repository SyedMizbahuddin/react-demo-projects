import { useState } from "react";
import MenuList from "./menu-list";
import "./styles.css";

export default function MenuItem({ item = [] }) {
  const [show, setShow] = useState(false);
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => setShow(!show)}>{show ? "-" : "+"}</span>
        ) : null}
      </div>
      {show ? <MenuList list={item.children} /> : null}
    </li>
  );
}
