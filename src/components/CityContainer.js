import React, { Component } from "react";
import PostBox from './PostBox';
import CityList from './CityList'
import CityInfo from "./CityInfo";
import "../MainStyle.css";

class CityContainer extends Component {
  render() {
    return (
      <div className="city-main">
        <div className="container">
          <div className="row">
          <div className="col-sm-4">
          <CityList />
          </div>
          <div className="col-sm-8">
            <CityInfo />
            <div className="row">

            </div>
            <PostBox url="http://localhost:3001/api/posts" />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default CityContainer;
