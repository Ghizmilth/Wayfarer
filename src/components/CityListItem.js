import React, { Component } from "react";

class CityListItem extends Component {
  render() {
    return (
      <div className="CityListItem">
        <div className="container">
          <section className="row">
            <article className="col-sm-6">
              <h2>San Francisco</h2>
            </article>
            <article className="col-sm-6">
              <div className="image-space">
                <img
                  src={
                    "https://www.homeadvisor.com/images/consumer/hhi/hero-photos/city/SanFrancisco.jpg"
                  }
                  alt="Oops"
                  height="80%"
                  width="80%"
                />
              </div>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default CityListItem;
