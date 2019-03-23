import React, { Component } from "react";
import Login from "../Login";
const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      this.setState({
        loggedIn:
          localStorage.getItem("username") && localStorage.getItem("password")
      });
    }
    render() {
      if (this.state.loggedIn) {
        return <App />;
      } else {
        return <Login />;
      }
    }
  };

export default Authenticate;
