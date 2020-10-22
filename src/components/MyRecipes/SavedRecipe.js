import React from "react";
import Context from "../../Context";

export default class Recipe extends React.Component {
  static contextType = Context;

  render() {
    const { recipe } = this.props;

    return (
      <div className="savedRecipe" key={this.props.i}>
        <a href={recipe.url} className="recipeTitle">
          {recipe.title}
        </a>
        <p>{recipe.description}</p>
        <img className="recipeImage" src={recipe.image} alt={recipe.title} />

        <div className="unsave">
          <form
            className="unsaveRecipe"
            onSubmit={() => this.context.deleteSavedRecipe(recipe)}
          >
            <button className="unsaveButton">Unsave</button>
          </form>
        </div>
      </div>
    );
  }
}
