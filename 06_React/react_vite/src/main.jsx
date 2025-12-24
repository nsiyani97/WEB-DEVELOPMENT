import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Index from "./component/redux/Index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Index></Index>
  </StrictMode>
);
