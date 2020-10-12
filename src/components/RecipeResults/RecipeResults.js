import React from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import TokenService from "../../services/token-service";

export default class RecipeResults extends React.Component {
  static contextType = Context;
  state = {
    userRecipesIdCompare: [],
  };

  componentDidMount() {
    const selectedIngredients = this.context.ingredients
      .filter((i) => i.checked === true)
      .map((ingredient) => {
        return ingredient.value + ",+";
      });
    this.context.getRecipes(selectedIngredients);
    let userRecipes = [];
    if (this.context.userRecipes.length > 0) {
      this.context.userRecipes.map((userRecipe) =>
        userRecipes.push(userRecipe.recipeid)
      );
      this.setState({ userRecipesIdCompare: userRecipes });
    }
  }
  render() {
    return (
      <>
        {this.context.loading ? (
          <>
            <div className="loader"></div>
          </>
        ) : (
          <section className="recipeResults">
            <p>Hooray! You can make these recipes!</p>
            {TokenService.hasAuthToken() ? (
              <></>
            ) : (
              <p className="loginReminder">
                (P.S... login to save your favorites!)
              </p>
            )}
            <div>
              {this.context.recipes.map((recipe, i) => {
                if (this.state.userRecipesIdCompare.includes(recipe.id)) {
                  return <></>;
                } else {
                  return (
                    <Recipe
                      key={i}
                      id={i}
                      recipeInfo={this.context.recipeInfo}
                      recipe={recipe}
                      {...this.context}
                    />
                  );
                }
              })}
            </div>
            <Link to={"/"}>
              <button className="tryAgainButton">Try it again!</button>
            </Link>
          </section>
        )}
      </>
    );
  }
}
