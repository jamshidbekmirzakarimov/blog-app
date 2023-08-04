import React from "react";
import ReactDOM from "react-dom/client";
import App from "./root/App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./index.css";
// import "../i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster position="top-right"/>
    <App />
  </BrowserRouter>
);
