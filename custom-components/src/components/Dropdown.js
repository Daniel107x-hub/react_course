import React, { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) return; // Verify is the element is visible
      if (!divEl.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const renderedOptions = options.map((option) => (
    <div
      key={option.value}
      onClick={() => handleOptionClick(option)}
      className="cursor-pointer hover:bg-sky-100 rounded p-1"
    >
      {option.label}
    </div>
  ));

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."} <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full ">{renderedOptions}</Panel>
      )}
    </div>
  );
}

export default Dropdown;
