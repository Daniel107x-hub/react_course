import React from "react";

function App() {
  const handleclick = () => {
    console.log("Button was clicked");
  };

  return (
    <div>
      <button onClick={handleclick}>Add animal</button>
    </div>
  );
}

export default App;
