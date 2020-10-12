import React from "react";
import AuthApiService from "../../services/auth-api-service";

export default class Signup extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };
  state = {
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, username, email } = e.target;

    console.log("registration form submitted");
    console.log({ name, password, username, email });

    this.setState({ error: null });
    AuthApiService.postUser({
      name: name.value,
      password: password.value,
      username: username.value,
      email: email.value,
    })
      .then((user) => {
        name.value = "";
        password.value = "";
        username.value = "";
        email.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="signupForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="full_name">
          <label htmlFor="signupForm__full_name">Name</label>
          <input type="text" name="name" id="signupName" required></input>
        </div>
        <div className="user_name">
          <label htmlFor="signupForm__user_name">Username</label>
          <input
            type="text"
            name="username"
            id="signupUsername"
            required
          ></input>
        </div>
        <div className="password">
          <label htmlFor="signupForm__password">Password</label>
          <input
            type="password"
            name="password"
            id="signupPassword"
            required
          ></input>
        </div>
        <div className="email">
          <label htmlFor="signupForm__nick_name">Email</label>
          <input type="email" name="email" id="signupEmail" required></input>
        </div>
        <button className="submitSignup">Submit</button>{" "}
      </form>
    );
  }
}
