import TokenService from "../services/token-service";
import config from "../config";

const RecipeApiService = {
  getUserRecipes(username) {
    return fetch(`${config.API_ENDPOINT}/recipes/${username}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => (!res.ok ? Promise.reject(res) : res.json()));
  },
  // getRecipe(recipeId) {
  //   return fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
  //     headers: {
  //       authorization: `bearer ${TokenService.getAuthToken()}`,
  //     },
  //   }).then((res) =>
  //     !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  //   );
  // },
  saveRecipe(recipeId, title, image, url, username) {
    return fetch(`${config.API_ENDPOINT}/recipes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        recipeid: recipeId,
        title: title,
        image: image,
        url: url,
        username: username,
      }),
    }).then((res) =>
      !res.ok ? res.json("true").then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteRecipe(recipeId) {
    return fetch(`${config.API_ENDPOINT}/recipes`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        recipeid: recipeId,
      }),
    }).then((res) => (!res.ok ? Promise.reject(res) : res.json()));
  },
};

export default RecipeApiService;
