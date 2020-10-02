import React from "react";
import Context from "../../Context";

export default class RecipeResults extends React.Component {
  static contextType = Context;

  state = { open: false };
  render() {
    const { recipe } = this.props;
    return (
      <div
        className="recipe"
        key={this.props.i}
        onClick={() => this.setState({ open: !this.state.open })}
      >
        <h2>{recipe.title}</h2>

        <img
          className="recipeImage"
          src={require(`../../images/${recipe.imgSrc}`)}
          alt={recipe.imgAlt}
        />
        <p>{recipe.description}</p>
        {this.state.open && (
          <ul>
            {recipe.ingredients.map((ingredient, i) => {
              return <li key={i}>{ingredient}</li>;
            })}
          </ul>
        )}
        <a href={recipe.url}>Link to Recipe</a>
      </div>
    );
  }
}
