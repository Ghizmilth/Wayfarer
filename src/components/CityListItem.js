import React, { Component } from "react";

class CityListItem extends Component {
  render() {
    console.log(this.props)
    let divImage = {
      backgroundImage : `url(${this.props.imageUrl})`
    };

    return (
      <div className="CityListItem" style={divImage} >
        <a href={`/cities/${this.props.id}`} className="cityName">
          <h2 className="cityName">{this.props.name}</h2>
        </a>
      </div>
    )}
}

export default CityListItem;
