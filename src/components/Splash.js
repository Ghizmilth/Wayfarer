import React, { Component } from "react";
import Header from "./Header";
import "../MainStyle.css";
import { Link } from "react-router";
import CityList from "./CityList";
import { Button, Input } from "react-materialize";
import $ from "jquery-ajax";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      id: "",
      isAuthenticated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    $.ajax({
      method: "POST",
      url: `http://localhost:3001/login`,
      data: {
        username: username,
        password: password
      }
    }).then(
      res => {
        console.log("res is ", res);
        this.setState({ isAuthenticated: true, id: res._id });
      },
      err => {
        console.log("oops!");
        console.log(err);
      }
    );
  }
  handleLogout() {
    this.setState({ isAuthenticated: false, id: "" });
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  getInitialState() {
    return {
      isAuthenticated: false
    };
  }
  render() {
    if (this.state.isAuthenticated === false) {
      console.log("user is not logged in");
      return (
        <div className="MainPage">
          <Header handleSubmit={event => this.handleSubmit} />
          <div className="row container">
            <form onSubmit={this.handleSubmit}>
              <Input
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
              <Input
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <Button type="submit" value="login">
                Login
              </Button>
            </form>
            <Link role="button" to="signup">
              <h3>Sign Up</h3>
            </Link>
          </div>
          <img src="https://bluemountainthyme.files.wordpress.com/2013/08/img_8131.jpg" />
        </div>
      );
    } else {
      console.log("user is logged in");
      return (
        <div>
          <p>logged in</p>

          <div classNamer="col">
            <Button className="logout-button" onClick={this.handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      );
    }
  }
}

export default Splash;
