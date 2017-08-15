import React, { Component } from "react";
import CityList from './CityList'
import CityInfo from "./CityInfo";


class CityContainer extends Component {
  render() {
    return (
      <div className="city-main">
          <CityList
            cityId={this.props.cityId}
            citiesUrl={this.props.citiesUrl} />
      </div>
    );
  }
}

export default CityContainer;
