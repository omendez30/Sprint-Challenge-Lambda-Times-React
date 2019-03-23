import React from "react";
import TopBar from "./TopBar";
import Header from "./Header";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = event => {
    const user = this.state.username;
    localStorage.setItem("user", user);
  };

  render() {
    return (
      <React.Fragment>
        <TopBar />
        <Header />
        <form className="login-form">
          <h1>Welcome to Lambda Times</h1>
          <h2>Please Sign In</h2>
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.inputChangeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.inputChangeHandler}
          />
          <button onClick={this.login}>Sign In</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
