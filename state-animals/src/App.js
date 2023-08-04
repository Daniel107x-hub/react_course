import React, { useState } from "react";

function App() {
  const [animals, setAnimals] = useState(0);
  const handleClick = () => {
    setAnimals((prev) => (prev += 1));
  };

  return (
    <div>
      <button onClick={handleClick}>Add animal</button>
      <p>Animals: {animals}</p>
    </div>
  );
}

export default App;
