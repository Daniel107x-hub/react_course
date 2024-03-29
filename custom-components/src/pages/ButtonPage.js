import React from "react";
import Button from "../components/Button";
import { GoBellFill, GoCloud, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
  };
  return (
    <div>
      <div>
        <Button primary onClick={handleClick} className="mb-1">
          <GoBellFill />
          Click me
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloud />
          Buy now!
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          See deal!
        </Button>
      </div>
      <div>
        <Button warning>Hide ads!</Button>
      </div>
      <div>
        <Button danger>Something</Button>
      </div>
      <div>
        <Button plain>Danger zone</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
