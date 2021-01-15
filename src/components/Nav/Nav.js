import React from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";

export default class Nav extends React.Component {
  static contextType = Context;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.clearUsername();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  renderLogoutLink() {
    return (
      <>
        <div className="hideWeb">
          <div className="nav loggedIn">
            <Link className="navLink" to={`/recipes/${this.context.username}`}>
              My Recipes
            </Link>
            <header>
              <h1>
                <Link className="link mainLogo" to="/">
                  Found Food
                </Link>
              </h1>
            </header>
            <Link className="navLink" onClick={this.handleLogoutClick} to="/">
              Logout
            </Link>
          </div>
        </div>
        <div className="hideMobile">
          <div className="nav loggedIn">
            <header>
              <h1>
                <Link className="link mainLogo" to="/">
                  Found Food
                </Link>
              </h1>
            </header>
            <div className="mobileNavLinks">
              <Link className="navLink" to={`/recipes/${this.context.username}`}>
                My Recipes
              </Link>
              <Link className="navLink" onClick={this.handleLogoutClick} to="/">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  renderLoginLink() {
    return (
      <>
        <div className="hideWeb">
          <div className="nav loggedOut">
            <Link className="navLink" to="/register">
              Register
            </Link>
            <header>
              <h1>
                <Link className="link mainLogo" to="/">
                  Found Food
                </Link>
              </h1>
            </header>
            <Link className="navLink" to="/login">
              Log in
            </Link>
          </div>
        </div>
        <div className="hideMobile">
          <div className="nav loggedOut">
            <header>
              <h1>
                <Link className="link mainLogo" to="/">
                  Found Food
                </Link>
              </h1>
            </header>
            <div className="mobileNavLinks">
              <Link className="navLink" to="/register">
                Register
              </Link>
              <Link className="navLink" to="/login">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  render() {
    return (
      <div>
        <section>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </section>
      </div>
    );
  }
}
