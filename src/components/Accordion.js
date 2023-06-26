import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
const Accordion = ({ items }) => {
  const [expandIndex, setExpandIndex] = useState(-1);

  const handleClick = (index) => {
    if (expandIndex === index) {
      setExpandIndex(-1);
    } else {
      setExpandIndex(index);
    }
  };
  // const handleClick = (nextIndex) => {
  //   setExpandIndex((currentExpandedIndex) => {
  //     if (currentExpandedIndex === nextIndex) {
  //       return -1;
  //     } else {
  //       return nextIndex;
  //     }
  //   });
  // };
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandIndex;
    const icon = (
      <span className="text-3xl">
        {isExpanded ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b item-center cursor-pointer "
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};
export default Accordion;
