import React, { useEffect, useRef, useState } from "react";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const handleClick = () => {
    // setIsOpen((cur) => {
    //   return !cur;
    // });
    setIsOpen(!isOpen);
  };
  const handleClickOption = (option) => {
    // setIsOpen((cur) => {
    //   return !cur;
    // });
    setIsOpen(!isOpen);
    onChange(option);
  };

  useEffect(() => {
    const handler = (event) => {
      // 需要監控element是否有被點擊，使用useRef()
      // ref(reference)綁定在整個屏幕上，所以當跳到其他頁面或組件後，就沒有對任何div來reference，此時 divEl === null
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  const renderOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleClickOption(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "Select..."}
      </Panel>
      {isOpen && <Panel className="absolute top-full ">{renderOptions}</Panel>}
    </div>
  );
};

export default Dropdown;
