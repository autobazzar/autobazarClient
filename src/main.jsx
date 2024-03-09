import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initRoot } from "./utils/themeProvider.js";

const rootElement = document.getElementById("root");

initRoot(rootElement);
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
