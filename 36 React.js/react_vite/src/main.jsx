import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Form from "./component/000 CRUD/Form";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Form></Form>
  </StrictMode>
);
