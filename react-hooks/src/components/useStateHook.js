import { useState } from "react";

const UseStateHook = () => {
  let [value, setValue] = useState(0);
  let increaseValue = () => {
    setValue(prevCount => prevCount + 1)
  }
  let decreseValue = () => {
    setValue(prevCount => prevCount - 1)
  }
  return (
    <>
      <button onClick={increaseValue}>+</button>
      <button>{value}</button>
      <button onClick={decreseValue}>-</button>
    </>
  );
};
export default UseStateHook;
