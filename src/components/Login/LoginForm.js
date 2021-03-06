import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import Context from "../../Context";

export default class Login extends Component {
  static contextType = Context;

  state = { error: null };

  handleSubmitJwtAuth = (e) => {
    e.preventDefault();
    this.context.setLoadingToTrue();
    this.setState({ error: null });
    const { username, password } = e.target;
    this.context.getUsername(username);

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        this.props.onLoginSuccess(username.value);
        this.context.getRecipesByUserId(username.value);
        this.context.setLoadingToFalse();
      })
      .catch((res) => {
        this.context.setLoadingToFalse();
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    const { loading = false } = this.context || false;
    return (
      <>
        {loading ? (
          <>
            <div className="loader"></div>
          </>
        ) : (
          <>
            <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
              <div role="alert">{error && <p className="red">{error}</p>}</div>
              <div className="username">
                <label htmlFor="LoginForm__username">User name</label>
                <input
                  required
                  name="username"
                  id="LoginForm__username"
                ></input>
              </div>
              <div className="password">
                <label htmlFor="LoginForm__password">Password</label>
                <input
                  required
                  name="password"
                  type="password"
                  id="LoginForm__password"
                ></input>
              </div>
              <button className="submitLogin" type="submit">
                Login
              </button>
            </form>
            <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
              <input
                readOnly
                className="hidden"
                name="username"
                value="testuser"
              ></input>
              <input
                readOnly
                className="hidden"
                name="password"
                value="Testing123!"
              ></input>
              <button className="submitLogin" type="submit">
                login as demo user here
              </button>
            </form>
          </>
        )}
      </>
    );
  }
}
