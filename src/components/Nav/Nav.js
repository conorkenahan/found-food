import React from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  static contextType = Context;
  render() {
    return (
      <>
        <header>
          <h1 className="mainLogo">
            <Link to="/">Found Food</Link>
          </h1>
        </header>
        <section className="nav">
          <h3 className="navLink">
            <Link to="/signup">Sign Up</Link>
          </h3>
          <h3 className="navLink">
            <Link to="/login">Login</Link>
          </h3>
        </section>
      </>
    );
  }
}
