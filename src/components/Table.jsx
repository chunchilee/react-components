import { useState } from "react";
import { HiArrowDownCircle, HiArrowUpCircle } from "react-icons/hi2";

const data = [
  { name: "Orange", color: "bg-orange-500", score: 5 },
  { name: "Apple", color: "bg-red-500", score: 3 },
  { name: "Banana", color: "bg-yellow-500", score: 1 },
  { name: "Lime", color: "bg-gray-500", score: 2 },
  { name: "Pime", color: "bg-gray-500", score: 2 },
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
    render: (fruit) => <div className={`p-3 m-2 ${fruit.color} w-1/2`}></div>,
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
    sortValue: (fruit) => fruit.score ** 2,
  },
];
// a - b > 0 -> b a 升
// a - b < 0 -> a b 升
// b - a > 0 -> b a 降
// b - a < 0 -> a b 降

const Table = () => {
  const [order, setOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [sortedData, setSortedData] = useState(data);

  const handleSortCol = (label) => {
    const { sortValue } = config.find(item => item.label === label);
    let orderDirection = 'asc';

    if (sortBy === label) {
      orderDirection = order === 'desc' ? 'asc' : 'desc';
    }

    if (order === 'desc') {
      setSortBy(null)
      setOrder(null)
      setSortedData(data)
      return;
    }

    const newSortedData = [...data].sort((a, b) => {
      console.log(orderDirection)
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = orderDirection === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });

    setSortBy(label);
    setOrder(orderDirection);
    setSortedData(newSortedData);
  };

  const getIcon = (order) => {
    switch (order) {
      case 'asc':
        return <HiArrowUpCircle />;
      case 'desc':
        return <HiArrowDownCircle />;
      default:
        return <><HiArrowUpCircle /><HiArrowDownCircle /></>
    }
  }

  const updatedConfig = config.map((col) => (
    <th
      className={`${col.sortValue ? 'cursor-pointer hover:bg-gray-300 ' : ''}`}
      onClick={col.sortValue ? () => handleSortCol(col.label) : undefined}
      key={col.label}
    >
      <div>
        <div className="flex justify-center items-center gap-3">
          {col.label !== 'Color' ? getIcon(order) : ''}
          {col.label}
        </div>
      </div>
    </th>
  ));

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {updatedConfig}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index}>
            {config.map((col) => {
              return (
                <td key={col.label} className={`${col.label === 'Color' ? 'flex' : 'text-center'} justify-center`}>
                  {col.render(row)}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table >
  );
};

export default Table