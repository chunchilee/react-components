import classNames from "classnames";
import React from "react";
import useNavigationContext from "../hooks/useNavigationContext";

const Link = ({ to, className, activeName, children }) => {
  const { navigate, currentPath } = useNavigationContext();
  const classnames = classNames(
    "text-blue-500",
    className,
    // 路徑相同會將activeName放入className後方
    currentPath === to && activeName
  );

  const handleClick = (event) => {
    // Mac Os Command || Windows Control 按住點擊恢復預設行為，產生新頁面
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classnames} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
