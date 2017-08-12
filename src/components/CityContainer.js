import React, { Component } from "react";
import PostBox from "./PostBox";
import CityForm from "./CityForm";
import CityInfo from "./CityInfo";
import "../MainStyle.css";

class CityContainer extends Component {
  render() {
    return (
      <div className="city-main">
        <div className="container">
          <section className="row">
          <article className="col-sm-4">
          <CityForm />
          </article>
          </section>
          <section>
            <article className="col-sm-4">
            <CityInfo />
            </article>
            </section>
            <section className="row">
            <article className="col-sm-4">
            <PostBox url="http://localhost:3001/api/posts" />
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default CityContainer;
