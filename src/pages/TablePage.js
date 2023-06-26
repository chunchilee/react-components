import React from "react";
import Sortable from "../components/Sortable";

const TablePage = () => {

  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-gray-500", score: 2 },
  ];
  
  const config = [
    {
      label: "Fruits",
      // 與下方不同的功能，可以透過render來產生不同樣式
      render: (fruit) => fruit.name,
      // 新增的原因是為了排序的邏輯
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      // 新增可用於排序的資料和靜態資料的差別
      label: "Score Squared",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score**2
    },
  ];
  // 為避免每筆data可能沒有需要的屬性
  // 所以先在資料端確定要傳給底下Table組件的屬性，避免找不到
  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <>
      <Sortable data={data} config={config} keyFn={keyFn} />
    </>
  );
};

export default TablePage;
