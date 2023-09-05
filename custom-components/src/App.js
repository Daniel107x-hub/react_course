import React, { useState } from "react";
import Dropdown from "./components/Dropdown";

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

function App() {
  const [selection, setSelection] = useState(null);
  const handleOptionSelected = (option) => {
    setSelection(option);
  };
  return (
    <Dropdown
      value={selection}
      options={options}
      onChange={handleOptionSelected}
    />
  );
}

export default App;
