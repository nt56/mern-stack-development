import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import PropDrilling from "./components/PropDrilling";
import Context from "./components/Context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <PropDrilling /> */}

    <Context />
  </StrictMode>
);
