import React, { useState } from "react";

function getRandomAnimal(){
  const animals = ['bird', 'cat','cow','dog','gator','horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals((prev) => [...prev, getRandomAnimal()]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add animal</button>
      {animals}
    </div>
  );
}

export default App;
