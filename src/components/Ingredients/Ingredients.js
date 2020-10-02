import React from "react";
import Context from "../../Context";

export default class Ingredients extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div>
        <h3>Have limited ingredients in your kitchen? No problem!</h3>
        <p>Select what you have on hand, and we'll find recipes that match!</p>
        <form
          className="ingredientsForm"
          onSubmit={(e) => {
            this.context.formSubmit(e);
            this.props.history.push("/results");
          }}
        >
          <ul className="ingredientsList">
            {this.context.ingredients.map((ingredient, i) => {
              return (
                <li
                  key={i}
                  className={`ingredient__checked_${ingredient.checked} ingredient`}
                  value={ingredient.value}
                  onClick={(e) => this.context.toggleChecked(i)}
                >
                  {ingredient.label}
                </li>
              );
            })}
          </ul>

          <button className="submitIngredients">Submit</button>
        </form>
      </div>
    );
  }
}
