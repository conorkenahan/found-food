import React from "react";
import Context from "../../Context";

export default class Ingredients extends React.Component {
  static contextType = Context;

  componentDidMount() {
    this.context.setLoadingToFalse();
  }

  render() {
    return (
      <div className="ingredients">
        <h3>Have limited ingredients in your kitchen? No problem!</h3>
        <p>Select what you have on hand, and we'll find recipes that match!</p>
        <form
          className="ingredientsForm"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.history.push("/results");
            this.context.setLoadingToTrue();
          }}
        >
          <ul className="ingredientsList">
            {this.context.ingredients.map((ingredient, i) => {
              return (
                <div key={i} className="ingredientContainer">
                  <li
                    className={`ingredient__checked_${ingredient.checked} ingredient`}
                    value={ingredient.value}
                    onClick={(e) => this.context.toggleChecked(i)}
                  >
                    {ingredient.label}
                    <img
                      className={`ingredientIcon ${ingredient.value.replace(
                        / /g,
                        "_"
                      )}`}
                      src={require(`../../images/icons/food-icons/${ingredient.value}.png`)}
                      alt={ingredient.label}
                    />
                  </li>
                </div>
              );
            })}
          </ul>

          <button className="submitIngredients">Submit</button>
        </form>
      </div>
    );
  }
}
