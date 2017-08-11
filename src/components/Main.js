import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router";
import { browserHistory } from "react-router";
import City from "./City";
import { Button, Card, Row, Col, Input } from "react-materialize";
import "../MainStyle.css";

class Main extends Component {
  render() {
    return (
      <div className="MainPage">
        <Header />
        <City />
      </div>
    );
  }
}

export default Main;
