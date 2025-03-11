import React from "react";
import CustomHook from "./CustomHook";
import { useId } from "react";

const App = () => {
  const id = useId();
  console.log(id);

  // Called Hook
  // we can used / called same hook multiple times by stored in a another variable
  // we can create multiple hook
  const data = CustomHook();
  const data2 = CustomHook();

  return (
    <>
      <h1 style={{ color: data.color }}>Custom Hooks In React JS</h1>

      <h1>Initial Count : {data.count}</h1>
      <button onClick={() => data.Counthandler()}>Counthandler 1</button>
      <hr />

      <h1>Initial Count {data2.count}</h1>
      <button onClick={() => data2.Counthandler()}>Counthandler 2</button>
      <button onClick={() => data2.Counthandler2()}>Counthandler 3</button>
      <hr />

      <h1 style={{ color: data.color }}> Color State Handler</h1>
      <button onClick={() => data.colorHandler()}>Update Color</button>
      <hr />
    </>
  );
};

export default App;
