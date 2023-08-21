import React from "react";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary rounded outline>
          Click me
        </Button>
      </div>
      <div>
        <Button secondary>Buy now!</Button>
      </div>
      <div>
        <Button success>See deal!</Button>
      </div>
      <div>
        <Button warning>Hide ads!</Button>
      </div>
      <div>
        <Button danger>Something</Button>
      </div>
      <div>
        <Button>Danger zone</Button>
      </div>
    </div>
  );
}

export default App;
