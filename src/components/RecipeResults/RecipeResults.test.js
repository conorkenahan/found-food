import React from "react";
import ReactDOM from "react-dom";
import RecipeResults from "./RecipeResults";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <RecipeResults />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
