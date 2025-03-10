import React, { useState } from "react";
import { useMemo } from "react";

const UseMemoAndUseCallback = () => {
  // state defined
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(0);

  const UpdateCount = () => {
    setCount(count + 1);
  };

  const UpdateItem = () => {
    setItem(item + 1);
  };

  // using useMemo - useMemo will only recompute the memoized value when one of the deps has changed.
  //in below case it will executes only at once
  const demo = useMemo(() => {
    console.log("Hello Demo Called....useMemo");
  }, []);

  return (
    <div>
      <h1>useMemo and useCallback Hook for Performance Optimization ..</h1>
      <hr />

      <h1>
        Initial Count <mark>{count}</mark>{" "}
      </h1>
      <h1>
        Initial Item <mark> {item}</mark>{" "}
      </h1>

      <hr />
      <button onClick={() => UpdateCount()}>Update Count</button>
      <button onClick={() => UpdateItem()}>Update Item</button>

      <hr />
      <hr />

      <h1>{demo} </h1>
    </div>
  );
};

export default UseMemoAndUseCallback;
