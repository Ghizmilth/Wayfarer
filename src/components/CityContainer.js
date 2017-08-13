import React, { Component } from "react";
import CityList from "./CityList";
import "../MainStyle.css";

class CityContainer extends Component {
render() {
  return (
    <div className="CityContainer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <CityList />
          </div>
        </div>
      </div>
    </div>
   );
  }
}

export default CityContainer;
