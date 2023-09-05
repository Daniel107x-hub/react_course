import React from "react";
import Accordion from "../components/Accordion";

const items = [
  {
    id: 1,
    label: "Label 1",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quas!",
  },
  {
    id: 2,
    label: "Label 2",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quas 2!",
  },
  {
    id: 3,
    label: "Label 3",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quas 3!",
  },
];

function AccordionPage() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
