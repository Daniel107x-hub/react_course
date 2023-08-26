import React, { useState } from "react";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";

function Accordion({ items }) {
  const [expandedItem, setExpandedItem] = useState(-1);
  const handleClick = (index) => {
    setExpandedItem((prev) => (index === prev ? -1 : index)); //Usamos esta notacion porque dependemos del valor previo dele stado
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedItem;
    const icon = (
      <span className="text-xl">
        {isExpanded ? <BiDownArrow /> : <BiRightArrow />}
      </span>
    );
    return (
      <div key={item.id}>
        <h1
          onClick={() => handleClick(index)}
          className="flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer"
        >
          {item.label}
          {icon}
        </h1>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
