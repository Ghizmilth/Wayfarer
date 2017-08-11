import React, { Component } from "react";
import "../MainStyle.css";

class Header extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="container">
          <section className="row row3 nesting">
            <article className="col-sm-12">
              <h2>Wayfarer</h2>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default Header;
