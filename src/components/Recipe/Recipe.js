import React from "react";
import Context from "../../Context";
import glutenfree from "../../images/icons/glutenfree.png";
import dairyfree from "../../images/icons/dairyfree.png";
import vegan from "../../images/icons/vegan.png";
import TokenService from "../../services/token-service";

export default class Recipe extends React.Component {
  static contextType = Context;

  render() {
    const { recipe } = this.props;
    const recipeInfo = this.context.recipeInfo[this.props.id];

    return (
      <div className="recipe" key={this.props.id}>
        <a
          href={recipeInfo.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="recipeTitle"
        >
          {recipe.title}
        </a>
        <p>{recipe.description}</p>
        <img className="recipeImage" src={recipe.image} alt={recipe.title} />

        {TokenService.hasAuthToken() ? (
          <button
            className="saveButton"
            onClick={(e) => {
              this.context.userRecipes.includes(recipe.id)
                ? this.context.deleteSavedRecipe(e, recipe)
                : this.context.saveRecipe(e, recipe, this.props.id);
            }}
          >
            {this.context.userRecipes.includes(recipe.id) ? "Unsave" : "Save"}
          </button>
        ) : (
          <>
            <p className="loginReminder">Login to save this recipe!</p>
          </>
        )}

        {recipe.missedIngredients.length ? (
          <>
            <p>You have almost everything for this recipe! All you need is:</p>
            <ul className="missingIngredientsList">
              {recipe.missedIngredients.map((missingIngredient, i) => {
                return <li key={i}>{missingIngredient.name}</li>;
              })}
            </ul>
          </>
        ) : (
          <p>You have everything you need to make this recipe!</p>
        )}

        <div className="dietaryIcons">
          {recipeInfo.vegan ? (
            <>
              <img className="veganIcon icon" src={vegan} alt="vegan" />
            </>
          ) : (
            <></>
          )}
          {recipeInfo.glutenFree ? (
            <>
              <img
                className="glutenfreeIcon icon"
                src={glutenfree}
                alt="glutenfree"
              />
            </>
          ) : (
            <></>
          )}
          {recipeInfo.dairyFree ? (
            <>
              <img
                className="dairyfreeIcon icon"
                src={dairyfree}
                alt="dairyfree"
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}
