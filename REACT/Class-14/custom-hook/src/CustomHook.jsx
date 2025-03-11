import { useState } from "react";

const CustomHook = () => {
  const [count, setCount] = useState(0);

  const [color, setColor] = useState("red");

  // countHandler
  const Counthandler = () => {
    setCount(count + 5);
  };

  const Counthandler2 = () => {
    setCount(count - 1);
  };

  const colorHandler = () => {
    setColor("purple");
  };

  return {
    count,
    Counthandler,
    Counthandler2,
    color,
    colorHandler,
  };
};

export default CustomHook;
