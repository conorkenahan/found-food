import React from "react";
import "./index.css";
import Context from "./Context";
import { Route } from "react-router-dom";
import config from "./config";
import Ingredients from "./components/Ingredients/Ingredients.js";
import RecipeResults from "./components/RecipeResults/RecipeResults.js";
import Signup from "./components/SignUp/SignUp.js";
import LoginPage from "./components/Login/LoginPage";
import Nav from "./components/Nav/Nav.js";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import MyRecipes from "./components/MyRecipes/MyRecipes";
import RecipeApiService from "./services/recipe-api-service";

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
      { value: "zucchini", label: "Zucchini", checked: false },
    ],
    selectedIngredients: [],
    recipes: [],
    recipeInfo: [],
    user: [],
    username: "",
    userRecipes: {},

    formSubmit: (e) => {
      e.preventDefault();
    },

    getUsername: (username) => {
      this.setState({ username: username.value });
    },

    clearUsername: () => {
      this.setState({ username: "" });
    },

    toggleChecked: (index) => {
      let ingredients = this.state.ingredients;
      ingredients[index].checked = !ingredients[index].checked;
      this.setState({ ingredients });
    },

    newUser: (newUser) => this.setState({ user: newUser }),

    getRecipes: (selectedIngredients) => {
      fetch(
        config.RECIPES_API_ENDPOINT +
          "apiKey=" +
          process.env.REACT_APP_RECIPE_API_KEY +
          "&ingredients=" +
          selectedIngredients +
          "&ranking=2" +
          "&number=3"
        // ^ REMOVE THIS before releasing
      )
        .then((res) => res.json())
        .then((res) => {
          const recipes = res;
          return fetch(
            config.RECIPE_INFO_API_ENDPOINT +
              "/informationBulk?apiKey=" +
              process.env.REACT_APP_RECIPE_API_KEY +
              "&ids=" +
              recipes.map((r) => r.id).join(",")
          )
            .then((res) => res.json())
            .then((res) =>
              this.setState({ recipeInfo: res, recipes: recipes })
            );
        });
    },

    saveRecipe: (recipe, e, id) => {
      e.preventDefault();
      const recipeInfo = this.props.recipeInfo[id];
      RecipeApiService.saveRecipe(
        recipe.id,
        recipe.title,
        recipe.image,
        recipeInfo.sourceUrl,
        this.state.username
      )
        .then((res) => {
          this.setState({ recipeSaved: res });
        })
        .catch((res) => {
          this.setState({ error: res.error });
        });
    },

    getRecipesByUserId: (username) => {
      RecipeApiService.getUserRecipes(username).then((res) =>
        this.setState({ userRecipes: res })
      );
    },

    deleteSavedRecipe: (recipe, e) => {
      e.preventDefault();
      RecipeApiService.deleteRecipe(recipe.id)
        .then((res) => {
          this.setState({ recipeSaved: res });
        })
        .then(
          this.setState({
            userRecipes: this.state.userRecipes.filter(
              (r) => r.id !== recipe.id
            ),
          })
        )
        .catch((res) => {
          this.setState({ error: res.error });
        });
    },

    // deleteRecipe: (e) => {
    //   e.preventDefault();
    //   const { recipe } = this.props;
    //   RecipeApiService.deleteRecipe(recipe.id)
    //     .then((res) => {
    //       this.setState({ recipeSaved: res });
    //     })
    //     .catch((res) => {
    //       this.setState({ error: res.error });
    //     });
    // },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Ingredients} />
          <Route path="/results" component={RecipeResults} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/recipes/:username" component={MyRecipes} />
        </div>
      </Context.Provider>
    );
  }
}
