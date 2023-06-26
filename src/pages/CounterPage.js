// import { useState } from "react";
// import produce from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

// 大寫是告訴其他人，這個變數是action.type
const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const CHANGE_VALUE = "chang_value";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      // throw new Error(`Invalid action ${action.type}`);
      // 為避免return undefined，所有action.type都不符合就return 初始值
      return state;
  }
};

// immer 直接覆蓋前一筆資料，不用有渲染的過程
// const reducer = (state, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNT:
//       state.count = state.count + 1;
//       return;
//     case DECREMENT_COUNT:
//       state.count = state.count - 1;
//       return;
//     case ADD_VALUE_TO_COUNT:
//       state.count = state.count + state.valueToAdd;
//       state.valueToAdd = 0;
//       return;
//     case SET_VALUE_TO_ADD:
//       state.valueToAdd = action.payload;
//       return;
//     default:
//       return;
//   }
// };

const CounterPage = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
    // setCount(count + 1);
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
    // setCount(count - 1);
  };
  const handleChange = (event) => {
    // 將string轉換number，避免 '' empty string 發生 false (value = NaN)
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };
  return (
    <Panel className="m-3">
      {state.count}
      <h1 className="text-lg">Count is {state.count} </h1>
      <div className="flex flex-row ">
        <Button onClick={increment}>Increment!!</Button>
        <Button onClick={decrement}>Decrement!!</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          // number or 0 || ''
          value={state.valueToAdd || ""}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
