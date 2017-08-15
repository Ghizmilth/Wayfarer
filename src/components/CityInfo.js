import React, { Component } from "react";

class CityInfo extends Component {
  render() {
    return (
      <div className="CityInfo">
        <h1>San Francisco</h1>
        <div className="image-space">
          <img src='https://media-cdn.tripadvisor.com/media/photo-s/0e/c3/8e/ae/loews-regency-san-francisco.jpg' height="75%" width="75%" />
        </div>
      </div>
    );
  }
}

export default CityInfo;
