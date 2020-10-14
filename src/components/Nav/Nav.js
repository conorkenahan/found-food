import React from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";

export default class Nav extends React.Component {
  static contextType = Context;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.clearUsername();
  };

  renderLogoutLink() {
    return (
      <div className=" loggedIn">
        <Link className="authLink" to={`/recipes/${this.context.username}`}>
          My Recipes
        </Link>
        {" - "}
        <Link className="authLink" onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }
  renderLoginLink() {
    return (
      <div className="auhLink loggedOut">
        <Link className="navLink" to="/register">
          Register
        </Link>
        {" - "}
        <Link className="navLink" to="/login">
          Log in
        </Link>
      </div>
    );
  }

  render() {
    return (
      <>
        <header>
          <h1 className="mainLogo">
            <Link className="link" to="/">
              Found Food
            </Link>
          </h1>
        </header>
        <section className="nav">
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </section>
      </>
    );
  }
}
