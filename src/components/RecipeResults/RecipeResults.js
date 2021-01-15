import React from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import TokenService from "../../services/token-service";

export default class RecipeResults extends React.Component {
  static contextType = Context;

  render() {
    const { loading = false } = this.context || false;
    const { recipes = [] } = this.context || [];
    return (
      <>
        {loading ? (
          <>
            <div className="loader"></div>
          </>
        ) : (
          <section>
            {TokenService.hasAuthToken() ? (
              <></>
            ) : (
              <p className="loginReminder">Login to save your favorites!</p>
            )}
            <div className="recipeList">
              {recipes.map((recipe, i) => (
                <Recipe key={i} id={i} recipe={recipe} {...this.context} />
              ))}
            </div>
            <Link to={"/"}>
              <button className="searchAgainButton">Search again!</button>
            </Link>
          </section>
        )}
      </>
    );
  }
}
