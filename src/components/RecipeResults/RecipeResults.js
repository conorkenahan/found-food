import React from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

export default class RecipeResults extends React.Component {
  static contextType = Context;

  state = { open: false };
  render() {
    return (
      <section className="recipeResults">
        <p>Hooray! You can make these recipes!</p>
        <div>
          {this.context.recipes.map((recipe, i) => (
            <Recipe key={i} recipe={recipe} {...this.context} />
          ))}
        </div>
        {/* <img
          className="recipeImage"
          src={cauliflower}
          alt="cauliflower"
          onClick={() => this.setState({ open: !this.state.open })}
        /> */}

        <Link to={"/"}>
          <button className="tryAgainButton">Try it again!</button>
        </Link>
      </section>
    );
  }
}
