import React from "react";
import Context from "../../Context";

export default class Recipe extends React.Component {
  static contextType = Context;

  render() {
    const { recipe } = this.props;

    return (
      <div className="recipe" key={this.props.i}>
        <a href={recipe.url} className="recipeTitle">
          {recipe.title}
        </a>
        <p>{recipe.description}</p>
        <img className="recipeImage" src={recipe.image} alt={recipe.title} />

        <div className="unsave">
          <form
            className="saveRecipe"
            onSubmit={(e) => this.context.deleteSavedRecipe(recipe, e)}
          >
            <button>Unsave</button>
          </form>
        </div>
      </div>
    );
  }
}
