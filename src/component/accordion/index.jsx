/* eslint-disable no-unused-vars */
import { useState } from "react";
import data from "./data";
import './styles.css';


export default function Accordion() {
  const [selected, setSelected] = useState([]);
  const [multiSelect, setMultiSelect] = useState(false);

  const handleQuestionClick = (id) => {
    if(multiSelect){
        handleMultiSelect(id);
    }else{
        handleSingleSelect(id);
    }
  }

  const handleSingleSelect = (id) =>{
    if(selected.includes(id)){
        setSelected(null);
    }else{
        setSelected([id]);
    }
  }
  const handleMultiSelect = (id) =>{
    if(selected.includes(id)){
        setSelected(selected.filter((idd) => idd !== id));
    }else{
        setSelected([...selected,id]);
    }
  }

  return (
    <div className="wrapper">
        <button onClick={() => {setMultiSelect(!multiSelect); setSelected([]) } }> Enable Multi Selection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div onClick={() => handleQuestionClick(item.id)}className="title">
                {item.question}
                <span>+</span>
                </div>
                {
                    selected.includes(item.id) ?
                    <div className="content">{item.answer}</div>
                    : null
                }
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
