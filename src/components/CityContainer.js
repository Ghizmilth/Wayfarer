import React, { Component } from "react";

import PostBox from "./PostBox";
import CityForm from "./CityForm";
import CityInfo from "./CityInfo";
import "../MainStyle.css";

class CityContainer extends Component {
  render() {
    return (

      <div className="CityContainer">
        <h2>CityContainer</h2>
        <CityInfo />
        <PostBox />
      </div>


      <div className="city-main">
        <div className="container">
          <section className="row">

          <article className="col-sm-4" />
          <article className="col-sm-4">
            <CityInfo />
          </article>
        </div>
        <div>
          <PostBox url="http://localhost:3001/api/posts" />
        </div>
      </div>

    );
  }
}

export default CityContainer;
