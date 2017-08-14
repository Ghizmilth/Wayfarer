import React, { Component } from "react";
import CityList from './CityList'
import CityInfo from "./CityInfo";


class CityContainer extends Component {
  render() {
    return (
      <div className="city-main">
          <CityList />
      </div>
    );
  }
}

export default CityContainer;
