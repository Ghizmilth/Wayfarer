import React, { Component } from "react";
<<<<<<< HEAD
import CityInfo from "./CityInfo";
import PostBox from "./PostBox"

=======

import PostBox from './PostBox';
import CityForm from './CityForm'
import PostBox from "./PostBox";
import CityInfo from "./CityInfo";
import "../MainStyle.css";
>>>>>>> 61dc4a9b6bd835761f58c9c5cb4935438dc8f964

class CityContainer extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="CityContainer">
        <h2>CityContainer</h2>
        <CityInfo />
        <PostBox />
      </div>

=======
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

            <article className="col-sm-4" />
            <article className="col-sm-4">
              <CityInfo />
            </article>
          </section>
        </div>
        <PostBox url="http://localhost:3001/api/posts" />

      </div>
>>>>>>> 61dc4a9b6bd835761f58c9c5cb4935438dc8f964
    );
  }
}

export default CityContainer;
