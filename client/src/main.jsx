import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure "./App.jsx" or "./App.js" exists
import "./index.css";    // Ensure "index.css" exists

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
