import React from "react";
import ReactDOM from "react-dom";
import Ingredients from "./Ingredients";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Ingredients />, div);
  ReactDOM.unmountComponentAtNode(div);
});
