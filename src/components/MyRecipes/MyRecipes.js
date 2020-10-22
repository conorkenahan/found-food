import React from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import SavedRecipe from "./SavedRecipe";

export default class RecipeResults extends React.Component {
  static contextType = Context;

  componentDidMount() {
    this.context && this.context.getRecipesByUserId();
  }

  render() {
    const { userRecipes = [] } = this.context || [];
    return (
      <section className="myRecipes">
        <Link to={"/"}>
          <button className="searchMoreButton">Back To Search</button>
        </Link>

        {TokenService.hasAuthToken() && userRecipes.length > 0 ? (
          <>
            <p>Your Saved Recipes:</p>
            <div>
              <ul className="savedRecipes">
                {userRecipes.map((recipe, i) => (
                  <SavedRecipe
                    key={i}
                    id={recipe.recipeid}
                    recipe={recipe}
                    {...this.context}
                  />
                ))}
              </ul>
            </div>
          </>
        ) : TokenService.hasAuthToken() ? (
          <p>Your saved recipes will show here.</p>
        ) : (
          <p>Oops, you're not logged in!</p>
        )}
      </section>
    );
  }
}
