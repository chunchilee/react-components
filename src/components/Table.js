import React, { Fragment } from "react";

// 接收SortTable邏輯處理完後的data，進行屏幕顯示
const Table = ({ data, config, keyFn }) => {

  //thead
  const renderColumn = config.map((column) => {
    if (column.header) {
      // 產生的column.header()需要有自己的key props
      // Table有專屬的DOM Tree，不想在DOM Tree上產生元素
      // 因此使用Fragment這個API
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  //tbody 單列row對應每行的column
  // 先從data拿一筆資料，給config內部去執行，完成一行row，以此類推。
  const renderRows = data.map((rowData) => {
    const renderCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    return (
      // 我們無法得知其他data都有name的屬性(rowData.name)
      // 因此keyFn()可以都給TablePage的data來決定顯定
      <tr className="border-b" key={keyFn(rowData)}>
        {renderCells}
      </tr>
    );
  });
  
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderColumn}</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default Table;
// tr 行數
// th 標題
// td 內容
