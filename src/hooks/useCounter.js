import { useEffect, useState } from "react";
// custom hook 資料跟畫面分開
const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);
  
  return {
    count,
    increment,
  };
};

export default useCounter;
