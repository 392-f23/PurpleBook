import React from "react";
import ReactDOM from "react-dom/client";
import RouteDispatcher from "./RouteDispatcher";
import "./index.less";

const root = document.getElementById("root");
const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <RouteDispatcher />
  </React.StrictMode>
);
