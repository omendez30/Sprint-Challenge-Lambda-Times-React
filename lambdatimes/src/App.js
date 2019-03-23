import React, { Component } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import Login from "./components/Login";
import Authenticate from "./components/Content/Authenticate";

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content />
    </div>
  );
};

export default App;
// export default Authenticate(App)(Login);
