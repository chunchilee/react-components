import { useReducer, useRef } from "react";

const initialState = {
  count: 0,
  payload: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - 1
      };
    case 'toAdd':
      return {
        ...state,
        count: state.count + action.payload,
        payload: 0
      }
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const ref = useRef(null);
  const increment = () => {
    dispatch({
      type: 'increment',
    });
  };
  const decrement = () => {
    dispatch({
      type: 'decrement',
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    const value = parseInt(ref.current.value) || 0;
    dispatch({
      type: 'toAdd',
      payload: value,
    });
    ref.current.value = 0;
  };
  return (
    <div className='border rounded p-3 shadow bg-white w-full m-3'>
      <h1 className="text-lg">Count is {state.count} </h1>
      <div className="flex flex-row gap-x-10">
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Delete</button>
      </div>
      <form onSubmit={handleChange}>
        <label>Add a lot!</label>
        <input
          type="number"
          ref={ref}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <button>Click!</button>
      </form>
    </div>
  );
}

export default Counter

