import React from "react";
import ReactDOM from "react-dom/client";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import "./index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SplashScreen />
  </React.StrictMode>
);
