import React from "react";
import Context from "../../Context";

export default class Login extends React.Component {
  state = {
    name: "",
    username: "",
    password: "",
    email: "",
  };
  static contextType = Context;

  login(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="login">
        <h3>Login!</h3>
        <form
          className="loginForm"
          onSubmit={(e) => {
            this.newUser(e);
          }}
        >
          Username:
          <input
            type="text"
            name="signupUsername"
            id="signupUsername"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          ></input>
          Password:
          <input
            type="password"
            name="signupPassword"
            id="signupPassword"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          ></input>
          <button className="submitLogin">Submit</button>
        </form>
      </div>
    );
  }
}
