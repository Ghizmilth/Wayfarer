import React, { Component } from "react";
import CityInfo from "./CityInfo";
import PostBox from "./PostBox"


class CityContainer extends Component {
  render() {
    return (
      <div className="CityContainer">
        <h2>CityContainer</h2>
        <CityInfo />
        <PostBox />
      </div>

    );
  }
}

export default CityContainer;
