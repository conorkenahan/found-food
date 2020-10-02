import React from "react";
import "./index.css";
import Context from "./Context";
import Ingredients from "./components/Ingredients/Ingredients.js";
import RecipeResults from "./components/RecipeResults/RecipeResults.js";
import Nav from "./components/Nav/Nav.js";
import { Route } from "react-router-dom";

export default class App extends React.Component {
  state = {
    ingredients: [
      { value: "apples", label: "Apples", checked: false },
      { value: "avocado", label: "Avocado", checked: false },
      { value: "bacon", label: "Bacon", checked: false },
      { value: "bread", label: "Bread", checked: false },
      { value: "broccoli", label: "Broccoli", checked: false },
      { value: "butter", label: "Butter", checked: false },
      { value: "cauliflower", label: "Cauliflower", checked: false },
      { value: "cheese", label: "Cheese", checked: false },
      { value: "chicken", label: "Chicken", checked: false },
      { value: "cream cheese", label: "Cream Cheese", checked: false },
      { value: "eggs", label: "Eggs", checked: false },
      { value: "fish", label: "Fish", checked: false },
      { value: "flour", label: "Flour", checked: false },
      { value: "garlic", label: "Garlic", checked: false },
      { value: "green onions", label: "Green Onions", checked: false },
      { value: "green peppers", label: "Green Peppers", checked: false },
      { value: "ground beef", label: "Ground Beef", checked: false },
      { value: "honey", label: "Honey", checked: false },
      { value: "ketchup", label: "Ketchup", checked: false },
      { value: "lemons", label: "Lemons", checked: false },
      { value: "mayonnaise", label: "Mayonnaise", checked: false },
      { value: "milk", label: "Milk", checked: false },
      { value: "mushrooms", label: "Mushrooms", checked: false },
      { value: "mustard", label: "Mustard", checked: false },
      { value: "onions", label: "Onions", checked: false },
      { value: "pasta", label: "Pasta", checked: false },
      { value: "peanut butter", label: "Peanut Butter", checked: false },
      { value: "pork chops", label: "Pork Chops", checked: false },
      { value: "potatoes", label: "Potatoes", checked: false },
      { value: "ramen", label: "Ramen", checked: false },
      { value: "rice", label: "Rice", checked: false },
      { value: "salsa", label: "Salsa", checked: false },
      { value: "sausage", label: "Sausage", checked: false },
      { value: "tomatoes", label: "Tomatoes", checked: false },
      { value: "tomato sauce", label: "Tomato Sauce", checked: false },
      { value: "tortillas", label: "Tortillas", checked: false },
      { value: "taco shells", label: "Taco Shells", checked: false },
      { value: "vinegar", label: "Vinegar", checked: false },
      { value: "zucchini", label: "Zucchini", checked: false },
    ],
    selectedIngredients: [],
    recipes: [
      {
        title: "Roasted Garlic Parmesan Cauliflower",
        description:
          "Crispy cauliflower bites with garlic Parmesan breading, baked in the oven instead of fried. So tasty!",
        ingredients: [
          "1/2 cup butter melted",
          "2 garlic cloves minced",
          "1 cup Italian or plain breadcrumbs",
          "1/2 cup grated Parmesan cheese",
          "1/4 tsp salt",
          "1/4 tsp black pepper",
          "1 medium cauliflower head",
        ],
        url:
          "https://www.crunchycreamysweet.com/roasted-garlic-parmesan-cauliflower/",
        imgSrc: "cauliflower.jpg",
        imgAlt: "cauliflower",
      },
      {
        title: "The Perfect Baked Potato",
        description:
          "Learn how to make the perfect baked potato using this step-by-step tutorial and recipe. So easy and delicious!",
        ingredients: [
          "1 medium-to-large Russet potato, scrubbed clean of any dirt",
          "1–2 teaspoons melted butter (or olive oil)",
          "pinch of coarse Kosher salt",
          "pinch of freshly-cracked black pepper",
        ],
        url: `https://www.gimmesomeoven.com/baked-potato/`,
        imgSrc: "bakedpotato.jpg",
        imgAlt: "baked potato",
      },
      {
        title: "Bacon Avocado Fries",
        description: "You can't say no to anything wrapped in bacon.",
        ingredients: [
          "3 avocados",
          "24 thin strips of bacon",
          "1/4 c. ranch dressing, for serving",
        ],
        url:
          "https://www.delish.com/cooking/recipe-ideas/recipes/a48261/bacon-avocado-fries-recipe/",
        imgSrc: "avocadobacon.jpg",
        imgAlt: "bacon avocado fries",
      },
      {
        title: "Baked Eggs in Avocado",
        description:
          "Who would have thought? You can bake your eggs right in avocado halves for a healthy breakfast option to start your day off right!",
        ingredients: [
          "3 avocados, halved and seeded",
          "6 large eggs",
          "Kosher salt and freshly ground black pepper, to taste",
        ],
        url: "https://damndelicious.net/2016/10/05/baked-eggs-in-avocado/",
        imgSrc: "avocadoeggs.jpg",
        imgAlt: "baked eggs in avocado",
      },
    ],

    formSubmit: (e) => {
      e.preventDefault();
    },

    toggleChecked: (index) => {
      let ingredients = this.state.ingredients;
      ingredients[index].checked = !ingredients[index].checked;
      this.setState({ ingredients });
    },

    // resetCheckedValues: () => {
    //   let ingredients = this.state.ingredients.map((ingredient, i) => {
    //     return ingredient.checked === false;
    //   });
    //   this.setState({ ingredients });
    // },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Ingredients} />
          <Route path="/results" component={RecipeResults} />
        </div>
      </Context.Provider>
    );
  }
}
