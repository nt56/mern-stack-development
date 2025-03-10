import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UseReducer from "./UseReducer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseReducer />
  </StrictMode>
);
