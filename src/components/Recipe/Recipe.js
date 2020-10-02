import React from "react";
import Context from "../../Context";

export default class Recipe extends React.Component {
  static contextType = Context;

  state = { open: false };
  render() {
    const { recipe } = this.props;
    return (
      <div className="recipe" key={this.props.i}>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <img
          className="recipeImage"
          src={require(`../../images/${recipe.imgSrc}`)}
          alt={recipe.imgAlt}
          onClick={() => this.setState({ open: !this.state.open })}
        />
        <p>(click to view ingredients)</p>
        <p>Save recipe:</p>
        <input type="checkbox"></input>
        <br></br>
        <a href={recipe.url}>Link to Recipe</a>
        {this.state.open && (
          <ul className="recipeResultsList">
            {recipe.ingredients.map((ingredient, i) => {
              return <li key={i}>{ingredient}</li>;
            })}
          </ul>
        )}
        <hr></hr>
      </div>
    );
  }
}
