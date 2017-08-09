import React, { Component } from "react";

class CityInfo extends Component {
  render() {
    return (
      <div className="city-info">
        <div className="container">
          <section className="row">
            <article className="col-sm-6">
              <h2>City name will be here</h2>
            </article>
            <article className="col-sm-6">
              <h2>City Image will be here</h2>
            </article>
          </section>
        </div>
        <h4>Post component goes here</h4>
      </div>
    );
  }
}

export default CityInfo;
