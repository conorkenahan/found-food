import React from "react";
import Context from "../../Context";
import RecipeApiService from "../../services/recipe-api-service";
import glutenfree from "../../images/icons/glutenfree.png";
import dairyfree from "../../images/icons/dairyfree.png";
import vegan from "../../images/icons/vegan.png";
import star from "../../images/icons/star.png";
import TokenService from "../../services/token-service";

export default class Recipe extends React.Component {
  static contextType = Context;
  state = {
    recipeSaved: false,
  };

  // need to move into context
  saveRecipe = (e) => {
    e.preventDefault();
    const { recipe } = this.props;
    const recipeInfo = this.props.recipeInfo[this.props.id];
    RecipeApiService.saveRecipe(
      recipe.id,
      recipe.title,
      recipe.image,
      recipeInfo.sourceUrl,
      this.context.username
    )
      .then((res) => {
        this.setState({ recipeSaved: res });
        this.setState({
          userRecipes: [...this.state.userRecipes, recipe],
        });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { recipe } = this.props;
    const recipeInfo = this.props.recipeInfo[this.props.id];

    return (
      <div className="recipe" key={this.props.i}>
        <a href={recipeInfo.sourceUrl} className="recipeTitle">
          {recipe.title}
        </a>
        <p>{recipe.description}</p>
        <img className="recipeImage" src={recipe.image} alt={recipe.title} />

        {TokenService.hasAuthToken() ? (
          <>
            {this.state.recipeSaved ? (
              <>
                <p>Save recipe:</p>
                <div className="unsave">
                  <form
                    className="saveRecipe"
                    onSubmit={(e) => this.context.deleteSavedRecipe(recipe, e)}
                  >
                    <button>Unsave</button>
                  </form>
                  <img
                    className="savedStar icon"
                    src={star}
                    alt="recipe saved"
                  />
                </div>
              </>
            ) : (
              <div className="save">
                <form className="saveRecipe" onSubmit={this.saveRecipe}>
                  <button>Save</button>
                </form>
              </div>
            )}
          </>
        ) : (
          <></>
        )}

        {/* <a href={recipe.url}>Link to Recipe</a> */}
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

        {/* below is showing up undefined  */}
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
