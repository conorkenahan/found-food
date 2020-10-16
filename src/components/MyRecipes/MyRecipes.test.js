import React from "react";
import ReactDOM from "react-dom";
import MyRecipes from "./MyRecipes";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MyRecipes />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
