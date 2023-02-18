import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const rootNode = document.querySelector("#root");
if (!rootNode) throw new Error("Failed to find the root element");

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
