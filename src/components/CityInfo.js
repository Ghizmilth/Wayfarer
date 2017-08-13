import React, { Component } from "react";

class CityInfo extends Component {
  render() {
    return (
      <div className="CityInfo">
        <div className="container">
          <div className="row">
            <h1>San Francisco</h1>
          </div>
          <div className="row">
            <img src='https://media-cdn.tripadvisor.com/media/photo-s/0e/c3/8e/ae/loews-regency-san-francisco.jpg'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default CityInfo;
