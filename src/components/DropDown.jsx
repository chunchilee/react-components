import { useEffect, useRef, useState } from "react";

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

const Dropdown = () => {
  const [value, setValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen)

  const handleClickOption = (option) => {
    setValue(option);
    setIsOpen(false);
  };

  return (
    <div className="w-48 relative" >
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={() => handleClick()}
      >
        {value?.label || "Select..."}
      </div>
      <div className="absolute top-full w-full">
        {
          isOpen &&
          <div className="border rounded p-3 shadow bg-white">
            {options.map(option => {
              return (
                <div
                  className="hover-bg-sky-100 rounded cursor-pointer p-1 "
                  key={option.value}
                  onClick={() => handleClickOption(option)}
                >
                  {option.value}
                </div>
              )
            })}
          </div>
        }
      </div>
    </div>
  )
}


export default Dropdown