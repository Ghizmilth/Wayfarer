import React, { Component } from "react";
import Header from "./Header";
import City from "./City";
import "../MainStyle.css";

class Main extends Component {
  render() {
    return (
      <div className="MainPage">
        <Header />
        <City url="http://localhost:3001/api"/>
      </div>
    );
  }
}

export default Main;
