import React from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import TokenService from "../../services/token-service";

export default class RecipeResults extends React.Component {
  static contextType = Context;

  componentDidMount() {
    this.context.getRecipes();
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
              {this.context.recipes.map((recipe, i) => (
                <Recipe key={i} id={i} recipe={recipe} {...this.context} />
              ))}
              {/* {this.context.recipes.map((recipe, i) => {
                if (this.context.userRecipes.includes(recipe.id)) {
                  return <></>;
                } else {
                  return (
                    <Recipe key={i} id={i} recipe={recipe} {...this.context} />
                  );
                }
              })} */}
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
