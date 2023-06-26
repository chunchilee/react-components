import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import useSort from "../hooks/useSort";
import Table from "./Table";

// SortTable 可以將Table靜態的資料進行排序，在傳遞給Table，完全不會修改原本Table的資料
// 進行屏幕上的邏輯處理，再將數據傳給Table
// 接收TablePage所有props 傳遞給Table
const Sortable = (props) => {
  // 原封不動地將初始資料傳給Table，若有修改資料則在覆蓋前一筆資料即可
  const { config, data } = props;
  // 執行useSort()，再取出變數來使用
  const { sortBy, sortOrder, setSortColumn, sortedData } = useSort(data,config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    // object有sortValue屬性的 => 會add header屬性
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-300"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

const getIcons = (label, sortBy, sortOrder) => {
  // 還沒點擊排序時
  // 點擊其中一個label，其餘label不影響
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  // 點擊後 unsorted -> ascending -> descending
  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
};

export default Sortable;
