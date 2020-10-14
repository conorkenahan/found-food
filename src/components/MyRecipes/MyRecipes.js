import React from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import SavedRecipe from "./SavedRecipe";

export default class RecipeResults extends React.Component {
  static contextType = Context;

  componentDidMount() {
    this.context.getRecipesByUserId();
  }

  render() {
    return (
      <section className="myRecipes">
        <p>Your Saved Recipes:</p>
        <Link to={"/"}>
          <button className="searchMoreButton">Back To Search</button>
        </Link>
        {TokenService.hasAuthToken() ? (
          <></>
        ) : (
          <p className="loginReminder">Oops, you're not logged in!</p>
        )}
        <div>
          <ul>
            {this.context.userRecipes.map((recipe, i) => (
              <SavedRecipe
                key={i}
                id={recipe.recipeid}
                recipe={recipe}
                {...this.context}
              />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
