import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

function DropdownPage() {
  const [selection, setSelection] = useState(null);
  const handleOptionSelected = (option) => {
    setSelection(option);
  };

  return (
    <div className="flex">
      <Dropdown
        value={selection}
        options={options}
        onChange={handleOptionSelected}
      />
    </div>
  );
}

export default DropdownPage;
