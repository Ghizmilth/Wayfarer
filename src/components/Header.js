import React, { Component } from "react";
import { Link } from "react-router";

//import { browserHistory } from "react-router";
//import $ from "jquery-ajax";

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: "",
  //     password: ""
  //   };
  // }
  //
  // handleLogin() {
  //   this.props.handleSubmit(this.state.username, this.state.password);
  // }
  // handleUsername() {
  //   this.props.handleUsernameChange(this.state.username);
  // }
  // handleUsernameChange(e) {
  //   this.setState({ username: e.target.value });
  // }
  // handlePasswordChange(e) {
  //   this.setState({ password: e.target.value });
  // }
  render() {
    return (
      <div className="nav-bar">
        <div className="container row">
          <div className="col-md-12 header-text">
            <h1>Wayfarer</h1>
          </div>

        </div>
      </div>
    );
  }
}

export default Header;
