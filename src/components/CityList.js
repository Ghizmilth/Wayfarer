import React, { Component } from "react";
import axios from 'axios';
import CityListItem from './CityListItem'
import CityForm from "./CityForm";

class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    this.handleCityAdd = this.handleCityAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadCitiesFromServer(){
    axios.get(this.props.citiesUrl)
    .then(res => {
      this.setState({data: res.data})
      console.log('x',res.data  )

    })
  }

  handleSubmit(e) {
      console.log(e);
      let city = this.state.data;
      let newCity = city.concat(e);
      this.setState({data: newCity});
      console.log(this.props.url);

      fetch(this.props.citiesUrl, {
      method: 'post',
      body: e})
        .then(res => {
          console.log("RES:" , res);
          this.setState({ data: res });

        })
        .catch(err => {
          console.error("OOPSIES", err);
        });
  }

  handleCityAdd(city) {
    axios.post(this.props.citiesUrl, {
      name: city.name,
      imageUrl: city.imageUrl,
      description: city.dedscription
    })
    .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
}
componentDidMount() {
  this.loadCitiesFromServer()
}

render() {
  let cityNodes = this.state.data.map(city => {
    return <CityListItem
            citiesUrl={this.props.citiesUrl}
            name={city.name}
            description={city.description}
            imageUrl={city.imageUrl}
            id={city['_id']}
            key={city['_id']} />;
  });

  return(
    <div className="CityList">
      <div className="CityListItemParent">
        {cityNodes}
      </div>
      <div className="city-list-add">
        <CityForm onCitySubmit={this.handleSubmit}/>
      </div>
    </div>
  )
}

}

export default CityList;
