import React, { Component } from "react";
import SignUp from "../../components/SignUp/SignUp";

export default class RegistrationPage extends Component {
  handleRegistrationSuccess = (user) => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <section className="RegistrationPage">
        <h2>Sign Up!</h2>
        <SignUp onRegistrationSuccess={this.handleRegistrationSuccess} />
      </section>
    );
  }
}
