import React, { Component } from "react";
import CityListItem from "./CityListItem"

class CityList extends Component {
  render() {
    return (
        <div className="CityList">
          <CityListItem />
        </div>
    )
  }
}

export default CityList;
