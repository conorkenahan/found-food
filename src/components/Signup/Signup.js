import React from "react";
import Context from "../../Context";

export default class Signup extends React.Component {
  state = {
    name: "",
    username: "",
    password: "",
    email: "",
  };
  static contextType = Context;

  newUser(e) {
    e.preventDefault();
    this.context.newUser(JSON.stringify(this.state));
    console.log(this.state);
  }

  render() {
    return (
      <div className="signUp">
        <h3>Sign up to save recipes!</h3>
        <form
          className="signupForm"
          onSubmit={(e) => {
            this.newUser(e);
          }}
        >
          Name:
          <input
            type="text"
            name="signupName"
            id="signupName"
            value={this.state.name}
            placeholder="Brendan Fraser"
            onChange={(e) => this.setState({ name: e.target.value })}
          ></input>
          Username:
          <input
            type="text"
            name="signupUsername"
            id="signupUsername"
            value={this.state.username}
            placeholder="whoadude420"
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
          Email:
          <input
            type="email"
            name="signupEmail"
            id="signupEmail"
            value={this.state.email}
            placeholder="bfras69@hotmail.gov"
            onChange={(e) => this.setState({ email: e.target.value })}
          ></input>
          <button className="submitSignup">Submit</button>
        </form>
      </div>
    );
  }
}
