import React, { Component } from "react";
import CityList from "./CityList";
import CityInfo from "./CityInfo";

class City extends Component {
  render() {
    return (
      <div className="city-main">
        <div className="container">
          <section className="row">
            <article className="col-sm-4">
              <CityList />
            </article>
            <article className="col-sm-4">
              <CityInfo />
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default City;
