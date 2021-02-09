import React from "react";
import Context from "../../Context";
import {Spring, animated, interpolate} from 'react-spring/renderprops';

export default class Ingredients extends React.Component {
  static contextType = Context;

  componentDidMount() {
    this.context && this.context.setLoadingToFalse();
  }


  render() {
    const { ingredients = [] } = this.context || [];

    return (
      <div className="ingredients">
        <h3>Have limited ingredients in your kitchen?</h3>
        <h3> No problem!</h3>
        <p>Select what you have on hand, and we'll find recipes that match!</p>
        <form
          className="ingredientsForm"
          onSubmit={(e) => {
            const checkedIngredients = [];
            ingredients.forEach((ingredient) => {
              if (ingredient.checked === true) {
                checkedIngredients.push(ingredient);
              }
            });
            if (checkedIngredients.length >= 2) {
              e.preventDefault();
              this.context.getRecipes();
              this.props.history.push("/results");
              this.context.setLoadingToTrue();
            } else {
              alert("You must select at least two ingredients.");
            }
          }}
        >
          <ul className="ingredientsList">
            {ingredients.map((ingredient, i) => {
              return (
                <Spring
          native
          from={{ o: 0, xyz: [0, 0, 0], color: "red" }}
          to={{ o: 1, xyz: [10, 20, 5], color: "green" }}
        >
          {({ o, xyz, color }) => (
            <animated.div style ={{
              transform: xyz.interpolate(
                  (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
                ),
                opacity: o.interpolate([0.1, 0.2, 0.6, 1], [1, 0.1, 0.5, 1])
              }}
                key={i} 
                className="ingredientContainer">
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
             </animated.div>
          )}
        </Spring>
                // <div key={i} className="ingredientContainer">
                //   <li
                //     className={`ingredient__checked_${ingredient.checked} ingredient`}
                //     value={ingredient.value}
                //     onClick={(e) => this.context.toggleChecked(i)}
                //   >
                //     {ingredient.label}
                //     <img
                //       className={`ingredientIcon ${ingredient.value.replace(
                //         / /g,
                //         "_"
                //       )}`}
                //       src={require(`../../images/icons/food-icons/${ingredient.value}.png`)}
                //       alt={ingredient.label}
                //     />
                //   </li>
                // </div>
              );
            })}
          </ul>

          <button className="submitIngredients">Submit</button>
        </form>
      </div>
    );
  }
}
