import React, { Component } from "react";
import { Link } from "react-router";
import "../MainStyle.css";
import { browserHistory } from "react-router";
import $ from "jquery-ajax";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin() {
    this.props.handleSubmit(this.state.username, this.state.password);
  }
  handleUsername() {
    this.props.handleUsernameChange(this.state.username);
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  render() {
    return (
      <div className="nav-bar">
        <div className="container">
          <section className="row row3 nesting">
            <article className="col-sm-12">
              <h2>Wayfarer</h2>
            </article>
          </section>
          <div>
            <form onSubmit={this.handleLogin}>
              <input
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
              <input
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <button type="submit" value="login">
                Login
              </button>
            </form>
            <Link role="button" to="signup">
              Signup
            </Link>
          </div>
          <button className="logout-button" onClick={this.handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
