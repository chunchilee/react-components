import { useState } from "react";
import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
  const [select, setSelect] = useState(null);
  const handleSelect = (option) => {
    setSelect(option);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];
  return (
    <div className="flex">
      <Dropdown options={options} value={select} onChange={handleSelect} />
      <Dropdown options={options} value={select} onChange={handleSelect} />
    </div>
  );
};

export default DropdownPage;
