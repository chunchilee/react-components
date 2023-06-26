import { useState } from "react";
const useSort = (data,config) => {
  // 排序
  const [sortOrder, setSortOrder] = useState(null);
  // 點擊的column
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    // 如果當前點擊的label和上一次點擊的label不同
    if (label && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    // Unsorted -> Ascending -> Descending 為一次循換
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // sortBy || sortOrder 是null時，sortedData為原本data
  let sortedData = data;
  // 要排列大小，data就會有變化，sortedData為變化的data
  if (sortOrder && sortBy) {
    // 找到config內第一個符合的object，只取出其中屬性為 { sortValue }來排序
    const { sortValue } = config.find((column) => column.label === sortBy);
    // 創建新的data [...data]，賦予給sortedData
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return { sortBy, sortOrder, setSortColumn, sortedData };
};

export default useSort;
