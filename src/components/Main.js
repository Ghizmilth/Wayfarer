import React, { Component } from "react";
import Header from "./Header";
import {Link} from "react-router";
import {browserHistory} from "react-router";
import CityContainer from "./CityContainer";
import PageContent from "./PageContent";
import CityInfo from "./CityInfo";
import PostBox from "./PostBox";
import UserAuth from "./UserAuth";

import { Button, Card, Row, Col, Input } from "react-materialize";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.params.userId || this.props.route.config.defaultUserId,
      isAuthenticated: false,
      cityId: this.props.params.id || this.props.route.config.defaultCityId
    };
    this.setAuthState = this.setAuthState.bind(this);
  }

   /* setAuthState(isAuth,userId){
    this.setState({isAuthenticated:isAuth, userId:userId}); */
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
    window.location = "/";
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  getInitialState() {
    return { isAuthenticated: false };

  }

  renderPageContent() {
    return(
      <div className="PageContent">
        <PageContent pageContext={this.props.route.config.pageContext} />
      </div>
      )
    }
  render() {

   /* let pageContentNode = null;
    if (this.props.route.config.pageContext){
      pageContentNode = this.renderPageContent();
    } */
    
    if (this.state.isAuthenticated !== false) {
      console.log("user is not logged in");
      return (
        <div className="MainPage">
          <nav>
            <article>
              <Header isAuthenticated={this.state.isAuthenticated} />
            </article>

            <div>
              <div className="move-right">
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
              </div>
            </div>
          </nav>

    return (
      <div className="MainPage">
        <nav>
          <article>
            <Header
              handleSubmit={event => this.handleSubmit}
              loginUrl={this.props.route.config.loginUrl}
              setAuthState={this.setAuthState} >
                <UserAuth />
            </Header>
          </article>
        </nav>
        <article>
          <div className="content-body">
            {pageContentNode}
          </div>

          <div className="row">
            <div className="col-md-3 city-list-menu">
              <CityContainer
                cityId={this.state.cityId}
                citiesUrl={this.props.route.config.citiesUrl} />
              </div>
              <div className="col-md-9">
                <CityInfo
                  cityId={this.state.cityId}
                  userId={this.state.userId}
                  citiesUrl={this.props.route.config.citiesUrl} />

                <PostBox
                  cityId={this.state.cityId}
                  postUrl={this.props.route.config.postUrl}
                  citiesPostUrl={this.props.route.config.citiesPostUrl}
                  userId={this.state.userId} />
                </div>
              </div>

            </div>
          </article>
        </div>
      );
    } else {
      console.log("user is logged in");
      return (
        <div>

          <div className="MainPage">
            <nav>
              <article>
                <Header isAuthenticated={this.state.isAuthenticated} />
                <div className="move-right">
                  <p>logged in</p>
                  <Button className="logout-button" onClick={this.handleLogout}>
                    Logout
                  </Button>
                </div>
              </article>
            </nav>

            <article>
              <div className="content-body">
                <PageContent />
              </div>
              <div className="row">
                <div className="col-md-2 city-list-menu">
                  <CityContainer
                    isAuthenticated={this.state.isAuthenticated}
                    username={this.state.username}
                    id={this.state.id}
                  />
                </div>
                <div className="col-md-10">
                  <CityInfo />
                  <PostBox
                    postUrl={"http://localhost:3001/api/posts/"}
                    citiesPostUrl={"http://localhost:3001/api/posts/cities/"}
                    defaultCityId={1}
                    cityId={postCityId}
                  />
                </div>
              </div>
            </article>

          </div>

          <div classNamer="col" />
        </div>

      );
    };

}

export default Main;
