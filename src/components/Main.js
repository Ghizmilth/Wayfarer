import React, { Component } from "react";
import Header from "./Header";
import PageContent from "./PageContent"
import CityList from "./CityList";
import PostBox from "./PostBox";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <CityList />
        <PostBox />
      </div>
    );
  }
}

export default Main;
