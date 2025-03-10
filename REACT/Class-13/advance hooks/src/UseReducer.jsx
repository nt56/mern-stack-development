import React, { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    //logic using simple if
    // if (action.type === "INC") {
    //   return {
    //     count: state.count + 2,
    //   };
    // }

    // if (action.type === "DEC") {
    //   return {
    //     count: state.count - 1,
    //   };
    // }

    // if (action.type === "RST") {
    //   return {
    //     count: (state.count = 0),
    //   };
    // }

    //logic using switch case
    switch (action.type) {
      case "INC": {
        return {
          count: state.count + 5,
        };
      }

      case "DEC": {
        return {
          count: state.count - 2,
        };
      }

      case "RST": {
        return {
          count: (state.count = 0),
        };
      }

      case "Change": {
        return {
          name: action.nextName,
          count: state.count,
        };
      }
    }
  };

  const initaialState = { name: "Luffy", count: 0 };
  const [state, dispatch] = useReducer(reducer, initaialState); //declaration - if user wants to perform multiple operations on one state prefere useReducer

  const handleIncrementCount = () => {
    dispatch({ type: "INC" });
  };

  const handleDecrementCount = () => {
    dispatch({ type: "DEC" });
  };

  const handleResetCount = () => {
    dispatch({ type: "RST" });
  };

  const handleInputChange = (e) => {
    dispatch({
      type: "Change",
      nextName: e.target.value,
    });
  };

  return (
    <div>
      <h1>Demo of Use Reducer Hook</h1>

      <input
        type="text"
        placeholder="your name"
        value={state.name}
        onChange={handleInputChange}
      />
      <h3>
        Name : <mark>{state.name}</mark>
      </h3>
      <h3>
        Count : <mark>{state.count}</mark>
      </h3>

      <button onClick={handleIncrementCount}>Increment</button>
      <button onClick={handleDecrementCount}>Decrement</button>
      <button onClick={handleResetCount}>Reset</button>
    </div>
  );
};

export default UseReducer;
