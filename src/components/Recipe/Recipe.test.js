import React from "react";
import ReactDOM from "react-dom";
import Recipe from "./Recipe";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Recipe
        key={1}
        id={1}
        recipe={{
          id: 1,
          recipeid: 620313,
          title: "Cheddar Apple Bacon Grilled Cheese",
          image: "https://spoonacular.com/recipeImages/620313-312x231.jpg",
          url:
            "http://www.emilybites.com/2014/11/cheddar-apple-bacon-grilled-cheese.html",
          userid: 4,
          missedIngredients: [],
        }}
      />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
