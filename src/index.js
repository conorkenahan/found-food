import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/Ubuntu-Regular.ttf";
import "./fonts/Staatliches-Regular.ttf";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
