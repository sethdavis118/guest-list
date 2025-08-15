import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ChangeSelected from "./ContextDataFunctions.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChangeSelected>
      <App />
    </ChangeSelected>
  </StrictMode>
);
